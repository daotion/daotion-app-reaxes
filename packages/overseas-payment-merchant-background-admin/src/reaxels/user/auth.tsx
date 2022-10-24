
export const Reaxel_User_auth = function() {
	let ret;
	const { store , setState } = orzMobx({
		pending: false,
		loginData: {
			userName: '',
			password: '',
		},
		modifyData: {
			oldPassword: '',
			newPassword: '',
		},
	});
	const { navigate } = toolkits.useRouter();
	const { message } = antd;
	// 登录方法
	const login = async (data: {
		userName: string,
		password: string
	}) => {
		const {userName = '', password = ''} = data
		setState({
			pending : true ,
		});
		return request_user_login( async () => {
			return request.formater({
				userName,
				password: md5(password)
			})
		}).then((token) => {
			orzLocalstroage.set('token', token)
			setState({
				pending : false ,
			});
			message.success('login success')
			navigate('xxx');
		}).catch((e) => {
			setState({
				pending : false ,
			});
			message.error('login error',e);
		})
	}
	
	// 修改密码方法
	const modify = async (data: {
		oldPassword: string,
		newPassword: string
	}) => {
		const { oldPassword = '' , newPassword = '' } = data;
		setState({
			pending : true ,
		});
		return request_modify_password(async () => {
			return request.formater({
				oldPassword: md5(oldPassword),
				newPassword: md5(newPassword)
			})
		}).then((res) => {
			setState({
				pending : false ,
			});
			message.success('modify success')
			navigate('login'); // 修改成功后跳转登录页
		}).catch((e) => {
			setState({
				pending : false ,
			});
			message.error('modify error', e);
		})
	}
	return () => {
		return ret = {
			get pending() {
				return store.pending
			},
			onLoginInput(key: string, value: string){
				setState({
					loginData : {
						...store.loginData,
						[key]: value
					} ,
					
				});
			},
			onModifyInput(key : string , value : string){
				setState({
					modifyData: {
						...store.modifyData,
						[key]: value
					}
				})
			},
			onLoginClick(){
				login(store.loginData);
			},
			onModifyClick(){
				modify(store.modifyData)
			}
			
			
			
		}
	}
}()

import { orzLocalstroage } from '@@common/storages';
import { request_user_login, request_modify_password }from '@@requester/user/auth'
import md5 from 'crypto-js/md5'