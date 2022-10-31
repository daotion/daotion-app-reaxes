export const reaxel_user_info = function(){
	let ret;
	const initalState = {
		loading : false as { promise : Promise<any> } | false ,
		userInfo : null ,
		currentTab : 'userInfo' ,
		apiConfig : null ,
	};
	const { store , setState } = orzMobx(initalState);
	
	const reax_user_auth = reaxel_user_auth();
	
	
	// 获取user信息
	const getUserInfo = async () => {
		if( store.loading ) return;
		setState({
			userInfo : {
				id : '1' ,
				name : 'mozi' ,
				contactPerson : 'kane' ,
				contactPhone : '123123123' ,
				payInFeeRate : 5 ,
				payInFeeFix : 2 ,
				payOutFeeRate : 5 ,
				payOutFeeFix : 2 ,
			},
		});
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
	};
	
	// 获取api配置
	const getApiConfig = async () => {
		setState({
			apiConfig : {
				mchKey : '143c4f46240f4e4db07e750cbbf17123' ,
				platformIPS : '3.0.64.107; 54.251.182.101' ,
				payInCallback : 'https://www.test.com' ,
				payOutCallback : 'https://www.test.com' ,
				payOutWhitelist : [
					'192.168.1.1;' , '192.127.0.1' ,
				] ,
				withdrawAdd : 'TF46jFVY4nuxTEdk9t7K4qzC3RA5ZQ49u6' ,
			} ,
			
		});
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
	};
	
	//监听是否登录
	Reaxes.observedMemo(() => {
		if( reax_user_auth.isLoggedIn ) {
			getUserInfo();
			getApiConfig();
		} else {
			setState(initalState);
		}
	} , () => [ reax_user_auth.isLoggedIn ]);
	
	
	return () => {
		return ret = {
			get userInfo(){
				return store.userInfo;
			} ,
			get currentTab(){
				return store.currentTab;
			} ,
			get apiConfig(){
				return store.apiConfig;
			} ,
			
			getUserInfo(){
				getUserInfo();
			} ,
			changeTab(tabValue : string){
				setState({
					currentTab : tabValue,
				});
			} ,
			setApiConfig(key : string , value : string){
				setState({
					apiConfig : {
						...store.apiConfig ,
						[key] : value,
					},
				});
			},
			
		};
	};
	
	
}();


import { reaxel_user_auth } from './auth';
import { request_user_info } from '@@requests';
import { User__info } from "@@requests/user/type";
