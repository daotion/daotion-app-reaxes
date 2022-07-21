import { Space__create_space } from './types';

export const request_create_space = (payload:Space__create_space.payload) => {
	
	return request.post<Space__create_space.response,Space__create_space.payload>('/space/space-create',{
		body : payload,
	}).then((data) => {
		return data.spaceID;
	});
}
