/**
 * 使用用户真实钱包私钥签随机假钱包公钥,获取登录状态
 * 
 */
export const fetch_user_address_alias = (payload) => {
	return request.post( `/user/address-alias` , {
		body : payload ,
	} ).then((res) => {
		if(res.result !== true){
			return Promise.reject( res.result );
		}
		return res.result;
	});
};
