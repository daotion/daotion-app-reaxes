

export const XSwitch = ( props ) => {
	return <Switch
		className = { less[ props.type ] }
		size = "large"
		{ ...props }
	/>;
	
};

export const DxzSwitch = ComponentWrapper( () => {
	return <>
		<XSwitch
			defaultChecked={true}
			type = "primary"
		/>
		<XSwitch
			type = "secondary"
		/>
	</>;
} );
import less from './index.module.less';
import { Switch } from 'antd';
