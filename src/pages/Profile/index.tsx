
export const Profile = ComponentWrapper(() => {
	
	const {
		params ,
		navigate,
	} = utils.useRouter();
	const address = params.address?.toLowerCase();
	const {
		othersProfileStore ,
		memorizedFetchUpdateJoinedSpaceList,
		memorizedFetchUpdateOthersProfile,
	} = reaxel_user_profile_lists();
	const reax_wallet = reaxel_wallet();
	const { uploadProfileBanner } = reaxel_edit_profile();
	
	Reaxes.collectDeps(othersProfileStore);
	Reaxes.collectDeps(reax_wallet.account);
	
	/*如果访问的是用户本人的profile则显示settings*/
	const UserSelfSettingsBtn = () => {
		crayon.green(reax_wallet.account.address , address)
		if(reax_wallet.account.address === address){
			return <Button 
				className = { less.myProfileSettingBtn }
				onClick={() => navigate('/profile/edit')}
			>
				<SVGSettingIcon />
				<span>
					<I18n>Settings</I18n>
				</span>
			</Button>;
		}else {
			return null;
		}
	};
	/*如果是用户本人就显示edit cover*/
	const UserSelfEditCoverBtn = () => {
		if(reax_wallet.account.address === address){
			return <div
				className = { less.editCover }
				onClick = {() => uploadProfileBanner()}
			>
				<I18n>Edit cover</I18n>
			</div>
		}else {
			return null;
		}
	};
	
	if(!othersProfileStore.profile){
		const selfAddress = reax_wallet.account?.address;
		memorizedFetchUpdateOthersProfile(() => [address||selfAddress])(address||selfAddress)
		return null;
	}
	
	if(!othersProfileStore.profile_joined_space_list_paged.length){
		console.log( params );
		console.log(222222222);
		if(params['*'] === 'profile'){
			memorizedFetchUpdateJoinedSpaceList(() => [reax_wallet.account?.address])(reax_wallet.account?.address);
		}else if(params.address) {
			memorizedFetchUpdateJoinedSpaceList(() => [address])(address);
		}
		return null;
	}
	
	console.log( 'ggggggggggggggggg' );
	return <>
		<div
			className = { less.spaceInfo }
		>
			<div
				className = { less.banner }
			>
				<Img
					className = { less.cover }
					width = "1200px"
					height = "300px"
					src = {othersProfileStore.profile.bgUrl}
				/>
				<div className = { less.myAvatarContainer }>
					<Img
						className = { less.myAvatar }
						src = {othersProfileStore.profile.iconUrl}
					/>
				</div>
				{ UserSelfEditCoverBtn() }
			</div>
			<div
				className = { less.infoBox }
			>
				<div
					className = { less.spaceJoin }
				>
					<span
						className = { less.spaceName }
					>{ othersProfileStore.profile.displayName }
					</span>
					<div className = { less.share_joinBox }>
						<ShareBtn />
						
						{UserSelfSettingsBtn()}
						
					</div>
				</div>
				
				<div
					style = { {
						display : "flex" ,
						justifyContent : "space-between" ,
					} }
				>
					<div>
						<div className = { less.sharingBox }>
							<WalletAddressCopyBox walletAddr = { '0x7b.....72f7' } />
							<div className = { less.socialMedias }>
								<SVGSocialShare />
							</div>
						</div>
						<p
							className = { less.bios }
						>
							{othersProfileStore.profile.bio}
						</p>
					</div>
					<div className = { less.netWorth }>
						<p className = { less.netWorthTitle }>Net Worth</p>
						<p className = { less.netWorthMoney }>$18,494,958.15</p>
					</div>
				</div>
			</div>
			<div className = { less.tabsBox }>
				<Tabs
					defaultActiveKey = "1"
					onChange = { onChange }
				>
					<TabPane
						tab = "Joined Spaces"
						key = "1"
					>
						<div className = { less.joinedSpaceBox }>
							{ othersProfileStore.
							profile_joined_space_list_paged.
							map( ( item ) => {
								return <JoinedSpaceCard
									key = {item.address}
									{...item}
								/>;
							} ) }
						</div>
					</TabPane>
					<TabPane
						tab = "NFTs"
						key = "2"
					>
						<MyProfileNFTsBox />
					</TabPane>
					<TabPane
						tab = "SBTs"
						key = "3"
					>
						<MyProfileSBTsBox />
					</TabPane>
					<TabPane
						tab = "Tokens"
						key = "4"
					>
						<MyProfileTokensBox />
					</TabPane>
				</Tabs>
			</div>
		</div>
	</>;
});


import {
	Img ,
	WalletAddressCopyBox ,
} from '@@common/Xcomponents';
import {
	reaxel_user_profile ,
	reaxel_user_profile_lists,
	reaxel_wallet,
	reaxel_edit_profile
} from '@@reaxels';
import less from './index.module.less';

import {
	Button ,
	Tabs ,
} from 'antd';
import {
	SVGCardAvatar ,
	SVGCup ,
	SVGLightning ,
	SVGMyProfileCardOp ,
	SVGNFTsLink ,
	SVGSBTsCardSpaceLogo ,
	SVGSettingIcon ,
	SVGShareIcon ,
} from '@@pages/_SvgComponents/my-profile-tabs-svg';

import { SVGSocialShare } from '@@pages/_SvgComponents/space-info-svg';


const { TabPane } = Tabs;
const onChange = ( key : string ) => {
	console.log( key );
};

