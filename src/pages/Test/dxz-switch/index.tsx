

export const SpaceSwitch = ( props ) => {
	return <Switch
		className = { less[ props.type ] }
		size = "large"
		{ ...props }
	/>;
	
};

export const DxzSwitch = ComponentWrapper( () => {
	return <>
		<SpaceSwitch
			defaultChecked={true}
			type = "primary"
		/>
		<SpaceSwitch
			type = "secondary"
		/>
	</>;
} );
import less from './index.module.less';
import { Switch } from 'antd';
