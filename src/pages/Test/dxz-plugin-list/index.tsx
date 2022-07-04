import less from './index.module.less';
import {
	Button ,
	Dropdown ,
	Menu ,
} from 'antd';
import {
	DownOutlined ,
	SmileOutlined ,
} from '@ant-design/icons';


export const DxzPluginList = () => {
	
	
	return <>
		
		<aside
			style = { {
				width : "213px" ,
				height : "100%" ,
				top : "8px" ,
				left : "8.5px" ,
				padding : "8px 8px 16px 8px" ,
				display : "flex" ,
				flexDirection : "column" ,
				backgroundColor : "#ffffff" ,
				
			} }
		>
			
			<div
				className = "first-aside"
				style = { {
					marginBottom : "24px" ,
					width : "100%" ,
					backgroundColor : "#f4f5f6" ,
					borderRadius : "8px" ,
					padding : "8px 8px 11px 8px" ,
					display : "flex" ,
					flexFlow : "row nowrap" ,
					alignItems : "center" ,
					justifyContent : "space-between" ,
				} }
			>
				<div
					style = { {
						display : "inline-flex" ,
						flexFlow : "row nowrap" ,
						alignItems : "center" ,
						justifyContent : "flex-start" ,
					} }
				>
					<svg
						style = { {
							marginRight : "16px" ,
						} }
						width = "36px"
						height = "36px"
						viewBox = "0 0 36 37"
						fill = "none"
						xmlns = "http://www.w3.org/2000/svg"
					>
						<rect
							y = "0.316284"
							width = "36"
							height = "36"
							rx = "12"
							fill = "#1B1E20"
						/>
						<path
							d = "M19.4865 13.8696C20.5174 13.8699 21.5163 14.2276 22.313 14.8818C23.1097 15.536 23.6549 16.4462 23.8558 17.4573C24.0568 18.4684 23.9009 19.5179 23.4148 20.427C22.9287 21.336 22.1425 22.0485 21.1901 22.4429C20.2376 22.8373 19.1779 22.8893 18.1914 22.59C17.205 22.2907 16.3528 21.6587 15.78 20.8016C15.2073 19.9445 14.9494 18.9153 15.0504 17.8894C15.1513 16.8634 15.6049 15.9043 16.3337 15.1752C17.1706 14.3402 18.3043 13.8707 19.4865 13.8696ZM19.4865 9.33252C17.1505 9.33132 14.9056 10.2384 13.2262 11.8621C11.5468 13.4858 10.5645 15.6989 10.4869 18.0336C10.4093 20.3683 11.2425 22.6416 12.8104 24.3733C14.3783 26.1049 16.558 27.159 18.8889 27.313C21.2198 27.4669 23.5193 26.7085 25.3012 25.198C27.0832 23.6876 28.2081 21.5435 28.4381 19.2189C28.6682 16.8942 27.9854 14.5712 26.534 12.7408C25.0827 10.9104 22.9765 9.716 20.6607 9.41005C20.2714 9.35859 19.8792 9.33269 19.4865 9.33252Z"
							fill = "url(#paint0_linear_2123_14983)"
						/>
						<path
							d = "M15 9.33252H8.7V27.3325H15V9.33252Z"
							fill = "#00DE7A"
						/>
						<path
							d = "M14.9921 10.5393V26.1033C13.6268 25.3141 12.4932 24.1795 11.7051 22.8136C10.9169 21.4476 10.502 19.8983 10.502 18.3213C10.502 16.7443 10.9169 15.195 11.7051 13.8291C12.4932 12.4631 13.6268 11.3286 14.9921 10.5393Z"
							fill = "#00CC5C"
						/>
						<defs>
							<linearGradient
								id = "paint0_linear_2123_14983"
								x1 = "10.4977"
								y1 = "18.3213"
								x2 = "28.4753"
								y2 = "18.3213"
								gradientUnits = "userSpaceOnUse"
							>
								<stop stop-color = "#00DE7A" />
								<stop
									offset = "1"
									stop-color = "#A8FF35"
								/>
							</linearGradient>
						</defs>
					</svg>
					
					<div
						style = { {
							flex : "none" ,
							display : "inline-flex" ,
							flexFlow : "flow nowrap" ,
							alignItems : "center" ,
							
						} }
					>
						<span
							style = { {
								padding : "0px 0px 0px 0px" ,
								margin : "0px 8px 0px 0px" ,
								fontSize : "14px" ,
								fontWeight : "bold" ,
								color : "#353945" ,
								fontFamily : "'inter'" ,
								fontStyle : "normal" ,
								lineHeight : "20px" ,
								width:"53px",
								height:"24px",
								alignItems:"center" ,
								display:"flex"
								
							} }
						>DAOtion
						</span>
						
						
						<img
							src = ""
							alt = ""
							width = "16px"
							height = "16px"
							style = { {
								backgroundColor : "blue" ,
							} }
						/>
						
						
						
					
					</div>
					<Dropdown
						overlay = { menu }
						
					>
						<a href = "">
							<svg
								style={{
									marginLeft:"28px",
									display:"flex",
									alignItems:"center",
								}}
								width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.1103 7.39629L12.644 6.7737L12.1103 6.31628L11.5767 6.7737L12.1103 7.39629ZM12.1103 17.2363L11.5767 17.8589L12.1103 18.3163L12.644 17.8589L12.1103 17.2363ZM8.8173 11.2989L12.644 8.01888L11.5767 6.7737L7.75 10.0537L8.8173 11.2989ZM11.5767 8.01888L15.4033 11.2989L16.4706 10.0537L12.644 6.7737L11.5767 8.01888ZM7.75 14.5789L11.5767 17.8589L12.644 16.6137L8.8173 13.3337L7.75 14.5789ZM12.644 17.8589L16.4706 14.5789L15.4033 13.3337L11.5767 16.6137L12.644 17.8589Z" fill="#B1B5C3"/>
							</svg>
							{/*<DownOutlined />*/}
						</a>
					</Dropdown>
				</div>
			</div>
			
			<div
				className = "nav-button"
				style = { {
					display : "flex" ,
					flexDirection : "column" ,
					justifyContent : "space-between" ,
					height : "100%" ,
				} }
			>
				<div
					className = "aside-nav"
					style = { {
						// cursor:"pointer",
						userSelect : "none" ,
						display : "flex" ,
						flexDirection:"column",
						alignItems : "flex-start" ,
						width : "fill" ,
						
					} }
				>
					<div
						className = { less.nav }
						style={{
							marginBottom:"24px",
						}}
					
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="24" height="24" rx="6" fill="#353945"/>
							<path d="M20 4H4V20H20V4Z" fill="white" fill-opacity="0.01"/>
							<path d="M10.6667 6H6V9.66667H10.6667V6Z" fill="white"/>
							<path d="M18 14.3334H13.3333V18H18V14.3334Z" fill="white"/>
							<path d="M18 6H13.3333V11.6667H18V6Z" fill="white"/>
							<path d="M10.6667 12.3334H6V18H10.6667V12.3334Z" fill="white"/>
						</svg>
						
						<p
						>Overview
						</p>
					</div>
					<NavItem title="NFT">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="24" height="24" rx="12" fill="#FF881B" fill-opacity="0.1"/>
							<path d="M18.1561 22.7719C19.6603 22.5513 20.635 22.1323 21.3837 21.3837C22.1323 20.635 22.5513 19.6603 22.7719 18.1561C22.9976 16.6182 23 14.6577 23 12C23 9.34234 22.9976 7.38178 22.7719 5.84387C22.5513 4.33968 22.1323 3.36504 21.3837 2.61635C20.635 1.86766 19.6603 1.44874 18.1561 1.22806C16.6182 1.00244 14.6577 1 12 1C9.34234 1 7.38178 1.00244 5.84387 1.22806C4.33968 1.44874 3.36504 1.86766 2.61635 2.61635L18.1561 22.7719ZM18.1561 22.7719C16.6182 22.9976 14.6577 23 12 23M18.1561 22.7719L12 23M12 23C9.34234 23 7.38178 22.9976 5.84387 22.7719C4.33968 22.5513 3.36504 22.1323 2.61635 21.3837C1.86766 20.635 1.44874 19.6603 1.22806 18.1561C1.00244 16.6182 1 14.6577 1 12C1 9.34234 1.00244 7.38178 1.22806 5.84387M12 23L1.22806 5.84387M1.22806 5.84387C1.44874 4.33968 1.86766 3.36504 2.61635 2.61635L1.22806 5.84387Z" fill="white" stroke="url(#paint0_linear_2123_15030)" stroke-width="2"/>
							<path d="M12 24C17.2583 24 20.1815 24 22.0908 22.0908C24 20.1815 24 17.2583 24 12C24 6.74167 24 3.81849 22.0908 1.90924C20.1815 -3.69164e-07 17.2583 0 12 0C6.74167 0 3.81849 -3.69164e-07 1.90924 1.90924C-3.69164e-07 3.81849 0 6.74167 0 12C0 17.2583 -3.69164e-07 20.1815 1.90924 22.0908C3.81849 24 6.74167 24 12 24Z" fill="url(#paint1_linear_2123_15030)" fill-opacity="0.6"/>
							<path d="M18.1561 22.7719C19.6603 22.5513 20.635 22.1323 21.3837 21.3837C22.1323 20.635 22.5513 19.6603 22.7719 18.1561C22.9976 16.6182 23 14.6577 23 12C23 9.34234 22.9976 7.38178 22.7719 5.84387C22.5513 4.33968 22.1323 3.36504 21.3837 2.61635C20.635 1.86766 19.6603 1.44874 18.1561 1.22806C16.6182 1.00244 14.6577 1 12 1C9.34234 1 7.38178 1.00244 5.84387 1.22806C4.33968 1.44874 3.36504 1.86766 2.61635 2.61635L18.1561 22.7719ZM18.1561 22.7719C16.6182 22.9976 14.6577 23 12 23M18.1561 22.7719L12 23M12 23C9.34234 23 7.38178 22.9976 5.84387 22.7719C4.33968 22.5513 3.36504 22.1323 2.61635 21.3837C1.86766 20.635 1.44874 19.6603 1.22806 18.1561C1.00244 16.6182 1 14.6577 1 12C1 9.34234 1.00244 7.38178 1.22806 5.84387M12 23L1.22806 5.84387M1.22806 5.84387C1.44874 4.33968 1.86766 3.36504 2.61635 2.61635L1.22806 5.84387Z" stroke="url(#paint2_linear_2123_15030)" stroke-opacity="0.2" stroke-width="2"/>
							<g filter="url(#filter0_di_2123_15030)">
								<path d="M5.54993 14.9916L6.02403 12.7877C6.12432 12.3379 6.21549 11.7802 6.25196 11.3934C6.3249 11.6633 6.48901 12.167 6.63488 12.5448L7.59219 15.0366C7.68337 15.2615 7.71072 15.2975 7.80189 15.3245C7.83836 15.3317 7.84565 15.3331 7.94047 15.3334L8.97391 15.3333C9.26179 15.3316 9.27361 15.3069 9.3427 14.9916L10.4732 9.76516C10.4915 9.6752 10.5006 9.59424 10.5006 9.55826C10.5006 9.48629 10.4732 9.44132 10.4185 9.38734C10.3638 9.34237 10.3365 9.33337 10.1086 9.33337H9.37917C9.03272 9.33337 9.0236 9.34237 8.95066 9.6752L8.51304 11.6992C8.43098 12.104 8.30334 12.8507 8.26687 13.2555C8.1757 12.9406 8.01159 12.4549 7.87483 12.104L6.94487 9.63022C6.8537 9.40533 6.83546 9.36935 6.73517 9.34237C6.73061 9.34147 6.72651 9.34066 6.72264 9.33993L6.71147 9.33798C6.68959 9.33452 6.66771 9.33366 6.59659 9.33344L6.53325 9.33337C6.52502 9.33337 6.51636 9.33337 6.50724 9.33337H5.57728C5.23995 9.33337 5.23083 9.34237 5.15789 9.6752L4.02735 14.9017C4.00912 14.9916 4 15.0726 4 15.1086C4 15.1805 4.02735 15.2255 4.08206 15.2795C4.13438 15.3225 4.16168 15.3326 4.36343 15.3334L5.17338 15.3333C5.46901 15.3316 5.48083 15.3069 5.54993 14.9916ZM11.6131 14.9916L12.0417 13.0216L14.299 13.0215C14.5869 13.0197 14.5988 12.9951 14.6679 12.6798L14.7682 12.23C14.8047 12.0771 14.8047 12.0681 14.8047 12.0231C14.8047 11.9511 14.7773 11.9061 14.7226 11.8522C14.6679 11.8072 14.6405 11.7982 14.4126 11.7982H12.3061L12.5523 10.6378H15.1512C15.4886 10.6378 15.4977 10.6288 15.5706 10.3049L15.6892 9.76516C15.7213 9.63022 15.7251 9.60735 15.7256 9.57293V9.55826C15.7256 9.48629 15.6983 9.44132 15.6436 9.38734C15.5889 9.34237 15.5615 9.33337 15.3335 9.33337H11.604C11.2666 9.33337 11.2575 9.34237 11.1846 9.66621L10.0538 14.9017C10.0356 14.9916 10.0265 15.0726 10.0265 15.1086C10.0265 15.1805 10.0538 15.2255 10.1086 15.2795C10.1609 15.3225 10.1882 15.3326 10.39 15.3334L11.2444 15.3333C11.5413 15.3317 11.5526 15.3074 11.6131 14.9916ZM17.0682 14.9916L18.009 10.6378H19.4337C19.7717 10.6378 19.7808 10.6288 19.8539 10.3049L19.9726 9.76516C19.9909 9.66621 20 9.60324 20 9.55826C20 9.48629 19.9726 9.44132 19.9178 9.38734C19.863 9.34237 19.8356 9.33337 19.6073 9.33337H15.2233C14.8854 9.33337 14.8762 9.34237 14.8032 9.66621L14.6844 10.2059C14.6662 10.2959 14.657 10.3769 14.657 10.4129C14.657 10.4848 14.6844 10.5298 14.7392 10.5838C14.794 10.6288 14.8214 10.6378 15.0498 10.6378H16.4198L15.5064 14.9017C15.479 15.0276 15.4699 15.0636 15.4699 15.1086C15.4699 15.1805 15.4973 15.2255 15.5521 15.2795C15.6045 15.3225 15.6319 15.3326 15.834 15.3334L16.691 15.3333C16.9872 15.3316 16.999 15.3069 17.0682 14.9916Z" fill="black"/>
							</g>
							<defs>
								<filter id="filter0_di_2123_15030" x="2" y="7.33337" width="20" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
									<feOffset/>
									<feGaussianBlur stdDeviation="1"/>
									<feComposite in2="hardAlpha" operator="out"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.439216 0 0 0 0 0.505882 0 0 0 0.5 0"/>
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2123_15030"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2123_15030" result="shape"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
									<feOffset/>
									<feGaussianBlur stdDeviation="0.5"/>
									<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
									<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
									<feBlend mode="normal" in2="shape" result="effect2_innerShadow_2123_15030"/>
								</filter>
								<linearGradient id="paint0_linear_2123_15030" x1="0" y1="0" x2="22" y2="24" gradientUnits="userSpaceOnUse">
									<stop stop-color="#F74545"/>
									<stop offset="1" stop-color="#FCB54E"/>
								</linearGradient>
								<linearGradient id="paint1_linear_2123_15030" x1="0" y1="0" x2="22" y2="24" gradientUnits="userSpaceOnUse">
									<stop stop-color="#F745C5"/>
									<stop offset="1" stop-color="#FCB54E"/>
								</linearGradient>
								<linearGradient id="paint2_linear_2123_15030" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
									<stop stop-color="#3D454C"/>
									<stop offset="1" stop-color="#262A2D"/>
								</linearGradient>
							</defs>
						</svg>
					
					</NavItem>
					<NavItem title="SRM">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="24" height="24" rx="6" fill="#DCDBFF"/>
							<path d="M18.6987 16.3976C17.0884 14.9049 15.6443 14 13.3335 14C11.0227 14 9.5786 14.9049 7.96828 16.3976C7.25293 17.0607 7.14219 18.1396 7.63604 18.9314C7.81393 19.2166 8.15505 19.3333 8.49119 19.3333H18.1758C18.5119 19.3333 18.8531 19.2166 19.031 18.9314C19.5248 18.1396 19.4141 17.0607 18.6987 16.3976Z" fill="#8583FF"/>
							<path d="M13.3333 12.0014C11.8606 12.0014 10.6667 10.8075 10.6667 9.33476C10.6667 7.862 11.8606 6.66809 13.3333 6.66809C14.8061 6.66809 16 7.862 16 9.33476C16 10.8075 14.8061 12.0014 13.3333 12.0014Z" fill="#8583FF"/>
							<rect x="4" y="4.66797" width="7.33333" height="1.33333" fill="#8583FF"/>
							<rect x="4" y="8" width="4" height="1.33333" fill="#8583FF"/>
						</svg>
					
					</NavItem>
					<NavItem title="Voting">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_b_2123_15067)">
								<rect width="24" height="24" rx="6" fill="#E8FFDE"/>
							</g>
							<path d="M13.9636 10.0909C13.9905 10.4327 13.7467 10.7266 13.4363 10.7266H12.4258C12.1335 10.7266 11.8966 10.4647 11.8966 10.1416V4.58429C11.8966 4.26121 12.1335 3.99932 12.4258 3.99932H12.9991C13.2737 3.99932 13.5026 4.23132 13.5264 4.5336L13.9636 10.0909Z" fill="#309D00" fill-opacity="0.6"/>
							<path d="M10.3084 10.3239C10.3084 10.5684 10.171 10.7871 9.97094 10.8913C9.53469 11.1186 8.79131 11.576 8.456 12.1941C8.02382 12.9907 7.94232 14.43 7.92906 14.7597C7.92721 14.8059 7.9284 14.8521 7.92265 14.8978C7.85102 15.4688 6.85383 14.8018 6.47125 14.0966C6.26362 13.7138 6.23699 13.2109 6.25883 12.8183C6.28219 12.3983 6.39363 11.9925 6.50295 11.5893C6.62033 11.1565 6.29445 10.7305 5.84605 10.7305H3.86279C3.5118 10.7305 3.25805 10.3598 3.35345 9.98651L4.77461 4.42468C4.83899 4.1727 5.04705 3.9987 5.28395 3.9987H9.77916C10.0715 3.9987 10.3084 4.26059 10.3084 4.58368V10.3239Z" fill="#309D00" fill-opacity="0.6"/>
							<path d="M9.93936 13.6904C9.91247 13.3486 10.1562 13.0547 10.4666 13.0547H11.4771C11.7695 13.0547 12.0064 13.3166 12.0064 13.6397V19.197C12.0064 19.52 11.7695 19.7819 11.4771 19.7819H10.9039C10.6293 19.7819 10.4004 19.5499 10.3766 19.2476L9.93936 13.6904Z" fill="#309D00"/>
							<path d="M13.5941 13.4573C13.5941 13.2129 13.7315 12.9941 13.9316 12.8899C14.3678 12.6626 15.1112 12.2053 15.4465 11.5872C15.8787 10.7905 15.9602 9.35121 15.9734 9.02152C15.9753 8.97537 15.9741 8.92916 15.9798 8.8834C16.0515 8.31244 17.0487 8.97945 17.4312 9.6847C17.6389 10.0674 17.6655 10.5703 17.6437 10.9629C17.6203 11.383 17.5089 11.7888 17.3995 12.192C17.2822 12.6247 17.6081 13.0508 18.0564 13.0508H20.0397C20.3907 13.0508 20.6444 13.4214 20.549 13.7947L19.1279 19.3566C19.0635 19.6085 18.8555 19.7826 18.6186 19.7826H14.1233C13.831 19.7826 13.5941 19.5207 13.5941 19.1976V13.4573Z" fill="#309D00"/>
							<defs>
								<filter id="filter0_b_2123_15067" x="-10" y="-10" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"/>
									<feGaussianBlur in="BackgroundImage" stdDeviation="5"/>
									<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2123_15067"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2123_15067" result="shape"/>
								</filter>
							</defs>
						</svg>
					
					</NavItem>
				</div>
				<div
					style = { {
						boxSizing : "border-box" ,
						textAlign : "center" ,
						content : "" ,
						borderTop : "2px solid #e6e8ec" ,
					} }
				>
					<Button
						style = { {
							marginTop : "12px" ,
							borderRadius : "12px" ,
							border : "2px solid #e6e8ec" ,
							fontSize : "14px" ,
							width : "100%" ,
							display : "flex" ,
							alignItems : "center" ,
							justifyContent : "center" ,
							color : "black" ,
							padding : "8px 32px" ,
							fontWeight : "bold" ,
							lineHeight : "24px" ,
							height : "40px" ,
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
const NavItem = ( props ) => {
	return <>
		<div
			className = { less.nav }
		>
			{props.children}
			<p
			>{props.title}
			</p>
		</div>
	
	
	</>;
	
	
};
