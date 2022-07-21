/**
 * 通过spaceID获取space detail
 */
import { Space___get_space_detail } from './types';

export const request_space_detail = ( spaceID : number ) => request.post<Space___get_space_detail.response , Space___get_space_detail.payload>( `/space/space-detail` , {
	body : {
		spaceID ,
	} ,
} ).
then( ( data ) => {
	return data;
} ).
catch( () => {
	throw '获取space详情信息失败!code:SG687NJH';
} );
