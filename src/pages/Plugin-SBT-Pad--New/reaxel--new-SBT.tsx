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
		/*发行总量-无限开关*/
		switch_issuance_quantity : null as string|number ,
		/*发行总量-数量*/
		input_issuance_quantity : null as string|number ,
		
		select_network_chainID : null ,
		
		select_features : [] ,
		/*是否冻结交互状态*/
		pending : false ,
	} );
	
	const validators = {
		select__SBT_type : (value:string) => {
			if(!value) return false;			
			return true;
		},
		input__SBT_name : (value:string) => {
			if(!value) {
				return false;
			} else {
				return true;
			}
		},
		select__SBT_access : () => {},
		input_number__hold_limit_number : () => {},
	};
	
	const reaxel_validate__select__SBT_type = reaxel_fact__validation( validators.select__SBT_type );
	
	const validate = async () => {
		reaxel_validate__select__SBT_type(newSBT_store.select__SBT_type).validate();
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
			get validations (){
				return {
					select__SBT_type : reaxel_validate__select__SBT_type(newSBT_store.select__SBT_type).valid,
				}
			},
			validate,
			setFields(partialState: Partial<typeof newSBT_store>){
				setState( partialState );
			},
			async createSBT(){
				
			},
		};
	};
}();

import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File/reaxel-DDF';
import { reaxel_wallet } from '@@reaxels/wallet/wallet';
import { reaxel_fact__validation } from '@@pages/Test/Validation-Fields/reaxel-fact--validations';

export const enum__SBT_type = [
	"Title",
	"Work certificate",
	"Honorary certificate",
	"Business cooperation",
	"Event tickets",
	"Membership card",
];

export const enum__SBT_access = [
	{
		desc : "White list addresses" ,
		access_ID : "whitelist" ,
	},
];

