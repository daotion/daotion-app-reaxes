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
				socialList = { reax_edit_space_social_settings.staticSocialList }
				onClick = { () => {
					reax_edit_space_social_settings.setSelectModalVisible( true );
				} }
				onSelect = { ( item ) => {
					reax_edit_space_social_settings.addSocialItem( item.type );
				} }
				onModalCancel = { () => {
					reax_edit_space_social_settings.setSelectModalVisible( false );
				} }
				modalVisible = { reax_edit_space_social_settings.store.selectModalVisible }
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
			<PrimaryInput
				type = "primary"
				value = { mixedProps.value }
				onChange = { ( e ) => {
					mixedProps.onChange( e.target.value );
				} }
				placeholder = { mixedProps.placeholder }
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
		<PrimaryBtn
			onClick = { () => {
				reax_edit_space_social_settings.fetchEditSocial();
			} }
			type = "primary"
		>{ props.text }</PrimaryBtn>
	</>;
} );

import { reaxel_edit_space_social_settings } from '@@reaxels';
import less from './index.module.less';
import { PrimaryBtn  } from '../../Test/dxz-button';
import { SelectSocialModalBtn } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal';
import { ProfileTitle } from './Profile-Title';
import { PrimaryInput } from '@@pages/Test/dxz-input';
