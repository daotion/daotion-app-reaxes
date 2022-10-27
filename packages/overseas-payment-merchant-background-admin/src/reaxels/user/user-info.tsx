
export const reaxel_user_info = function(){
	let ret;
	const { store , setState } = orzMobx({
		loading: false as {promise : Promise<any> } | false,
		userInfo: null,
		currentTab: 'userInfo',
	});

	const reax_user_auth = reaxel_user_auth();


	// 获取user信息
	const getUserInfo = async () => {
		if (store.loading) return;
		setState({
			userInfo: {
				id: '1',
				name: 'mozi',
				contactPerson: 'kane',
				contactPhone: '123123123',
				payInFeeRate: 5,
				payInFeeFix: 2,
				payOutFeeRate : 5,
				payOutFeeFix: 2,
			}
		})
		// setState({
		// 	loading: {
		// 		promise: request_user_info().then ((userInfo : any) => {
		// 			setState({
		// 				userInfo,
		//
		// 			})
		// 		}).finally(() => {
		// 			setState({ loading : false });
		// 		})
		// 	}
		// })
	}
	//监听是否登录
	Reaxes.observedMemo(() => {
		if( reax_user_auth.isLoggedIn ) {
			getUserInfo()
		} else {
		
		}
	} , () => [ reax_user_auth.isLoggedIn ]);


	return () => {
		return ret = {
			get userInfo () {
				return store.userInfo;
			},
			get currentTab(){
				return store.currentTab;
			},
			getUserInfo(){
				getUserInfo();
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
import { request_user_info } from '@@requests';
import { User__info } from "@@requests/user/type";
