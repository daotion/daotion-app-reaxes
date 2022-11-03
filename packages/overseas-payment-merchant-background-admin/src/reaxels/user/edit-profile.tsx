import { message } from "antd";


export const reaxel_edit_info = function(){
	let ret;
	const __storage_key__auth/*用户登录的token*/ = `-mch-auth-token-`;
	const { store , setState } = orzMobx({
		currentTab : 'userInfo',
	});

	
	const { store : resetPwdStore , setState : setStatePwd } = orzMobx({
		pending : false ,
		oldPassword : '' ,
		newPassword : '' ,
		checkPassword : '' ,
	});
	
	const { store : setApiStore , setState : setStateApi } = orzMobx({
		pending : false ,
		payInCallback : '' ,
		payOutCallback : '' ,
		payOutWhitelist :'',
		address : '' ,
		apiSetModalShow : false ,
		apiSetModalKey : 'payInCallback' ,
	});
	// 修改密码方法
	const modify = async () => {
		const { oldPassword , newPassword  } = resetPwdStore;
		const reax_storage = reaxel_storage();
		const { message } = antd;
		
		setStatePwd({
			pending : true ,
		});
		return request_modify_password(async () => (
			{
				oldPassword : crypto.MD5(oldPassword).toString() ,
				newPassword : crypto.MD5(newPassword).toString(),
			}
		)).then((res) => {
			setStatePwd({
				pending : false ,
			});
			reax_storage.set(__storage_key__auth , res.newToken);
			
		}).catch((e) => {
			setStatePwd({
				pending : false ,
			});
			message.error(e);
		});
	};
	
	// 修改Api方法
	const setApiConfig = async () => {
		
		setStateApi({
			pending : true ,
		});
		return request_user_api_set(async () => {
			return {
				payInCallback : setApiStore.payInCallback ,
				payOutCallback : setApiStore.payOutCallback ,
				payOutWhitelist : JSON.stringify(setApiStore.payOutWhitelist.split(';').filter(i => i !== '')) ,
				address : setApiStore.address ,
			};
		}).then((res) => {
			setStateApi({
				pending : false ,
			});
		}).catch((e) => {
			setStateApi({
				pending : false,
			});
		});
	};
	const reax_user_info = reaxel_user_info()
	
	return () => {
		return ret = {
			get currentTab(){
				return store.currentTab;
			} ,
			changeTab(tabValue : string){
				setState({
					currentTab : tabValue ,
				});
			} ,
			get resetPwdStore(){
				return resetPwdStore;
			} ,
			get setStatePwd(){
				return setStatePwd;
			} ,
			get setApiStore(){
				return setApiStore;
			} ,
			get setStateApi(){
				return setStateApi;
			} ,
			showModal(key){
				let value = '';
				if (key === 'payOutWhitelist') {
					const whiteList = reax_user_info.apiConfig['payOutWhitelist']
					whiteList.forEach((i) => {
						value = value + i + ';'
					})
				} else {
					value = reax_user_info.apiConfig[key];
				}
				setStateApi({
					apiSetModalShow : true ,
					apiSetModalKey : key ,
					[key]: value
				});
			} ,
			
			modifyPwd(){
				modify().then(() => {
				});
			} ,
			setApiConfig(){
				setApiConfig().then(() => {
					setStateApi({
						apiSetModalShow : false ,
					});
				});
				reax_user_info.closuredFetchApiConfig(Math.random());
			},
		};
	};
}();

import { request_modify_password, request_user_api_set } from "@@requests";
import { reaxel_user_info } from '@@reaxels/user/profile'
import { reaxel_storage } from '#reaxels';
import crypto from 'crypto-js';
import { orzMobx } from "reaxes";
