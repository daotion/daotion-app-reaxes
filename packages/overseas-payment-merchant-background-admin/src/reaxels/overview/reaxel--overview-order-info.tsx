import { request_overview_order_count } from "@@requests";

export const reaxel_overview_order_info = function(){
	let ret;
	/*
* 首页各个类型订单统计信息
*/
	const { store, setState } = orzMobx({
		collectionOrder : {
			info : {} as any,
			duration: 0
		},
		payoutOrder : {
			info : {} as any,
			duration: 0
		},
		withdrawOrder : {
			info : {} as any,
			duration: 0
		},
		depositOrder: {
			info : {} as any,
			duration: 0
		}
	})
	
	const fetchOrderCount = async (pageType, duration) => {
		return request_overview_order_count(async () => {
			const orderType = enum_overview_order_type.find(i => (i.pagePath === pageType)).type
			return {
				orderType ,
				duration ,
			};
		}).then((res) => {
			setState({
				[pageType]: {
					info : res.countInfo,
					duration
				}
			})
		})
	}
	const [fetchOrderCountClosure ] = Reaxes.closuredMemo(async (pageType, duration) => {
		fetchOrderCount(pageType, duration)
	} , () => []);
	
	return () => {
		return ret = {
			get collectionOrder(){
				return store.collectionOrder
			},
			get payoutOrder(){
				return store.payoutOrder
			},
			get withdrawOrder(){
				return store.withdrawOrder
			},
			get depositOrder(){
				return store.depositOrder
			},
			get_enum_order_list_map(path){
				return {
					"collection-order" : enum_collection_order_status,
					"payment-order" : enum_payment_order_status,
					"withdrawal-order" : enum_withdrawal_order_status,
					"deposit-order" : enum_deposit_order_status,
				}[path];
			},
			get_overview_duration_type () {
				return enum_overview_duration_type
			},
			fetchOrderCount (pageType, duration) {
				return fetchOrderCount(pageType, duration)
			},
			fetchOrderCountClosure( pageType, duration ){
				return fetchOrderCountClosure(() => [pageType])(pageType, duration);
			} ,
		}
	}
}();


import enum_collection_order_status from '@@public/enums/colloection-order-status.json';
import enum_payment_order_status from '@@public/enums/payment-order-status.json';
import enum_withdrawal_order_status from '@@public/enums/withdrawal-order-status.json';
import enum_deposit_order_status from '@@public/enums/deposit-order-status.json';
import enum_overview_duration_type from '@@public/enums/overview-order-duration-type.json';
import enum_overview_order_type from '@@public/enums/overview-order-type.json';