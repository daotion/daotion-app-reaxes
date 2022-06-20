/**
 * 获取
 * @param DAOID
 */
export const fetch_DAO_detail = ( DAOID : number ) => request.post( `/dao/dao-detail` , {
	body : {
		id : DAOID ,
	},
} ).
then( ( data ) => {
	return data;
} ).
catch( () => {
	throw '获取DAO详情信息失败!code:SG687NJH';
} );
