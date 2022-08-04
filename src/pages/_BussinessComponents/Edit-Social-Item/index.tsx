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
			className = { less.editSocialItem }
		>
			<span className = { less.subTitle }>{ mixedProps.title }</span>
			<PrimaryInput
				type='primary'
				value = { mixedProps.value }
				onChange = { ( e ) => {
					mixedProps.onChange( e.target.value );
				} }
				placeholder = { mixedProps.placeholder }
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
import { PrimaryInput } from '@@pages/Test/dxz-input';
