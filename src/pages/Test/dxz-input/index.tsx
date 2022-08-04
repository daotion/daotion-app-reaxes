export const PrimaryInput = ( props ) => {
	return <Input
		className = { less[ props.type ] }
		placeholder={props.placeholder}
		size="large"
		{...props}
	/>;
	
};
export const PrimaryTextArea = ( props ) => {
	return <TextArea
		className = { less[ props.type ] }
		style={props.style}
		size="large"
	/>;
	
};
export const DxzInput = ComponentWrapper( () => {
	return <>
		<div className={less.box}>
			<PrimaryInput
				type = "primary"
			/>
			<PrimaryTextArea
				type = "primary"
			/>
		</div>
	</>;
} );
import less from './index.module.less';
import { Input } from 'antd';
const { TextArea } = Input;
