/***
 * 用户信息
 */


import { reaxel_wallet } from '@@RootPath/src/reaxels/wallet/wallet';

import {
	request_user_profile ,
	request_user_profile_joined_list ,
} from '@@requests';
import {
	User__profile_info ,
	User__profile_joined_list ,
} from '@@requests/types';


export const reaxel_user_profile = function () {
	let ret;
	let prevForceUpdate = null;
	const {
		store ,
		setState ,
	} = orzMobx( {
		profile : null as User__profile_info.response ,
		loading : false as { address : string; promise : Promise<any> } | false ,
	} );
	
	const reax_wallet = reaxel_wallet();
	const fetchUpdate = async ( address : string ) => {
		/*防止重复请求*/
		if ( store.loading && address === store.loading.address ) {
			return;
		}
		
		setState( {
			loading : {
				address ,
				promise : request_user_profile( async () => (
					{ address }
				) ).
				catch( ( e ) : never => {
					throw e;
				} ).
				then( ( profile ) => {
					setState( { profile } );
				} ).
				finally( () => {
					setState( { loading : false } );
				} ) ,
			} ,
		} );
		
	};
	
	const closuredFetchProfile = Reaxes.closuredMemo( ( address = reax_wallet.account.address ) => {
		if ( reax_wallet.account?.address ) {
			fetchUpdate( address );
		} else {
			reax_wallet.connectWallet();
		}
	} , () => [] );
	
	Reaxes.observedMemo( () => {
		if ( reax_wallet.account?.address ) {
			closuredFetchProfile( () => [
				reax_wallet.account.address ,
				prevForceUpdate,
			] )( reax_wallet.account.address );
		}
	} , () => [ reax_wallet.account?.address ] );
	
	return () => {
		
		return ret = {
			get profileStore() {
				return store;
			} ,
			/*手动获取个人profile ,forceUpdate为true时就算address没变化也会刷新store.profile*/
			memoedFetchProfile( address : string , forceUpdate = false ) {
				return closuredFetchProfile( () => [
					address ,
					...(
						forceUpdate ? [ prevForceUpdate = Math.random() ] : [ prevForceUpdate ]
					) ,
				] )( address );
			} ,
			setProfileAvatar( url : string ) {
				setState( {
					profile : {
						...store.profile ,
						iconUrl : url ,
					} ,
				} );
			} ,
			setProfileBanner( url : string ) {
				setState( {
					profile : {
						...store.profile ,
						bgUrl : url ,
					} ,
				} );
			} ,
		};
	};
}();


/*第三方用户(或自己)的profile和4个tabs信息*/
export const reaxel_user_profile_lists = function () {
	
	const {
		store ,
		setState ,
	} = orzMobx( {
		profile : null as User__profile_info.response ,
		profile_joined_space_list_paged : [] as User__profile_joined_list.response['infos'] ,
		NFTs : [] ,
		Tokens : [] ,
		SBTs : [] ,
	} );
	const reax_wallet = reaxel_wallet();
	const reax_user_profile = reaxel_user_profile();
	
	/*获取profile内此用户加入的space列表*/
	const fetchUpdateJoinedSpaceList = async ( address : string ) => {
		
		const createPayload = async () => {
			return { address };
		};
		
		request_user_profile_joined_list( createPayload ).
		then( ( res ) => {
			setState( {
				profile_joined_space_list_paged : res.infos ,
			} );
		} );
		return;
	};
	
	/*获取其他人(或自己)的profile信息*/	
	/*根据传入的address做静止缓存. 如果address和钱包地址一致说明是用户本人, 那么尝试从个人profile中直接拿信息,而不再重新请求*/
	const fetchUpdateOthersProfile = async ( address : string ) => {
		if(address){
			if(address === reax_user_profile.profileStore.profile?.address){
				setState( {
					profile : reax_user_profile.profileStore.profile ,
				} );
				return;
				/*从如果正在请求此用户的profile信息, 就等他完成用他的结果*/
			} else if ( reax_user_profile.profileStore.loading !== false &&
				reax_user_profile.profileStore.loading.address === address
			) {
				reax_user_profile.profileStore.loading.promise.then( () => {
					setState( {
						profile : reax_user_profile.profileStore.profile ,
					} );
				} );
			}else {
				const createPayload = async () => {
					return { address };
				};
				request_user_profile( createPayload ).
				then( ( res ) => {
					setState( {
						profile : res ,
					} );
				} );
			}
		}
		
	};
	
	/*获取其他用户(或自己)profile主页加入了的space的列表*/
	const memorizedFetchUpdateOthersProfile = Reaxes.closuredMemo( ( address : string ) => {
		
		if ( address ) {
			fetchUpdateOthersProfile( address );
		}
	} , () => [] );
	/*获取其他用户(或自己)profile主页加入了的space的列表*/
	const memorizedFetchUpdateJoinedSpaceList = Reaxes.closuredMemo( ( address : string ) => {
		
		if ( address ) {
			fetchUpdateJoinedSpaceList( address );
		}
	} , () => [] );
	
	return () => {
		return {
			get othersProfileStore() {
				return store;
			} ,
			memorizedFetchUpdateJoinedSpaceList ,
			memorizedFetchUpdateOthersProfile ,
		};
	};
}();
