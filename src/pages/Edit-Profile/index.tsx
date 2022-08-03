import {
	reaxel_edit_profile ,
	reaxel_user_profile ,
	reaxel_wallet ,
} from "@@reaxels";


import { Img  } from '@@common/Xcomponents';
import {
	EditSocialItem ,
	SelectSocialModalBtn,
} from '@@pages/_BussinessComponents';
import less from "./index.module.less";


export const EditProfile = ComponentWrapper( () => {
	
	const {
		Button ,
		Form ,
		Input ,
		message ,
	} = antd;
	
	const reax_edit_profile = reaxel_edit_profile();
	const reax_wallet = reaxel_wallet();
	const reax_user_profile = reaxel_user_profile();

	
	if(!reax_edit_profile.originalProfile){
		return null;
	}
	
	
	return <div className = { less.editProfileBox }>
		<h1 className = { less.Title }>Edit profile</h1>
		<p className = { less.intro }>
			You can set preferred display name, create{ " " }
			<span className = { less.boldSpan }> your profile URL</span>and manage other personal settings.
		</p>
		<div className = { less.mainField }>
			<div className = { less.profilePhoto }>
				{/*todo 图片变形*/}
				<div
					className = { less.profilePhotoLeft }
				>
					<Img
						src = { reax_user_profile.profileStore.profile.iconUrl }
						className={less.profilePhoto}/>
				</div>
				<div className = { less.profilePhotoRight }>
					<span className = { less.photoTitle }>Profile photo</span>
					<p className = { less.avatarRule }>
						We recommend an image of at least 400x400.
						<br />
						Gifs work too 🙌
					</p>
					<Button
						style = { {
							border : "2px solid #e6e8ec" ,
							padding : "12px 16px" ,
							height : "40px" ,
							borderRadius : "12px" ,
							display : "flex" ,
							alignItems : "center" ,
							fontWeight : "700" ,
							fontSize : "14px" ,
							lineHeight : "16px" ,
							color : "#23262f" ,
						} }
						onClick={() => {
							reax_edit_profile.uploadProfileAvatar(() => {
								console.log( 111111111 );
							})
						}}
						
					>
						<I18n>Upload</I18n>
					</Button>
				</div>
			</div>
			
			<Form>
					<EditSocialItem
						onChange = {(text) => {
							reax_edit_profile.setProfileData({
								input_display_name : text,
							})
						}}
						value = {reax_edit_profile.editProfileStore.input_display_name}
						title = {i18n("Display name")}
						placeholder = {i18n("Enter your display name")}
					/>
					
					<EditSocialItem
						onChange = {(text) => {
							reax_edit_profile.setProfileData( {
								input_bio : text ,
							} );
						}}
						value = {reax_edit_profile.editProfileStore.input_bio}
						title = {i18n("Bio")}
						placeholder = {i18n("About yourself in a few words")}
					/>
					
					<EditSocialItem
						onChange = {(text) => {
							reax_edit_profile.setProfileData( {
								input_portfolio_website : text ,
							} );
						}}
						value = {reax_edit_profile.editProfileStore.input_portfolio_website}
						title = {i18n("Portfolio or website")}
						placeholder = {i18n("Enter URL")}
					/>
					
					{reax_edit_profile.editProfileStore.social_list.map((item) => {
						return <EditSocialItem
							key = {item.type}
							onChange = {(text) => {
								reax_edit_profile.editSocialItem( item.type , text );
							}}
							value = {item.link}
							title = {item.type}
							placeholder = {i18n("please input")}
						/>
					})}
					
					<SelectSocialModalBtn
						socialList = {reax_edit_profile.staticSocialList}
						onClick = {() => {
							reax_edit_profile.setSelectSocialVisible( true );
						}}
						onSelect = {(item) => {
							reax_edit_profile.addSocialItem( item.type );
						}}
						onModalCancel = {() => {
							reax_edit_profile.setSelectSocialVisible( false );
						}}
						modalVisible = {reax_edit_profile.editProfileStore.selectSocialVisible}
					/>
					<footer className = { less.lastIntro }>
						To update your settings you should sign message through your
						wallet. Click 'Update profile' then sign the message
					</footer>
					<div className = { less.divider }></div>
					<PrimaryBtn
						type='primary'
						onClick = { () => {
							reax_edit_profile.fetchUpdateUserProfile().then(() =>{
								if(__EXPERIMENTAL__){
									antd.message.success( 'update successful' );
								}
							});
						} }>
						<I18n>
							Update
						</I18n>
					</PrimaryBtn>
			</Form>
		</div>
	</div>;
	
} );
import{PrimaryBtn}from'../../pages/Test/dxz-button';
