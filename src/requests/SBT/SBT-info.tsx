/**
 * 请求SBT c端视角详情页
 */


export const request__SBT_info = (payload:PayloadBody<SBT_info.payload>) => {
	
	return request.post<SBT_info.response,typeof payload>( `/sbt/sbt-detail` , {
		body : payload ,
	} );
};
import { SBT_info } from './type';
