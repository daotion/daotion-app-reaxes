export class SvgOverview extends components {
	render() : React.ReactNode{
		return (
			<div className = { less.wrapper }>
				<h1>Svg Overview</h1>
				<Table
					columns = { columns }
					dataSource = { data }
					size = "middle"
				>
				</Table>
			</div>
		);
	}
}

class Content extends components {
	render() : React.ReactNode{
		return (
			<div
				className = { less.canvas }
				style = { {
					backgroundRepeat : "repeat" ,
					backgroundImage : `url('${ transparentBackgroundImg }')` ,
				} }
			>
				<Draggable bounds = "parent">
					<div>{ this.props.children }</div>
				</Draggable>
			</div>
		);
	}
}


const columns = [
	{
		title : 'Name' ,
		dataIndex : 'name' ,
	} ,
	{
		title : 'Cotent' ,
		dataIndex : 'content' ,
	} ,
];

const data = [
	{
		key : 1 ,
		name : 'Close Icon' ,
		content :
			<Content children = { <SVGCloseIcon /> }></Content>,
	} ,
	{
		key : 2 ,
		name : 'Select Arrow Icon' ,
		content :
			<Content children = { <SVGSelectArrowIcon /> }></Content>,
		
	} ,
	{
		key : 3 ,
		name : 'Delete Icon' ,
		content :
			<Content children = { <SVGSocialItemDelete /> }></Content>,
	} ,
	{
		key : 4 ,
		name : 'White Add Icon' ,
		content :
			<Content children = { <SVGWhiteAdd /> }></Content>,
	} ,
	{
		key : 5 ,
		name : 'Info(Tool Tip) Icon' ,
		content :
			<Content children = { <SVGTooltip /> }></Content>,
	} ,
	{
		key : 6 ,
		name : 'Gray Add Icon(with circle)' ,
		content :
			<Content children = { <SVGGrayAdd /> }></Content>,
	} ,
	{
		key : 7 ,
		name : 'ETH Icon' ,
		content :
			<Content children = { <SVGNet /> }></Content>,
	} ,
	{
		key : 8 ,
		name : 'Clear Icon' ,
		content :
			<Content children = { <SVGClear /> }></Content>,
	} ,
	{
		key : 9 ,
		name : 'Internet Icon' ,
		content :
			<Content children = { <SVGLink /> }></Content>,
	} ,
	{
		key : 10 ,
		name : 'Discord Icon' ,
		content :
			<Content children = { <SVGDiscord /> }></Content>,
	} ,
	{
		key : 11 ,
		name : 'Mirror Icon' ,
		content :
			<Content children = { <SVGMirror /> }></Content>,
	} ,
	{
		key : 12 ,
		name : 'VK Icon' ,
		content :
			<Content children = { <SVGVK /> }></Content>,
	} ,
	{
		key : 13 ,
		name : 'Twitter Icon' ,
		content :
			<Content children = { <SVGTwitter /> }></Content>,
	} ,
	{
		key : 14 ,
		name : 'Instagram Icon' ,
		content :
			<Content children = { <SVGInstagram /> }></Content>,
	} ,
	{
		key : 15 ,
		name : 'Github Icon' ,
		content :
			<Content children = { <SVGGithub /> }></Content>,
	} ,
	{
		key : 16 ,
		name : 'Medium Icon' ,
		content :
			<Content children = { <SVGMedium /> }></Content>,
	} ,
	{
		key : 17 ,
		name : 'Facebook Icon' ,
		content :
			<Content children = { <SVGFacebook /> }></Content>,
	} ,
	{
		key : 18 ,
		name : 'Telegram Icon' ,
		content :
			
			<Content children = { <SVGTelegram /> }></Content>,
	} ,
	{
		key : 19 ,
		name : 'Reddit Icon' ,
		content :
			
			<Content children = { <SVGReddit /> }></Content>,
	} ,
	{
		key : 20 ,
		name : 'Youtube Icon' ,
		content :
			
			<Content children = { <SVGYoutube /> }></Content>,
	} ,
	{
		key : 21 ,
		name : 'TikTok Icon' ,
		content :
			
			<Content children = { <SVGTikTok /> }></Content>,
	} ,
	{
		key : 22 ,
		name : 'Tumblr Icon' ,
		content :
			
			<Content children = { <SVGTumblr /> }></Content>,
	} ,
	{
		key : 23 ,
		name : 'Notion Icon' ,
		content :
			
			<Content children = { <SVGNotion /> }></Content>,
	} ,
	{
		key : 24 ,
		name : 'ClubHouse Icon' ,
		content :
			
			<Content children = { <SVGClubHouse /> }></Content>,
	} ,
	{
		key : 25 ,
		name : 'Share Icon' ,
		content :
			
			<Content children = { <SVGShareIcon /> }></Content>,
	} ,
	{
		key : 26 ,
		name : 'Setting Icon' ,
		content :
			
			<Content children = { <SVGSettingTabs /> }></Content>,
	} ,
	{
		key : 27 ,
		name : 'Edit Icon' ,
		content :
			
			<Content children = { <SVGEditTabIcon /> }></Content>,
	} ,
	{
		key : 28 ,
		name : 'Red Delete Icon' ,
		content :
			
			<Content children = { <SVGDeleteTabIcon /> }></Content>,
	} ,
	{
		key : 29 ,
		name : 'Gray Add Icon' ,
		content :
			
			<Content children = { <SVGAddNewIcon /> }></Content>,
	} ,
	{
		key : 30 ,
		name : 'SettingSpaceProfile Icon' ,
		content :
			
			<Content children = { <SVGSettingSpaceProfile /> }></Content>,
	} ,
	{
		key : 31 ,
		name : 'Share Website Icon' ,
		content :
			
			<Content children = { <SVGShareWebsite /> }></Content>,
	} ,
	{
		key : 32 ,
		name : 'Share Twitter Icon' ,
		content :
			
			<Content children = { <SVGShareTwitter /> }></Content>,
	} ,
	{
		key : 33 ,
		name : 'Share Ins Icon' ,
		content :
			
			<Content children = { <SVGShareIns /> }></Content>,
	} ,
	{
		key : 34 ,
		name : 'Share Discord Icon' ,
		content :
			
			<Content children = { <SVGShareDiscord /> }></Content>,
	} ,
	{
		key : 35 ,
		name : 'Share Telegram Icon' ,
		content :
			
			<Content children = { <SVGShareTelegram /> }></Content>,
	} ,
	{
		key : 36 ,
		name : 'Share Github Icon' ,
		content :
			
			<Content children = { <SVGShareGithub /> }></Content>,
	} ,
	{
		key : 37 ,
		name : 'Share Youtube Icon' ,
		content :
			
			<Content children = { <SVGShareYoutube /> }></Content>,
	} ,
	{
		key : 38 ,
		name : 'Share VK Icon' ,
		content :
			
			<Content children = { <SVGShareVK /> }></Content>,
	} ,
	{
		key : 39 ,
		name : 'Share Reddit Icon' ,
		content :
			
			<Content children = { <SVGShareReddit /> }></Content>,
	} ,
	{
		key : 40 ,
		name : 'Share Facebook Icon' ,
		content :
			
			<Content children = { <SVGShareFacebook /> }></Content>,
	} ,
	{
		key : 41 ,
		name : 'Share List Icon' ,
		content :
			
			<Content children = { <SVGSocialShare /> }></Content>,
	} ,
	{
		key : 42 ,
		name : 'Leave Icon' ,
		content :
			
			<Content children = { <SVGLeaveSpace /> }></Content>,
	} ,
	{
		key : 43 ,
		name : 'Setting Icon' ,
		content :
			
			<Content children = { <SVGSpaceProfileSetting /> }></Content>,
	} ,
	{
		key : 44 ,
		name : 'Drop Website Icon' ,
		content :
			
			<Content children = { <SVGDropWebsite /> }></Content>,
	} ,
	{
		key : 45 ,
		name : 'Drop(Pop) Twitter Icon' ,
		content :
			
			<Content children = { <SVGDropTwitter /> }></Content>,
	} ,
	{
		key : 46 ,
		name : 'Drop Discord Icon' ,
		content :
			
			<Content children = { <SVGDropDiscord /> }></Content>,
	} ,
	{
		key : 47 ,
		name : 'Pop Website Icon' ,
		content :
			
			<Content children = { <SVGPopWebsite /> }></Content>,
		
	} ,
	{
		key : 48 ,
		name : 'Pop Join Icon' ,
		content :
			
			<Content children = { <SVGPopJoinSpace /> }></Content>,
	} ,
	{
		key : 49 ,
		name : 'Select Arrow Icon' ,
		content :
			
			<Content children = { <SelectArrowIconSvgComponent /> }></Content>,
	} ,
	{
		key : 50 ,
		name : 'NFTs Link Icon' ,
		content :
			
			<Content children = { <SVGNFTsLink /> }></Content>,
	} ,
	{
		key : 51 ,
		name : 'Card Avatar Icon' ,
		content :
			
			<Content children = { <SVGCardAvatar /> }></Content>,
	} ,
	{
		key : 52 ,
		name : 'Lighting Icon' ,
		content :
			
			<Content children = { <SVGLightning /> }></Content>,
	} ,
	{
		key : 53 ,
		name : 'Cup Icon' ,
		content :
			
			<Content children = { <SVGCup /> }></Content>,
	} ,
	{
		key : 54 ,
		name : 'Setting Icon' ,
		content :
			
			<Content children = { <SVGSettingIcon /> }></Content>,
	} ,
	{
		key : 55 ,
		name : 'SBTs Card Space Icon' ,
		content :
			
			<Content children = { <SVGSBTsCardSpaceLogo /> }></Content>,
	} ,
	{
		key : 56 ,
		name : 'Profile Card OP Icon' ,
		content :
			
			<Content children = { <SVGMyProfileCardOp /> }></Content>,
	} ,
	{
		key : 57 ,
		name : 'Plugin Space Icon' ,
		content :
			
			<Content children = { <SVGPluginSpaceIcon /> }></Content>,
	} ,
	{
		key : 58 ,
		name : 'Plugin Drop Down Icon' ,
		content :
			
			<Content children = { <SVGPluginDropDownIcon /> }></Content>,
	} ,
	{
		key : 59 ,
		name : 'Plugin Overview Icon' ,
		content :
			
			<Content children = { <SVGPluginOverviewIcon /> }></Content>,
	} ,
	{
		key : 60 ,
		name : 'Plugin NFT Icon' ,
		content :
			
			<Content children = { <SVGPluginNFTIcon /> }></Content>,
	} ,
	{
		key : 61 ,
		name : 'Plugin SRM Icon' ,
		content :
			
			<Content children = { <SVGPluginSRMIcon /> }></Content>,
	} ,
	{
		key : 62 ,
		name : 'Plugin Voting Icon' ,
		content :
			
			<Content children = { <SVGPluginVotingIcon /> }></Content>,
	} ,
	{
		key : 63 ,
		name : 'Item Theme Icon' ,
		content :
			
			<Content children = { <ItemIconThemeSvgComponent /> }></Content>,
	} ,
	{
		key : 64 ,
		name : 'Item Profile Icon' ,
		content :
			
			<Content children = { <ItemIconProfileSvgComponent /> }></Content>,
	} ,
	{
		key : 65 ,
		name : 'Item I18n Icon' ,
		content :
			
			<Content children = { <ItemIconI18nSvgComponent /> }></Content>,
	} ,
	{
		key : 66 ,
		name : 'Item eth Node Icon' ,
		content :
			
			<Content children = { <ItemIconEthNode /> }></Content>,
	} ,
	{
		key : 67 ,
		name : 'Item Disconnect Icon' ,
		content :
			
			<Content children = { <ItemIconDisconnectSvgComponent /> }></Content>,
	} ,
	{
		key : 68 ,
		name : 'Header Toggle Theme Icon' ,
		content :
			
			<Content children = { <HeaderToggleThemeIconSvgComponent /> }></Content>,
	} ,
	{
		key : 69 ,
		name : 'About Icon' ,
		content :
			
			<Content children = { <SVGAbout /> }></Content>,
	} ,
	{
		key : 70 ,
		name : 'Help Icon' ,
		content :
			<Content children = { <SVGHelp /> }></Content>,
	} ,
	{
		key : 71 ,
		name : 'Lang Icon' ,
		content :
			
			<Content children = { <SVGLang /> }></Content>,
	} ,
	{
		key : 72 ,
		name : 'Docs Icon' ,
		content :
			
			<Content children = { <SVGDocs /> }></Content>,
	} ,
	{
		key : 73 ,
		name : 'Request Icon' ,
		content :
			
			<Content children = { <SVGRequest /> }></Content>,
	} ,
	{
		key : 74 ,
		name : 'Header Notification Icon' ,
		content :
			
			<Content children = { <HeaderNotificationIconSvgComponent /> }></Content>,
	} ,
	{
		key : 75 ,
		name : 'Share Icon' ,
		content :
			
			<Content children = { <BtnIconShare /> }></Content>,
	} ,
	{
		key : 76 ,
		name : 'Rename Icon' ,
		content :
			
			<Content children = { <BtnIconRenameSvgComponent /> }></Content>,
	} ,
	{
		key : 77 ,
		name : 'Copy Icon' ,
		content :
			
			<Content children = { <BtnIconCopySvgComponent /> }></Content>,
	} ,
	{
		key : 78 ,
		name : 'General Menu Icon' ,
		content :
			
			<Content children = { <BtnGeneralMenuSvg /> }></Content>,
	} ,
	{
		key : 79 ,
		name : 'Create Space Icon' ,
		content :
			
			<Content children = { <BtnCreateSpaceSvgComponent /> }></Content>,
	} ,
	{
		key : 80 ,
		name : 'Arrow Icon' ,
		content :
			
			<Content children = { <SVGArrowTip /> }></Content>,
	} ,
	{
		key : 81 ,
		name : 'Nonconforming Condition Icon' ,
		content :
			
			<Content children = { <SVGNonconformingCondition /> }></Content>,
	} ,
	{
		key : 82 ,
		name : 'Conforming Codition Icon' ,
		content :
			
			<Content children = { <SVGConformingCondition /> }></Content>,
	} ,
	{
		key : 83 ,
		name : 'More Info Icon' ,
		content :
			
			<Content children = { <SVGMoreInfo /> }></Content>,
	} ,
	{
		key : 84 ,
		name : 'Add White List Icon' ,
		content :
			
			<Content children = { <SVGAddWhitelist /> }></Content>,
	} ,
	{
		key : 85 ,
		name : 'Revocation Icon' ,
		content :
			
			<Content children = { <SVGRevocation /> }></Content>,
	} ,
	{
		key : 86 ,
		name : 'FreezeList Icon' ,
		content :
			
			<Content children = { <SVGFreezeList /> }></Content>,
	} ,
	{
		key : 87 ,
		name : 'Select Arrow Icon' ,
		content :
			
			<Content children = { <SVGSelectArrowIcon /> }></Content>,
	} ,
	{
		key : 88 ,
		name : 'Create SBT Preview Icon' ,
		content :
			
			<Content children = { <SVGCreateSBTPreview /> }></Content>,
	} ,
	{
		key : 89 ,
		name : 'Upload File Icon' ,
		content :
			
			<Content children = { <SVGUploadFileIcon /> }></Content>,
	} ,
	{
		key : 90 ,
		name : 'Copy Icon' ,
		content :
			
			<Content children = { <SVGCopySBT /> }></Content>,
	} ,
	{
		key : 91 ,
		name : 'Delete List Icon' ,
		content :
			
			<Content children = { <SVGDeleteList /> }></Content>,
	} ,
	{
		key : 92 ,
		name : 'SBT Card Polygon Icon' ,
		content :
			
			<Content children = { <SVGSBTCardPolygon /> }></Content>,
	} ,
	{
		key : 93 ,
		name : 'Permission Icon' ,
		content :
			
			<Content children = { <SVGSBTCardInfoLogo /> }></Content>,
	} ,
	{
		key : 94 ,
		name : 'Search Icon' ,
		content :
			
			<Content children = { <SVGSearch /> }></Content>,
	} ,
	{
		key : 95 ,
		name : 'Select Suffix Icon' ,
		content :
			
			<Content children = { <SVGSelectSuffix /> }></Content>,
	} ,
	{
		key : 96 ,
		name : 'Info(Subtract) Icon' ,
		content :
			
			<Content children = { <SVGSubtract /> }></Content>,
	} ,
];


