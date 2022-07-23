/**
 * 使用用户真实钱包私钥签随机假钱包公钥,获取登录状态
 * 
 */
export const request_user_address_alias = (payload:PayloadBody<Authorize__address_alias.payload>) => {
	return request.post( `/user/address-alias` , {
		body : payload ,
	} ).then((res) => {
		if(res.result !== true){
			return Promise.reject( res.result );
		}
		return res.result;
	});
};


import { Authorize__address_alias } from './types';
