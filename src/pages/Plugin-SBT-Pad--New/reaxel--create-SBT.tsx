/**
 * 暂时仅支持白名单模式
 * white-list-mode:
 */

export const reaxel__SBT_Pad_New = function(){
	let ret;
	const reax_DDF = reaxel_DDF();
	const reax_wallet = reaxel_wallet();
	const reax_user = reaxel_user();
	const {
		store ,
		setState ,
	} = orzMobx({
		select__SBT_type : null ,
		input__SBT_name : null as string ,
		textarea__description : null as string ,
		select__SBT_eligible : null ,
		/*每个用户可持有的最大数量*/
		input_number__litmit_of_each_address : null as string ,
		/*发行总量-无限开关*/
		switch__issuance_quantity_infinity : false ,
		/*发行总量-数量*/
		input__issuance_quantity_number : '1' as string ,
		/*是否可被发行方撤回*/
		switch__revoke_by_issuer : false ,
		/*是否可被持有者销毁*/
		switch__burned_by_holder : false ,
		
		input_pair__properties : [
			{
				key : '' ,
				value : '' ,
				react_key : Math.random() ,
			} ,
		] as { key : string, value : string; react_key : number | string }[] ,
		
		select__network_chainID : null ,
		/*是否冻结交互状态*/
		pending : false ,
	});
	
	const validators = {
		select__SBT_type : (value : string) => {
			if( !value ) return false;
			return true;
		} ,
		input__SBT_name : (value : string) => {
			if( !value ) {
				return false;
			}
			return true;
		} ,
		select__SBT_eligible : () => {} ,
		select__network_chainID : (value : string , requestChange = false) => {
			if( !value ) {
				return false;
			}
			
			const reax_wallet = reaxel_wallet();
			console.log([ value , reax_wallet.chain.id ]);
			if( value !== reax_wallet.chain.id ) {
				requestChange && reax_wallet.selectChain({ chainId : value }).then((result) => {
					setTimeout(() => {
						reaxel_validate__select__network_chainID(store.select__network_chainID).validate();
					} , 300);
				});
				return false;
			}
			return true;
		} ,
		input_number__litmit_of_each_address : () => {} ,
	};
	
	const reaxel_validate__select__SBT_type = reaxel_fact__validation(validators.select__SBT_type);
	const reaxel_validate__input__SBT_name = reaxel_fact__validation(validators.input__SBT_name);
	const reaxel_validate__select__network_chainID = reaxel_fact__validation(validators.select__network_chainID);
	
	const validate = async () => {
		reaxel_validate__select__SBT_type(store.select__SBT_type).validate();
		reaxel_validate__input__SBT_name(store.input__SBT_name).validate();
		reaxel_validate__select__network_chainID(store.select__network_chainID , true).validate();
	};
	
	const fetchCreateSBT = async (spaceID:number) => {
		const data : create_SBT.payload['data'] = {
			spaceID ,
			type : store.select__SBT_type ,
			desc : store.textarea__description ,
			features : store.input_pair__properties.map((property) => JSON.stringify(_.omit(property , 'react_key'))) ,
			conditionData : [ store.select__SBT_eligible ] ,
			createAddress : reax_wallet.account.address ,
			timestamp : await request_server_timestamp() ,
		};
		
		const payload = async () : Promise<FormData> => {
			return formater({
				address : reax_wallet.account.address ,
				data ,
				signature : await reax_user.signByFakeWallet((
					data
				)) ,
				file : reax_DDF.file ,
			}) as FormData;
		};
		
		return request__create_SBT(payload).then((res) => {
			crayon.green(res);
			return res;
		}).catch((rej):never => {
			crayon.red(rej);
			throw rej;
		});
	};
	
	const contractCreateSBT = async (spaceAddress:string,metadataUrl:string,orderID:number) => {
		if( !reax_wallet.account ) {
			await reax_wallet.connectWallet();
		}
		if( !reax_user.fake_wallet_store.logged_in ) {
			await reax_user.loginWithUserWallet();
		}
		const contract = new ethers.Contract(CreateSBTAddress , CreateSBTAbi , reax_wallet.web3Provider);
		const contractWithSigner = contract.connect(reax_wallet.web3Provider.getSigner(reax_wallet.account.address));
		const limit_of_each_address = store.switch__issuance_quantity_infinity ? "0" : store.input_number__litmit_of_each_address;
		crayon.blue('contractWithSigner.createSbt',[spaceAddress,
			0x01 || metadataUrl,
			orderID,
			store.input__SBT_name,
			store.select__SBT_type,
			parseInt(limit_of_each_address),
			parseInt(store.input_number__litmit_of_each_address),
			store.switch__revoke_by_issuer,
			store.switch__burned_by_holder,]);
		return contractWithSigner.createSbt(
			spaceAddress,
			0x01 || metadataUrl,
			orderID,
			store.input__SBT_name,
			store.select__SBT_type,
			parseInt(limit_of_each_address),
			parseInt(store.input_number__litmit_of_each_address),
			store.switch__revoke_by_issuer,
			store.switch__burned_by_holder,
		).then(({hash,receipt}) => {
			return reax_wallet.web3Provider.waitForTransaction( hash , 1 ).
			then( () => {
				
				antd.Modal.success( {
					title : "transaction success !" ,
				} );
			} );
		});
	};
	
	
	return () => {
		
		return ret = {
			get store(){
				return store;
			} ,
			get enum__SBT_type(){
				return enum__SBT_type;
			} ,
			get enum__SBT_eligible(){
				return enum__SBT_eligible;
			} ,
			get enum_chains(){
				return reaxel_wallet().chains;
			} ,
			get validations(){
				return {
					select__SBT_type : reaxel_validate__select__SBT_type(store.select__SBT_type).valid ,
					input__SBT_name : reaxel_validate__input__SBT_name(store.input__SBT_name).valid ,
					select__network_chainID : reaxel_validate__select__network_chainID(store.select__network_chainID).valid ,
				};
			} ,
			validate ,
			setFields(partialState : Partial<typeof store>){
				setState(partialState);
			} ,
			async createSBT(spaceID : number){
				setState({ pending : true });
				const {spaceAddress,metadataUrl,orderID} = await fetchCreateSBT(spaceID);
				
				await contractCreateSBT(spaceAddress,metadataUrl,orderID);
				setState({ pending : false });
			} ,
		};
	};
}();


