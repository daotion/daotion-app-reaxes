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
		input_twitter : null,
		social_list : [] as spaceSocialItem[],
	});
	const reax_user_profile = reaxel_user_profile();
	
	Reaxes.observedMemo(() => {
		if(reax_user_profile.profileStore.profile){
			console.log(logProxy(reax_user_profile.profileStore.profile));
			const {profile} = reax_user_profile.profileStore;
			originalProfile = Object.freeze(_.cloneDeep(profile));
			setState({
				input_display_name : profile.displayName,
				input_bio : profile.bio,
				input_portfolio_website : null,
				input_twitter : null,
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
			setProfileData(partialState:Partial<typeof store>){
				setState( partialState );
			},
			fetchUpdateProfile(){
				
			},
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
