import clipboard from 'copy-to-clipboard';
import { message } from 'antd';
/*复制地址组件*/
export const WalletAddressCopyBox = ( props : { walletAddr : string, prefixLength? : number } ) => {
	const {
		walletAddr ,
		prefixLength = 6,
	} = props;
	
	const tail = "……" + walletAddr.slice( walletAddr.length - 4 );
	const result = walletAddr.slice( 0 , prefixLength ) + tail;
	
	return <div
		onClick = { () => {
			clipboard( walletAddr );
			message.success( 'copied successfully' );
		} }
		style = { {
			borderRadius : "44px" ,
			border : '2px solid #E6E8EC' ,
			width : "fit-content" ,
			height : "40px" ,
			padding : "4px 16px" ,
			display : "flex" ,
			alignItems : "center" ,
			marginRight : "34px" ,
			cursor : "pointer" ,
		} }
	>
		<span
			style = { {
				fontSize : "12px" ,
				fontWeight : "700" ,
				marginRight : "16px" ,
				userSelect : "none" ,
				whiteSpace : "nowrap" ,
			} }
		>
			{ result }
		</span>
		<svg
			style = { {
				verticalAlign : "middle" ,
			} }
			width = "16"
			height = "16"
			viewBox = "0 0 16 16"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				d = "M4 3.33333H9.33333C9.70152 3.33333 10 3.63181 10 4V4.66667H11.3333V4C11.3333 2.89543 10.4379 2 9.33333 2H4C2.89543 2 2 2.89543 2 4V9.33333C2 10.4379 2.89543 11.3333 4 11.3333H4.66667V10H4C3.63181 10 3.33333 9.70152 3.33333 9.33333V4C3.33333 3.63181 3.63181 3.33333 4 3.33333Z"
				fill = "#353945"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M12.0001 6.00008H6.66675C6.29856 6.00008 6.00008 6.29856 6.00008 6.66675V12.0001C6.00008 12.3683 6.29856 12.6667 6.66675 12.6667H12.0001C12.3683 12.6667 12.6667 12.3683 12.6667 12.0001V6.66675C12.6667 6.29856 12.3683 6.00008 12.0001 6.00008ZM6.66675 4.66675C5.56218 4.66675 4.66675 5.56218 4.66675 6.66675V12.0001C4.66675 13.1047 5.56218 14.0001 6.66675 14.0001H12.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001V6.66675C14.0001 5.56218 13.1047 4.66675 12.0001 4.66675H6.66675Z"
				fill = "#353945"
			/>
		</svg>
	
	</div>;
};
