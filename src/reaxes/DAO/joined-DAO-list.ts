import { fetch_DAO_joined_DAO_list } from '@@requests/DAO';
import { DAO__joined_DAO_list } from '@@requests/DAO/types';
import { reaxel_wallet } from '@@reaxes/wallet/wallet';

export const reaxel_joined_DAO_list = function(){
	
	
	let ret;
	const {
		store ,
		setState ,
	} = orzMobx<{
		joined_DAO_list : DAO__joined_DAO_list.response['infos'];
		loading : boolean;
	}>( {
		joined_DAO_list : [] ,
		loading : true ,
	} );
	
	
	const { address_memoed_reaction } = reaxel_wallet();
	
	address_memoed_reaction((address) => {
		if(typeof address === "string" && address){
			ret?.request_joined_DAO_list( address );
		}else {
			ret?.empty_joined_DAO_list?.();
		}
	});
	
	return () => {
		
		
		const request_joined_DAO_list = (address:string) => {
			fetch_DAO_joined_DAO_list(address).
			then( ( data ) => setState( {
				joined_DAO_list : data.infos ,
			} ) ).
			catch((e) => {
				console.error( e );
				throw e;
			});
		};
		const empty_joined_DAO_list = () => {
			setState( {
				joined_DAO_list : [] ,
			} );
		};
		
		return ret = {
			get joined_DAO_list():DAO__joined_DAO_list.response["infos"] {
				return store.joined_DAO_list;
			} ,
			request_joined_DAO_list ,
			set_joined_DAO_list (joined_DAO_list){
				setState( {
					joined_DAO_list ,
				} );
			} ,
			empty_joined_DAO_list,
		};
	};
}()
