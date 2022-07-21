import { Space__all_space_list } from './types';

export const request_all_spaces_list = (payload:Space__all_space_list.payload) => {
	
	return request.post<Space__all_space_list.response,Space__all_space_list.payload>('/space/space-all',{
		body : payload,
		// env : "server_dev" ,
	}).then((data) => {
		return {
			...data,
			infos : data.infos.map((item) => (
				{ ...item , id : Math.random().toString()  }))
		};
	}).catch((e) => {
		console.error( e );
		return null as Space__all_space_list.response;
	})
};
