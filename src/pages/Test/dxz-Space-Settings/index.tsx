import {
	reaxel_i18n ,
	reaxel_space_detail ,
	reaxel_upload_pics ,
	reaxel_user ,
	reaxel_wallet ,
} from '@@reaxes';
import { reaxel_edit_space_social_settings } from './reaxel_edit_space_social_settings';

export const DxzSpaceSettings = () => {
	const [ tab , setTab ] = useState<'social' | 'general'>( 'general' );
	const spaceID = parseInt( utils.useRouter().params.spaceID );
	const Content = {
		social : SocialProfile ,
		general : GeneralProfile ,
	}[ tab ];
	reaxel_edit_space_general_settings().
	closuredFetchSpaceInfo( spaceID );
	return <>
		<div
			className = { less.container }
		>
			<SpaceSettingTabs
				tab = { tab }
				setTab = { setTab }
			/>
			<Content />
		</div>
	</>;
};

const GeneralProfile = ComponentWrapper( () => {
	const spaceID = parseInt( utils.useRouter().params.spaceID );
	const {
		getSpaceDetailMemoed ,
		store : store__space_detail ,
	} = reaxel_space_detail();
	const { space_settings_avatar : reax_upload_avatar } = reaxel_upload_pics();
	const {
		InfoEquals ,
		editingStore ,
		setEditingSpaceInfo ,
		closuredFetchSpaceInfo ,
		saveSpaceSettings ,
	} = reaxel_edit_space_general_settings();

	return <>
		<div
			style = { {
				width : "100%" ,
				marginLeft : "32px" ,
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<ProfileTitle title = "General"></ProfileTitle>
			<div
				className = { less.picBox }
			>
				<div
					style = { {
						backgroundColor : "#eeeeee" ,
						borderRadius : "12px" ,
					} }
				>
					<Img
						src = { editingStore.iconUrl }
						style = { {
							width : "96px" ,
							height : "96px" ,
							borderRadius : "12px" ,
							objectFit : "cover" ,
							objectPosition : "50% 50%" ,
						} }
					/>
				</div>
				<UploadBtn
					onClick = { () => {
						reax_upload_avatar( spaceID , ( url : string ) =>
							setEditingSpaceInfo( { iconUrl : url } ) );
					} }
				/>
			</div>
			<p
				className = { less.netInfo }
			>
				<span
					style = { {
						marginRight : '6px' ,
						userSelect : 'none' ,
					} }
				>
					The current deployed network
				</span>
				<SVGTooltip></SVGTooltip>
			</p>
			<CurrentNet></CurrentNet>
			<div className = { less.subTitle }>
				<span>Bio</span>
				<SVGTooltip></SVGTooltip>
			</div>
			<InputTextarea
				rows = { 4 }
				style = { {
					background : "#f4f4f4" ,
					borderRadius : "12px" ,
					width : "100%" ,
					padding : "4px" ,
					height : "112px" ,
					border : "2px solid rgba(154, 159, 165, 0.25)" ,
				} }
				placeholder = "Tell about your Space in a few words"
				value = { editingStore.bio }
				maxLength = { 160 }
				onChange = { ( e ) => {
					setEditingSpaceInfo( {
						bio : e.target.value ,
					} );
				} }
			/>
			<ItemWithSubTitle title = "Type">
				<Select
					className = { less.votingType_box }
					style = { {
						width : "100%" ,
						color : "#9a9fa5" ,
						height : "48px" ,
					} }
					removeIcon = { <SVGClear /> }
					mode = "multiple"
					allowClear
					placeholder = "Enter or select tags"
					value = { editingStore.tags }
					onChange = { ( tags ) => {
						if ( tags.length > 3 ) return;
						setEditingSpaceInfo( {
							tags ,
						} );
					} }
				>
					{ spaceTags.map( ( tag ) => {
						return <Option key = { tag }>
							{ tag }
						</Option>;
					} ) }
				</Select>
			</ItemWithSubTitle>
			<ItemWithSubTitle
				title = "Email"
			>
				<Input
					style = { {
						background : "#f4f4f4" ,
						borderRadius : "12px" ,
						width : "100%" ,
						height : "48px" ,
						padding : "12px" ,
						border : "none" ,
						fontWeight : "600" ,
						fontSize : "14px" ,
						lineHeight : "24px" ,
						color : "#33383f" ,
					} }
					placeholder = "Enter your email"
					value = { editingStore.email }
					onChange = { ( e ) => {
						setEditingSpaceInfo( { email : e.target.value } );
					} }
				/>
			</ItemWithSubTitle>
			<div className = { less.divider }></div>
			<Button
				disabled = { InfoEquals }
				type = "primary"
				onClick = { () => {
					saveSpaceSettings();
				} }
				style = { {
					borderRadius : "12px" ,
					padding : "12px 20px" ,
					fontSize : '15px' ,
					fontWeight : '700' ,
					lineHeight : "24px" ,
					height : "48px" ,
					width : 'fit-content' ,
					display : "flex" ,
					alignItems : "center" ,
					justifyContent : "center" ,
				} }
			>Save Changes</Button>
		</div>
	</>;
} );
const reaxel_edit_space_general_settings = function () {
	let ret;
	type fields = {
		bio : string,
		email : string,
		tags : string[],
		iconUrl : string;
	};
	const {
		store ,
		setState ,
	} = orzMobx<fields>( {
		bio : null ,
		email : null ,
		tags : [] ,
		iconUrl : null ,
	} );
	let currentSpaceID : number;
	let spaceInfo : fields;
	let fetching = false;
	const reax_space_detail = reaxel_space_detail();
	/*从服务器拿spaceInfo并缓存下来*/
	const closuredSpaceInfo = Reaxes.closuredMemo( async ( spaceID : number , forceUpdate : boolean = false ) => {
		/*当前逻辑是进入space:spaceID路由下会自动请求space的detail,而settings页面一定在space:spaceID路由下的
		  所以可以认为编辑中的spaceInfo和自动请求到的spaceInfo是同一套.判断一下,如果spaceID相同就不请求后端了*/
		const info = reax_space_detail.store.spaceInfo;
		currentSpaceID = spaceID;
		if ( info && (
			spaceID === info.spaceID
		) && !forceUpdate ) {
			spaceInfo = {
				bio : info.bio ,
				email : info.email ,
				tags : info.tags ,
				iconUrl : info.iconUrl ,
			};
			setState( spaceInfo );
			return;
		}

		return reax_space_detail.getSpaceDetailMemoed( spaceID , forceUpdate );

	} , () => [] );

	Reaxes.observedMemo( () => {
		if ( (
			currentSpaceID
		) && reax_space_detail.store.spaceInfo?.spaceID === currentSpaceID ) {
			const info = reax_space_detail.store.spaceInfo;
			spaceInfo = {
				bio : info.bio ,
				email : info.email ,
				tags : info.tags ,
				iconUrl : info.iconUrl ,
			};
			setState( spaceInfo );
		}
	} , () => [ reax_space_detail.store.spaceInfo ] );

	const omitIconUrl = () => {
		return [
			_.omit( store , 'iconUrl' ) ,
			_.omit( spaceInfo , 'iconUrl' ) ,
		] as [ Omit<fields , "iconUrl"> , Omit<fields , 'iconUrl'> ];
	};

	return () => {

		return ret = {
			closuredFetchSpaceInfo( spaceID : number , forceUpdate : boolean = false ) {
				const force = forceUpdate ? [ Math.random() ] : [];
				return closuredSpaceInfo( () => [
					spaceID ,
					...force ,
				] )( spaceID , forceUpdate );
			} ,
			get InfoEquals() {
				/*_.isEqual()深度对比*/
				return _.isEqual( ...omitIconUrl() );
			} ,
			get editingStore() {
				return store;
			} ,
			setEditingSpaceInfo( partialInfo : Partial<fields> ) {
				setState( partialInfo );
			} ,
			async saveSpaceSettings() {
				const reax_wallet = reaxel_wallet();
				const reax_user = reaxel_user();
				const address = reax_wallet.account.address;
				const data : data = {
					spaceID : currentSpaceID ,
					tags : store.tags.join( ',' ) ,
					bio : store.bio ,
					email : store.email ,
					modifyAddress : reax_wallet.account.address ,
					timestamp : await request_server_timestamp() ,
				};
				/*todo 只传改变了的字段.现在没时间 后续优化*/
				// if(!_.isEqual(store.tags,spaceInfo.tags)){
				// 	data.tags = store.tags.join(',');
				// }
				//
				const createPayload = async () => {
					return {
						address ,
						data ,
						signature : await reax_user.signByFakeWallet( data ) ,
					};
				};
				const fetch_space_general_modify = async () => {
					return request_space_general_modify( createPayload );
				};
				// ret.closuredFetchSpaceInfo(currentSpaceID,true).then(() => {
				// 	antd.Modal.success({title : "changed successful!"})
				// });
				// return ;
				fetch_space_general_modify().
				then( () => {
					ret.closuredFetchSpaceInfo( currentSpaceID , true ).
					then( () => {
						antd.Modal.success( { title : "changed successful!" } );
					} );
				} ).
				catch( ( e ) => {
					console.error( e );
				} );
				type data = {
					spaceID : number,
					modifyAddress : string,
					timestamp : number,
					tags? : string,
					bio? : string,
					email? : string,
				};
			} ,
		};
	};
}();

const SocialProfile = ComponentWrapper( () => {
	const { params } = utils.useRouter();
	const reax_edit_space_social_settings = reaxel_edit_space_social_settings();
	return <>
		<div
			style = { {
				width : "100%" ,
				marginLeft : "32px" ,
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<ProfileTitle title = "Social Profiles" />

			<div
				style = { {
					minHeight : "250px" ,
				} }
			>
				{ reax_edit_space_social_settings.store.socialList.map( ( item ) => {

					return <EditSocialItem
						title = { item.type }
						value = { item.link }
						onChange = { ( text ) => {
							reax_edit_space_social_settings.editSocialItem( item.key , text );
						} }
						key = { item.type }

					/>;
				} ) }
			</div>
			<SelectSocialModalBtn 
				socialList = {reax_edit_space_social_settings.staticSocialList}
				onClick = {() => {
					reax_edit_space_social_settings.setSelectModalVisible(true);
				}}
				onSelect = {(item) => {
					reax_edit_space_social_settings.addSocialItem(item.type);
				}}
				onModalCancel = {() => {
					reax_edit_space_social_settings.setSelectModalVisible(false)
				}}
				modalVisible = {reax_edit_space_social_settings.store.selectModalVisible}
			/>
			<div className = { less.divider }></div>
			<ProfileFooterBtn
				text = "Update Social Profiles"
			/>
		</div>
	</>;
} );
import {
	SVGClear ,
	SVGNet ,
	SVGTooltip ,
	SVGGrayAdd ,
	SVGWhiteAdd ,
}from '@@pages/_SvgComponents/space-setting-svg';
const SpaceSettingTabs = ComponentWrapper( ( props : SpaceSettingTabsProps ) => {
	const {
		i18n ,
		I18n,
	} = reaxel_i18n();
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

const UploadBtn = ( props : { onClick? : () => void } ) => {
	return <>
		<Button
			onClick = { props.onClick }
			style = { {
				marginLeft : "29px" ,
				display : "inline-flex" ,
				alignItems : "center" ,
				borderRadius : "8px" ,
				padding : "8px 16px" ,
				backgroundColor : "#3772ff" ,
				color : "#ffffff" ,
				width : "fit-content" ,
				height : "40px" ,
				fontSize : '13px' ,
				fontWeight : '700' ,
				lineHeight : '24px' ,
				justifyContent : "15px" ,
			} }
		>
			<SVGWhiteAdd></SVGWhiteAdd>
			<span>
				Upload
			</span>
		</Button></>;
};
const ProfileTitle = ( props ) => {
	return <>
		<h1
			style = { {
				fontWeight : '600' ,
				fontSize : '20px' ,
				lineHeight : "36px" ,
				userSelect : 'none' ,
				marginBottom : "4px" ,
			} }
		>{ props.title }
		</h1>
	</>;
};
1
export const ProfileFooterBtn = ComponentWrapper( ( props ) => {

	const reax_edit_space_social_settings = reaxel_edit_space_social_settings();
	return <>
		<Button
			className = "profile-footer-btn"
			onClick = { () => {
				reax_edit_space_social_settings.fetchEditSocial();
			} }
			style = { {
				borderRadius : "12px" ,
				color : "#ffffff" ,
				padding : "12px 20px" ,
				fontSize : '15px' ,
				fontWeight : '700' ,
				lineHeight : "24px" ,
				height : "48px" ,
				width : 'fit-content' ,
				display : "flex" ,
				alignItems : "center" ,
				justifyContent : "center" ,
			} }
		>{ props.text }</Button>
	</>;
} );
const CurrentNet = ( props ) => {
	return <>
		<div
			className = "net"
			style = { {
				display : "flex" ,
				alignItems : "center" ,
				borderRadius : "12px" ,
				backgroundColor : "#f4f4f4" ,
				fontSize : '14px' ,
				fontWeight : "500" ,
				lineHeight : '24px' ,
				color : '#23262f' ,
				width : 'fit-content' ,
				height : "40px" ,
				padding : "8px" ,
				justifyContent : "space-between" ,
				userSelect : 'none' ,
			} }
		>
			<SVGNet></SVGNet>
			<span
				style = { { marginLeft : "10px" } }
			>ETHEREUM
			</span>
		</div>
	</>;
};

const ItemWithSubTitle = ( props : React.PropsWithChildren<{
	title : string;
}> ) => {
	return <>
		<span className = { less.subTitle }>{ props.title }</span>
		{ props.children }
	</>;
};

const SubItemInput = () => {
	return <>
		<Input
			placeholder = "Please enter"
			style = { {
				background : "#f4f4f4" ,
				borderRadius : "12px" ,
				width : "100%" ,
				height : "48px" ,
				padding : "12px" ,
				border : "none" ,
				fontWeight : "600" ,
				fontSize : "14px" ,
				lineHeight : "24px" ,
				color : "#33383f" ,
			} }
		/>
	</>;

};
const EditSocialItem = ComponentWrapper( ( props : EditSocialItemProps ) => {
	const mixedProps = Object.assign<Partial<EditSocialItemProps> , EditSocialItemProps>( {
		placeholder : "Please enter" ,
	} , { ...props } );
	return <>
		<div
			style = { {
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<span className = { less.subTitle }>{ mixedProps.title }</span>
			<Input
				value = { mixedProps.value }
				onChange = { ( e ) => {
					mixedProps.onChange( e.target.value );
				} }
				placeholder = { mixedProps.placeholder }
				style = { {
					background : "#f4f4f4" ,
					borderRadius : "12px" ,
					width : "100%" ,
					height : "48px" ,
					padding : "12px" ,
					border : "none" ,
					fontWeight : "600" ,
					fontSize : "14px" ,
					lineHeight : "24px" ,
					color : "#33383f" ,
				} }
			/>
		</div>
	</>;
} );
type EditSocialItemProps = {
	title : React.ReactNode;
	value : string;
	onChange : ( text : string ) => void;
	placeholder? : string;
};
type SpaceSettingTabsProps = {
	tab : 'social' | 'general',
	setTab : ( tab : 'social' | 'general' ) => void;
};
import less from './index.module.less';
import spaceTags from '@@Public/space-tags.json';
import {
	Button ,
	Img ,
	Input ,
	InputTextarea ,
	Option ,
	Select ,
} from '@@common/Xcomponents';

import {
	request_server_timestamp ,
	request_space_general_modify ,
} from '@@requests';
import { SelectSocialModalBtn } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal';