import {
	SVGAddWhitelist ,
	SVGArrowTip ,
	SVGConformingCondition ,
	SVGCopySBT ,
	SVGCreateSBTPreview ,
	SVGDeleteList ,
	SVGFreezeList ,
	SVGMoreInfo ,
	SVGNonconformingCondition ,
	SVGRevocation ,
	SVGSBTCardInfoLogo ,
	SVGSBTCardPolygon ,
	SVGSearch ,
	SVGSelectSuffix ,
	SVGSubtract ,
	SVGUploadFileIcon ,
} from '@@pages/_SvgComponents/all-SBT-SVG';
import { BtnCreateSpaceSvgComponent } from '@@pages/_SvgComponents/Btn-Create-Space.svg-component';
import { BtnGeneralMenuSvg } from '@@pages/_SvgComponents/Btn-general-menu-svg';
import { BtnIconCopySvgComponent } from '@@pages/_SvgComponents/Btn-icon-copy.svg-component';
import { BtnIconRenameSvgComponent } from '@@pages/_SvgComponents/Btn-icon-rename.svg-component';
import { BtnIconShare } from '@@pages/_SvgComponents/Btn-icon-share.svg-component';
import { HeaderNotificationIconSvgComponent } from '@@pages/_SvgComponents/Header-notification-icon.svg-component';
import {
	SVGAbout ,
	SVGDocs ,
	SVGHelp ,
	SVGLang ,
	SVGRequest ,
} from '@@pages/_SvgComponents/header-panel-svg';
import { HeaderToggleThemeIconSvgComponent } from '@@pages/_SvgComponents/Header-toggle-theme-icon.svg-component';
import { ItemIconDisconnectSvgComponent } from '@@pages/_SvgComponents/Item-icon-disconnect.svg-component';
import { ItemIconEthNode } from '@@pages/_SvgComponents/Item-icon-eth-node.svg-component';
import { ItemIconI18nSvgComponent } from '@@pages/_SvgComponents/Item-icon-i18n.svg-component';
import { ItemIconProfileSvgComponent } from '@@pages/_SvgComponents/Item-icon-profile.svg-component';
import { ItemIconThemeSvgComponent } from '@@pages/_SvgComponents/Item-icon-theme.svg-component';
import {
	SVGPluginDropDownIcon ,
	SVGPluginNFTIcon ,
	SVGPluginOverviewIcon ,
	SVGPluginSpaceIcon ,
	SVGPluginSRMIcon ,
	SVGPluginVotingIcon ,
} from '@@pages/_SvgComponents/left-plugin-list';
import {
	SVGCardAvatar ,
	SVGCup ,
	SVGLightning ,
	SVGMyProfileCardOp ,
	SVGNFTsLink ,
	SVGSBTsCardSpaceLogo ,
	SVGSettingIcon ,
} from '@@pages/_SvgComponents/my-profile-tabs-svg';
import { SelectArrowIconSvgComponent } from '@@pages/_SvgComponents/Select-arrow-icon.svg-component';
import {
	SVGDropDiscord ,
	SVGDropTwitter ,
	SVGDropWebsite ,
	SVGLeaveSpace ,
	SVGPopJoinSpace ,
	SVGPopWebsite ,
	SVGSpaceProfileSetting ,
} from '@@pages/_SvgComponents/Space-dropdown-pop-svg';
import {
	SVGAddNewIcon ,
	SVGDeleteTabIcon ,
	SVGEditTabIcon ,
	SVGSettingSpaceProfile ,
	SVGSettingTabs ,
	SVGShareDiscord ,
	SVGShareFacebook ,
	SVGShareGithub ,
	SVGShareIcon ,
	SVGShareIns ,
	SVGShareReddit ,
	SVGShareTelegram ,
	SVGShareTwitter ,
	SVGShareVK ,
	SVGShareWebsite ,
	SVGShareYoutube ,
	SVGSocialShare ,
} from '@@pages/_SvgComponents/space-info-svg';
import {
	SVGClear ,
	SVGClubHouse ,
	SVGDiscord ,
	SVGFacebook ,
	SVGGithub ,
	SVGGrayAdd ,
	SVGInstagram ,
	SVGLink ,
	SVGMedium ,
	SVGMirror ,
	SVGNet ,
	SVGNotion ,
	SVGReddit ,
	SVGSelectArrowIcon ,
	SVGSocialItemDelete ,
	SVGTelegram ,
	SVGTikTok ,
	SVGTooltip ,
	SVGTumblr ,
	SVGTwitter ,
	SVGVK ,
	SVGWhiteAdd ,
	SVGYoutube ,
} from '@@pages/_SvgComponents/space-setting-svg';
import { SVGCloseIcon } from '@@pages/_SvgComponents/SVG-close-icon';
import transparentBackgroundImg from '@@Public/statics/transparent-background.svg';
import Draggable from 'react-draggable';
import { Table } from "antd";
import components from "@@RootPath/src/utils/components";
import less from './index.module.less';
