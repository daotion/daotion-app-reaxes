import { ComponentWrapper } from "@@RootPath/src/common/ReactComponentWrapper";

export const SVGArrowTip=ComponentWrapper(()=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9 4.5L16.5 12L9 19.5" stroke="#777E91" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
		</svg>
	</>
})

export const SVGClose = ComponentWrapper( ( props : {
	style? : React.CSSProperties,
	onClick? : React.MouseEventHandler<SVGElement>
} ) => {
	
	return <>
		<svg
			onClick = { props.onClick }
			style = { props.style }
			width = "40"
			height = "40"
			viewBox = "0 0 40 40"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<rect
				x = "1"
				y = "1"
				width = "38"
				height = "38"
				rx = "19"
				fill = "white"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z"
				fill = "#23262F"
			/>
			<rect
				x = "1"
				y = "1"
				width = "38"
				height = "38"
				rx = "19"
				stroke = "#E6E8EC"
				strokeWidth = "2"
			/>
		</svg>
	</>;
});
export const SVGNonconformingCondition=ComponentWrapper(()=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z" fill="#353945"/>
		</svg>
	</>
})

export const SVGConformingCondition=ComponentWrapper(()=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C14.3582 4 16.478 5.02032 17.9422 6.64358L11 13.5858L8.20711 10.7929C7.81658 10.4024 7.18342 10.4024 6.79289 10.7929C6.40237 11.1834 6.40237 11.8166 6.79289 12.2071L9.58579 15C10.3668 15.7811 11.6332 15.781 12.4142 15L19.1015 8.31276C19.6755 9.41616 20 10.6702 20 12Z" fill="#45B26B"/>
		</svg>
	</>
})
export const SVGMoreInfo=ComponentWrapper(()=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19ZM10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" fill="#777e90"/>
		</svg>
	</>
})

