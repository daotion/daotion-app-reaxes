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
		input__SBT_name : null as string,
		textarea__description : null as string,
		select__SBT_access : null ,
		input_number__hold_limit_number : null as string,
		input_issuance_quantity : null as string|number ,
		
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
			get enum_chains (){
				return reaxel_wallet().chains;
			},
			setFields(partialState: Partial<typeof newSBT_store>){
				setState( partialState );
			},
			async createSBT(){
				
			},
		};
	};
}();

import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File';
import { reaxel_wallet } from '@@reaxels/wallet/wallet';

export const enum__SBT_type = [
	"Title",
	"Work certificate",
	"Honorary certificate",
	"Business cooperation",
	"Event tickets",
	"Membership card",
];


