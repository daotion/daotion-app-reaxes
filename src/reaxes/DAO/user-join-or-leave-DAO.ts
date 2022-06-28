export const reaxel_user_join_or_leave_DAO = function(){
	
	
	
	
	return (lifecycle:Lifecycle) => {
		const { set_joined_DAO_list , joined_DAO_list } = reaxel_joined_DAO_list( lifecycle );
		return {
			join_DAO( daoID : number ) {
				return fetch_user_join_DAO( daoID ).then((DAOinfo) => {
					set_joined_DAO_list( [
						...joined_DAO_list ,
						DAOinfo ,
					] );
					return DAOinfo;
				});
			} ,
			leave_DAO( daoID : number ) {
				return fetch_user_leave_DAO( daoID ).then(() => {
					set_joined_DAO_list( joined_DAO_list.filter( ( DAOinfo ) => DAOinfo.daoID !== daoID ) );
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
