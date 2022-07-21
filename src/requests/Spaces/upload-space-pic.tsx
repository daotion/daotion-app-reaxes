const upload = (iconType : "bannber" | "avatar") => {
	
	return (payload:Space__upload_pics.payload) => request.post<Space__upload_pics.response,Space__upload_pics.payload>(`/space/space-upload-icon`,{
		body : payload ,
	});
};

import { Space__upload_pics } from './types';

export const request_upload_space_banner = upload('bannber');
export const request_upload_space_avatar = upload('avatar');
