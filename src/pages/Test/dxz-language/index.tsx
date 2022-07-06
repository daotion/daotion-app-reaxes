import less from './index.module.less';
import { Switch } from 'antd';

export const DxzLanguage = () => {
	return <>
		<div
			className = { less.dxzLanguageContainer }
			style = { {
				boxShadow : "0 4px 20px rgba(0,0,0,0.15)" ,
				width : "260px" ,
				height : "fit-content" ,
				marginTop : "46px" ,
				marginLeft : "34px" ,
				borderRadius : "12px" ,
				padding : "24px 16px" ,
				
			} }
		>
			<div className={less.languageItem}
				style = { {
					display : "flex" ,
					alignItems : "center" ,
					justifyContent : "space-between" ,
				} }
			>
				<span
					style = { {
						color : "#3772ff" ,
						fontSize : "14px" ,
						fontWeight : "600" ,
						margin : "2px 0px 2px 0px" ,
						display : "inline-flex" ,
					} }
				>
					About
				</span>
				<svg
					width = "20"
					height = "20"
					viewBox = "0 0 20 20"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M10.0001 16.6665C13.682 16.6665 16.6667 13.6817 16.6667 9.99984C16.6667 6.31794 13.682 3.33317 10.0001 3.33317C6.31818 3.33317 3.33341 6.31794 3.33341 9.99984C3.33341 13.6817 6.31818 16.6665 10.0001 16.6665ZM10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
						fill = "#3772FF"
					/>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M10.0001 8.3335C10.4603 8.3335 10.8334 8.70659 10.8334 9.16683V13.3342C10.8334 13.7945 10.4603 14.1676 10.0001 14.1676C9.53984 14.1676 9.16675 13.7945 9.16675 13.3342V9.16683C9.16675 8.70659 9.53984 8.3335 10.0001 8.3335Z"
						fill = "#3772FF"
					/>
					<ellipse
						cx = "10.0001"
						cy = "6.66683"
						rx = "0.833333"
						ry = "0.833333"
						fill = "#6F767E"
					/>
				</svg>
			</div>
			<div className={less.languageItem}
				style = { {
					display : "flex" ,
					alignItems : "center" ,
					justifyContent : "space-between" ,
					marginBottom : "12px" ,
					paddingTop : "17px" ,
					borderTop : "1px solid #e6e8ec" ,
				} }
			>
				<span
					style = { {
						color : "#777e90" ,
						fontSize : "14px" ,
						fontWeight : "600" ,
						margin : "2px 0px 2px 0px" ,
						display : "inline-flex" ,
						
					} }
				>
					Help Center
				</span>
				<svg
					width = "20"
					height = "20"
					viewBox = "0 0 20 20"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M10.0001 16.6665C13.682 16.6665 16.6667 13.6817 16.6667 9.99984C16.6667 6.31794 13.682 3.33317 10.0001 3.33317C6.31818 3.33317 3.33341 6.31794 3.33341 9.99984C3.33341 13.6817 6.31818 16.6665 10.0001 16.6665ZM10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
						fill = "#777E91"
					/>
					<circle
						cx = "10.0001"
						cy = "14.9998"
						r = "0.833333"
						fill = "#777E91"
					/>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M9.9999 6.66667C9.27552 6.66667 8.65705 7.12925 8.42785 7.7777C8.27448 8.21164 7.79838 8.43907 7.36445 8.2857C6.93052 8.13233 6.70308 7.65622 6.85645 7.22229C7.31365 5.92876 8.54724 5 9.9999 5C11.8408 5 13.3332 6.49238 13.3332 8.33333C13.3332 9.88653 12.2709 11.1916 10.8332 11.5617V12.5C10.8332 12.9602 10.4601 13.3333 9.9999 13.3333C9.53966 13.3333 9.16657 12.9602 9.16657 12.5V10.8333C9.16657 10.3731 9.53966 10 9.9999 10C10.9204 10 11.6666 9.25381 11.6666 8.33333C11.6666 7.41286 10.9204 6.66667 9.9999 6.66667Z"
						fill = "#777E91"
					/>
				</svg>
			
			</div>
			<AboutList title = "Language/Currency">
				<svg
					width = "20"
					height = "20"
					viewBox = "0 0 20 20"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M10.0001 16.6665C13.682 16.6665 16.6667 13.6817 16.6667 9.99984C16.6667 6.31794 13.682 3.33317 10.0001 3.33317C6.31818 3.33317 3.33341 6.31794 3.33341 9.99984C3.33341 13.6817 6.31818 16.6665 10.0001 16.6665ZM10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
						fill = "#777E91"
					/>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M11.4555 15.147C12.0711 13.9159 12.4999 12.0984 12.4999 9.99984C12.4999 7.90129 12.0711 6.08381 11.4555 4.85264C10.7901 3.52177 10.1791 3.33317 9.99992 3.33317C9.82071 3.33317 9.20978 3.52177 8.54435 4.85264C7.92877 6.08381 7.49992 7.90129 7.49992 9.99984C7.49992 12.0984 7.92877 13.9159 8.54435 15.147C9.20978 16.4779 9.82071 16.6665 9.99992 16.6665C10.1791 16.6665 10.7901 16.4779 11.4555 15.147ZM9.99992 18.3332C12.3011 18.3332 14.1666 14.6022 14.1666 9.99984C14.1666 5.39746 12.3011 1.6665 9.99992 1.6665C7.69873 1.6665 5.83325 5.39746 5.83325 9.99984C5.83325 14.6022 7.69873 18.3332 9.99992 18.3332Z"
						fill = "#777E91"
					/>
					<path
						fill-rule = "evenodd"
						clip-rule = "evenodd"
						d = "M18.2923 10.8332C18.3195 10.5591 18.3334 10.2811 18.3334 9.99984C18.3334 9.71859 18.3195 9.44059 18.2923 9.1665H1.70789C1.68068 9.44059 1.66675 9.71859 1.66675 9.99984C1.66675 10.2811 1.68068 10.5591 1.70789 10.8332H18.2923Z"
						fill = "#777E91"
					/>
				</svg>
			
			</AboutList>
			<AboutList title = "Dark theme"
				className={less.languageItem}
			>
				<Switch />
			</AboutList>
		</div>
	</>;
};
const AboutList = ( props ) => {
	return <>
		<div
			className={less.languageItem}
			style = { {
				display : "flex" ,
				alignItems : "center" ,
				justifyContent : "space-between" ,
				paddingTop : "17px" ,
				borderTop : "1px solid #e6e8ec" ,
			} }
		>
			<span
				style = { {
					color : "#777e90" ,
					fontSize : "14px" ,
					fontWeight : "600" ,
					margin : "2px 0px 2px 0px" ,
					display : "inline-flex" ,
					
				} }
			>
				{ props.title }
			</span>
			{ props.children }
		
		</div>
	</>;
};
