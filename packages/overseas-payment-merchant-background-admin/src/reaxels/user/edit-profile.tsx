import { message } from "antd";


export const reaxel_edit_info = function(){
	let ret;
	const __storage_key__auth/*用户登录的token*/ = `-mch-auth-token-`;
	const {store, setState} = orzMobx({
		currentTab: 'userInfo'
	})
	const { store: resetPwdStore, setState: setStatePwd } = orzMobx({
		pending: false,
		oldPassword : '',
		newPassword : '',
		checkPassword : '' ,
	})
	
	const {store: setApiStore, setState: setStateApi} = orzMobx({
		pending : false,
		apiPayInReturnUrl : '',
		apiPayOutReturnUrl : '',
		apiPayOutWhiteList : [],
		apiWithdrawAdd: '',
		apiSetModalShow: false,
		apiSetModalKey : '',
	})
	// 修改密码方法
	const modify = async () => {
		const {oldPassword, newPassword,} = resetPwdStore;
		const reax_storage  = reaxel_storage()
		const { message } = antd;
		
		setStatePwd({
			pending : true ,
		});
		return request_modify_password(async () => ({
				oldPassword: crypto.MD5(oldPassword).toString(),
				newPassword: crypto.MD5(newPassword).toString()
			}
		)).then((res) => {
			setStatePwd({
				pending : false ,
			});
			reax_storage.set(__storage_key__auth , res.newToken );
			
		}).catch((e) => {
			setStatePwd({
				pending : false ,
			});
			message.error(e)
		})
	}
	
	// 修改Api方法
	const setApiConfig = async () => {
		
		setStateApi({
			pending : true ,
		});
		return request_user_api_set(async () => {
			return {
				payInCallback : setApiStore.apiPayInReturnUrl,
				payOutCallback : setApiStore.apiPayOutReturnUrl,
				payOutWhitelist : JSON.stringify(setApiStore.apiPayOutWhiteList),
				address : setApiStore.apiWithdrawAdd,
			}
		}).then((res) => {
			setStateApi({
				pending : false ,
			});
		}).catch((e) => {
			setStateApi({
				pending: false
			})
		})
	}
	
	
	return ( ) => {
		return ret = {
			get resetPwdStore(){
				return resetPwdStore
			},
			get currentTab(){
				return store.currentTab;
			},
			changeTab (tabValue: string) {
				setState({
					currentTab : tabValue,
				})
			},
			get setStatePwd(){
				return setStatePwd;
			} ,
			get setStateApi(){
				return setStateApi;
			},
			
			modifyPwd(){
				modify().then(() => {
				});
			} ,
			setApiConfig(){
				setApiConfig().then(() => {
					setStateApi({
						apiSetModalShow : false ,
						apiSetModalKey : '' ,
					});
				})
			}
		};
	}
}();

import { request_modify_password, request_user_api_set } from "@@requests";
import { reaxel_storage } from '#reaxels';
import crypto from 'crypto-js';
import { orzMobx } from "reaxes";
