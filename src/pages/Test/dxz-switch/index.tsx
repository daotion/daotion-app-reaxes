

export const XSwitch = ( props : SpaceSwitchProps ) => {
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
import { Switch,SwitchProps } from 'antd';
