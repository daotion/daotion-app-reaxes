type props = {
	/*铃铛填充色*/
	bellFilling?: string;
	/*提示点填充色 , 假值则不显示*/
	dotFilling?: string | any;
	/*提示点切割铃铛的填充色*/
	dotOuterRingFilling?: string;
};
export const HeaderNotificationIconSvgComponent = ComponentWrapper(( props: props ) => {
	/**
	 * 通过props修改fill , stroke等
	 */
	const scheme = {
		"light" : {
			bellFilling : "#6f767e" ,
			dotFilling : "" ,
			dotOuterRingFilling : "" ,
		} ,
		"dark" : {} ,
	}[ globalStore.theme ];
	const mixedProps: props = Object.assign<props , props , props>(
		{} ,
		scheme ,
		props ,
	);
	return <svg
		width = "24"
		height = "24"
		viewBox = "0 0 24 24"
		fill = "none"
		xmlns = "http://www.w3.org/2000/svg"
	>
		<path
			fillRule = "evenodd"
			clipRule = "evenodd"
			d = "M0 18.5959C2.07459e-06 18.2151 0.154705 17.8506 0.428635 17.586L1.45759 16.5922C1.84928 16.2139 2.06977 15.6922 2.06814 15.1476L2.05867 11.9946C2.04543 7.58319 5.61789 4 10.0293 4C14.4314 4 18 7.56859 18 11.9707L18 15.1716C18 15.702 18.2107 16.2107 18.5858 16.5858L19.5858 17.5858C19.851 17.851 20 18.2107 20 18.5858C20 19.3668 19.3668 20 18.5858 20H14C14 22.2091 12.2091 24 10 24C7.79086 24 6 22.2091 6 20H1.40408C0.628628 20 0 19.3714 0 18.5959ZM8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20H8ZM16 15.1716C16 16.2324 16.4214 17.2499 17.1716 18L2.87851 18C3.64222 17.246 4.07136 16.2161 4.06813 15.1416L4.05867 11.9886C4.04875 8.6841 6.7248 6 10.0293 6C13.3268 6 16 8.67316 16 11.9707L16 15.1716Z"
			fill = {mixedProps.bellFilling}
		/>
		<rect
			x = "11"
			y = "1"
			width = "12"
			height = "12"
			rx = "6"
			fill = "#FF6A55"
		/>
		<rect
			x = "11"
			y = "1"
			width = "12"
			height = "12"
			rx = "6"
			stroke = "#FCFCFC"
			strokeWidth = "2"
		/>
	</svg>
	
	
});
