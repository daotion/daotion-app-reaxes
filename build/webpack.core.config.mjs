/** @format */

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'webpack-merge';
import { __dirname } from './.mix.js';
import { getPort } from './utils.mjs';
import {
	method,
} from '../webpack.main.mjs';

/**
 * @suggest dev环境建议使用全量source-map , 否则可能会导致错误栈无法定位到正确的模块
 */
const {
	HotModuleReplacementPlugin ,
	DllReferencePlugin ,
	DllPlugin ,
	DefinePlugin,
} = webpack;
const defaultPartialConfig = {
	plugins : [] ,
};
/*拿到可用的端口号*/
export const port = await getPort();
export const rootPath = path.resolve(__dirname , '../');

/*webpack基础配置*/
export const basicConfig$Fn = (plugins = []) => ({
	mode : method === 'server' ? 'development' : 'production' ,
	entry : {
		main : '/src/main.tsx' ,
	} ,
	output : {
		filename : '[name].bundle.[fullhash:6].js' ,
		path : path.resolve(rootPath , 'dist') ,
		// publicPath : "/Public" ,
	} ,
	resolve : {
		alias : {
			'react-dom' : "@hot-loader/react-dom" ,
			'common' : path.resolve(rootPath , 'src/common') ,
			'common/utils' : path.resolve(rootPath , 'src/common/utils/index.ts') ,
			'common/utils/*' : path.resolve(rootPath , 'src/common/utils/*') ,
			'common/Public/*' : path.resolve(rootPath , 'src/common/Public/*') ,
			'common/requests' : path.resolve(rootPath , 'src/common/requests/index.ts') ,
			'common/routes' : path.resolve(rootPath , 'src/common/routes/index.ts') ,
			'common/mobxState' : path.resolve(rootPath , 'src/common/mobxState/index.ts') ,
			'common/Auth' : path.resolve(rootPath , 'src/common/Auth/index.ts') ,
		} ,
		extensions : [
			'.ts' ,
			'.tsx' ,
			'.js' ,
			'.jsx' ,
			'.json',
		] ,
	} ,
	devtool : 'source-map' , 
	module : {
		rules : [
			{
				test : /\.(jsx?|tsx?)$/ ,
				use : {
					loader : 'babel-loader' ,
					options : {
						sourceMap : true ,
					} ,
				} ,
				exclude : /node_modules/ ,
			} ,
			{
				test : /\.less$/ ,
				use : [
					{
						loader : 'style-loader' ,
					} ,
					{
						loader : 'css-loader' ,
						options : {
							sourceMap : true ,
						} ,
					} ,
					{
						loader : 'less-loader' ,
						options : {
							sourceMap : true ,
							lessOptions : {
								javascriptEnabled : true ,
							} ,
						} ,
					} ,
				] ,
			} ,
			{
				test : /\.css$/ ,
				use : [
					{
						loader : 'style-loader' ,
					} ,
					{
						loader : 'css-loader' ,
						options : {
							sourceMap : true ,
						} ,
					} ,
				] ,
			} ,
			{
				test : /\.(png|jpe?g|svg|te?xt|gif|woff|woff2|eot|ttf|otf|bmp|swf)$/ ,
				type : "asset/resource",
				generator: {
					filename: 'static/[hash][ext][query]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 20 * 1024,
					},
				},
			} ,
		] ,
	} ,
	optimization : {
		minimizer : [
			new TerserPlugin({
				extractComments : false ,
				terserOptions : {
					format : {
						comments : false ,
					} ,
				} ,
			}) ,
		] ,
	} ,
	performance : {
		maxEntrypointSize : 10000000 ,
		maxAssetSize : 30000000 ,
	} ,
	stats : 'errors-only' ,
	plugins : [
		new HtmlWebpackPlugin({
			template : './Public/index.template.ejs' ,
			title : 'eth' ,
			filename : 'index.html' ,
			minify : false ,
			hash : true ,
			excludeChunks : [] ,
			inject : false ,
		}) ,
		...plugins
	] ,
});
