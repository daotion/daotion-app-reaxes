/***
 * 用户信息
 */


import { reaxel_wallet } from '@@reaxes/wallet/wallet';
import { request_user_profile } from '@@requests/user';
import {User__profile_info} from '@@requests/types';


export const reaxel_user_profile = function(){
	let ret;
	let prevForceUpdate = null;
	const {
		store ,
		setState,
	} = orzMobx( {
		profile : null as User__profile_info.response,
		loading : false ,
	} );

	const reax_wallet = reaxel_wallet();
	const fetchUpdate = async ( address : string ) => {
		setState( { loading : true  } );
		request_user_profile( async () => ({ address })).
		catch((e):never => {
			throw e;
		}).then((profile) =>{
			setState( { profile } );
		}).finally(() => {
			setState( { loading : false } );
		});
	};

	const closuredFetchProfile = Reaxes.closuredMemo( (address = reax_wallet.account.address ) => {
		if(reax_wallet.account?.address){
			fetchUpdate(address);
		}else {
			reax_wallet.connectWallet();
		}
	} , () => [] );

	Reaxes.observedMemo( () => {
		if(reax_wallet.account?.address){
			closuredFetchProfile(() => [reax_wallet.account.address,prevForceUpdate])(reax_wallet.account.address);
		}
	} , () => [reax_wallet.account?.address] );

	return () => {

		return ret = {
			get profileStore(){
				return store;
			},
			/*手动获取个人profile ,forceUpdate为true时就算address没变化也会刷新store.profile*/
			memoedFetchProfile( address : string , forceUpdate = false ) {
				return closuredFetchProfile( () => [
					address ,
					...(
						forceUpdate ? [ prevForceUpdate = Math.random() ] : [ prevForceUpdate ]
					),
				] )( address );
			},

		}
	}
}();





export const reaxel_edit_profile = function(){
	const {} = orzMobx({
		input_display_name : null,
		input_bio : null,
		input_portfolio_website : null,
		input_twitter : null,
		social_list : [],
	});
	
	const reax_user_profile = reaxel_user_profile();
	
	Reaxes.observedMemo(() => {
		if(reax_user_profile.profileStore.profile){
			console.log(logProxy(reax_user_profile.profileStore.profile));
		}
		
		reax_user_profile.profileStore.profile
	},() => [reax_user_profile.profileStore.profile?.address]);
	
	
	return () => {
		
		return {
			updateProfile(){
				
			},
		};
	}
}(); 