const MyProfileTokensBox = () => {
	return <>
		<div className = { less.myProfileTokensBox }>
			<MyprofileTabSubTitle />
			{ new Array( 5 ).fill( '' ).
			map( ( a , i ) => {
				return <MyprofileTokensList
					key = { Math.random() }
				/>;
			} ) }
		</div>
	</>;
};
const MyprofileTokensList = () => {
	return <>
		<div className = { less.myProfileTokensList }>
			<SVGMyProfileCardOp />
			<div className = { less.TokensPriceBox }>
				<div>
					<p className = { less.TokensPriceName }>OP</p>
					<p className = { less.TokensPriceAddition }>Optimism</p>
				</div>
				<div>
					<p className = { less.TokensPriceName }>$0.49</p>
					<p className = { less.TokensPriceAddition }>Optimism</p>
				</div>
				<div>
					<p className = { less.TokensPriceName }>USD$981.30</p>
					<p className = { less.TokensPriceAddition }>45,9508.38</p>
				</div>
			</div>
		</div>
	</>;
};

const MyProfileSBTsBox = () => {
	return <>
		<div className = { less.myProfileSBTsBox }>
			{ new Array( 8 ).fill( '' ).
			map( ( a , i ) => {
				return <MyProfileSBTsCard
					key = { Math.random() }
				/>;
			} ) }
		</div>
	</>;
};
/*NFTs和SBTs-card大部分样式基本相同,so,SBTs-card采用NFTsCardMain以及NFTsCollectName的样式*/
const MyProfileSBTsCard = () => {
	return <>
		<div className = { less.myProfileSBTsCard }>
			<div className = { less.NFTsCardMain }>
				<div className = { less.NFTsViewOn }>
					<span>View on</span>
					<div className = { less.NFTsLinkBox }>
						<SVGNFTsLink />
					</div>
				</div>
			</div>
			<div className = { less.SBTsCardInfo }>
				<div className = { less.NFTsCollectName }>NFT Collection’s Looooooooooooger Name# 320</div>
				<div className = { less.cardLogoNameBox }>
					<div className = { less.SBTsCardSpaceLogo }>
						<SVGSBTsCardSpaceLogo />
					</div>
					<span className = { less.SBTsCardSpaceName }>Daotion Space</span>
				</div>
				<div className = { less.divider }>
				</div>
				<div className = { less.SBTsCardOp }>
					<SVGMyProfileCardOp />
					<span>Optimision</span>
				</div>
			</div>
		</div>
	</>;
};
const MyProfileNFTsBox = () => {
	return <>
		<div className = { less.myProfileNFTsBox }>
			<MyprofileTabSubTitle />
			<div className = { less.myProfileNFTsCardField }>
				{ new Array( 8 ).fill( '' ).
				map( ( a , i ) => {
					return <MyProfileNFTsCard
						key = { Math.random() }
					/>;
				} ) }
			</div>
		</div>
	
	</>;
};
const MyProfileNFTsCard = () => {
	return <>
		<div className = { less.myProfileNFTsCard }>
			<div className = { less.NFTsCardMain }>
				<div className = { less.NFTsCardPolygon }>
					<SVGNFTsLink />
					<span>Polygon</span>
				</div>
				<div className = { less.NFTsViewOn }>
					<span>View on</span>
					<div className = { less.NFTsLinkBox }>
						<SVGNFTsLink />
					</div>
				</div>
			</div>
			<div className = { less.NFTsCardInfo }>
				<div className = { less.NFTsCollectName }>NFT Collection’s Looooooooooooger Name# 320</div>
				<div className = { less.NFTsPriceBox }>
					<p className = { less.NFTsPriceTitle }>
						<span>Floor Price</span>
						<span>Est. Value</span>
					</p>
					<p className = { less.NFTsPriceNumber }>
						<span>Ξ 0.75</span>
						<span>Ξ 1.22</span>
					</p>
				</div>
			</div>
		</div>
	</>;
};

const JoinedSpaceCard = (props:JoinedSpaceCardProps) => {
	return <>
		<div className = { less.joinedSpaceCard }>
			<div className = { less.cardTop }>
				<GrayBox
					text = {props.contributionVal}
					icon = { <SVGLightning /> }
				/>
				<GrayBox
					text = {props.rank}
					icon = { <SVGCup /> }
				/>
			</div>
			<Img
				width = {110}
				height = {110}
				src = {props.icon}
				style = {{
					borderRadius : "50%",
					objectFit : "cover",
				}}
			/>
			<div className = { less.cardSpaceName }>
				{props.address}
			</div>
		</div>
	</>;
};
type JoinedSpaceCardProps = {
	
	"spaceID": number,
	"address": string,
	"icon": string,
	"contributionVal": number,
	"rank": number
};
const MyprofileTabSubTitle = () => {
	return <>
		<div className = { less.myProfileTabSubtitle }>
			<p className = { less.myProfileTabPriceTitle }>NFTs Net Worth</p>
			<p className = { less.myProfileTabPriceNumber }>$25,572.77</p>
		</div>
	</>;
};
const ShareBtn = ComponentWrapper( () => {
	return <>
		<Button className = { less.shareBtn }>
			<SVGShareIcon />
		</Button>
	</>;
} );

const CardTop = () => {
	return <>
		<div className = { less.cardTop }>
			<GrayBox
				text = "1.2"
				icon = { <SVGLightning /> }
			/>
			<GrayBox
				text = "999+"
				icon = { <SVGCup /> }
			/>
		</div>
	</>;
};
const GrayBox = ( props ) => {
	return <>
		<div className = { less.grayBox }>
			{ props.icon }
			<span className = { less.text }>
				{ props.text }
			</span>
		</div>
	</>;
};

