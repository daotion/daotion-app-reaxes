export const request__SBT_list = ( payload : PayloadBody<SBT_list.payload> ) => {
	
	return request.post<SBT_list.response , typeof payload>( '/sbt/paged-all-sbt-list' , {
		body : payload ,
	} )
};


import { SBT_list } from '@@requests/SBT/type';
