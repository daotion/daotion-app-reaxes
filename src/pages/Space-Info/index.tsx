import { Tabs } from 'antd';

const { TabPane } = Tabs;
const onChange = ( key : string ) => {
	console.log( key );
};
export const SpaceInfo = ComponentWrapper( class extends ReactComponentClass<any , any> {
	
	reax_space_detail = reaxel_space_detail();
	
	reax_user_join_or_leave_space = reaxel_user_join_or_leave_space();
	
	reax_upload_banner = reaxel_upload_pics();
	
	reax_joined_Space_list = reaxel_joined_Space_list();
	
	reax_I18n = reaxel_i18n();
	
	render() {
		const { params } = utils.useRouter();
		const spaceID = parseInt( params.spaceID );
		const { I18n } = this.reax_I18n;
		this.reax_space_detail.getSpaceDetailMemoed( spaceID );
		
		if ( !this.reax_space_detail.store.spaceInfo ) return null;
		/*todo 骨架屏*/
		if ( this.reax_space_detail.store.spaceInfo.spaceID !== spaceID ) return null;
		
		return <>
			<div>
				<div
					className = { less.spaceInfo }
				>
					<header
						className = { less.tabSettingNav }
					>
						<DxzTokenOverview />
						<SVGSettingSpaceProfile />
					</header>
					<div className = { less.banner }>
						<Img
							className = { less.coverImg }
							src = { this.reax_space_detail.store.spaceInfo.bgUrl }
							width = "1200px"
							height = "300px"
							alt = ""
						/>
						<div className = { less.avatarBox }>
							<Img
								className = { less.spaceAvatar }
								src = { this.reax_space_detail.store.spaceInfo.iconUrl }
							/>
						</div>
						
						{ this.reax_joined_Space_list.joined_space_list?.some( ( space ) => {
							if ( space.spaceID === this.reax_space_detail.store.spaceInfo.spaceID && space.role === 3 ) {
								return true;
							}
						} ) && <div
							className = { less.editCover }
							onClick = { () => {
								this.reax_upload_banner.space_info_banner( this.reax_space_detail.store.spaceInfo.spaceID );
							} }
						>
							<I18n>
								Edit cover
							</I18n>
						
						</div> }
					</div>
					<div className = { less.infoBox }>
						<div className = { less.spaceJoin }>
							<span
								className = { less.spaceName }
							>{ this.reax_space_detail.store.spaceInfo.name }
							</span>
							<div className = { less.share_joinBox }>
								<ShareIcon></ShareIcon>
								<BtnSpaceJoinedSetting
									spaceID = { this.reax_space_detail.store.spaceInfo.spaceID }
								/>
							</div>
						</div>
						<div
							className = { less.sharingBox }
						>
							<WalletAddressCopyBox
								walletAddr = { this.reax_space_detail.store.spaceInfo.addrChain }
							/>
							<div className = { less.socialMedias }>
								<SVGSocialShare />
							</div>
						</div>
						<p
							className = { less.bios }
						>
							{ this.reax_space_detail.store.spaceInfo.bio }
						</p>
					</div>
					<div className = { less.tabsBox }>
						<AddNewTabBtn />
						<Tabs
							defaultActiveKey = "1"
							onChange = { onChange }
						>
							<TabPane
								tab = {<span>OverView</span>}
								key = "1"
							>
								<SpaceOverViewContainer />
							</TabPane>
							<TabPane
								tab = {<span>Articles<SVGSettingTabs/></span>}
								key = "2"
							>
								Content of Tab Pane 22222
							</TabPane>
							<TabPane
								tab = {<span>Tab3<SVGSettingTabs/></span>}
								key = "3"
							>
								Content of Tab Pane 33333
							</TabPane>
							<TabPane
								tab = {<span>Tab4<SVGSettingTabs/></span>}
								key = "4"
							>
								Content of Tab Pane 44444
							</TabPane>
						</Tabs>
					</div>
				</div>
			</div>
		</>;
	}
} );


import {
	reaxel_joined_Space_list ,
	reaxel_upload_pics ,
	reaxel_user_join_or_leave_space ,
	reaxel_space_detail ,
	reaxel_i18n ,
} from '@@reaxes';
import {
	Img ,
	WalletAddressCopyBox ,
} from '@@common/Xcomponents';
import {
	SVGShareIcon ,
	SVGAddNewIcon ,
	SVGEditTabIcon ,
	SVGDeleteTabIcon ,
	SVGSettingSpaceProfile ,
	SVGVK ,
	SVGFacebook ,
	SVGIns ,
	SVGDiscord ,
	SVGLink ,
	SVGReddit ,
	SVGGithub ,
	SVGTelegram ,
	SVGTwitter ,
	SVGYoutube ,
	SVGSocialShare ,
	SVGSettingTabs ,
} from '@@common/Xcomponents/svg/space-info-svg';

