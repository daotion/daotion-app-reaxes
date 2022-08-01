export const SpaceSettings = ComponentWrapper( class extends ReactComponentClass {
	
	state = {
		tab : "general" as 'social' | 'general',
	};
	
	render() {
		const spaceID = parseInt( utils.useRouter().params.spaceID );
		const {} = antd;const Content = {
			social : SocialProfile ,
			general : GeneralProfile ,
		}[ this.state.tab ];
		reaxel_edit_space_general_settings().closuredFetchSpaceInfo( spaceID );
		return <>
			<div
				className = { less.container }
			>
				<SpaceSettingTabs
					tab = { this.state.tab }
					setTab = { (tab) => this.setState({tab}) }
				/>
				<Content />
			</div>
		</>;
	}
} );




const SpaceSettingTabs = ComponentWrapper( ( props : SpaceSettingTabsProps ) => {
	return <>
		<div
			style = { {
				width : "280px" ,
				height : "fit-content" ,
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<span
				className = { less.settingsTitle }
			>Space Settings
			</span>
			<ul
				style = { {
					display : "flex" ,
					flexFlow : "column nowrap" ,
					padding : "0 0 0 0" ,
					userSelect : 'none' ,
				} }
			>
				{ (
					[
						'general' ,
						'social' ,
					] as const
				).map( ( tab ) => <SpaceSettingTabPane
					key = { tab }
					selected = { props.tab === tab }
					onClick = { () => props.setTab( tab ) }
				>{
					tab
				}</SpaceSettingTabPane> ) }
			</ul>
		</div>
	</>;
} );


const SpaceSettingTabPane = ( props : React.PropsWithChildren<{ selected? : boolean; onClick : () => any }> ) => {
	return <span
		className = { props.selected ? less.settingTabSelected : less.settingTab }
		onClick = { () => props.onClick() }
	>
		{ props.children }
	</span>;
};



type SpaceSettingTabsProps = {
	tab : 'social' | 'general',
	setTab : ( tab : 'social' | 'general' ) => void;
};

import {
	GeneralProfile ,
	SocialProfile,
} from '@@pages/_BussinessComponents/Space-Settings';
import { reaxel_edit_space_general_settings  } from '@@RootPath/src/reaxels';
import less from './index.module.less';
