export const reaxel_mch_dpst_rqst = function(){
	const { store , setState } = orzMobx({
		pending : false ,
		dataList : null ,
		depositMsgList : [] ,
		depositModalVisible : false ,
		depositVerifyModalVisible: false,
		verifyInfo : null as any,
		verifyR : null,
		verifyPending : false
	});
	
	const { checkin,messageTypes,push } = reaxel_msg_notif();
	const { regist_BE_message } = reaxel_BE_message();
	
	regist_BE_message((msg) => {
		if(msg.type === "mch-deposit-rqst") {
			crayon.green(`更新了商户充值列表`);
			push([msg]);
			setState({
				depositMsgList: [...store.depositMsgList, msg]
			})
		}
	});
	
	const setPending = (type,pending) => {
		queueMicrotask(() => {
			setState({
				[type]: pending
			});
		});
	}
	
	
	/*请求充值列表*/
	const [ fetchDepositRqst ] = Reaxes.closuredMemo(() => {
		rqstDeposit()
	}, () => [])
	const rqstDeposit = async () => {
		setPending('pending', true)
		return request_mch_deposit_rqst_list(async () => {
			return {
				indexStart : 0,
				count : 999999,
				firstTimestamp : 0,
				orderID : '',
				// orderState: 0,
				createTimestampBegin : null,
				createTimestampEnd : null,
				updateTimestampBegin : null,
				updateTimestampEnd : null,
			}
			
		}).then((res) => {
			setState({
				dataList: res.orderList
			})
			setPending('pending', false)
			
		})
	}
	
	const closeAllModal = () => {
		setState({
			depositModalVisible: false,
			depositVerifyModalVisible : false,
		})
	}
	
	/*审核充值*/
	const verifyDepositRqst = async (agree) => {
		const { verifyR, verifyInfo } = store;
		const { orderID = '',  } = verifyInfo;
		setPending('verifyPending' , true);
		return request_mch_deposit_rqst(async () => {
			return {
				orderID ,
				agree ,
				money : +verifyR ,
			};
		}).then(() => {
			setPending('verifyPending' , false);
			closeAllModal();
			rqstDeposit();
		}).catch((e) => {
			setPending('verifyPending' , false);
			throw  {
				msg : '操作失败' + e,
			};
			
		});
	};
	
	return () => {
		return {
			checkin(){
				checkin("mch-deposit-rqst");
				rqstDeposit();
				setState({
					depositMsgList :[] ,
				});
			},
			fetchDepositRqst (badge) {
				return fetchDepositRqst(() => [badge])();
			},
			get store(){
				return store;
			},
			get setState(){
				return setState;
			},
			get depositMsgList () {
				return store.depositMsgList
			},
			verifyDepositRqst(agree) {
				return verifyDepositRqst(agree)
			}
		};
	};
}();

import {
	reaxel_msg_notif ,
	reaxel_BE_message,
} from '@@reaxels';
import { request_mch_deposit_rqst_list, request_mch_deposit_rqst } from '@@requests'
