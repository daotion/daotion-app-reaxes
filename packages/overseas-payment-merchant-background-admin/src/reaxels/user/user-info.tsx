
export const reaxel_user_info = function(){
	let ret;
	const { store , setState } = orzMobx({
		loading: false as {promise : Promise<any> } | false,
		userInfo: null,
		currentTab: 'userInfo',
		showBaseInfo: [] as any
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
		let newArr = [];
		const { userInfo } = store;
		const showLabel = {
			id : '商户ID',
			name : '商户名称',
			contactPhone : 'Telegram',
			contactPerson : '联系人',
			payInFeeRate : '代收手续费率',
			payInFeeFix : '代收单比固定手续费',
			payOutFeeRate : '代付手续费率',
			payOutFeeFix : '代付单笔固定手续费',
			
			
		}
		for (let i in userInfo) {
			newArr.push( {
				key: i,
				value: userInfo[i],
				label: showLabel[i]
			})
		}
		setState({
			showBaseInfo: newArr
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
			get showBaseInfo(){
				return store.showBaseInfo
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
import { request_user_info } from '@@requests';
import { User__info } from "@@requests/user/type";
