import {
	Select ,
	Spin ,
} from 'antd';
import { invoke_root_click } from '@@common/global-controller';
import {
	MainContentRouting ,
	SiderPluginListRouting ,
} from './Routing';
import {
	Layout_Header ,
	Sider_DAO_List ,
} from '@@pages/_BussinessComponents';
export const {
	store ,
	setState ,
} = orzMobx( {
	svgString : "" ,
} );

const { Option } = Select;

const scrollParentRef = React.createRef<HTMLDivElement>();
import less from './styles/main.module.less';

/*Refactor↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓NEW↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/


export const Layout = ComponentWrapper(class extends ReactComponentClass {
	
	render() {
		const urlparam = utils.decodeQueryString();
		console.log(urlparam);
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
						{/*用户加入过的DAO列表*/}
						<Sider_DAO_List/>
						{/*选中DAO下的插件列表 , 仅当出在host/DAO:DAOID时出现*/}
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
								ref = { scrollParentRef }
							>
								<MainContentRouting/>
							</div>
						</>
					</div>
				</Spin>
			</div>
		</>
	}
});
