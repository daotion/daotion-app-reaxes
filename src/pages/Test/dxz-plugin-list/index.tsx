import less from './index.module.less';
import {
	Button ,
	Dropdown ,
	Menu ,
	Space ,
} from 'antd';
import {
	SmileOutlined ,
	DownOutlined ,
} from '@ant-design/icons';


export const DxzPluginList = () => {
	
	
	return <>
		
		<aside
			className = "aside-list"
			style = { {
				width : "214px" ,
				height : "100%" ,
				top : "8px" ,
				left : "8.5px" ,
				padding : "8px 8.5px 16px 8.5px" ,
				display : "flex" ,
				flexDirection : "column" ,
				
			} }
		>
			
			<div
				className = "first-aside"
				style = { {
					marginBottom : "24PX" ,
					width : "200px" ,
					backgroundColor : "#f4f5f6" ,
					borderRadius : "8px" ,
					padding : "8px" ,
					display : "flex" ,
					flexFlow : "row nowrap" ,
					alignItems : "center" ,
					justifyContent : "space-between" ,
				} }
			>
				<div
					style = { {
						display : "flex" ,
						flexFlow : "row nowrap" ,
						alignItems : "center" ,
					} }
				>
					<img
						src = ""
						alt = ""
						style = { {
							verticalAlign : "middle" ,
							width : "36px" ,
							height : "36px" ,
							backgroundColor : "greenyellow" ,
							marginRight : "8px" ,
						} }
					/>
					<div
						style = { {
							width : "82.5px" ,
							flex : "none" ,
						} }
					>
						<p
							style = { {
								padding : "0px 0px 0px 2px" ,
								margin : "0px 0px 0px 0px" ,
								fontSize : "14px" ,
								fontWeight : "500" ,
								color : "#353945" ,
								fontFamily : "'inter'" ,
								fontStyle : "normal" ,
								lineHeight : "20px" ,
							} }
						>DAOname
						</p>
						
						<div
							style = { {
								display : "flex" ,
								alignItems : "center" ,
							} }
						>
							<img
								src = ""
								alt = ""
								style = { {
									verticalAlign : "middle" ,
									backgroundColor : "lightblue" ,
									width : "13px" ,
									height : "13px" ,
								} }
							/>
							<Dropdown
								overlay = { menu }
							>
								{/*<span onClick={e => e.preventDefault()}
										style={{
											whiteSpace : "nowrap",
											fontSize:"12px",
											color:"#777e91"
										}}>
										Ethereum
										<a
										
										>
											
												<DownOutlined />
											
										</a>
									</span>*/ }
								<a href = "">
									<span
										style = { {
											fontSize : "12px" ,
											color : "#777e91" ,
										} }
									>Ethereum
									</span>
									<span
										style = { {
											color : "gray" ,
											width : "4px" ,
											height : "4px" ,
											verticalAlign : "middle" ,
										} }
									>
										<DownOutlined />
									</span>
								</a>
							</Dropdown>
							{/*<span
									style = { {
										marginTop:"2px",
										lineHeight : "12px" ,
										fontSize : "12px" ,
										fontWeight : "500" ,
										marginLeft : "1.23px" ,
										marginRight : "2px" ,
										color : "#777e91" ,
										fontFamily : "'inter'" ,
										top : "26px" ,
										
									} }
								>Ethereum
								</span>
								<img
									src = ""
									alt = ""
									style = { {
										verticalAlign : "middle" ,
										backgroundColor : "gray" ,
										width : "12px" ,
										height : "12px" ,
									} }
								/>*/ }
						
						</div>
					</div>
				</div>
				<img
					src = ""
					alt = ""
					style = { {
						backgroundColor : "gray" ,
						width : "24px" ,
						height : "24px" ,
					} }
				/>
			</div>
			
			<div style={{
				display:"flex",
				flexDirection:"column",
				justifyContent:"space-between",
				height:"100%",
			}}>
				<div
					className = "aside-nav"
					style = { {
						display : "flex" ,
						flexDirection : "column" ,
						alignItems : "flex-start" ,
						width : "fill" ,
						
					} }
				>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>Token
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>NFT
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>SRM
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>Voting
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>Vault
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>PlanSquare
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>Dework
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "400" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
							} }
						>Label
						</p>
					</div>
					<div
						style = { {
							display : "flex" ,
							width : "fill" ,
							flexDirection : "row" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							padding : "8px 16px 8px 8px" ,
							
						} }
					>
						<img
							src = ""
							alt = ""
							style = { {
								verticalAlign : "middle" ,
								backgroundColor : "lightcoral" ,
								width : "24px" ,
								height : "24px" ,
								left : "8px" ,
							} }
						/>
						<p
							style = { {
								fontWeight : "lighter" ,
								fontSize : "14px" ,
								lineHeight : "24px" ,
								margin : "0px 0px 0px 16px" ,
								
							} }
						>Label
						</p>
					</div>
				</div>
				<div
					style = { {
						boxSizing : "border-box" ,
						textAlign : "center" ,
						content:"",
						borderTop:"2px solid #e6e8ec"
					} }
				>
					<Button
						style = { {
							marginTop:"12px",
							borderRadius : "12px" ,
							border : "2px solid #e6e8ec" ,
							fontSize : "14px" ,
							lineHeight : "24px" ,
							width : "100%" ,
							display : "flex" ,
							alignItems : "center" ,
							justifyContent : "center" ,
						} }
					>Plugins Center</Button>
					{/*<span
   					style = { {
   						width : "fill" ,
   						textAlign : "center" ,
   						fontSize : "14px" ,
   						lineHeight : "24px" ,
   						color : "#000000" ,
   						fontWeight : "500" ,
   						border : "2px solid #e6e8ec" ,
   						borderRadius : "12px" ,
   						padding : "8px 38px" ,
   					} }
   				>
   					Plugins Center
   				</span>*/ }
				</div>
			</div>
		</aside>
	</>;
};


const menu = (
	<Menu
		items = { [
			{
				key : '1' ,
				label : (
					<a
						target = "_blank"
						rel = "noopener noreferrer"
						href = "https://www.antgroup.com"
					>
						1st menu item
					</a>
				) ,
			} ,
			{
				key : '2' ,
				label : (
					<a
						target = "_blank"
						rel = "noopener noreferrer"
						href = "https://www.aliyun.com"
					>
						2nd menu item (disabled)
					</a>
				) ,
				icon : <SmileOutlined /> ,
				disabled : true ,
			} ,
			{
				key : '3' ,
				label : (
					<a
						target = "_blank"
						rel = "noopener noreferrer"
						href = "https://www.luohanacademy.com"
					>
						3rd menu item (disabled)
					</a>
				) ,
				disabled : true ,
			} ,
			{
				key : '4' ,
				danger : true ,
				label : 'a danger item' ,
			} ,
		] }
	/>
);