import { BtnSpaceJoinedSetting } from '@@pages/_BussinessComponents';
import { DxzTokenOverview } from '@@pages/Test/dxz-Token-overview';
import less from './index.module.less';
import { Button } from 'antd';


const EditTabsNamePop = ComponentWrapper( () => {
	return <>
		<div className = { less.editTabsNamePop }>
			<div className = { less.editTabsTitle }>TabsName</div>
			<div className = { less.editTabsBox }>
				<SVGEditTabIcon />
				<span>Edit</span>
			</div>
			<div className = { less.deleteTabsBox }>
				<SVGDeleteTabIcon />
				<span>Delete</span>
			</div>
		</div>
	</>;
} );
const AddNewTabBtn = ComponentWrapper( () => {
	return <>
		<div
			className = { less.addNewTabBtn }
		>
			<Button
				id = "addTabBtn"
				style = { {
					borderColor : "#e6e8ec" ,
				} }
				onMouseOver = { AddTabMouseOver }
				onMouseLeave = { AddTabMouseOut }
			>
				<SVGAddNewIcon />
				<span>New</span>
			</Button>
		</div>
	</>;
} );

function AddTabMouseOver() {
	const AddBtn = document.getElementById( 'addTabBtn' );
	AddBtn.style.border = '2px solid #b1b5c3';
}

function AddTabMouseOut() {
	const AddBtn = document.getElementById( 'addTabBtn' );
	AddBtn.style.border = '2px solid #e6e8ec';
}

const SpaceOverViewContainer = ComponentWrapper( () => {
	return <>
		<div className = { less.contentBox }>
			<div className = { less.contentLeft }>
				<ContentListFirst />
				<ContentListSecond />
			</div>
			<div className = { less.contentRight }>
				<OverViewTitle />
				<div className = { less.memberLists }>
					{ new Array( 44 ).fill( '' ).
					map( ( v , i ) =>
						<MemberItem
							key = { i }
						></MemberItem> ,
					) }
				</div>
			</div>
		</div>
	</>;
} );

const MemberItem = ComponentWrapper( () => {
	return <>
		<div
			className = { less.memberItem }
			style = { {
				height : "24px" ,
				width : "260px" ,
				display : "flex" ,
				flexFlow : "row nowrap" ,
				alignItems : "center" ,
				
			} }
		>
			<Img
				src = "data:image/png;base64,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"
				alt = "avater"
				width = "24px"
				height = "24px"
				style = { {
					borderRadius : "32px" ,
				} }
			/>
			<span
				style = { {
					fontSize : "14px" ,
					fontWeight : '600' ,
					marginLeft : "16px" ,
				} }
			>Hillen
			</span>
		</div>
	</>;
} );
const OverViewTitle = ComponentWrapper( () => {
	return <>
		<div
			style = { {
				display : "flex" ,
				justifyContent : "space-between" ,
				width : "100%" ,
				height : "fit-content" ,
			} }
		>
			<span
				style = { {
					fontWeight : "600" ,
					fontSize : "20px" ,
					lineHeight : "32px" ,
					color : "#1a1d1f" ,
				} }
			>
				Title
			</span>
		</div>
	</>;
} );
const ContentListFirst = ComponentWrapper( () => {
	return <>
		<div className = { less.contentListFirst }>
			<OverViewTitle />
			<EditTabsNamePop />
		</div>
	</>;
} );
const ContentListSecond = ComponentWrapper( () => {
	return <>
		<div className = { less.contentListSecond }>
			<OverViewTitle />
		</div>
	</>;
} );

const SpaceJoinAvater = ComponentWrapper( () => {
	return <>
		<img
			src = "https://s1.ax1x.com/2022/07/11/j6YgIg.png"
			alt = "avater"
			style = { {
				borderRadius : "16px" ,
				position : "absolute" ,
				top : "204px" ,
				left : "32px" ,
				width : "124px" ,
				height : "124px" ,
			} }
		/>
	</>;
} );
const ShareIcon = ComponentWrapper( () => {
	return <>
		<div className = { less.shareIcon }>
			<Button>
				<SVGShareIcon />
			</Button>
		</div>
	</>;
} );



