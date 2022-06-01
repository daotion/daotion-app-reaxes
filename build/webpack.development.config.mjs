/*返回应用层webpack配置对象*/
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import Webpack from 'webpack';
import { method } from "../webpack.main.mjs";
import {
	basicConfig$Fn ,
	port ,
	rootPath ,
} from "./webpack.core.config.mjs";

/*返回dev-server配置 , 用于启动本地服务*/
export const developmentConfig$Fn = (mixed = {plugins:[]}) => merge(basicConfig$Fn([]) , {
	stats : 'errors-only' ,
	devServer : {
		static : {
			// directory : path.resolve(rootPath , 'dist')
		} ,
		compress : false ,
		port : port ,
		host : '0.0.0.0' ,
		hot : true , 
		open : false ,
		allowedHosts: "all",
		bonjour : true ,
		historyApiFallback : true ,
		// clientLogLevel : "none",
		// quiet : true,
		proxy : {
			"/server_yang" : {
				target : 'http://192.168.1.126:8199' ,
				pathRewrite : {'^/server_yang':''},
				secure: false,
			},
			"/server_dev" : {
				target : 'http://121.199.23.234:8199' ,
				pathRewrite : {'^/server_dev':''},
				secure: false,
			},
			
		}
	} ,
	devtool : 'source-map' ,
	optimization : {
		minimize : false ,
	} ,
	plugins : [...mixed.plugins],
	
});

