import {DAO__user_join_DAO,DAO__user_leave_DAO} from './types';


export const fetch_user_join_DAO = (join_DAO_info:DAO__user_join_DAO.payload) => {
	
	
	return request.post<DAO__user_join_DAO.response , DAO__user_join_DAO.payload>( '/user/join-dao' , {
		body : join_DAO_info,
	} );
};

export const fetch_user_leave_DAO = (leave_DAO_info) => {
	
	
	return request.post<DAO__user_leave_DAO.response , DAO__user_leave_DAO.payload>( '/user/leave-dao' , {
		body : leave_DAO_info ,
	} );
};
