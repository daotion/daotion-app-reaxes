/**
 * 
 */
import { useNavigate } from "react-router-dom";

export const reaxel_user_auth = function(){
	
	let ret;
	const initialState = {
		pending : false ,
		token : null ,
		isLoggedIn : true ,
	};
	const { store , setState } = orzMobx(initialState);
	// 登录方法
	const [diffedFetchLogin , cleanDeps] = Reaxes.closuredMemo(async (username:string,password:string) => {
		const { code } = await request_user_pre_login(async () => {
			return { username };
		});
		console.log(code);
	} , () => []);
	
	const clearAuthStorage = () => {
		crayon.orange(`auth has been cleared`);
	}
	
	return () => {
		return ret = {
			get pending(){
				return store.pending;
			} ,
			get isLoggedIn(){
				return store.isLoggedIn;
			} ,
			login(username:string,password:string){
				return diffedFetchLogin(() => [username,password])(username,password);
			} ,
			logout(){
				clearAuthStorage();
				setState(initialState);
			},
			
			
		};
	};
}();


import {
	request_user_login ,
	request_user_pre_login,
} from '@@requests';
import md5 from 'crypto-js/md5';
