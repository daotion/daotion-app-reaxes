import React from 'react';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import { ReactComponentClass } from '@@common/ReactComponentClass';

import {SelectArrowIconSvgComponent} from './components';

// import SVGchevron_down from './chevron_down.component.svg';
// import SVGicon1 from './demo-icon-1.component.svg';
// import SVGpeople from './people.component.svg';

export const UserPluginSidebar = ComponentWrapper( class extends ReactComponentClass {
	
	
	render() {
		
		return <>
			{/*左侧第二竖栏*/ }
			<div
				style = { {
					width : "240px" ,
					flexFlow : "column nowrap" ,
					
				} }
			>
				<div
					style = { {
						margin : "24px" ,
						fontSize : 20 ,
						fontWeight : "bold" ,
						height : "33px" ,
						color : "#000000cc" ,
					} }
				>Title
				</div>
				
				<div
					style = { {
						flexFlow : "column nowrap" ,
						
					} }
				>
					<div
						style = { {
							margin : "0 8px" ,
							backgroundColor : "#f5f5f5" ,
							borderRadius : 8 ,
							padding : "10px 16px" ,
							flexFlow : "row nowrap" ,
							
						} }
					>
						<SVGicon1
							style = { {
								marginRight : "18px" ,
								
							} }
						/>
						<div
							style = { {
								fontSize : "14px" ,
								fontWeight : "bold" ,
								alignItems : "center" ,
								color : "#25262b" ,
								
							} }
						>Label
						</div>
					</div>
					
					<div
						style = { {
							margin : "0 8px" ,
							borderRadius : 8 ,
							padding : "10px 16px" ,
							flexFlow : "row nowrap" ,
							
						} }
					>
						<SVGpeople
							style = { {
								marginRight : "18px" ,
								
							} }
						/>
						<div
							style = { {
								fontSize : "14px" ,
								fontWeight : "bold" ,
								alignItems : "center" ,
								color : "#00000099" ,
							} }
						>Label
						</div>
					</div>
				</div>
				
				<div
					style = { {
						flexFlow : "column nowrap" ,
						
					} }
				>
					<div
						style = { {
							flexFlow : "row nowrap" ,
							margin : "8px 0 8px 8px" ,
							alignItems : "center" ,
							
						} }
					>
						<SVGchevron_down
							style = { {
								marginRight : "8px" ,
							} }
						/>
						<div
							style = { {
								fontSize : "14px" ,
								fontWeight : "bold" ,
								alignItems : "center" ,
								color : "#00000066" ,
								
							} }
						>Label
						</div>
					</div>
					
					<div
						style = { {
							margin : "0 8px" ,
							borderRadius : 8 ,
							padding : "10px 16px" ,
							flexFlow : "row nowrap" ,
							backgroundColor : "#00000008" ,
							
						} }
					>
						<div
							style = { {
								width : "24px" ,
								height : "24px" ,
								backgroundColor : "#e9f0fd" ,
								marginRight : "16px" ,
								
							} }
						/>
						<div
							style = { {
								fontSize : "14px" ,
								fontWeight : "bold" ,
								alignItems : "center" ,
								color : "#25262b" ,
							} }
						>Label
						</div>
					</div>
					
					<div
						style = { {
							margin : "0 8px" ,
							borderRadius : 8 ,
							padding : "10px 16px" ,
							flexFlow : "row nowrap" ,
						} }
					>
						<div
							style = { {
								width : "24px" ,
								height : "24px" ,
								backgroundColor : "#0000000a" ,
								marginRight : "16px" ,
								
							} }
						/>
						<div
							style = { {
								fontSize : "14px" ,
								fontWeight : "bold" ,
								alignItems : "center" ,
								color : "#00000099" ,
							} }
						>Label
						</div>
					</div>
				</div>
			</div>
		</>;
	}
} );
