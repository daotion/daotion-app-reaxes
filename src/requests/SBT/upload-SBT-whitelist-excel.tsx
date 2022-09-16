export const request__upload_SBT_whitelist_excel = (payload : PayloadBody<SBT_upload_file_whitelist.payload>) => {
	
	
	return request.post<SBT_upload_file_whitelist.response,typeof payload>(`/sbt/sbt-upload-whitelist-file` , {
		
		body : payload ,
	});
};

import { SBT_upload_file_whitelist } from './type';
