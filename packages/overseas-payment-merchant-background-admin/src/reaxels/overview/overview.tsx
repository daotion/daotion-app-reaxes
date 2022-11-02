export const reaxel_overview = function(){
	let ret;
	const initialState = {
		withdrawModalShow : false ,
		overviewInfo : {} as any ,
		fin_detail_list : [] as Overview__fin_detail.response['listInfo'] ,
		withdrawApplyMoney : '' as any ,
		withdrawMaxMoney : 0,
		
	};
	const { store , setState } = orzMobx(initialState);
	const { message } = antd;
	const [fetchOverviewInfo] = Reaxes.closuredMemo(async () => {
		return request_overview_info().then((res) => {
			setState({
				overviewInfo: res
			})
		}).catch((e) => {
			message.error(e);
		});
	}, () => []);
	
	const [fetchFinDetail] = Reaxes.closuredMemo( async () => {
		return request_fin_detail(async () => {
			return {
				indexStart : 0,
				count : 999999,
				firstTimestamp : 0,
			}
		}).then((data) => {
			setState({
				fin_detail_list: data.listInfo
			})
		})
	}, () => [])
	
	const [fetchMaxWithdrawMoney] = Reaxes.closuredMemo(async () => {
		return request_withdraw_max_money().then((res) => {
			setState({
				withdrawMaxMoney: res.withdrawReceipt
			})
		})
	}, () => [])
	const withdrawApply = async () => {
		const { withdrawApplyMoney = 0, overviewInfo: {address} } = store;
		return request_withdraw_apply(async () => {
			return {
				money : withdrawApplyMoney,
				address
			}
		}).then((res) => {
			if (res === 0) {
				message.success('申请成功');
			} else {
				message.error('余额不足');
			}
		}).catch((e) => {
			message.error('申请失败' + e)
		})
	}
	
	return () => {
		return ret = {
			get withdrawModalShow(){
				return store.withdrawModalShow;
			} ,
			get setstateOverview(){
				return setState;
			} ,
			
			get overviewInfo(){
				return store.overviewInfo;
			},
			get fin_detail_list(){
				return store.fin_detail_list;
			} ,
			fetchOverviewInfo(badge){
				return fetchOverviewInfo(() => [ badge ])();
			} ,
			fetchFinDetail(badge){
				return fetchFinDetail(() => [ badge ])();
			} ,
			
			get withdrawApplyMoney(){
				return store.withdrawApplyMoney;
			},
			withdrawApply(){
				withdrawApply();
			},
			fetchMaxWithdrawMoney(badge){
				return fetchMaxWithdrawMoney(() => [ badge ])();
			},
			
			
			get withdrawMaxMoney () {
				return store.withdrawMaxMoney;
			}
			
			
			
		};
	}
}();

import {
	request_overview_info ,
	request_fin_detail ,
	Overview__fin_detail ,
	request_withdraw_apply ,
	request_withdraw_max_money,
} from '@@requests';

