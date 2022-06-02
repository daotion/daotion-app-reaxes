import Process , {} from 'process';
import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import chalk from 'chalk';
import WebpackDevServer from 'webpack-dev-server';
import {
	port ,
	rootPath ,
} from './build/webpack.core.config.mjs';
import {
	getIPV4address ,
	webpack_promise ,
	overload ,
} from './build/utils.mjs';
/* Route_Map文件存储了路由<->模块路径的映射关系,用于向全局注入路由对象 */
// import Route_Map from './src/common/routes/Route_Map.mjs';
import { developmentConfig$Fn } from "./build/webpack.development.config.mjs";

const {
	DefinePlugin ,
	ProvidePlugin ,
} = webpack;
/* 标记开始时间以记录build花费 */
const startTime = Date.now();

/**
 * 获取npm run <method> <env> <mock?>
 * @var method {"server"|"build"}
 */
const args = process.argv.slice(2);
/**
 * npm start dev mock
 * npm start --analyze
 * #npm build mock
 * npm start
 * todo: analyze
 */
/*对参数进行判断/处理*/
export let {
	method = "server" ,
	mock = null,
	env = "server_dev",
} = function () {
	return overload(args , [
		{
			regExp : /mock/ ,
			key : "mock" ,
		} ,
		{
			regExp : /analyze/ ,
			key : "analyze" ,
		} ,
		{
			regExp : /build|server/ ,
			key : "method" ,
		} ,
		{
			/*网络请求环境*/
			regExp : /server_yang|server_dev/ ,
			key : "env" ,
		} ,
	]);
}();

if ( process.argv.includes('mock') ) {
	console.log(chalk.yellowBright(`当前运行在mock模式下`));
}
setTimeout(() => {
	switch ( method ) {
		case 'server':
			devServer().
			then(() => {}).
			catch(e => {
				console.log('server失败!');
				console.error(e);
			});
			break;
			/*not avalibel for now*/
		case '-build': {
			chalk.green(`building , please hold on...`)
			runBuild().then(() => {
				const usedTime = (Date.now() - startTime) / 1000;
				let rating = '🐢';
				switch ( true ) {
					case usedTime < 17:
						rating = '☄︎';
						break;
					case usedTime < 25:
						rating = '🚀';
						break;
					case usedTime < 32:
						rating = '🚄';
						break;
					case usedTime < 38:
						rating = '🐄';
						break;
				}
				console.log(chalk.green(`构建成功! 用时${ usedTime }s${ rating }`));
			}).catch(e => {
				console.log(chalk.red(`构建失败 : `));
				console.error(e);
			});
		}
	}
});
/* 注入plugin并启动dev-server */
const devServer = () => {
	try {
		const devConfig = developmentConfig$Fn({
			plugins : [
				getProvidePlugin() ,
				getDefinePlugin() ,
			] ,
		});
		const compiler = webpack(devConfig);
		const webpackServer = new WebpackDevServer(
			devConfig.devServer,
			compiler ,
		);
		webpackServer.start().then(() => {
			console.log(chalk.yellow(`WDS已启动在http://${ getIPV4address() }:${ port }`));
		})
	}
	catch ( e ) {
		return Promise.reject(e);
	}
	finally {
		return Promise.resolve(true);
	}
};

/* 打包业务代码 */
const runBuild = () => {
	return webpack_promise(developmentConfig$Fn({
		plugins : [getDefinePlugin()] ,
	}) );
};

const getDefinePlugin = () => new DefinePlugin({
	'__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })',
	/* 递归遍历src/pages下的文件结合src/pages/Route_Map.json , 生成一份路由表注入到全局变量里 */
	ROUTE_MAP : "{}" || generateRouteMap() , 
	// 全局注入mock模式变量
	__IS_MOCK__ : process.argv.includes('mock') ,
	__ENV__ : JSON.stringify(env),
});

const getProvidePlugin = (config = {}) => new ProvidePlugin({
	_ : ["lodash"] ,
	React : ["react"] ,
	useState : ["react","useState"] ,
	useEffect : ["react","useEffect"] ,
	useRef : ["react","useRef"] ,
	useLayoutEffect : ["react","useLayoutEffect"] ,
	useMemo : ["react","useMemo"] ,
	useCallback : ["react","useCallback"] ,
	ComponentWrapper : ["@@common/ReactComponentWrapper","ComponentWrapper"] ,
	ReactComponentClass : ["@@common/ReactComponentClass","ReactComponentClass"] ,
	orzPromise : ["@@utils","orzPromise"] ,
	utils : ["@@utils"] ,
	globalStore : ["@@common/global-controller","globalStore"] ,
	globalSetState : ["@@common/global-controller","globalSetState"] ,
	crayon : ["@@utils","crayon"] ,
	logProxy : ["@@utils","logProxy"] ,
	decodeQueryString : ["@@utils","decodeQueryString"] ,
	encodeQueryString : ["@@utils","encodeQueryString"] ,
	stringify : ["@@utils","stringify"] ,
	request : ["@@common/requests","request"] ,
	env : ["@@common/requests","request"] ,
	...config,
});

/* 递归搜集pages下所有模块 , 子路由文件夹必须由.subpage结尾 , 写入全局ROUTE_MAP变量 */
const generateRouteMap = function () {
	const pathOfPage = path.join(rootPath , 'src/pages/');
	const pageList = [];
	
	/* 深度优先 */
	const recursiveFindPages = (targetPath , parentPath) => {
		fs.readdirSync(targetPath).forEach(filename => {
			const filePath = path.join(targetPath , filename);
			if ( fs.statSync(filePath).isDirectory() === true ) {
				if ( parentPath === null ) {
					pageList.push(filename);
					return recursiveFindPages(path.join(targetPath , filename) , filename);
				}
				
				if ( /(\.subpage)$/.test(filename) ) {
					if ( typeof parentPath === 'string' ) {
						const resultPath = parentPath + '/' + filename;
						pageList.push(resultPath);
						recursiveFindPages(path.join(targetPath , filename) , resultPath);
					}
				}
			}
		});
	};
	recursiveFindPages(pathOfPage , null);
	{
		/* 如果遍历时Page_Map文件的映射与src/pages内的模块不匹配(Page_Map找不到对应的page/模块)时,记录下来警告 */
		let warnList = [];
		for ( const routePath in Route_Map ) {
			const moduleName = Route_Map[routePath];
			pageList.includes(moduleName) === false && warnList.push(moduleName);
		}
		if ( warnList.length !== 0 ) console.warn(chalk.redBright(`!!!递归查找src/pages模块时未找到 : ${ warnList.join(' , ') }  !!!`));
	}
	
	return JSON.stringify(Route_Map);
};