export const SVGAddWhitelist=ComponentWrapper(()=>{
	return<>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 12.5C11.7259 12.5 13.125 11.1009 13.125 9.375C13.125 7.64911 11.7259 6.25 10 6.25C8.27411 6.25 6.875 7.64911 6.875 9.375C6.875 11.1009 8.27411 12.5 10 12.5Z" stroke="#777e91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M4.98438 15.5786C5.45462 14.6524 6.17216 13.8744 7.05745 13.331C7.94275 12.7876 8.96123 12.5 10 12.5C11.0388 12.5 12.0572 12.7876 12.9425 13.331C13.8278 13.8744 14.5454 14.6524 15.0156 15.5786" stroke="#777e91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M13.75 4.375H17.5" stroke="#777e91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M15.625 2.5V6.25" stroke="#777e91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M17.4063 8.82033C17.4694 9.21037 17.5008 9.60489 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4002 14.2406 16.3615 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53683 17.3559C7.08197 17.0665 5.7456 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35472 10.0083 2.50325 8.50033 3.07091 7.12989C3.63856 5.75944 4.59986 4.5881 5.83323 3.76399C7.0666 2.93988 8.51664 2.50001 10 2.50001C10.3951 2.49924 10.7897 2.53059 11.1797 2.59376" stroke="#777e91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	</>
})
export const SVGRevocation=ComponentWrapper((props)=>{
	return<>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M4.69531 4.69531L15.3047 15.3047" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	</>
})
export const SVGFreezeList=ComponentWrapper((props)=>{
	return<>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 5V15" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M8.125 3.125L10 5L11.875 3.125" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M8.125 16.875L10 15L11.875 16.875" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M5.67188 7.5L14.3281 12.5" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M3.10938 8.1875L5.67187 7.5L4.98438 4.9375" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M15.0156 15.0625L14.3281 12.5L16.8906 11.8125" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M5.67188 12.5L14.3281 7.5" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M4.98438 15.0625L5.67187 12.5L3.10938 11.8125" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M16.8906 8.1875L14.3281 7.5L15.0156 4.9375" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	</>
})
export const SVGSettings=ComponentWrapper((props)=>{
	return<>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M9.99935 11.666C10.9198 11.666 11.666 10.9198 11.666 9.99935C11.666 9.07887 10.9198 8.33268 9.99935 8.33268C9.07887 8.33268 8.33268 9.07887 8.33268 9.99935C8.33268 10.9198 9.07887 11.666 9.99935 11.666ZM13.3327 9.99935C13.3327 11.8403 11.8403 13.3327 9.99935 13.3327C8.1584 13.3327 6.66602 11.8403 6.66602 9.99935C6.66602 8.1584 8.1584 6.66602 9.99935 6.66602C11.8403 6.66602 13.3327 8.1584 13.3327 9.99935Z" fill="#777E91"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M9.48323 2.50065L9.16027 3.46954C8.8478 4.40695 8.16659 5.05919 7.47182 5.44604C7.42241 5.47356 7.37348 5.50186 7.32505 5.53093C6.64173 5.94114 5.73495 6.20574 4.76573 6.00741L3.76425 5.80247L4.09838 4.16964L5.09986 4.37458C5.57093 4.47097 6.05497 4.34946 6.46722 4.10198C6.53115 4.0636 6.59576 4.02623 6.66103 3.98989C7.08062 3.75626 7.42726 3.3981 7.57913 2.94249L7.9021 1.9736C8.12895 1.29303 8.76585 0.833984 9.48323 0.833984H10.5182C11.2356 0.833984 11.8725 1.29303 12.0993 1.9736L12.4223 2.94249C12.5742 3.3981 12.9208 3.75626 13.3404 3.98989C13.4057 4.02623 13.4703 4.0636 13.5342 4.10198C13.9465 4.34946 14.4305 4.47097 14.9016 4.37457L15.903 4.16964C16.6058 4.02582 17.3218 4.34786 17.6805 4.96914L18.198 5.86545C18.5567 6.48672 18.4776 7.26781 18.0016 7.80456L17.3225 8.57044C17.0042 8.92936 16.8667 9.408 16.8743 9.88763C16.8755 9.96294 16.8755 10.0383 16.8743 10.1136C16.8667 10.5933 17.0042 11.0719 17.3225 11.4308L18.0016 12.1967C18.4776 12.7334 18.5567 13.5145 18.198 14.1358L17.6805 15.0321C17.3218 15.6534 16.6058 15.9754 15.903 15.8316L14.9016 15.6267C14.4306 15.5303 13.9465 15.6518 13.5343 15.8993C13.4703 15.9377 13.4057 15.9751 13.3404 16.0114C12.9208 16.245 12.5742 16.6032 12.4223 17.0588L12.0993 18.0277C11.8725 18.7083 11.2356 19.1673 10.5182 19.1673H9.48323C8.76585 19.1673 8.12895 18.7083 7.9021 18.0277L7.57913 17.0588C7.42727 16.6032 7.08062 16.245 6.66102 16.0114C6.59574 15.9751 6.53112 15.9377 6.46717 15.8993C6.05492 15.6518 5.57087 15.5303 5.09979 15.6267L4.09838 15.8316C3.39556 15.9754 2.67957 15.6534 2.32087 15.0321L1.80339 14.1358C1.4447 13.5145 1.5238 12.7334 1.99976 12.1967L3.24676 13.3025L3.76425 14.1988L4.76566 13.9939C5.7349 13.7955 6.64169 14.0601 7.32501 14.4703C7.37346 14.4994 7.4224 14.5277 7.47183 14.5553C8.16659 14.9421 8.8478 15.5944 9.16027 16.5318L9.48323 17.5007L10.5182 17.5006L10.8412 16.5318C11.1536 15.5944 11.8348 14.9421 12.5296 14.5553C12.579 14.5277 12.628 14.4994 12.6764 14.4703C13.3597 14.0601 14.2665 13.7955 15.2358 13.9939L16.2371 14.1988L16.7546 13.3025L16.0755 12.5366C15.4215 11.7991 15.1952 10.8845 15.2078 10.0872C15.2087 10.0295 15.2087 9.97175 15.2078 9.91405C15.1952 9.11679 15.4215 8.20215 16.0755 7.46466L16.7546 6.69878L16.2371 5.80247L15.2357 6.0074C14.2665 6.20574 13.3597 5.94114 12.6764 5.53093C12.628 5.50186 12.579 5.47356 12.5296 5.44604C11.8348 5.05919 11.1536 4.40695 10.8412 3.46953L10.5182 2.50065L9.48323 2.50065ZM1.99976 12.1967L3.24676 13.3025L3.92595 12.5365C4.57991 11.7991 4.80624 10.8844 4.79361 10.0872C4.7927 10.0295 4.7927 9.97176 4.79362 9.91407C4.80625 9.11682 4.57992 8.20219 3.92595 7.46471L3.24676 6.69878L3.76425 5.80247L4.09838 4.16964C3.39556 4.02582 2.67957 4.34786 2.32087 4.96913L1.80339 5.86544C1.4447 6.48672 1.5238 7.26781 1.99976 7.80456L2.67895 8.57049C2.99721 8.9294 3.13476 9.40804 3.12716 9.88767C3.12596 9.96295 3.12596 10.0383 3.12716 10.1136C3.13475 10.5932 2.99721 11.0719 2.67895 11.4308L1.99976 12.1967Z" fill="#777E91"/>
		</svg>
	</>
})
export const SVGNetEthereum = ComponentWrapper( () => {
	return <>
		<svg
			style={{marginRight:"8px"}}
			width = "24"
			height = "24"
			viewBox = "0 0 16 16"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<g clipPath = "url(#clip0_2540_29067)">
				<path
					d = "M0 8C0 3.5816 3.58166 0 8.00014 0C12.4186 0 16.0003 3.5816 16.0003 8C16.0003 12.4184 12.4186 16 8.00014 16C3.58166 16 0 12.4184 0 8Z"
					fill = "#627EEA"
				/>
				<path
					d = "M4 7.7243L8 9.99967V1.33301L4 7.7243Z"
					fill = "white"
				/>
				<path
					opacity = "0.8"
					d = "M8.00041 1.33301L8 9.99967L12 7.75276L8.00041 1.33301Z"
					fill = "#C0CBF6"
				/>
				<path
					d = "M4 8.86426L7.92927 14.4003V11.1859L4 8.86466V8.86426Z"
					fill = "white"
				/>
				<path
					opacity = "0.8"
					d = "M7.92969 11.1859V14.4003L11.8606 8.86426L7.92969 11.1859Z"
					fill = "#C0CBF6"
				/>
				<path
					opacity = "0.6"
					d = "M8.00061 6L4 7.73966L8.00061 10L12 7.73966L8.00061 6Z"
					fill = "#8197EE"
				/>
			</g>
			<defs>
				<clipPath id = "clip0_2540_29067">
					<rect
						width = "16.0003"
						height = "16"
						fill = "white"
					/>
				</clipPath>
			</defs>
		</svg>
	</>;
} );
export const SVGSelectArrowIcon = ComponentWrapper(() => {
	return <>
		<svg
			width = "24"
			height = "24"
			viewBox = "0 0 24 24"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				d = "M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L6.70711 8.29289ZM12 15L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L12 15ZM18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L18.7071 9.70711ZM5.29289 9.70711L11.2929 15.7071L12.7071 14.2929L6.70711 8.29289L5.29289 9.70711ZM12.7071 15.7071L18.7071 9.70711L17.2929 8.29289L11.2929 14.2929L12.7071 15.7071Z"
				fill = "#6F767E"
			/>
		</svg>
	</>;
});
export const SVGCreateSBTPreview= ComponentWrapper((props)=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V5Z" fill="#6F767E"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M2 19C2 20.6569 3.34315 22 5 22H7C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V19Z" fill="#6F767E"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M22 19C22 20.6569 20.6569 22 19 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V19Z" fill="#6F767E"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M22 5C22 3.34315 20.6569 2 19 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V5Z" fill="#6F767E"/>
		</svg>
	</>
});

