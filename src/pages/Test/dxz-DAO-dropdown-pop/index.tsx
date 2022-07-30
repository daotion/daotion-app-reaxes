import less from'./index.module.less'
import { Switch , Input } from 'antd';

export const DxzDAODropdownPop = () => {
	return <>
		<div
			style = { {
				background : "#ffffff" ,
				boxShadow : "0px 4px 20px rgba(0, 0, 0, 0.15)" ,
				borderRadius : "12px" ,
				display : "flex" ,
				flexDirection : "column" ,
				padding : "24px 16px" ,
				width : "280px" ,
			} }
		>
			<div className={less.popList}
				style = { {
					display : "flex" ,
					justifyContent : "space-between" ,
					alignItems : "center" ,
				} }
			>
				<p
					style = { {
						margin : "0 0" ,
						fontWeight : "600" ,
						fontSize : "14px" ,
					} }
				>Space Profile
				</p>
				<svg
					width = "20"
					height = "20"
					viewBox = "0 0 20 20"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<g clipPath = "url(#clip0_2076_27319)">
						<path
							fillRule = "evenodd"
							clipRule = "evenodd"
							d = "M10 11.6677C10.9205 11.6677 11.6667 10.9215 11.6667 10.0011C11.6667 9.08058 10.9205 8.33439 10 8.33439C9.07955 8.33439 8.33335 9.08058 8.33335 10.0011C8.33335 10.9215 9.07955 11.6677 10 11.6677ZM13.3334 10.0011C13.3334 11.842 11.841 13.3344 10 13.3344C8.15907 13.3344 6.66669 11.842 6.66669 10.0011C6.66669 8.16011 8.15907 6.66772 10 6.66772C11.841 6.66772 13.3334 8.16011 13.3334 10.0011Z"
							fill = "#6F767E"
						/>
						<path
							fillRule = "evenodd"
							clipRule = "evenodd"
							d = "M9.4825 2.5009L9.15954 3.46978C8.84707 4.40719 8.16586 5.05944 7.47109 5.44629C7.42168 5.4738 7.37275 5.5021 7.32432 5.53118C6.641 5.94139 5.73422 6.20599 4.765 6.00765L3.76352 5.80271L4.09765 4.16988L5.09913 4.37482C5.57019 4.47122 6.05424 4.34971 6.46649 4.10222C6.53042 4.06384 6.59503 4.02647 6.66029 3.99013C7.07989 3.7565 7.42653 3.39834 7.5784 2.94273L7.90136 1.97385C8.12822 1.29328 8.76512 0.834229 9.4825 0.834229H10.5175C11.2349 0.834229 11.8718 1.29328 12.0986 1.97385L12.4216 2.94273C12.5734 3.39834 12.9201 3.7565 13.3397 3.99013C13.4049 4.02647 13.4695 4.06384 13.5335 4.10222C13.9457 4.3497 14.4298 4.47121 14.9008 4.37481L15.9023 4.16988C16.6051 4.02606 17.3211 4.34811 17.6798 4.96938L18.1973 5.86569C18.556 6.48696 18.4769 7.26806 18.0009 7.80481L17.3218 8.57069C17.0035 8.9296 16.8659 9.40824 16.8735 9.88788C16.8747 9.96319 16.8747 10.0386 16.8735 10.1139C16.8659 10.5935 17.0035 11.0721 17.3218 11.431L18.0009 12.1969C18.4769 12.7337 18.556 13.5148 18.1973 14.136L17.6798 15.0324C17.3211 15.6536 16.6051 15.9757 15.9023 15.8318L14.9009 15.6269C14.4298 15.5305 13.9458 15.652 13.5335 15.8995C13.4696 15.9379 13.405 15.9753 13.3397 16.0117C12.9201 16.2453 12.5734 16.6034 12.4216 17.0591L12.0986 18.0279C11.8718 18.7085 11.2349 19.1676 10.5175 19.1676H9.4825C8.76512 19.1676 8.12822 18.7085 7.90136 18.0279L7.5784 17.0591C7.42653 16.6034 7.07989 16.2453 6.66029 16.0117C6.59501 15.9753 6.53038 15.9379 6.46643 15.8995C6.05418 15.652 5.57013 15.5305 5.09906 15.6269L4.09765 15.8319C3.39483 15.9757 2.67883 15.6536 2.32014 15.0324L1.80266 14.136C1.44396 13.5148 1.52307 12.7337 1.99903 12.1969L3.24603 13.3027L3.76352 14.199L4.76493 13.9941C5.73417 13.7958 6.64096 14.0604 7.32428 14.4706C7.37272 14.4997 7.42167 14.528 7.47109 14.5555C8.16586 14.9424 8.84707 15.5946 9.15954 16.532L9.4825 17.5009L10.5175 17.5009L10.8404 16.532C11.1529 15.5946 11.8341 14.9424 12.5289 14.5555C12.5783 14.528 12.6272 14.4997 12.6757 14.4706C13.359 14.0604 14.2658 13.7958 15.235 13.9941L16.2364 14.199L16.7539 13.3027L16.0748 12.5368C15.4208 11.7993 15.1945 10.8847 15.2071 10.0875C15.208 10.0298 15.208 9.972 15.2071 9.91429C15.1945 9.11703 15.4208 8.2024 16.0748 7.46491L16.7539 6.69902L16.2364 5.80271L15.235 6.00764C14.2657 6.20598 13.359 5.94138 12.6756 5.53117C12.6272 5.5021 12.5783 5.4738 12.5289 5.44629C11.8341 5.05944 11.1529 4.40719 10.8404 3.46978L10.5175 2.50089L9.4825 2.5009ZM1.99903 12.1969L3.24603 13.3027L3.92522 12.5368C4.57918 11.7993 4.80551 10.8847 4.79288 10.0874C4.79197 10.0298 4.79197 9.972 4.79288 9.91432C4.80552 9.11707 4.57919 8.20244 3.92522 7.46495L3.24603 6.69902L3.76352 5.80271L4.09765 4.16988C3.39483 4.02606 2.67883 4.34811 2.32014 4.96938L1.80266 5.86569C1.44396 6.48696 1.52306 7.26806 1.99903 7.8048L2.67822 8.57073C2.99648 8.92964 3.13402 9.40828 3.12643 9.88791C3.12523 9.9632 3.12523 10.0385 3.12642 10.1138C3.13402 10.5935 2.99647 11.0721 2.67822 11.431L1.99903 12.1969Z"
							fill = "#6F767E"
						/>
					</g>
					<defs>
						<clipPath id = "clip0_2076_27319">
							<rect
								width = "20"
								height = "20"
								fill = "white"
								transform = "translate(0 0.000976562)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<PopupLi text = "Mute Notification">
				<Switch />
			</PopupLi>
			<PopupLi text = "Leave Space">
				<svg
					width = "20"
					height = "20"
					viewBox = "0 0 20 20"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<path
						fillRule = "evenodd"
						clipRule = "evenodd"
						d = "M10.809 12.5017C10.3491 12.4844 9.96219 12.8431 9.94483 13.303C9.90569 14.3399 9.85071 15.0966 9.79666 15.6392C9.74344 16.1735 9.42086 16.495 8.97121 16.5499C8.441 16.6148 7.69305 16.6678 6.66668 16.6678C5.64027 16.6678 4.89231 16.6148 4.36211 16.5499C3.91269 16.495 3.58995 16.1734 3.53671 15.6389C3.43639 14.6318 3.33335 12.8918 3.33335 10.0011C3.33335 7.11046 3.43639 5.37048 3.53671 4.36337C3.58995 3.82891 3.91269 3.50728 4.36211 3.45233C4.89231 3.38752 5.64027 3.33447 6.66668 3.33447C7.69305 3.33447 8.441 3.38752 8.97121 3.45233C9.42086 3.5073 9.74344 3.82879 9.79666 4.36311C9.85071 4.90568 9.90569 5.66242 9.94483 6.69924C9.96219 7.15915 10.3491 7.51791 10.809 7.50055C11.2689 7.48318 11.6277 7.09628 11.6103 6.63637C11.5701 5.57217 11.5132 4.78066 11.4551 4.1979C11.3331 2.97276 10.4789 1.95756 9.17344 1.79798C8.56577 1.72369 7.74933 1.66781 6.66668 1.6678C5.58399 1.6678 4.76754 1.7237 4.15987 1.79798C2.8543 1.95759 2.00027 2.97326 1.87825 4.19816C1.77081 5.27671 1.66668 7.07487 1.66668 10.0011C1.66668 12.9274 1.77082 14.7256 1.87825 15.8041C2.00027 17.029 2.8543 18.0447 4.15987 18.2043C4.76754 18.2786 5.58399 18.3345 6.66668 18.3345C7.74933 18.3345 8.56576 18.2786 9.17344 18.2043C10.4789 18.0447 11.3331 17.0295 11.4551 15.8044C11.5132 15.2216 11.5701 14.4301 11.6103 13.3659C11.6277 12.906 11.2689 12.5191 10.809 12.5017Z"
						fill = "#EF466F"
					/>
					<path
						fillRule = "evenodd"
						clipRule = "evenodd"
						d = "M13.9941 12.3284C13.6686 12.6538 13.6686 13.1815 13.9941 13.5069C14.3195 13.8323 14.8471 13.8323 15.1726 13.5069L18.0893 10.5902C18.4147 10.2648 18.4147 9.73716 18.0893 9.41172L15.1726 6.49505C14.8471 6.16962 14.3195 6.16962 13.9941 6.49505C13.6686 6.82049 13.6686 7.34813 13.9941 7.67357L15.4882 9.16764H7.5C7.03976 9.16764 6.66666 9.54074 6.66666 10.001C6.66666 10.4612 7.03976 10.8343 7.5 10.8343L15.4882 10.8343L13.9941 12.3284Z"
						fill = "#EF466F"
					/>
				</svg>
			</PopupLi>
		</div>
	</>;
};
const PopupLi = ( props ) => {
	return <>
		<div className={less.popList}
		>
			<p
				style = { {
					margin : "0 0" ,
					fontWeight : "600" ,
					fontSize : "14px" ,
					
				} }
			>{ props.text }
			</p>
			{ props.children }
		</div>
	</>;
};
