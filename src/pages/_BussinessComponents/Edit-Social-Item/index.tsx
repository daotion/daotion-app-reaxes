/**
 * 
 * 编辑社媒条目
 */
export const EditSocialItem = ComponentWrapper( ( props : EditSocialItemProps ) => {
	const mixedProps = Object.assign<Partial<EditSocialItemProps> , EditSocialItemProps>( {
		placeholder : "Please enter" ,
	} , { ...props } );
	const { Input } = antd;
	return <>
		<div
			style = { {
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<span className = { less.subTitle }>{ mixedProps.title }</span>
			<Input
				value = { mixedProps.value }
				onChange = { ( e ) => {
					mixedProps.onChange( e.target.value );
				} }
				placeholder = { mixedProps.placeholder }
				style = { {
					background : "#f4f4f4" ,
					borderRadius : "12px" ,
					width : "100%" ,
					height : "48px" ,
					padding : "12px" ,
					border : "none" ,
					fontWeight : "600" ,
					fontSize : "14px" ,
					lineHeight : "24px" ,
					color : "#33383f" ,
				} }
			/>
		</div>
	</>;
} );

type EditSocialItemProps = {
	title : React.ReactNode;
	value : string;
	onChange : ( text : string ) => void;
	placeholder? : string;
};



import less from './index.module.less';
