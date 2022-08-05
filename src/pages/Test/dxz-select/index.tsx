const { Option } = Select;

const children : React.ReactNode[] = [];
for ( let i = 10 ; i < 36 ; i++ ) {
	children.push( <Option key = { i.toString( 36 ) + i }>{ i.toString( 36 ) + i }</Option> );
}

const handleChange = ( value : string[] ) => {
	console.log( `selected ${ value }` );
};

export const MultipleSelect = ( props ) => {
	return <Select
		className = { less[ props.type ] }
		dropdownClassName = { less.dropDownMenu }
		mode = "multiple"
		allowClear
		style = { { width : '100%' } }
		showArrow
		removeIcon = { <SVGClear /> }
		placeholder = { i18n( "Please select" ) }
		{ ...props }
	>
	</Select>;
	
};

export const DxzSelect = ComponentWrapper( () => {
	return <>
		<div className = { less.box }>
			<MultipleSelect
				type = "primary"
			/>
		</div>
	</>;
} );
import less from './index.module.less';
import { Select } from 'antd';
import { SVGClear } from '@@pages/_SvgComponents/space-setting-svg';
