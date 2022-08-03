export const GeneralProfile = ComponentWrapper( () => {
	const spaceID = parseInt( utils.useRouter().params.spaceID );
	const {
		getSpaceDetailMemoed ,
		store : store__space_detail ,
	} = reaxel_space_detail();
	const { space_settings_avatar : reax_upload_avatar } = reaxel_space_settings_upload_pictures();
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
			<ProfileTitle>
				<I18n>
					General
				</I18n>
			</ProfileTitle>
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
					<I18n>
						The current deployed network
					</I18n>
				</span>
				<SVGTooltip></SVGTooltip>
			</p>
			<CurrentNet></CurrentNet>
			<div className = { less.subTitle }>
				<span>
					<I18n>
						Bio
					</I18n>
				</span>
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
				placeholder = {i18n("Tell about your Space in a few words")}
				value = { editingStore.bio }
				maxLength = { 160 }
				onChange = { ( e ) => {
					setEditingSpaceInfo( {
						bio : e.target.value ,
					} );
				} }
			/>
			<ItemWithSubTitle title = {i18n('Type')}>
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
				title = {i18n("Email")}
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
			>
				<I18n>
					Save Changes
				</I18n>
			</Button>
		</div>
	</>;
} );




const UploadBtn = ( props : { onClick? : () => void } ) => {
	return <Button
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
			<I18n>
				Upload
			</I18n>
		
		</span>
	</Button>;
};
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

import {
	reaxel_edit_space_general_settings ,
	reaxel_space_detail ,
	reaxel_space_settings_upload_pictures,
} from '@@reaxels';
import {
	SVGClear ,
	SVGNet ,
	SVGTooltip ,
	SVGWhiteAdd ,
} from '@@pages/_SvgComponents/space-setting-svg';
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
import { SelectSocialModalBtn } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal';
import {ProfileTitle} from './Profile-Title';
