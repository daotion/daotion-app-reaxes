import { User__info } from "../../requester/user/type";

export const reaxel_user_info = function(){
	let ret;
	let prevForceUpdate = null;
	const { store , setState } = orzMobx({
		loading: false as {promise : Promise<any> } | false,
		userInfo: null as User__info.response,
	});
	const reaxel_user = reaxel_user_auth()
	
	// 监听是否登录
	Reaxes.observedMemo(() => {
		if( reaxel_user.isLoggedIn ) {
			getUserInfo()
		} else {
		
		}
	} , () => [ reaxel_user.isLoggedIn ]);
	
	// 获取user信息
	const getUserInfo = async () => {
		if (store.loading) return;
		setState({
			loading: {
				promise: request_user_info().then ((userInfo : any) => {
					setState({
						userInfo
					})
				}).finally(() => {
					setState({ loading : false });
				})
			}
		})
	}

	
	return () => {
		return ret = {
			get userInfo () {
				return store.userInfo;
			},
			
			
		}
	}
	
	
}()


import md5 from "crypto-js/md5";
import { reaxel_user_auth } from '@@reaxels'
import { request_modify_password, request_user_info }from '@@requester'
