/**
 *
 * 编辑社媒条目
 */
export const EditSocialItem = ComponentWrapper( ( props : EditSocialItemProps ) => {
	const mixedProps = Object.assign<Partial<EditSocialItemProps> , EditSocialItemProps>( {
		placeholder : "Please enter" ,
	} , { ...props } );
	return <>
		<div
			className = { less.editSocialItem }
		>
			<div className = { less.titleWithDelete }>
				<span
					className = { less.subTitle }
					onClick = { props.onDelete }
				>{ mixedProps.title }</span>
				{ props.onDelete && <SVGSocialItemDelete onClick = {props.onDelete} /> }
			</div>
			<PrimaryInput
				type = "primary"
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
	onDelete? : () => void;
	placeholder? : string;
};

import { SVGSocialItemDelete } from '../../_SvgComponents/space-setting-svg';

import less from './index.module.less';
import { PrimaryInput } from '@@pages/Test/dxz-input';
