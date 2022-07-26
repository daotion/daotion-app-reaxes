import less from './index.module.less';
import { Tabs } from 'antd';
import { reaxel_general_button } from '@@pages/_BussinessComponents/Layout_Header/Header-General-Button-Popover';
const { TabPane } = Tabs;
import React from 'react';


const onChange = ( key : string ) => {
	console.log( key );
};

const App : React.FC = () => (
	<Tabs
		defaultActiveKey = "1"
		onChange = { onChange }
	>
	</Tabs>
);
export const DxzLangCurrency = () => {
	const reax_general_button = reaxel_general_button();
	return <>
		<div
			className = { less.langCurrencyBox }
			style = { {
				padding : "24px 16px" ,
				// width : "400px" ,
			} }
		>
			<div
				style = { {
					display : "flex" ,
				} }
			>
				<Tabs
					
					style = { {
						flex : "1" ,
						
					} }
				>
					<TabPane
						style = { {
							color : "#3772ff" ,
							fontWeight : "600" ,
							
						} }
						tab = "Language"
						key = "1"
					>
						<div
							style = { {
								width : "346px" ,
								display : "flex" ,
								flexFlow : "column wrap" ,
								alignItems : "flex-start" ,
								
							} }
						>
							<div
								style = { {
									width : "100%" ,
									height : "40px" ,
									display : "flex" ,
									flexFlow : "row nowrap" ,
									alignItems : "center" ,
									justifyContent : "space-between" ,
									color : "#777e90" ,
									fontWeight : "600" ,
									fontSize : "14px" ,
									marginTop : "8px" ,
									userSelect : "none" ,
								} }
							>
								<span
									className = { less.LCSelectedItem }
									style = { {
										width : "161px" ,
										height : "40px" ,
										display : "flex" ,
										alignItems : "center" ,
										justifyContent : "center" ,
									} }
								
								>English
								</span>
								<span
									className = { less.LCSelectedItem }
									style = { {
										width : "161px" ,
										height : "40px" ,
										display : "flex" ,
										alignItems : "center" ,
										justifyContent : "center" ,
									} }
								>Afrikaans
								</span>
							</div>
							<LCList
								title = "简体中文"
								
							>
								Català
							</LCList>
							<LCList title = "繁体中文">
								Dansk
							</LCList>
						</div>
					</TabPane>
					
					<TabPane
						tab = "Currency"
						key = "2"
						style = { {} }
					>
						<div
							style = { {
								height : "640px" ,
								width : "346px" ,
								display : "flex" ,
								flexFlow : "column wrap" ,
								alignItems : "flex-start" ,
								marginTop : "8px" ,
							} }
						>
							<LCList title = "USD - $">
								JPY - ¥
							</LCList>
							<LCList title = "CNY - ¥">
								ZAR - R
							</LCList>
							<LCList title = "RUB - ₽">
								KRW - ₩
							</LCList>
						</div>
					</TabPane>
				</Tabs>
			</div>
			<div
				className = { less.LCDivide }
			>
			
			</div>
		
		</div>
	</>;
};
const LCList = ( props ) => {
	return <>
		<div
			style = { {
				width : "100%" ,
				height : "40px" ,
				display : "flex" ,
				flexFlow : "row nowrap" ,
				alignItems : "center" ,
				justifyContent : "space-between" ,
				color : "#777e90" ,
				fontWeight : "600" ,
				fontSize : "14px" ,
				userSelect : "none" ,
			} }
		>
			<span
				className = { less.LCSelectedItem }
				style = { {
					width : "161px" ,
					height : "40px" ,
					display : "flex" ,
					alignItems : "center" ,
					justifyContent : "center" ,
				} }
			
			>{ props.title }</span>
			<span
				style = { {
					width : "161px" ,
					height : "40px" ,
					display : "flex" ,
					alignItems : "center" ,
					justifyContent : "center" ,
				} }
			>{ props.children }</span>
		</div>
	</>;
};

