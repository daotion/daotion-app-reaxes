export const request__add_SBT_whitelist = (payload:PayloadBody<SBT_add_whitelist.payload>) => {
	
	
	return request.post<SBT_add_whitelist.response,typeof payload>(`/sbt/sbt-add-whitelist` , {
		body : payload ,
	});
};


import { SBT_add_whitelist } from './type';
