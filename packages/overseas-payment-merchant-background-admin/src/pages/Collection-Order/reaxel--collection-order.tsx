export const reaxel_collection_order = function(){
	const initialSearch = {
		/*以下是表单搜索区域*/
		input_search_orderID : "",
		range_picker_order_created_date : [] ,
		range_picker_order_updated_date : [] ,
		select_order_status : 0 ,
	};
	const initialOrderList = {
		/*表单数据*/
		collection_order_list : [] as Order__collection_order.response["orderList"],
	}
	const { store : store$search , setState : setState$search } = orzMobx(initialSearch);
	const { store : store$orderList , setState : setState$orderList } = orzMobx(initialOrderList);
	
	
	const fetchCollectionOrder = async () => {
		return request_collection_order(async () => {
			return {
				indexStart : 0,
				count : 999999,
				firstTimestamp : 0,
				orderID : store$search.input_search_orderID,
				orderState : store$search.select_order_status,
				createTimestampBegin : null,
				createTimestampEnd : null,
				updateTimestampBegin : null,
				updateTimestampEnd : null,
			} as any;
		}).then((data) => {
			setState$orderList({ collection_order_list : data.orderList });
		});
	}
	
	const [closuredFetch , clearDeps] = Reaxes.closuredMemo(() => {
		fetchCollectionOrder();
	} , () => []);
	
	
	return () => {
		
		return {
			get state$search(){
				return store$search;
			},
			get state$list(){
				return store$orderList;
			},
			get setFields(){
				return setState$search;
			},
			get fetchCollectionOrderList(){
				return closuredFetch(() => [ store$search.input_search_orderID , store$search.select_order_status ]);
			},
			reset(){
				setState$search(initialSearch);
			},
		};
	};
}();

import {
	request_collection_order ,
	Order__collection_order,
} from '@@requests';

