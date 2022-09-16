export const request__SBT_whitelist = (payload : PayloadBody<SBT_whitelist.payload>) => {
	
	return request.post<SBT_whitelist.response , typeof payload>(`/sbt/sbt-whitelist` , {
		body : payload ,
	}).then((response) => {
		return {
			...response ,
			whitelist : response.whitelist.map((item) => (
				{
					...item ,
					editing : false ,
					modifiedOffset : 0 ,
				}
			)) ,
		};
	});
};


import { SBT_whitelist } from './type';
