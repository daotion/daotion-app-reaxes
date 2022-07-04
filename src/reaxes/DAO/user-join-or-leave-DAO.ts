export const reaxel_user_join_or_leave_DAO = function(){
	
	
	
	
	return () => {
		const reax_joined_DAO_list= reaxel_joined_DAO_list();
		const reax_user = reaxel_user_sign_login();
		const reax_wallet = reaxel_wallet();
		const reax_sign = reaxel_sign();
		return {
			is_user_joined_DAO (DAOID:number):boolean{
				return reax_joined_DAO_list.joined_DAO_list.some( ( { daoID } ) => daoID === DAOID );
			},
			async join_DAO( daoID : number ) {
				if(!reax_wallet.wallet){
					await reax_wallet.connectWallet();
				}
				if(!reax_user.fake_wallet_store.logged_in){
					await reax_user.loginWithUserWallet();
				}
				
				const data = {
					daoID ,
					joinAddress : reax_wallet.account.address ,
				};
				
				const signature = await reax_sign.signByFakeWallet( data );
				
				return fetch_user_join_DAO( {
					address : data.joinAddress ,
					data ,
					signature,
				} ).then((DAOinfo) => {
					reax_joined_DAO_list.set_joined_DAO_list( [
						...reax_joined_DAO_list.joined_DAO_list ,
						DAOinfo ,
					] );
					return DAOinfo;
				});
			} ,
			async leave_DAO( daoID : number ) {
				const data = {
					daoID ,
					leaveAddress : reax_wallet.account.address ,
				};
				const signature = await reax_sign.signByFakeWallet( data );
				return fetch_user_leave_DAO( {
					data ,
					address : reax_wallet.account.address,
					signature,
				} ).then(() => {
					reax_joined_DAO_list.set_joined_DAO_list( reax_joined_DAO_list.joined_DAO_list.filter( ( DAOinfo ) => DAOinfo.daoID !== daoID ) );
				});
			} ,
			
		};
	};
}();

import {
	fetch_user_join_DAO ,
	fetch_user_leave_DAO,
} from '@@requests';
import { reaxel_joined_DAO_list } from '@@reaxes/DAO/joined-DAO-list';
import {reaxel_user_sign_login,} from '@@reaxes/authurize';
import {reaxel_wallet,} from '@@reaxes/wallet';
import { reaxel_sign } from '@@reaxes/authurize/signer';
