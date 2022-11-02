export const reaxel_overview = function(){
	let ret;
	const initialState = {
		withdrawModalShow : false,
		overviewInfo : {} as any,
		fin_detail_list: [] as Overview__fin_detail.response['listInfo']
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
	
	return () => {
		return ret = {
			get withdrawModalShow(){
				return store.withdrawModalShow;
			},
			changeModalShow(status : boolean){
				setState({
					withdrawModalShow : status ,
				});
			},
			
			fetchOverviewInfo(badge){
				return fetchOverviewInfo(() => [badge])();
			},
			fetchFinDetail(badge){
				return fetchFinDetail(() => [badge])();
			},
		}
	}
}();

import {
	request_overview_info ,
	request_fin_detail ,
	Overview__fin_detail ,
	request_user_api ,
	request_modify_password ,
} from '@@requests';