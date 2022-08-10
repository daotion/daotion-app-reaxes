const { Option } = Select;

const children : React.ReactNode[] = [];
for ( let i = 10 ; i < 36 ; i++ ) {
	children.push( <Option key = { i.toString( 36 ) + i }>{ i.toString( 36 ) + i }</Option> );
}

const handleChange = ( value : string[] ) => {
	console.log( `selected ${ value }` );
};

export const MultipleSelect = ( props:SelectProps&{
	type : "primary"
} ) => {
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
		{props.children}
	</Select>;
	
};
export const SingleSelect = ( props ) => {
	return <Select
		className = { less[ props.type ] }
		dropdownClassName = { less.dropDownMenu }
		dropdownStyle = { {
			border : "2px solid #e6e8ec" ,
			borderRadius : "12px" ,
			padding : "8px" ,
		} }
		placeholder = { i18n( "All Type" ) }
		{ ...props }
	>
		<Select.Option value = "type1">type1</Select.Option>
		<Select.Option value = "type2">type2</Select.Option>
	</Select>
	
};
export const DxzSelect = ComponentWrapper( () => {
	return <>
		<div className = { less.box }>
			<MultipleSelect
				type = "primary"
			/>
			<SingleSelect
			type='single-primary'
			/>
		</div>
	</>;
} );
import less from './index.module.less';
import { Select , SelectProps } from 'antd';
import { SVGClear } from '@@pages/_SvgComponents/space-setting-svg';
