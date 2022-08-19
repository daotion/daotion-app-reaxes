

export const SpaceSwitch = ( props : SpaceSwitchProps ) => {
	return <Switch
		className = { less[ props.type ] }
		{ ...props }
	/>;
	
};
type SpaceSwitchProps = SwitchProps&{
	type : "primary" | "secondary";
}

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
import { Switch,SwitchProps } from 'antd';
