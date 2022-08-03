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
			<ProfileTitle title = "General"></ProfileTitle>
			<div
				className = { less.picBox }
			>
				<div
					style = { {
						backgroundColor : "#eeeeee" ,
						borderRadius : "12px" ,
						width : "96px" ,
						height : "96px" ,
						marginRight : "28px" ,
						userSelect:"none"
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
							marginRight : "28px" ,
							userSelect:"none"
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
			<Input.TextArea
				rows = { 4 }
				placeholder = "Tell about your Space in a few words"
				className = { less.generalBioTextArea }
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
					placeholder = "Enter your email"
					className = { less.generalEmailInput }
					value = { editingStore.email }
					onChange = { ( e ) => {
						setEditingSpaceInfo( { email : e.target.value } );
					} }
				/>
			</ItemWithSubTitle>
			<div className = { less.divider }></div>
			<Button
				disabled = { InfoEquals }
				className = { less.generalSaveBtn }
				onClick = { () => {
					saveSpaceSettings();
				} }
			>Save Changes</Button>
		</div>
	</>;
} );


const UploadBtn = ( props : { onClick? : () => void } ) => {
	return <>
		<Btn
			onClick = { props.onClick }
			type = "primary"
		>
			<SVGWhiteAdd></SVGWhiteAdd>
			<span>
				Upload
			</span>
		</Btn></>;
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
	reaxel_space_settings_upload_pictures ,
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
	Img ,
} from '@@common/Xcomponents';
import {
	Input ,
	Select ,
	Button ,
} from 'antd';

const { Option } = Select;
import { SelectSocialModalBtn } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal';
import { ProfileTitle } from './Profile-Title';

import {
	Btn ,
} from '../../Test/dxz-button';
