/**
 * 用户登录相关接口
 */
export const request_user_login = (
	payload: PayloadBody<User__login.payload>) => {
	return request.post(`/login/`, {
		body: payload,
	}).then((res) => {
		return res
	})
}



import {User__login } from './type'