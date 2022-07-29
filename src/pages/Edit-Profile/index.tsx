import { MinusCircleOutlined } from "@ant-design/icons";

import {
	// reaxel_edit_profile ,
	reaxel_wallet ,
	reaxel_i18n,
} from "@@reaxes";
import { reaxel_edit_space_social_settings } from "@@pages/Test/dxz-Space-Settings/reaxel_edit_space_social_settings";

import {
	AddSocialBtn ,
	ProfileFooterBtn ,
} from "@@pages/Test/dxz-Space-Settings";
import { Img ,} from '@@common/Xcomponents';
import { EditSocialItem } from '@@pages/_BussinessComponents';
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
	
	const reax_edit_space_social_settings = reaxel_edit_space_social_settings();
	const reax_edit_profile = reaxel_edit_profile();
	const reax_wallet = reaxel_wallet();
	const {
		I18n ,
		i18n,
	} = reaxel_i18n();
	;[reax_edit_profile.editProfileStore.input_display_name];
	if(!reax_edit_profile.originalProfile){
		return null;
	}
	return console.log(reax_edit_profile.originalProfile),11111;
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
				<Img
					src = { reax_edit_profile.originalProfile.iconUrl }
				/>
				{/*{ reax_edit_profile.originalProfile ? (
					<img
						src = { avatarSrc }
						alt = "avatar"
						className = { less.profilePhotoLeft }
					/>
				) : (
					<div className = { less.profilePhotoLeftEmpty } />
				) }*/}
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
							
						}}
						
					>
						<I18n>Upload</I18n>
					</Button>
				</div>
			</div>
			
			<Form>
				<div className = { less.accountInfo }>
					<p className = { less.accountTitle_1 }>Account info</p>
					<span className = { less.subtitle }>display name</span>
					<Form.Item
						name = "displayName"
						rules = { [
							{
								max : 32 ,
								message : "32 max" ,
							} ,
						] }
					>
						<Input
							className = { less.editInput }
							placeholder = "Enter your display name"
							style = { INPUT_STYLE }
						/>
					</Form.Item>
					
					<Subtitle title = "Custom url"></Subtitle>
					<Form.Item
						name = "customUrl"
						rules = { [
							{
								max : 100 ,
								message : "100 max" ,
							} ,
						] }
					>
						<Input
							className = { less.editInput }
							prefix = "Daotion.io/"
							placeholder = "Your custom URL"
							style = { INPUT_STYLE }
						/>
					</Form.Item>
					<Subtitle title = "Bio"></Subtitle>
					<Form.Item
						name = "bio"
						rules = { [
							{
								max : 160 ,
								message : "160 max" ,
							} ,
						] }
					>
						<Input
							className = { less.editInput }
							placeholder = "About yourself in a few words"
							style = { INPUT_STYLE }
						/>
					</Form.Item>
					<p className = { less.accountTitle_2 }>Social</p>
					<Subtitle title = "Portfolio or website"></Subtitle>
					<Form.Item name = "website">
						<Input
							className = { less.editInput }
							placeholder = "Enter URL"
							style = { INPUT_STYLE }
						/>
					</Form.Item>
					<Subtitle title = "Twitter"></Subtitle>
					<Form.Item name = "twitter">
						<Input
							className = { less.editInput }
							placeholder = "@twitter username"
							style = { INPUT_STYLE }
						/>
					</Form.Item>
					<Form.List name = "links">
						{ (
							fields , {
								add ,
								remove ,
							} ) => (
							<>
								{ fields.map( ( field , idx ) => (
									<Form.Item
										required = { false }
										key = { field.key + socialLinksArr[ idx ] }
									>
										<Subtitle title = { socialLinksArr[ idx ] } />
										<Form.Item
											{ ...field }
											noStyle
											name = { [
												field.name ,
												socialLinksArr[ idx ] ,
											] }
										>
											<Input
												placeholder = "Enter URL"
												style = { INPUT_STYLE }
											/>
										</Form.Item>
										{ fields.length >= 1 ? (
											<MinusCircleOutlined
												style = { {
													position : "absolute" ,
													right : -18 ,
													bottom : 18 ,
												} }
												className = "dynamic-delete-button"
												onClick = { () => {
													setSocialLinksArr( ( prev ) => {
														return prev.filter(
															( each ) => each !== socialLinksArr[ idx ] ,
														);
													} );
													reax_edit_space_social_settings.deleteSocialItem(
														socialLinksArr[ idx ] ,
													);
													remove( field.name );
												} }
											/>
										) : null }
									</Form.Item>
								) ) }
								<Form.Item>
									<AddSocialBtn
										onAdd = { ( type ) => {
											add();
											onAddSocialAccount( type );
										} }
									/>
								</Form.Item>
							</>
						) }
					</Form.List>
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
