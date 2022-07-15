import less from './index.module.less';
import { Button } from 'antd';

export const DxzSocialGeneral = () => {
	return <>
		<body
			style = { {
				background : '#f4f5f6' ,
				padding : '30px 0 0 30px' ,
			} }
		>
			<div
				className = "general-container"
				style = { {
					padding : "24px" ,
					borderRadius : '12px' ,
					backgroundColor : "#ffffff" ,
					width : "1200px" ,
					display : 'flex' ,
					justifyContent : 'flex-start' ,
				} }
			>
				<div
					className = "select-btn"
					style = { {
						width : "280px" ,
						height : "fit-content" ,
					} }
				>
					<span
						style = { {
							marginBottom : "8px" ,
							color : '#b1b5c3' ,
							fontSize : "12px" ,
							fontWeight : "700" ,
							lineHeight : '16px' ,
						} }
					>DAO Settings
					</span>
					<Button
						className = { less.generalBtn }
						style = { {
							backgroundColor : '#efefef' ,
							color : '#1a1d1f' ,
							display : "flex" ,
							alignItems : "center" ,
							flexDirection : "row" ,
							width : "100%" ,
							height : "40px" ,
							borderRadius : '8px' ,
							fontSize : "15px" ,
							fontWeight : "600" ,
							lineHeight : "24px" ,
							marginBottom : "8px" ,
						} }
					>
						<span
						>General
						</span>
					</Button>
					<Button
						className = { less.generalBtn }
						style = { {
							backgroundColor : '#fcfcfc' ,
							color : '#6f767e' ,
							display : "flex" ,
							alignItems : "center" ,
							flexDirection : "row" ,
							width : "100%" ,
							height : "40px" ,
							borderRadius : '8px' ,
							fontSize : "15px" ,
							fontWeight : "600" ,
							lineHeight : "24px" ,
							marginBottom : "8px" ,
							border : "none" ,
						} }
					>
						<span
						>Social Profiles
						</span>
					</Button>
				</div>
				<div className = "general-field">
					<h1
						style = { {
							fontWeight : '600' ,
							fontSize : '20px' ,
							lineHeight : "32px" ,
						} }
					>General
					</h1>
					<div className = "pic-box"
					style={{
						display:"flex",
						flexDirection:"row",
						alignItems:"center",
						margin:"36px 0 31px 0"
					}}
					>
						<img
							src = ""
							alt = ""
							style = { {
								width : "96px",
								height:"96px",
								borderRadius:"12px",
								backgroundColor:"orange"
							} }
						/>
						<Button 
						style={{
							marginLeft:"29px",
							display:"inline-flex",
							alignItems:"center",
							borderRadius:"8px",
							padding:"8px 16px",
							backgroundColor:"#3772ff",
							color:"#ffffff",
							width:"109px",
							height:"40px",
							fontSize:'13px',
							fontWeight:'700',
							lineHeight:'24px',
							justifyContent:"15px"
						}}
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill="#FCFCFC"/>
							</svg>
							<span>
								Upload
							</span>
						</Button>
					</div>
					<p
					style={{
						display:"inline-flex",
						alignItems:"center",
						fontSize:"14px",
						fontWeight:"600",
						lineHeight:"24px",
						marginBottom:'0'
					}}
					>
						<span
						style={{
							marginRight:'6px',
						}}
						>
							The current deployed network
						</span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6666 6.99967C13.6666 10.6816 10.6818 13.6663 6.99992 13.6663C3.31802 13.6663 0.333252 10.6816 0.333252 6.99967C0.333252 3.31778 3.31802 0.333008 6.99992 0.333008C10.6818 0.333008 13.6666 3.31778 13.6666 6.99967ZM6.99992 6.33301C7.36811 6.33301 7.66659 6.63148 7.66659 6.99967V10.3336C7.66659 10.7018 7.36811 11.0003 6.99992 11.0003C6.63173 11.0003 6.33325 10.7018 6.33325 10.3336V6.99967C6.33325 6.63148 6.63173 6.33301 6.99992 6.33301ZM6.99992 4.99967C7.36811 4.99967 7.66659 4.7012 7.66659 4.33301C7.66659 3.96482 7.36811 3.66634 6.99992 3.66634C6.63173 3.66634 6.33325 3.96482 6.33325 4.33301C6.33325 4.7012 6.63173 4.99967 6.99992 4.99967Z" fill="#9A9FA5"/>
						</svg>
					</p>
					<div className="net-box"
					style={{
						display:"flex",
						flexDirection:"row",
						flexWrap:"nowrap",
						margin:'12px 0',
					}}
					>
						<div className="net"
						style={{
							display:"flex",
							alignItems:"center",
							borderRadius:"12px",
							backgroundColor:"#f4f4f4",
							fontSize:'14px',
							fontWeight:"500",
							lineHeight:'24px',
							color:'#23262f',
							width:'fit-content',
							height:"40px",
							padding:"8px",
							justifyContent:"space-between",
							marginRight:"16px",
						}}
						>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_199_4363)">
									<path d="M0 8C0 3.5816 3.58166 0 8.00014 0C12.4186 0 16.0003 3.5816 16.0003 8C16.0003 12.4184 12.4186 16 8.00014 16C3.58166 16 0 12.4184 0 8Z" fill="#D5D5D5"/>
									<path opacity="0.6" d="M7.92927 6.33301L4 8.11981L7.92927 10.4414L11.8573 8.11981L7.92927 6.33301Z" fill="#010101"/>
									<path opacity="0.45" d="M4 8.11961L7.92927 10.4408V1.59961L4 8.11961Z" fill="#010101"/>
									<path opacity="0.8" d="M8.0004 2V10.8412L11.9285 8.5196L8 2H8.0004Z" fill="#010101"/>
									<path opacity="0.45" d="M4 8.86426L7.92927 14.4003V11.1859L4 8.86466V8.86426Z" fill="#010101"/>
									<path opacity="0.8" d="M7.92969 11.1859V14.4003L11.8606 8.86426L7.92969 11.1859Z" fill="#010101"/>
								</g>
								<defs>
									<clipPath id="clip0_199_4363">
										<rect width="16.0003" height="16" fill="white"/>
									</clipPath>
								</defs>
							</svg>
							<span
							style={{marginLeft:"10px"}}
							>ETHEREUM</span>
						</div>
						<SelectNet text="ZKSYNC">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#F2F2FF"/>
								<path d="M14 8.49999L10.4876 5V7.56325L7 10.1296L10.4876 10.132V12L14 8.49999Z" fill="#4E529A"/>
								<path d="M2 8.5L5.52534 12V9.46388L9 6.8958L5.52534 6.89343V5L2 8.5Z" fill="#8C8DFC"/>
							</svg>
						</SelectNet>
					</div>
					<Button
						style={{
							marginLeft:"29px",
							display:"inline-flex",
							alignItems:"center",
							borderRadius:"8px",
							padding:"8px 16px",
							backgroundColor:"#ffffff",
							color:"#2a85ff",
							width:"146px",
							height:"40px",
							margin:"0px",
							fontSize:'13px',
							fontWeight:'700',
							lineHeight:'24px',
							border:"2px solid #2a85ff",
						}}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill="#2A85FF"/>
						</svg>
						<span>
							Add Network
						</span>
					</Button>
					<div className="bio">
						<span>Bio</span>
						<svg 
							style={{
								verticalAlign:"middle",
								marginLeft:"5px",
							}}
							width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967ZM7.99992 7.33301C8.36811 7.33301 8.66659 7.63148 8.66659 7.99967V11.3336C8.66659 11.7018 8.36811 12.0003 7.99992 12.0003C7.63173 12.0003 7.33325 11.7018 7.33325 11.3336V7.99967C7.33325 7.63148 7.63173 7.33301 7.99992 7.33301ZM7.99992 5.99967C8.36811 5.99967 8.66659 5.7012 8.66659 5.33301C8.66659 4.96482 8.36811 4.66634 7.99992 4.66634C7.63173 4.66634 7.33325 4.96482 7.33325 5.33301C7.33325 5.7012 7.63173 5.99967 7.99992 5.99967Z" fill="#9A9FA5"/>
						</svg>
					</div>
					
				</div>
				
			</div>
		</body>
	</>;
};
export const SelectNet=(props)=>{
	return<>
		<div className="net"
			style={{
				display:"flex",
				alignItems:"center",
				borderRadius:"12px",
				backgroundColor:"#f4f4f4",
				fontSize:'14px',
				fontWeight:"500",
				lineHeight:'24px',
				color:'#23262f',
				width:'fit-content',
				height:"40px",
				padding:"8px",
				justifyContent:"space-between"
			}}
		>
			{props.children}
			<span
				style={{marginLeft:"10px"}}
			>{props.text}</span>
		</div>
	</>
}
