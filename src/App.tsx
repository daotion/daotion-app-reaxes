import { hot } from 'react-hot-loader/root';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import {
	Button ,
	ConfigProvider ,
	message ,
} from 'antd';
import {
	globalSetState ,
	globalStore ,
} from '@@common/global-controller';
import { Test } from '@@pages/Test';
import { ReactTemplate } from '../Public/react-template';
import { Routing } from './Routing';
import { DemoLayout } from '@@pages/DemoLayout';
import 'antd/dist/antd.less';
import "./styles/main.module.less";

class _App extends ReactComponentClass<any , any> {
	
	
	componentDidRender( stage , prevProps , prevState : Readonly<any> , snapshot? : any ) {
		ConfigProvider.config( {
			theme : {
				primaryColor : '#1890ff' ,
				errorColor : '#1dd334' ,
				warningColor : '#faad14' ,
				successColor : '#52c41a' ,
				infoColor : '#1890ff' ,
			} ,
		} );
		
	}
	
	render() {
		[ globalStore.theme ];
		
		
		return <>
			<ConfigProvider
				locale = { {
					"zhCN" : zhCN ,
					"enUS" : enUS ,
				}[ globalStore.language ] }
			
			>
				<Routing />
			</ConfigProvider>
		</>;
	}
	
}


export const App = (
	ComponentWrapper( (
		_App
	) )
);

