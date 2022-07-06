import {DAO__user_join_DAO,DAO__user_leave_DAO} from './types';


export const fetch_user_join_DAO = (daoID:number) => {
	
	
	return request.post<DAO__user_join_DAO.response , DAO__user_join_DAO.payload>( '/user/join-dao' , {
		body : {
			daoID ,
		} ,
	} );
};

export const fetch_user_leave_DAO = (daoID:number) => {
	
	
	return request.post<DAO__user_leave_DAO.response , DAO__user_leave_DAO.payload>( '/user/leave-dao' , {
		body : {
			daoID ,
		} ,
	} );
};
