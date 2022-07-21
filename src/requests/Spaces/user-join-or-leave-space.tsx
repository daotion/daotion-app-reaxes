import {Space__user_join_space,Space__user_leave_space} from './types';


export const request_user_join_space = (join_space_info:Space__user_join_space.payload) => {
	
	
	return request.post<Space__user_join_space.response , Space__user_join_space.payload>( '/user/user-join-space' , {
		body : join_space_info,
	} );
};

export const request_user_leave_space = (leave_space_info:Space__user_leave_space.payload) => {
	
	
	return request.post<Space__user_leave_space.response , Space__user_leave_space.payload>( '/user/user-leave-space' , {
		body : leave_space_info ,
	} );
};
