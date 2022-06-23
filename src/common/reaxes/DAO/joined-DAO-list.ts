import { fetch_DAO_joined_DAO_list } from '@@requester/preset-interface/DAO';
import { DAO__joined_DAO_list } from '@@requester/preset-interface/DAO/types';
import { reaxel_login } from '@@reaxes/authurize/user';
import { reaxel_disconnect } from '@@reaxes/authurize/disconnect';

export const reaxel_joined_DAO_list = ( lifecycle : Lifecycle ) => {
	let ret;
	const {memedLogin} = reaxel_login( lifecycle );
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
	const {store:_store } = reaxel_disconnect();
	
	const set_joined_DAO_list = () => {
		fetch_DAO_joined_DAO_list().
		then( ( data ) => setState( {
			joined_dao_list : data.infos ,
		} ) ).
		catch((e) => {
			console.error( e );
		});
	};
	const empty_joined_DAO_list = () => {
		setState( {
			joined_dao_list : [] ,
		} );
	};
	
	memedLogin( ( is_logged_in : boolean ) => {
		if ( is_logged_in ) {
			set_joined_DAO_list();
		} else {
			empty_joined_DAO_list();
		}
	} );
	
	// lifecycle.mounted( () => {
	// 	set_joined_DAO_list();
	// } );
	
	
	
	return ret = {
		get joined_DAO_list() {
			return store.joined_dao_list;
		} ,
		set_joined_DAO_list ,
		empty_joined_DAO_list,
	};
};
