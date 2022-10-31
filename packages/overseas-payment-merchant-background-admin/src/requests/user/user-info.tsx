export const request_modify_password = (
	payload : PayloadBody<User__modify_password.payload> ,
) => {
	
	return request.post(`/modify` , {
		body : payload ,
	}).then((res) => {
		return res;
	});
};

export const request_user_info = () => {
	return request.post(`/mch/userinfo` , {
	}).then((res) => {
		return res
	});
};

export const request_user_api = () => {
	return request.post(`/mch/user-api-info` , {}).then((res) => {
		return res
	});
}

import  { User__modify_password, User__info } from './type'