export const SVGAddNewFeature= ComponentWrapper((props)=>{
	return<>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.66602 3.33268C8.66602 2.96449 8.36754 2.66602 7.99935 2.66602C7.63116 2.66602 7.33268 2.96449 7.33268 3.33268V7.33268H3.33268C2.96449 7.33268 2.66602 7.63116 2.66602 7.99935C2.66602 8.36754 2.96449 8.66602 3.33268 8.66602H7.33268V12.666C7.33268 13.0342 7.63116 13.3327 7.99935 13.3327C8.36754 13.3327 8.66601 13.0342 8.66601 12.666V8.66602H12.666C13.0342 8.66602 13.3327 8.36754 13.3327 7.99935C13.3327 7.63116 13.0342 7.33268 12.666 7.33268H8.66602V3.33268Z" fill="#9A9FA5"/>
		</svg>
	</>
});
export const SVGUploadFileIcon=ComponentWrapper(()=>{
	return<>
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.7072 9.29099C18.0977 9.68151 18.0977 10.3147 17.7072 10.7052C17.3167 11.0957 16.6835 11.0957 16.293 10.7052L13.502 7.91426V15.0005C13.502 15.5528 13.0543 16.0005 12.502 16.0005C11.9498 16.0005 11.502 15.5528 11.502 15.0005V7.91417L8.70906 10.7072C8.31854 11.0977 7.68537 11.0977 7.29485 10.7072C6.90432 10.3166 6.90432 9.68347 7.29485 9.29294L11.7949 4.79289C11.9824 4.60536 12.2368 4.5 12.502 4.5C12.7672 4.5 13.0216 4.60536 13.2091 4.79289L17.7072 9.29099Z" fill="#1A1D1F"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M4.5 14C5.05228 14 5.5 14.4477 5.5 15V17C5.5 17.5523 5.94772 18 6.5 18H18.5C19.0523 18 19.5 17.5523 19.5 17V15C19.5 14.4477 19.9477 14 20.5 14C21.0523 14 21.5 14.4477 21.5 15V17C21.5 18.6569 20.1569 20 18.5 20H6.5C4.84315 20 3.5 18.6569 3.5 17V15C3.5 14.4477 3.94772 14 4.5 14Z" fill="#1A1D1F"/>
		</svg>
	</>
});
export const SVGCopySBT=ComponentWrapper(()=>{
	return<>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 3.33333H9.33333C9.70152 3.33333 10 3.63181 10 4V4.66667H11.3333V4C11.3333 2.89543 10.4379 2 9.33333 2H4C2.89543 2 2 2.89543 2 4V9.33333C2 10.4379 2.89543 11.3333 4 11.3333H4.66667V10H4C3.63181 10 3.33333 9.70152 3.33333 9.33333V4C3.33333 3.63181 3.63181 3.33333 4 3.33333Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M11.9993 5.99935H6.66602C6.29783 5.99935 5.99935 6.29783 5.99935 6.66602V11.9993C5.99935 12.3675 6.29783 12.666 6.66602 12.666H11.9993C12.3675 12.666 12.666 12.3675 12.666 11.9993V6.66602C12.666 6.29783 12.3675 5.99935 11.9993 5.99935ZM6.66602 4.66602C5.56145 4.66602 4.66602 5.56145 4.66602 6.66602V11.9993C4.66602 13.1039 5.56145 13.9993 6.66602 13.9993H11.9993C13.1039 13.9993 13.9993 13.1039 13.9993 11.9993V6.66602C13.9993 5.56145 13.1039 4.66602 11.9993 4.66602H6.66602Z" fill="#777E90"/>
		</svg>
	</>
})
export const SVGDeleteList=ComponentWrapper(()=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#777E91"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z" fill="#777E91"/>
		</svg>
	</>
})
export const SVGSBTCardPolygon = ComponentWrapper(() => {
	return <>
		<svg
			width = "24"
			height = "24"
			viewBox = "0 0 24 24"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				d = "M17.5543 8.20929C17.1595 7.98369 16.652 7.98369 16.2008 8.20929L13.0426 10.0704L10.8995 11.2547L7.79766 13.1158C7.40286 13.3414 6.89532 13.3414 6.44412 13.1158L4.01906 11.6494C3.62429 11.4239 3.3423 10.9727 3.3423 10.4652V7.64529C3.3423 7.19415 3.56789 6.74295 4.01906 6.46095L6.44412 5.05105C6.83892 4.82546 7.34646 4.82546 7.79766 5.05105L10.2227 6.51735C10.6175 6.74295 10.8995 7.19415 10.8995 7.70169V9.56277L13.0426 8.32209V6.40455C13.0426 5.95339 12.817 5.50222 12.3658 5.22023L7.85406 2.56958C7.45926 2.344 6.95172 2.344 6.50052 2.56958L1.87598 5.27663C1.42481 5.50222 1.19922 5.95339 1.19922 6.40455V11.7058C1.19922 12.157 1.42481 12.6082 1.87598 12.8902L6.44412 15.5409C6.83892 15.7665 7.34646 15.7665 7.79766 15.5409L10.8995 13.7362L13.0426 12.4955L16.1444 10.6907C16.5392 10.4652 17.0467 10.4652 17.4979 10.6907L19.923 12.1007C20.3177 12.3263 20.5997 12.7774 20.5997 13.285V16.1048C20.5997 16.556 20.3741 17.0072 19.923 17.2892L17.5543 18.6991C17.1595 18.9247 16.652 18.9247 16.2008 18.6991L13.7757 17.2892C13.381 17.0635 13.099 16.6124 13.099 16.1048V14.3001L10.9559 15.5409V17.4019C10.9559 17.8532 11.1815 18.3043 11.6326 18.5863L16.2008 21.237C16.5956 21.4625 17.1031 21.4625 17.5543 21.237L22.1225 18.5863C22.5172 18.3607 22.7992 17.9095 22.7992 17.4019V12.0442C22.7992 11.5931 22.5736 11.1419 22.1225 10.8599L17.5543 8.20929Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
});
export const SVGSBTCardInfoLogo = ComponentWrapper(() => {
	return <>
		<svg
			width = "97"
			height = "26"
			viewBox = "0 0 97 26"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<rect
				width = "97"
				height = "26"
				rx = "4"
				fill = "#45B36B"
			/>
			<path
				d = "M15.164 12.288C15.164 12.776 15.052 13.224 14.828 13.632C14.604 14.032 14.26 14.356 13.796 14.604C13.332 14.852 12.756 14.976 12.068 14.976H10.796V18H8.744V9.576H12.068C12.74 9.576 13.308 9.692 13.772 9.924C14.236 10.156 14.584 10.476 14.816 10.884C15.048 11.292 15.164 11.76 15.164 12.288ZM11.912 13.344C12.304 13.344 12.596 13.252 12.788 13.068C12.98 12.884 13.076 12.624 13.076 12.288C13.076 11.952 12.98 11.692 12.788 11.508C12.596 11.324 12.304 11.232 11.912 11.232H10.796V13.344H11.912ZM18.2843 11.22V12.924H21.0323V14.508H18.2843V16.356H21.3923V18H16.2323V9.576H21.3923V11.22H18.2843ZM27.0205 18L25.2685 14.82H24.7765V18H22.7245V9.576H26.1685C26.8325 9.576 27.3965 9.692 27.8605 9.924C28.3325 10.156 28.6845 10.476 28.9165 10.884C29.1485 11.284 29.2645 11.732 29.2645 12.228C29.2645 12.788 29.1045 13.288 28.7845 13.728C28.4725 14.168 28.0085 14.48 27.3925 14.664L29.3365 18H27.0205ZM24.7765 13.368H26.0485C26.4245 13.368 26.7045 13.276 26.8885 13.092C27.0805 12.908 27.1765 12.648 27.1765 12.312C27.1765 11.992 27.0805 11.74 26.8885 11.556C26.7045 11.372 26.4245 11.28 26.0485 11.28H24.7765V13.368ZM40.0926 9.576V18H38.0406V12.948L36.1566 18H34.5006L32.6046 12.936V18H30.5526V9.576H32.9766L35.3406 15.408L37.6806 9.576H40.0926ZM43.6202 9.576V18H41.5682V9.576H43.6202ZM48.1553 18.084C47.5393 18.084 46.9873 17.984 46.4993 17.784C46.0113 17.584 45.6193 17.288 45.3233 16.896C45.0353 16.504 44.8833 16.032 44.8673 15.48H47.0513C47.0833 15.792 47.1913 16.032 47.3753 16.2C47.5593 16.36 47.7993 16.44 48.0953 16.44C48.3993 16.44 48.6393 16.372 48.8153 16.236C48.9913 16.092 49.0793 15.896 49.0793 15.648C49.0793 15.44 49.0073 15.268 48.8633 15.132C48.7273 14.996 48.5553 14.884 48.3473 14.796C48.1473 14.708 47.8593 14.608 47.4833 14.496C46.9393 14.328 46.4953 14.16 46.1513 13.992C45.8073 13.824 45.5113 13.576 45.2633 13.248C45.0153 12.92 44.8913 12.492 44.8913 11.964C44.8913 11.18 45.1753 10.568 45.7433 10.128C46.3113 9.68 47.0513 9.456 47.9633 9.456C48.8913 9.456 49.6393 9.68 50.2073 10.128C50.7753 10.568 51.0793 11.184 51.1193 11.976H48.8993C48.8833 11.704 48.7833 11.492 48.5993 11.34C48.4153 11.18 48.1793 11.1 47.8913 11.1C47.6433 11.1 47.4433 11.168 47.2913 11.304C47.1393 11.432 47.0633 11.62 47.0633 11.868C47.0633 12.14 47.1913 12.352 47.4473 12.504C47.7033 12.656 48.1033 12.82 48.6473 12.996C49.1913 13.18 49.6313 13.356 49.9673 13.524C50.3113 13.692 50.6073 13.936 50.8553 14.256C51.1033 14.576 51.2273 14.988 51.2273 15.492C51.2273 15.972 51.1033 16.408 50.8553 16.8C50.6153 17.192 50.2633 17.504 49.7993 17.736C49.3353 17.968 48.7873 18.084 48.1553 18.084ZM55.5381 18.084C54.9221 18.084 54.3701 17.984 53.8821 17.784C53.3941 17.584 53.0021 17.288 52.7061 16.896C52.4181 16.504 52.2661 16.032 52.2501 15.48H54.4341C54.4661 15.792 54.5741 16.032 54.7581 16.2C54.9421 16.36 55.1821 16.44 55.4781 16.44C55.7821 16.44 56.0221 16.372 56.1981 16.236C56.3741 16.092 56.4621 15.896 56.4621 15.648C56.4621 15.44 56.3901 15.268 56.2461 15.132C56.1101 14.996 55.9381 14.884 55.7301 14.796C55.5301 14.708 55.2421 14.608 54.8661 14.496C54.3221 14.328 53.8781 14.16 53.5341 13.992C53.1901 13.824 52.8941 13.576 52.6461 13.248C52.3981 12.92 52.2741 12.492 52.2741 11.964C52.2741 11.18 52.5581 10.568 53.1261 10.128C53.6941 9.68 54.4341 9.456 55.3461 9.456C56.2741 9.456 57.0221 9.68 57.5901 10.128C58.1581 10.568 58.4621 11.184 58.5021 11.976H56.2821C56.2661 11.704 56.1661 11.492 55.9821 11.34C55.7981 11.18 55.5621 11.1 55.2741 11.1C55.0261 11.1 54.8261 11.168 54.6741 11.304C54.5221 11.432 54.4461 11.62 54.4461 11.868C54.4461 12.14 54.5741 12.352 54.8301 12.504C55.0861 12.656 55.4861 12.82 56.0301 12.996C56.5741 13.18 57.0141 13.356 57.3501 13.524C57.6941 13.692 57.9901 13.936 58.2381 14.256C58.4861 14.576 58.6101 14.988 58.6101 15.492C58.6101 15.972 58.4861 16.408 58.2381 16.8C57.9981 17.192 57.6461 17.504 57.1821 17.736C56.7181 17.968 56.1701 18.084 55.5381 18.084ZM61.9249 9.576V18H59.8729V9.576H61.9249ZM67.396 18.084C66.604 18.084 65.876 17.9 65.212 17.532C64.556 17.164 64.032 16.652 63.64 15.996C63.256 15.332 63.064 14.588 63.064 13.764C63.064 12.94 63.256 12.2 63.64 11.544C64.032 10.888 64.556 10.376 65.212 10.008C65.876 9.64 66.604 9.456 67.396 9.456C68.188 9.456 68.912 9.64 69.568 10.008C70.232 10.376 70.752 10.888 71.128 11.544C71.512 12.2 71.704 12.94 71.704 13.764C71.704 14.588 71.512 15.332 71.128 15.996C70.744 16.652 70.224 17.164 69.568 17.532C68.912 17.9 68.188 18.084 67.396 18.084ZM67.396 16.212C68.068 16.212 68.604 15.988 69.004 15.54C69.412 15.092 69.616 14.5 69.616 13.764C69.616 13.02 69.412 12.428 69.004 11.988C68.604 11.54 68.068 11.316 67.396 11.316C66.716 11.316 66.172 11.536 65.764 11.976C65.364 12.416 65.164 13.012 65.164 13.764C65.164 14.508 65.364 15.104 65.764 15.552C66.172 15.992 66.716 16.212 67.396 16.212ZM80.3816 18H78.3296L74.8976 12.804V18H72.8456V9.576H74.8976L78.3296 14.796V9.576H80.3816V18ZM84.917 18.084C84.301 18.084 83.749 17.984 83.261 17.784C82.773 17.584 82.381 17.288 82.085 16.896C81.797 16.504 81.645 16.032 81.629 15.48H83.813C83.845 15.792 83.953 16.032 84.137 16.2C84.321 16.36 84.561 16.44 84.857 16.44C85.161 16.44 85.401 16.372 85.577 16.236C85.753 16.092 85.841 15.896 85.841 15.648C85.841 15.44 85.769 15.268 85.625 15.132C85.489 14.996 85.317 14.884 85.109 14.796C84.909 14.708 84.621 14.608 84.245 14.496C83.701 14.328 83.257 14.16 82.913 13.992C82.569 13.824 82.273 13.576 82.025 13.248C81.777 12.92 81.653 12.492 81.653 11.964C81.653 11.18 81.937 10.568 82.505 10.128C83.073 9.68 83.813 9.456 84.725 9.456C85.653 9.456 86.401 9.68 86.969 10.128C87.537 10.568 87.841 11.184 87.881 11.976H85.661C85.645 11.704 85.545 11.492 85.361 11.34C85.177 11.18 84.941 11.1 84.653 11.1C84.405 11.1 84.205 11.168 84.053 11.304C83.901 11.432 83.825 11.62 83.825 11.868C83.825 12.14 83.953 12.352 84.209 12.504C84.465 12.656 84.865 12.82 85.409 12.996C85.953 13.18 86.393 13.356 86.729 13.524C87.073 13.692 87.369 13.936 87.617 14.256C87.865 14.576 87.989 14.988 87.989 15.492C87.989 15.972 87.865 16.408 87.617 16.8C87.377 17.192 87.025 17.504 86.561 17.736C86.097 17.968 85.549 18.084 84.917 18.084Z"
				fill = "#FCFCFD"
			/>
		</svg>
	</>;
});
export const SVGSearch = ComponentWrapper(() => {
	return <>
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
				d = "M12.4207 13.6002C11.2918 14.4778 9.87327 15.0003 8.33268 15.0003C4.65078 15.0003 1.66602 12.0156 1.66602 8.33366C1.66602 4.65176 4.65078 1.66699 8.33268 1.66699C12.0146 1.66699 14.9993 4.65176 14.9993 8.33366C14.9993 9.87425 14.4768 11.2928 13.5992 12.4217L18.0886 16.9111C18.414 17.2365 18.414 17.7641 18.0886 18.0896C17.7632 18.415 17.2355 18.415 16.9101 18.0896L12.4207 13.6002ZM13.3327 8.33366C13.3327 11.0951 11.0941 13.3337 8.33268 13.3337C5.57126 13.3337 3.33268 11.0951 3.33268 8.33366C3.33268 5.57224 5.57126 3.33366 8.33268 3.33366C11.0941 3.33366 13.3327 5.57224 13.3327 8.33366Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
});
export const SVGSelectSuffix = ComponentWrapper(() => {
	return <>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#777E91"/>
		</svg>
	</>;
});


