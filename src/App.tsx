import 'antd/dist/antd.less';
import React , { Component } from 'react';
import {hot} from 'react-hot-loader/root';
import { Button ,ConfigProvider ,message ,} from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {ReactComponentClass} from '@@common/ReactComponentClass';
import { DemoLayout } from '@@pages/DemoLayout';
import {Test} from '@@pages/Test';
import "./styles/main.module.less";
import {ReactTemplate} from '../Public/react-template';
import {Routing} from './Routing';
import {
	globalSetState ,
	globalStore,
} from '@@common/globalStore';

class _App extends ReactComponentClass<any , any> {
	
	
	componentDidRender( stage ,prevProps, prevState: Readonly<any> , snapshot?: any ) {
		ConfigProvider.config( {
			theme : {
				primaryColor : '#1890ff' ,
				errorColor : '#1dd334' ,
				warningColor : '#faad14' ,
				successColor : '#52c41a' ,
				infoColor : '#1890ff' ,
			} ,
		} );
		
		
		message.error("sdsdsd")
	}
	
	render() {
		[globalStore.theme];
		
		
		
		return <>
			<ConfigProvider
				locale={{
					"zhCN" : zhCN,
					"enUS" : enUS,
				}[globalStore.language]}
				
			>
				<Routing />
			</ConfigProvider>
		</>;
	}
	
}





export const App = (ComponentWrapper( (_App) ));

