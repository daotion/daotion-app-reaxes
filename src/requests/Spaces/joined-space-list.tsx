import { Space__user_joined_Space_list } from './types';


export const request_user_joined_space_list = (address:string) => {
	
	
	return request.post<Space__user_joined_Space_list.response , Space__user_joined_Space_list.payload>( '/user/user-joined-space-list' , {
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
	} ) as Promise<Space__user_joined_Space_list.response>;
};