export const  SVGSubtract = ComponentWrapper(() =>{
	return<>
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M13.6673 7.00065C13.6673 10.6825 10.6825 13.6673 7.00065 13.6673C3.31875 13.6673 0.333984 10.6825 0.333984 7.00065C0.333984 3.31875 3.31875 0.333984 7.00065 0.333984C10.6825 0.333984 13.6673 3.31875 13.6673 7.00065ZM7.00065 6.33398C7.36884 6.33398 7.66732 6.63246 7.66732 7.00065V10.3346C7.66732 10.7028 7.36884 11.0012 7.00065 11.0012C6.63246 11.0012 6.33398 10.7028 6.33398 10.3346V7.00065C6.33398 6.63246 6.63246 6.33398 7.00065 6.33398ZM7.00065 5.00065C7.36884 5.00065 7.66732 4.70217 7.66732 4.33398C7.66732 3.96579 7.36884 3.66732 7.00065 3.66732C6.63246 3.66732 6.33398 3.96579 6.33398 4.33398C6.33398 4.70217 6.63246 5.00065 7.00065 5.00065Z" fill="#B1B5C4"/>
		</svg>
	</>
})

export const SVGSBTAdd = ComponentWrapper(() =>{
	return<>
	<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect x="1" y="1" width="38" height="38" rx="11" fill="white"/>
	<path d="M20.666 15.3327C20.666 14.9645 20.3675 14.666 19.9993 14.666C19.6312 14.666 19.3327 14.9645 19.3327 15.3327V19.3327H15.3327C14.9645 19.3327 14.666 19.6312 14.666 19.9993C14.666 20.3675 14.9645 20.666 15.3327 20.666H19.3327V24.666C19.3327 25.0342 19.6312 25.3327 19.9993 25.3327C20.3675 25.3327 20.666 25.0342 20.666 24.666V20.666H24.666C25.0342 20.666 25.3327 20.3675 25.3327 19.9993C25.3327 19.6312 25.0342 19.3327 24.666 19.3327H20.666V15.3327Z" fill="#9A9FA5"/>
	<rect x="1" y="1" width="38" height="38" rx="11" stroke="#E6E8EC" strokeWidth="2"/>
	</svg>
	</>
}) 

