
export const reaxel_user_info = function(){
	let ret;
	const { store , setState } = orzMobx({
		loading: false as {promise : Promise<any> } | false,
		userInfo: null as User__info.response,
		currentTab: 'userInfo'
	});

	const reax_user_auth = reaxel_user_auth();
	const { isLoggedIn } = reax_user_auth

	//监听是否登录
	Reaxes.observedMemo(() => {
		if( isLoggedIn ) {
			getUserInfo()
		} else {

		}
	} , () => [ isLoggedIn ]);

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
			get currentTab(){
				return store.currentTab;
			},
			getUserInfo(){
				getUserInfo()
			},
			changeTab (tabValue: string) {
				setState({
					currentTab: tabValue
				})
			}

		}
	}


}()


import { reaxel_user_auth } from './auth';
import { request_user_info } from '@@requester';
import { User__info } from "../../requester/user/type";
