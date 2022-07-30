import { MinusCircleOutlined } from "@ant-design/icons";

import {
	// reaxel_edit_profile ,
	reaxel_wallet ,
	reaxel_i18n,
	reaxel_user_profile ,
} from "@@reaxes";
import { reaxel_edit_space_social_settings } from "@@pages/Test/dxz-Space-Settings/reaxel_edit_space_social_settings";

import {
	ProfileFooterBtn ,
} from "@@pages/Test/dxz-Space-Settings";

import { Img ,} from '@@common/Xcomponents';
import { EditSocialItem ,SelectSocialModalBtn  } from '@@pages/_BussinessComponents';
import less from "./index.module.less";
import { reaxel_edit_profile } from './reaxel-edit-profile';


export const EditProfile = ComponentWrapper( () => {
	
	const {
		Button ,
		Form ,
		Input ,
		message ,
		Upload ,
	} = antd;
	
	const reax_edit_profile = reaxel_edit_profile();
	const reax_wallet = reaxel_wallet();
	const reax_user_profile = reaxel_user_profile();
	const {
		I18n ,
		i18n,
	} = reaxel_i18n();
	;[reax_edit_profile.editProfileStore.input_display_name];
	if(!reax_edit_profile.originalProfile){
		return null;
	}
	
	
	
	return <div className = { less.editProfileBox }>
		<h1 className = { less.Title }>Edit profile</h1>
		<p className = { less.intro }>
			You can set preferred display name, create{ " " }
			<span className = { less.boldSpan }> your profile URL</span>
			and manage
			other personal settings.
		</p>
		<div className = { less.mainField }>
			<div className = { less.profilePhoto }>
				{/*todo 图片变形*/}
				<div
					className = { less.profilePhotoLeft }
				>
					<Img
						src = { reax_user_profile.profileStore.profile.iconUrl }
						style = {{
							width : "100%",
							height : "100%",
							borderRadius : "16px",
							
						}}
						
					/>
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
				<div className = { less.accountInfo }>
					<p className = { less.accountTitle_1 }>Account info</p>
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
					<p className = { less.accountTitle_2 }>Social</p>
					
					{function(){
						if(reax_edit_profile.editProfileStore.social_list.length === 0){
							
						}
						reax_edit_profile.editProfileStore.social_list.map((item) => {
							
							return <EditSocialItem
								key = {item.type}
								onChange = {(text) => {
									reax_edit_profile.setProfileData( {
										input_twitter : text,
									} );
								}}
								value = {reax_edit_profile.editProfileStore.input_twitter}
								title = {i18n("Twitter")}
								placeholder = {i18n("@twitter username")}
							/>
						})
					}()}
					
					
					<footer className = { less.lastIntro }>
						To update your settings you should sign message through your
						wallet. Click 'Update profile' then sign the message
					</footer>
					<div className = { less.divider }></div>
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
					>
						<I18n>
							Update Profile
						</I18n>
					</Button>
				</div>
			</Form>
		</div>
	</div>;
	
} );