export const SVGSBTBack = ComponentWrapper(() =>{
	return<>
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#FCFCFC"/>
			<path d="M18.7071 25.7929C19.0976 26.1834 19.0976 26.8166 18.7071 27.2071C18.3166 27.5976 17.6834 27.5976 17.2929 27.2071L11.5 21.4142C10.719 20.6332 10.719 19.3668 11.5 18.5858L17.2929 12.7929C17.6834 12.4024 18.3166 12.4024 18.7071 12.7929C19.0976 13.1834 19.0976 13.8166 18.7071 14.2071L13.9142 19H28C28.5523 19 29 19.4477 29 20C29 20.5523 28.5523 21 28 21H13.9142L18.7071 25.7929Z" fill="#6F767E"/>
		</svg>
	
	</>
})


export const SVGSBTUpload = ComponentWrapper(() =>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9 19.5H6.75C5.35761 19.5 4.02226 18.9469 3.03769 17.9623C2.05312 16.9777 1.5 15.6424 1.5 14.25C1.5 12.8576 2.05312 11.5223 3.03769 10.5377C4.02226 9.55312 5.35761 9 6.75 9C7.18925 8.99984 7.62687 9.05336 8.05313 9.15938" stroke="#0070F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M7.5 12C7.5 10.8116 7.7824 9.64023 8.32393 8.5824C8.86545 7.52456 9.6506 6.61055 10.6147 5.91568C11.5787 5.22082 12.6941 4.765 13.8689 4.58578C15.0437 4.40656 16.2443 4.50907 17.3717 4.88488C18.4991 5.26068 19.5211 5.89901 20.3534 6.74726C21.1857 7.59552 21.8045 8.62941 22.1589 9.76374C22.5132 10.8981 22.5929 12.1004 22.3914 13.2716C22.1899 14.4427 21.713 15.5493 21 16.5" stroke="#0070F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11.072 15.1781L14.2501 12L17.4283 15.1781" stroke="#0070F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M14.25 19.5V12" stroke="#0070F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	
	</>
})


