import {
	User__profile_info ,
	User__update_profile ,
	User__upload_avatar ,
} from './types';


export const request_user_profile = ( payload : PayloadBody<User__profile_info.payload> ) => {
	return request.post<User__profile_info.response , typeof payload>( `/user/user-profile-detail` , {
		body : payload ,
	} ).
	then( ( res ) => {
		return res;
	} );
};


export const request_user_update_profile = (
	payload : PayloadBody<User__update_profile.payload> ,
) => {
	return request.post( `/user/user-update-profile` , {
		body : payload ,
	} );
};

export const request_user_upload_avatar = (
	payload : PayloadBody<User__upload_avatar.payload> ,
) => {
	return request.post<User__upload_avatar.response>( `/user/user-upload-avatar` , {
		body : payload ,
	} );
};
