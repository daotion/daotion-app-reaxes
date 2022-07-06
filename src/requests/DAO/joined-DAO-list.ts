import { DAO__joined_DAO_list } from './types';


export const fetch_DAO_joined_DAO_list = (address:string) => {
	
	
	return request.post<DAO__joined_DAO_list.response , DAO__joined_DAO_list.payload>( '/user/joined-dao-list' , {
		env : "server_dev" ,
		body : {
			address
		}
	} ).
	then( ( data ) => {
		return data;
	} ).
	catch( ( e ) => {
		console.error( e );
		throw e;
	} ) as Promise<DAO__joined_DAO_list.response>;
};
