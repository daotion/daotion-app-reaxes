export const reaxel_overview_info = function(){
	let ret;	
	/*
	* 首页基本信息
	* 资金明细信息
	*/
	const {store, setState } = orzMobx({
		overviewInfo : null as any ,
		fin_detail_list : null as any ,
		
	})
	const {
		pendingState: overviewInfoPendingState,
		setPending: setOverviewInfoPending,
	} = toolkits.orzPending()
	const {
		pendingState: finDetailPendingState,
		setPending: setFinDetailPending,
	} = toolkits.orzPending()


	const {grasp:fetchFinDetail} = reaxel_fact__prevent_dup_request((preventDup) => async (path) => {
		const fetchMap = {
			"account-fin-detail" : request_account_fin_detail,
			"service-fin-detail" : request_service_fin_detail,
		};
		setFinDetailPending(true);
		return fetchMap[path](async () => {
			return {
				indexStart : 0,
				count : 999999,
				firstTimestamp : 0,
			}
		}).then((data) => {
			preventDup(() => {
				setState({
					fin_detail_list : data.listInfo,
				})
				setFinDetailPending(false);
				currentPath = path;
				
			});
			return data;
		}).catch((e) => {
			preventDup(() => {
				setFinDetailPending(false);
			});
			throw e;
		});
	})();
	
	const [fetchOverviewInfo] = Reaxes.closuredMemo(async () => {
		if(overviewInfoPendingState.pending) return;
		setOverviewInfoPending(true)
		return request_overview_info().then((res) => {
			setState({
				overviewInfo : res ,
			});
			setOverviewInfoPending(false)
		})
	}, () => []);
	
	const [closureFetch] = Reaxes.closuredMemo( async (path) => {
		fetchFinDetail(path)
	}, () => [])
	
	/**
	 * 提现相关信息及方法
	 */
	const { store: withdrawStore , setState: withdrawSetState } = orzMobx({
		withdrawApplyMoney : '' as any ,
		pending : false,
		
	});
	const {
		pendingState: withdrawPendingState,
		setPending: setWithdrawPending
	}  = toolkits.orzPending()
	
	const withdrawApply = async () => {
		const { withdrawApplyMoney = '', pending} = withdrawStore;
		const { overviewInfo : { address } } = store;
		if (pending) return;
		setWithdrawPending(true);
		return request_withdraw_apply(async () => {
			return {
				money : + withdrawApplyMoney ,
				address ,
			};
		}).then((res) => {
			setWithdrawPending(false);
			withdrawSetState({
				withdrawApplyMoney : '',
			})
			ret.fetchOverviewInfo();
		}).catch(() => {
			setWithdrawPending(false);
			throw {
				msg: '操作失败'
			}
		})
	}
	
	let currentPath;
	return (path?) => {
		return ret = {

			get overviewInfo(){
				return store.overviewInfo;
			},
			get overviewInfoPending(){
				return overviewInfoPendingState.pending;
			},
			get finDetailPending(){
				return finDetailPendingState.pending;
			},
			get fin_detail_list(){
				Reaxes.collectDeps(store);
				if(path && (path !== currentPath)) return [];
				if (finDetailPendingState.pending) return [];
				return store.fin_detail_list;
			} ,
			fetchOverviewInfo(){
				return fetchOverviewInfo(() => [store.overviewInfo == null ? Symbol():store.overviewInfo?.mchNo])();
			} ,
			fetchFinDetail(path){
				return closureFetch(() => [ path ])(path);
			} ,
			// 提现方法
			get withdrawStore(){
				return withdrawStore;
			} ,
			get withdrawPending(){
				return withdrawPendingState.pending
			},
			get withdrawSetState(){
				return withdrawSetState;
			},
			withdrawApply(){
				return  withdrawApply();
			},
			
			
		};
	}
}();

import {
	request_overview_info ,
	request_account_fin_detail ,
	request_service_fin_detail ,
	request_withdraw_apply ,

} from '@@requests';
import { reaxel_fact__prevent_dup_request } from '#reaxels';

