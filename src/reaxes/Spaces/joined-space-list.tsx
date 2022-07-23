import { request_user_joined_space_list } from '@@requests/Spaces';
import { Space__user_joined_Space_list } from '@@requests/Spaces/types';
import { reaxel_wallet } from '@@reaxes/wallet/wallet';
import { reaxel_user_join_or_leave_space } from '@@reaxes/Spaces/user-join-or-leave-space';


export const reaxel_joined_Space_list = function () {
	
	
	let ret;
	const {
		store ,
		setState ,
	} = orzMobx<{
		joined_space_list : Space__user_joined_Space_list.response['infos'];
		loading : boolean;
	}>( {
		joined_space_list : [] ,
		loading : true ,
	} );
	
	
	const { address_memoed_reaction } = reaxel_wallet();
	
	address_memoed_reaction( ( address ) => {
		if ( typeof address === "string" && address ) {
			ret?.fetchUpdate_joined_space_list( address );
		} else {
			ret?.empty_joined_space_list?.();
		}
	} );
	
	return () => {
		
		/*请求并更新加入的space list*/
		const fetchUpdate_joined_space_list = ( address : string ) => {
			return request_user_joined_space_list( async () => ({
				address,
			}) ).
			catch( ( e ):never => {
				console.error( e );
				throw e;
			} ).
			then( ( data ) => setState( {
				joined_space_list : data.infos ,
			} ) );
		};
		/*清空joined space list*/
		const empty_joined_space_list = () => {
			setState( {
				joined_space_list : [] ,
			} );
		};
		
		return ret = {
			get joined_space_list() {
				return store.joined_space_list;
			} ,
			fetchUpdate_joined_space_list ,
			set_joined_space_list( joined_space_list ) {
				setState( {
					joined_space_list ,
				} );
			} ,
			empty_joined_space_list : empty_joined_space_list ,
			
		};
	};
}();
