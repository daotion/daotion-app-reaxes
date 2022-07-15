import {
	Select ,
	Spin ,
} from 'antd';
import { invoke_root_click } from '@@common/global-controller';
import { reaxel_scrollParentRef } from '@@reaxes';
import {
	MainContentRouting ,
	SiderPluginListRouting ,
} from './Routing';
import {
	Layout_Header ,
	Sider_Space_List ,
	ModalCreateSpace ,
	
} from '@@pages/_BussinessComponents';
import less from './styles/main.module.less';

export const {
	store ,
	setState ,
} = orzMobx( {
	svgString : "" ,
} );

const { Option } = Select;

/*Refactor↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓NEW↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/


export const Layout = ComponentWrapper(class extends ReactComponentClass {
	
	scrollParentRef = reaxel_scrollParentRef();
	
	render() {
		const urlparam = utils.decodeQueryString();
		return <>
			<div className = { less.HomeRoot } onClick={invoke_root_click}>
				<Spin
					spinning={globalStore.windowLoading.isLoading}
					size="large"
					tip={globalStore.windowLoading.tipNode}
					wrapperClassName = {less.globalWindowLoading}
				>
					<div
						className = { less.leftSide }
					>
						{/*用户加入过的space列表*/}
						<Sider_Space_List/>
						{/*选中space下的插件列表 , 仅当出在host/space:spaceID时出现*/}
						<SiderPluginListRouting/>
					</div>
					
					<div
						className = { less.mainContent }
					>
						<Layout_Header />
						{/*MainContent*/}
						<>
							<div
								style = { {
									display : "flex" ,
									height : "calc(100% - 80px)" ,
									position : "static" ,
									transform : "translateX(0)" ,
									width : "100%" ,
									boxSizing : "border-box" ,
									overflow : "auto" ,
									padding : "32px" ,
									paddingBottom : "0" ,
									justifyContent : "center" ,
									flexFlow : "row nowrap" ,
								} }
								ref = { this.scrollParentRef }
							>
								<MainContentRouting/>
							</div>
						</>
					</div>
				</Spin>
				<ModalCreateSpace/>
			</div>
		</>
	}
});
