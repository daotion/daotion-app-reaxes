declare module '*.module.less' {
	const classes : {
		readonly [ key: string ]: string;
	};
	
	export default classes;
}
declare module '*.theme.less' {
	const theme : string;
	export default theme;
}
