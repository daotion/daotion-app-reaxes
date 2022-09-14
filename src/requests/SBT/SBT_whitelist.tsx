export const request__SBT_whitelist = (payload : PayloadBody<SBT_whitelist.payload>) => {
	
	return request.post<SBT_whitelist.response , typeof payload>(`/` , {
		body : payload ,
	});
};


import { SBT_whitelist } from './type';
