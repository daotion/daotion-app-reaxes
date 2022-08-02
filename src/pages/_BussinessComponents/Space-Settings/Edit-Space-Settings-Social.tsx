export const SocialProfile = ComponentWrapper( () => {
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

import { reaxel_edit_space_social_settings } from '@@reaxels';
import less from './index.module.less';
import {
	Button ,
	Input ,
} from '@@common/Xcomponents';
import { SelectSocialModalBtn } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal';
import { ProfileTitle } from './Profile-Title';
