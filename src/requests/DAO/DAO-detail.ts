/**
 * 获取
 * @param DAOID
 */
import {DAO___inf_DAO_detail} from './types';
export const fetch_DAO_detail = ( DAOID : number ) => request.post<DAO___inf_DAO_detail.response,DAO___inf_DAO_detail.payload>( `/dao/dao-detail` , {
	body : {
		daoID : DAOID ,
	},
} ).
then( ( data ) => {
	return data;
} ).
catch( () => {
	throw '获取DAO详情信息失败!code:SG687NJH';
} );