import { ethers } from "ethers";
import {
	CreateSBTAddress ,
	SpaceFactoryAddress ,
} from '@@common/contract/address';
import {
	CreateSBTAbi ,
	SpaceFactoryAbi ,
} from '@@common/contract/abi';
import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File/reaxel-DDF';
import { reaxel_wallet } from '@@reaxels/wallet/wallet';
import { reaxel_fact__validation } from '@@pages/Test/Validation-Fields/reaxel-fact--validations';
import { reaxel_user } from '@@reaxels/user/auth';
import {
	create_SBT ,
	request__create_SBT ,
	request_server_timestamp ,
} from '@@requests';


export const enum__SBT_type = [
	"Title" ,
	"Work certificate" ,
	"Honorary certificate" ,
	"Business cooperation" ,
	"Event tickets" ,
	"Membership card" ,
];

export const enum__SBT_eligible = [
	{
		desc : "White list addresses" ,
		access_ID : "whitelist" ,
	} ,
];

/*递归对象转换成data[subKey][subsubkey]的formdata*/
const formater = (source , formdata = null , parentKey : string = null) => {
	return _.keys(source).
	reduce((formdata , key : string) => {
		const value = source[key];
		if( _.isObject(value) && Object.getPrototypeOf(value) !== File.prototype ) {
			formater(value , formdata , parentKey ? `${ parentKey }[${ key }]` : key);
		} else {
			if( !_.isNaN(parseInt(key)) ) {
				formdata.append(parentKey ? `${ parentKey }[]` : key , value);
			} else {
				formdata.append(parentKey ? `${ parentKey }[${ key }]` : key , value);
			}
		}
		return formdata;
	} , formdata ?? new FormData);
};
