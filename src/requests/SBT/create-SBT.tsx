export const request__create_SBT = (payload:PayloadBody<FormData>) => {
	
	return request.post<create_SBT.response,typeof payload>(`/sbt/create-sbt`,{
		body : payload,
	});
};

import { create_SBT } from './type';
