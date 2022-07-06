import {SelectArrowIconSvgComponent} from '@@pages/_SvgComponents';
import PluginSideBar from '@@Public/Plugin-List.component.svg'
import PluginCenterBtn from '@@Public/Plugin-Center-Btn.component.svg';


export const Sider_DAO_Plugin_List = ComponentWrapper( class extends ReactComponentClass {
	
	
	render() {
		
		const { navigate } = utils.useRouter();
		return <div>
			
			<div
				style = { {
					padding : "22px 16px" ,
					flexFlow : "column nowrap" ,
					justifyContent : "space-between" ,
					width : "265px" ,
					
					
				} }
			>
				<PluginSideBar />
				
				<div
					onClick = { () => (
						navigate( 'DAO:DAOID/plugin-center' ), utils.default.__temp__Token_rect_bgc( false )
					) }
				>
					<PluginCenterBtn />
				</div>
			</div>
			
			
			{ true && <div
				style = { {
					position : "absolute" ,
				} }
			>
				<div
					onClick = { () => (
						navigate( '/home/dao-info' ), utils.default.__temp__Token_rect_bgc( false )
					) }
					style = { {
						position : "absolute" ,
						width : "48px" ,
						left : "13px" ,
						top : "23px" ,
						height : "48px" ,
					} }
				/>
				<div
					onClick = { () => (
						navigate( '/home/plugin-overview-launch' ), utils.default.__temp__Token_rect_bgc( true )
					) }
					style = { {
						position : "absolute" ,
						width : "264px" ,
						left : "-3px" ,
						top : "100px" ,
						height : "57px" ,
					} }
				/>
				<div
					onClick = { () => (
						navigate( '/home/nft-minting' ), utils.default.__temp__NFT_rect_bgc( true )
					) }
					style = { {
						position : "absolute" ,
						width : "264px" ,
						left : "-3px" ,
						top : "150px" ,
						height : "57px" ,
					} }
				/>
				{/*<div
					onClick = { () => (
						utils.navigateTo( '/home/plugin-center' ), utils.default.__temp__change_rect_bgc( false )
					) }
					style = { {
						position : "absolute" ,
						width : "264px" ,
						left : "-3px" ,
						top : "995px" ,
						height : "57px" ,
					} }
				/>*/ }
			</div> }
		</div>;
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
						{/*@ts-ignore*/}
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
						{/*@ts-ignore*/}
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
						{/*@ts-ignore*/}
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


