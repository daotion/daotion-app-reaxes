import {Spin} from 'antd';
import { viaMobx } from '@@mobxState';
import { invoke_root_click  } from '@@common/global-controller';

import { HeaderLayout } from './Header';
import { UserDAOList } from './User-DAO-List';
import { MainContent } from './MainContent';

import less from './style.module.less';


export const {
	store ,
	setState ,
} = viaMobx( {
	svgString : "" ,
	walletInfo : null ,
	userBtnMenu : "default",
} );

const _DemoLayout = class extends ReactComponentClass<any , any> {
	
	constructor( props ) {
		super( props );
	}
	
	render() {
		
		return <>
			{/*note: 在别处注册了root-click事件,在这里会触发,如果不想触发则需要e.stopPropogation()*/}
			<div className = { less.demoLayout } onClick={invoke_root_click}>
				<Spin
					spinning={globalStore.windowLoading.isLoading}
					size="large"
					tip={globalStore.windowLoading.tipNode}
					wrapperClassName = {less.globalWindowLoading}
				>
					<div
						className = { less.leftSide }
					>
						<UserDAOList />
						
						{/*左侧第二竖栏,设计未定稿 , 暂时隐藏*/ }
						{/*<UserPluginSidebar/>*/ }
					</div>
					
					<div
						className = { less.mainContent }
					>
						<HeaderLayout />
						
						<MainContent />
					</div>
				</Spin>
			</div>
		</>;
	}
};


export const DemoLayout = ComponentWrapper( _DemoLayout );

