import { Space__edit_space_social_list } from './types';

export const request_edit_space_social_list = (payload:PayloadBody<Space__edit_space_social_list.payload>) => {
	
	return request.post<Space__edit_space_social_list.response , typeof payload>( '/space/space-social-links-modify' , {
		body : payload ,
	} );
}
