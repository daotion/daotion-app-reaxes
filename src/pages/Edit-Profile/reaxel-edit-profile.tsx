import {
	reaxel_user_profile,
	reaxel_upload_pics,
	reaxel_wallet ,
	reaxel_user,
} from '@@RootPath/src/reaxels';
import {
	request_user_update_profile ,
	request_server_timestamp,
} from '@@requests';
import {User__profile_info} from '@@requests/types';


export const reaxel_edit_profile = function(){
	let ret;
	let originalProfile : User__profile_info.response;
	const {store,setState} = orzMobx({
		selectSocialVisible : false,
		input_display_name : null,
		input_bio : null,
		input_portfolio_website : null,
		social_list : [] as LinkSocialItem[],
	});
	const reax_user_profile = reaxel_user_profile();
	const reax_upload_pics = reaxel_upload_pics();
	const reax_wallet = reaxel_wallet();
	const reax_user = reaxel_user();
	Reaxes.observedMemo(() => {
		if(reax_user_profile.profileStore.profile){
			console.log(logProxy(reax_user_profile.profileStore.profile));
			const {profile} = reax_user_profile.profileStore;
			originalProfile = Object.freeze(_.cloneDeep(profile));
			setState({
				input_display_name : profile.displayName,
				input_bio : profile.bio,
				input_portfolio_website : profile.customUrl,
				social_list : JSON.parse(profile.socialLinks || '[]'),
			});
		}
		
	},() => [reax_user_profile.profileStore.profile?.address]);
	
	const fetchUpdateUserProfile = async () => {
		const address = reax_wallet.account.address;
		const createPayload = async () => {
			const data = {
				displayName : store.input_display_name ,
				bio : store.input_bio,
				customUrl : store.input_portfolio_website,
				socialLinks : JSON.stringify(store.social_list),
				setAddress :  address,
				timestamp : await request_server_timestamp(),
			};
			return {
				address ,
				data ,
				signature : await reax_user.signByFakeWallet( data ) ,
			};
		}
		return request_user_update_profile( createPayload ).
		then( ( res ) => {
			crayon.orange( res );
		} );
	}
	
	return () => {
		if(store.social_list.length === 0 ){
			setState( {
				social_list : [
					{
						link : '' ,
						type : "twitter" ,
						key : Math.random() ,
					},
				] ,
			} );
		}
		return ret = {
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
			setSelectSocialVisible (selectSocialVisible:boolean){
				setState( {
					selectSocialVisible ,
				} );
			},
			setProfileData(partialState:Partial<typeof store>){
				setState( partialState );
			},
			fetchUpdateUserProfile ,
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
				if(ret.staticSocialList.length === 0){
					setState( { selectSocialVisible : false } );
				}
			},
			editSocialItem(type : string, text){
				setState( {
					social_list : store.social_list.map((item) => {
						if(item.type === type){
							return {
								...item ,
								link : text ,
							};
						}else {
							return item;
						}
					}) ,
				} );
			},
		};
	}
}();



type LinkSocialItem = {
	/*社交媒体类型的字符串  如twitter*/
	type : string;
	/*社交媒体的链接*/
	link : string;
	
	key? : string|number;
};

import { staticSocialList } from '@@pages/_BussinessComponents/Select-Social-Btn-Modal/static-social-list';
