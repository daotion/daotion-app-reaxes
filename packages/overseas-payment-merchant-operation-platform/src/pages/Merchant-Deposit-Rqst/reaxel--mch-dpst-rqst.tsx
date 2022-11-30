export const reaxel_mch_dpst_rqst = function(){
	const { store , setState } = orzMobx({
		dataList : null ,
		depositModalVisible : false ,
		depositVerifyModalVisible: false,
		verifyInfo : null as any,
		verifyR : null,
	});
	
	const reax_msg_notif = reaxel_msg_notif();
	const { checkin,messageTypes,push } = reaxel_msg_notif();
	const { regist_BE_message, } = reaxel_BE_message();
	
	regist_BE_message((messageList) => {
		const messages = messageList.filter((msg) => msg.type === "mch-deposit-rqst");
		if(messages.length){
			crayon.green(`商户充值列表有新的申请!`);
			push(messages);
		}
	});
	
	const {
		pendingState : listPendingState ,
		setPending : setListPending,
	} = toolkits.orzPending();
	
	const {
		pendingState :  verifyPending,
		setPending : setVerifyPending,
	} = toolkits.orzPending();
	
	
	/*请求充值列表*/
	const [ closFetchDepositRqst,cleanDepositRqstDeps ] = Reaxes.closuredMemo(() => {
		return rqstDeposit();
	} , () => []);
	
	const rqstDeposit = async () => {
		setListPending(true);
		return request_mch_deposit_rqst_list(async () => {
			return {
				indexStart : 0 ,
				count : 999999 ,
				firstTimestamp : 0 ,
				orderID : '' ,
				orderState : 1 ,
				createTimestampBegin : null ,
				createTimestampEnd : null ,
				updateTimestampBegin : null ,
				updateTimestampEnd : null ,
			};
		}).then((res) => {
			checkin("mch-deposit-rqst");
			setState({
				dataList : res.orderList ,
			});
			setListPending(false);
		}).catch(() => {
			setListPending(false);
		});
	}
	
	const closeAllModal = () => {
		setState({
			depositModalVisible: false,
			depositVerifyModalVisible : false,
			verifyR: null
		})
	}
	
	/*审核充值*/
	const verifyDepositRqst = async (agree) => {
		const { verifyR, verifyInfo } = store;
		const { orderID = '',  } = verifyInfo;
		setVerifyPending(true);
		return request_mch_deposit_rqst(async () => {
			return {
				orderID ,
				agree ,
				money : +verifyR ,
			};
		}).then(() => {
			setVerifyPending(false);
			
			closeAllModal();
			rqstDeposit();
		}).catch((e) => {
			setVerifyPending(false);
			throw  {
				msg : '操作失败' + e,
			};
			
		});
	};
	
	return () => {
		return {
			checkin(){
				checkin("mch-deposit-rqst");
			},
			fetchDepositRqst (badge) {
				return closFetchDepositRqst(() => [badge])();
			},
			verifyDepositRqst(agree) {
				return verifyDepositRqst(agree)
			},
			cleanDeps(){
				cleanDepositRqstDeps();
			},
			get store(){
				return store;
			},
			get setState(){
				return setState;
			},
			get depositMsgList () {
				return reax_msg_notif.messages.filter((item) => item.type === "mch-deposit-rqst");
			},
			get pending(){
				return {
					listPending : listPendingState.pending,
					verifyPending: verifyPending.pending
				}
				
			},
		};
	};
}();

import {
	reaxel_msg_notif ,
	reaxel_BE_message,
} from '@@reaxels';
import { request_mch_deposit_rqst_list, request_mch_deposit_rqst } from '@@requests'
