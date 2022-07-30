import {
	reaxel_user_profile,
	reaxel_upload_pics,
	
} from '@@reaxes';
import {
	request_user_update_profile
} from '@@requests';
import {User__profile_info} from '@@requests/types';


export const reaxel_edit_profile = function(){
	let ret;
	let originalProfile : User__profile_info.response;
	const {store,setState} = orzMobx({
		input_display_name : null,
		input_bio : null,
		input_portfolio_website : null,
		social_list : [] as spaceSocialItem[],
	});
	const reax_user_profile = reaxel_user_profile();
	const reax_upload_pics = reaxel_upload_pics();
	Reaxes.observedMemo(() => {
		if(reax_user_profile.profileStore.profile){
			console.log(logProxy(reax_user_profile.profileStore.profile));
			const {profile} = reax_user_profile.profileStore;
			originalProfile = Object.freeze(_.cloneDeep(profile));
			setState({
				input_display_name : profile.displayName,
				input_bio : profile.bio,
				input_portfolio_website : profile.customUrl,
				social_list : JSON.parse(profile.links || '[]'),
			});
		}
		
	},() => [reax_user_profile.profileStore.profile?.address]);
	
	return () => {
		
		return {
			get originalProfile(){
				return originalProfile;
			},
			get editProfileStore(){
				return store;
			},
			get staticSocialList(){
				return staticSocialList.filter(({type}) => {
					return !store.social_list.some( ( item ) => item.type === type );
				});
			},
			setProfileData(partialState:Partial<typeof store>){
				setState( partialState );
			},
			fetchUpdateProfile(){
				
			},
			uploadProfileAvatar( callback = ( url? : string ) => null ) {
				reax_upload_pics.user_profile_upload_avatar( callback );
			},
			addSocialItem(type : string, ){
				setState( {
					social_list : [
						...store.social_list ,
						{
							link : '' ,
							type ,
							key : Math.random().toString() ,
						} ,
					] ,
				} );
			}
		};
	}
}();



type spaceSocialItem = {
	/*社交媒体类型的字符串  如twitter*/
	type : string;
	/*社交媒体的链接*/
	link : string;
	
	key : string;
};

import { staticSocialList } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal/static-social-list';
