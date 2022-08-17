export const SpaceSettings = ComponentWrapper( class extends ReactComponentClass {
	
	state = {
		tab : "General" as 'Social' | 'General',
	};
	
	render() {
		const spaceID = parseInt( utils.useRouter().params.spaceID );
		const {} = antd;const Content = {
			Social : SocialProfile ,
			General : GeneralProfile ,
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
			>
				<I18n>
					Space Settings
				</I18n>
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
						'General' ,
						'Social' ,
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
		<I18n>
			{ props.children }
		</I18n>
	
	</span>;
};



type SpaceSettingTabsProps = {
	tab : 'Social' | 'General',
	setTab : ( tab : 'Social' | 'General' ) => void;
};

import {
	GeneralProfile ,
	SocialProfile,
} from '@@pages/_BussinessComponents/Space-Settings';
import { reaxel_edit_space_general_settings  } from '@@RootPath/src/reaxels';
import less from './index.module.less';
