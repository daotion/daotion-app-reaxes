export const reaxel__SBT_settings = function(){
	const initialState = {
		input_search_address : null as string ,
		upload_status : {
			status : null as "success"|"failed"|"pending",
			filename : '' ,
			errorMsg : "" ,
		},
		whitelist : [
			{
				editing : false ,
				modifiedNumber : 1, 
			},
		],
		
	};
	const { store , setState } = orzMobx(initialState);
	
	return () => {
		
		return {
			get SBT_settings_store (){
				return store;
			},
			/*查询全局表单是否被修改过(包括上传过有效的csv)*/
			get fields_modified(){
				
			},
			emptyStatus(){
				setState(initialState);
				
			},
			setFields(partialState:Partial<typeof store>){
				setState(partialState);
			},
			
		};
	};
}();


import { request__SBT_whitelist } from '@@requests';
