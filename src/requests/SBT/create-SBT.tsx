export const request__create_SBT = (payload:PayloadBody<create_SBT.payload>) => {
	
	return request.post<create_SBT.response,typeof payload>(`/sbt/create-sbt`,{
		body : payload,
	});
};

import { create_SBT } from './type';
