import { DAO__all_DAO_list } from './types';

export const fetch_all_DAO_list = (payload:DAO__all_DAO_list.payload) => {
	
	return request.post<DAO__all_DAO_list.response,DAO__all_DAO_list.payload>('/dao/all-dao',{
		body : payload,
		// env : "server_dev" ,
	}).then((data) => {
		// crayon.purple( 'fetch_DAO_list' , data );
		return {
			...data,
			infos : data.infos.map((item) => (
				{ ...item , id : Math.random().toString()  }))
		};
	}).catch((e) => {
		console.error( e );
		return null as DAO__all_DAO_list.response;
	})
};
