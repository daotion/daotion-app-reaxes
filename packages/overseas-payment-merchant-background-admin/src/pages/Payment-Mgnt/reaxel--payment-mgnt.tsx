export const reaxel_payment_mgnt = function(){
	const { store , setState } = orzMobx({
		payment_application_list : [],
		
	});
	
	const fetchPaymentOrderList = async () => {
		return request_payment_mgnt_list(async function(){
			return {
				indexStart : 0 ,
				count : 999999 ,
				firstTimestamp : 0 ,
				orderID : null ,
				/*通用接口,写1是取待审核的订单*/
				orderState : 1 ,
				createTimestampBegin : null ,
				createTimestampEnd : null ,
				updateTimestampBegin : null ,
				updateTimestampEnd : null ,
			};
		}).then((data) => {
			setState({ payment_application_list : data.orderList });
		});
	};
	const [closuredFetchPaymentMgntList,clearDeps] = Reaxes.closuredMemo(() => {
		return fetchPaymentOrderList();
	} , () => []);
	
	const conductApplication = async (orderID,instruction:boolean) => {
		return request_conduct_payment_application(async function(){
			return {
				orderID ,
				agree : instruction ,
			};
		}).then(() => {
			antd.message.success(`处理成功!`);
			setState({
				payment_application_list : store.payment_application_list.filter((item) => {
					return item.orderID !== orderID;
				}),
			});
		}).catch((e) => {
			console.log(e);
			
			antd.message.error(e.message);
		});
	};
	
	return () => {
		
		return {
			get paymentApplicationList(){
				return store.payment_application_list;
			},
			fetchPaymentOrderList(badge){
				return closuredFetchPaymentMgntList(() => [ badge ])();
			},
			conductApplication ,
			
			
		};
	};
}();
import {
	request_payment_mgnt_list ,
	request_conduct_payment_application,
} from '@@requests';