export const SVGSBTClose = ComponentWrapper(() =>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18.75 5.25L5.25 18.75" stroke="#313436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M18.75 18.75L5.25 5.25" stroke="#313436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	</>
})


export const SVGSBTCheck = ComponentWrapper(() =>{
	return<>
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.5 13L14.1625 20L10.5 16.5" stroke="#45B26B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#45B26B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	</>
}) 

export const SVGSBTUploading = ComponentWrapper(() =>{
	return<>
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M16.0001 2.66675C16.7365 2.66675 17.3334 3.2637 17.3334 4.00008V6.66675C17.3334 7.40313 16.7365 8.00008 16.0001 8.00008C15.2637 8.00008 14.6667 7.40313 14.6667 6.66675V4.00008C14.6667 3.2637 15.2637 2.66675 16.0001 2.66675Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M16.0001 24C16.7365 24 17.3334 24.597 17.3334 25.3333V28C17.3334 28.7364 16.7365 29.3333 16.0001 29.3333C15.2637 29.3333 14.6667 28.7364 14.6667 28V25.3333C14.6667 24.597 15.2637 24 16.0001 24Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M6.57196 6.57184C7.09266 6.05114 7.93688 6.05114 8.45758 6.57184L10.3432 8.45746C10.8639 8.97816 10.8639 9.82238 10.3432 10.3431C9.8225 10.8638 8.97828 10.8638 8.45758 10.3431L6.57196 8.45746C6.05126 7.93676 6.05126 7.09254 6.57196 6.57184Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M21.6569 21.6568C22.1776 21.1361 23.0218 21.1361 23.5425 21.6568L25.4282 23.5424C25.9489 24.0631 25.9489 24.9073 25.4282 25.428C24.9075 25.9487 24.0632 25.9487 23.5425 25.428L21.6569 23.5424C21.1362 23.0217 21.1362 22.1775 21.6569 21.6568Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M2.66675 15.9999C2.66675 15.2635 3.2637 14.6666 4.00008 14.6666L6.66675 14.6666C7.40313 14.6666 8.00008 15.2635 8.00008 15.9999C8.00008 16.7363 7.40313 17.3333 6.66675 17.3333L4.00008 17.3333C3.2637 17.3333 2.66675 16.7363 2.66675 15.9999Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M24 15.9999C24 15.2635 24.597 14.6666 25.3333 14.6666L28 14.6666C28.7364 14.6666 29.3333 15.2635 29.3333 15.9999C29.3333 16.7363 28.7364 17.3333 28 17.3333L25.3333 17.3333C24.597 17.3333 24 16.7363 24 15.9999Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M6.57184 25.428C6.05114 24.9073 6.05114 24.0631 6.57184 23.5424L8.45746 21.6568C8.97816 21.1361 9.82238 21.1361 10.3431 21.6568C10.8638 22.1775 10.8638 23.0217 10.3431 23.5424L8.45746 25.428C7.93676 25.9487 7.09254 25.9487 6.57184 25.428Z" fill="#777E90"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M21.6568 10.3431C21.1361 9.82238 21.1361 8.97816 21.6568 8.45746L23.5424 6.57184C24.0631 6.05114 24.9073 6.05114 25.428 6.57184C25.9487 7.09254 25.9487 7.93676 25.428 8.45746L23.5424 10.3431C23.0217 10.8638 22.1775 10.8638 21.6568 10.3431Z" fill="#777E90"/>
		</svg>
	</>
})

export const SVGSBTWarning = ComponentWrapper(() =>{
	return<>
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M16 10V16.5" stroke="#FF3B30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M16 23.5C17.1046 23.5 18 22.6046 18 21.5C18 20.3954 17.1046 19.5 16 19.5C14.8954 19.5 14 20.3954 14 21.5C14 22.6046 14.8954 23.5 16 23.5Z" fill="#FF3B30"/>
		</svg>
	</>
})


export const SVGSBTCountUp = ComponentWrapper(() => {
	return<>
		<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 0L0 4.33333H6L3 0Z" fill="#333333"/>
		</svg>
	</>
})

export const SVGSBTCountDown = ComponentWrapper(() => {
	return<>
		<svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 5.00008L0 0.666748H6L3 5.00008Z" fill="#333333"/>
		</svg>
	</>
})
