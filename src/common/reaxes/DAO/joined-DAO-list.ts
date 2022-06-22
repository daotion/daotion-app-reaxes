import { fetch_DAO_joined_DAO_list } from '@@requester/preset-interface/DAO';
import { DAO__joined_DAO_list } from '@@requester/preset-interface/DAO/types';
import { reaxel_login } from '@@reaxes/authurize/user';

export const reaxel_joined_DAO_list = ( lifecycle : Lifecycle ) => {
	let ret;
	const { logginPromise } = reaxel_login( lifecycle );
	const {
		store ,
		setState ,
	} = orzMobx<{
		joined_dao_list : DAO__joined_DAO_list.response['infos'];
		loading : boolean;
	}>( {
		joined_dao_list : [] ,
		loading : true ,
	} );
	
	lifecycle.mounted( () => {
		console.log( 'ggggggggggggg' );
		ret.setJoined_DAO_list();
	} );
	
	return ret = {
		get joined_DAO_list() {
			return store.joined_dao_list;
		} ,
		setJoined_DAO_list() {
			console.log( 'gggggggggggggg' );
			logginPromise.then((e) => {
				console.error( e );
			})
			
			
			
			logginPromise.
			then(() => fetch_DAO_joined_DAO_list()).
			then( ( data ) => setState( {
				joined_dao_list : data.infos ,
			} ) ).
			catch((e) => {
				console.error( e );
			});
		} ,
	};
};
