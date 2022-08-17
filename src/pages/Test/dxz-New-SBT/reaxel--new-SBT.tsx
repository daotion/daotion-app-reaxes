/**
 * 暂时仅支持白名单模式
 * white-list-mode: 
 * supply-mode : 
 */

export const reaxel_newSBT = function(){
	let ret;
	const reax_DDF = reaxel_DDF();
	const {
		store : newSBT_store ,
		setState,
	} = orzMobx( {
		select__SBT_type : null ,
		input__SBT_name : null ,
		textarea__description : null ,
		select__SBT_access : null ,
		input_number__hold_limit_number : null ,
		
		/*是否冻结交互状态*/
		pending : false ,
	} );
	
	
	const verifyFields = async () => {
		
	};
	
	return () => {
		
		return ret = {
			get newSBT_store() {
				return newSBT_store;
			} ,
			get enum__SBT_type() {
				return enum__SBT_type;
			} ,
			async createSBT(){
				
			},
		};
	};
}();

import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File';


export const enum__SBT_type = [
	"Title",
	"Work certificate",
	"Honorary certificate",
	"Business cooperation",
	"Event tickets",
	"Membership card",
];


