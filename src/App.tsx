import { hot } from 'react-hot-loader/root';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import zhTW from 'antd/lib/locale/zh_TW';
import {
	Button ,
	ConfigProvider ,
	message ,
} from 'antd';
import { Test } from '@@pages/Test';
import { ReactTemplate } from '../Public/react-template';
import { Routing } from './Routing';
import { Home } from '@@pages/Home';
import {reaxel_i18n} from '@@reaxels';
// import 'antd/dist/antd.less';
import "./styles/main.module.less";
import './styles/web3-onboard.cover.less';

export const App = ComponentWrapper(class extends ReactComponentClass {
	
	
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
	reax_i18n = reaxel_i18n();
	
	render() {
		
		return <>
			<ConfigProvider
				locale = { {
					"zh-CN" : zhCN ,
					"zh-TC" : zhTW ,
					"enUS" : enUS ,
					"en" : enUS ,
				}[ this.reax_i18n.language ] }
			
			>
				<Routing />
			</ConfigProvider>
		</>;
	}
	
});


