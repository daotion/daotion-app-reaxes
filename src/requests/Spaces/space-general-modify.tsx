import { Space__general_modify } from './types';
export const request_space_general_modify = (payload) => {
	
	return request.post<Space__general_modify.payload,Space__general_modify.response>( `/space/space-general-modify` , {
		body : payload ,
	} );
};
