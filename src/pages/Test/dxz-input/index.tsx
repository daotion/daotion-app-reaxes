export const XInput = ( props:InputProps ) => {
	return <Input
		className = { less[ props.type ] }
		placeholder={props.placeholder}
		size="large"
		{...props}
	/>;
	
};
export const XTextArea = ( props ) => {
	return <TextArea
		className = { less[ props.type ] }
		style={props.style}
		size="large"
	/>;
	
};
export const DxzInput = ComponentWrapper( () => {
	return <>
		<div className={less.box}>
			<XInput
				type = "primary"
			/>
			<XTextArea
				type = "primary"
			/>
		</div>
	</>;
} );
import less from './index.module.less';
import { Input , InputProps } from 'antd';
const { TextArea } = Input;
