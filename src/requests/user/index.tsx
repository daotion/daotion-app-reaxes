/**
 * 使用用户真实钱包私钥签随机假钱包公钥,获取登录状态
 * 
 */
export const request_user_address_alias = (payload:PayloadBody<User__address_alias.payload>) => {
	return request.post( `/user/address-alias` , {
		body : payload ,
	} ).then((res) => {
		if(res.result !== true){
			return Promise.reject( res.result );
		}
		return res.result;
	});
};
export const request_user_profile = (payload:PayloadBody<User__profile_info.payload>) => {
	return request.post<User__profile_info.response , typeof payload>( `/user/user-profile-info` , {
		body : payload ,
	} );
};


import {
	User__address_alias ,
	User__profile_info,
} from './types';
