

export const reaxel_edit_info = function(){
	let ret;
	const { store, setState } = orzMobx({
		pending: false,
		modifyData: {
			oldPassword: '',
			newPassword: '',
			checkPassword: ''
		},
		inputSet : {
			'oldPassword' : {
				value : '' ,
				check : '' ,
				
			},
			'newPassword' : {
				value : '' ,
				check : '',
			} ,
			'checkPassword' : {
				value : '' ,
				check : '',
			} ,
			
		},
		currentTab : 'userInfo' ,
		
		
		
	})
	// 修改密码方法
	const modify = async () => {
		
		const { inputSet } = store;


		setState({
			pending : true ,
		});
		return request_modify_password(async () => {
			return {
				oldPassword: md5(inputSet['oldPassword'].value),
				newPassword: md5(inputSet['newPassword'].value)
			}
		}).then((res) => {
			setState({
				pending : false ,
			});
		}).catch((e) => {
			setState({
				pending : false ,
			});
		})
	}
	
	return ( ) => {
		return ret = {
			get inputSet(){
				return store.inputSet
			},
			get currentTab(){
				return store.currentTab;
			},
			changeTab (tabValue: string) {
				setState({
					currentTab: tabValue
				})
			},
			onModifyInput(key : string , value : string){
				const {  inputSet } = store
				setState({
					inputSet: {
						...inputSet,
						[key]: {
							...inputSet[key],
							value: value
						}
					}
				})
			} ,
			
			modifyPassword(callback : () => void){
				
				modify().then(() => {callback()});
			} ,
		};
	}
}();

import { request_modify_password } from "@@requests";
import md5 from "crypto-js/md5";
import { orzMobx } from "reaxes";
