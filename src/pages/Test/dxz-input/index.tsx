export const PrimaryInput = ( props ) => {
	return <Input
		className = { less[ props.type ] }
		placeholder='please enter'
		size="large"
	/>;
	
};
export const PrimaryTextArea = ( props ) => {
	return <TextArea
		className = { less[ props.type ] }
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
