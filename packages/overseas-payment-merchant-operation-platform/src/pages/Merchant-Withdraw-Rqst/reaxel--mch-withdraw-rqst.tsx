export const reaxel_mch_withdraw_rqst = function(){
	const { store , setState } = orzMobx({
		pending : false ,
		dataList: null,
		withdrawMsgList : [] as any,
		withdrawModalVisible : false,
		verifyInfo : null as any,
		verifyPending : false,
		verifyUSDT : null,
		
	});
	
	const { checkin,messageTypes,push } = reaxel_msg_notif();
	const { regist_BE_message } = reaxel_BE_message();
	
	regist_BE_message((msg) => {
		if(msg.type === "mch-withdraw-rqst") {
			crayon.green(`更新了商户提现列表`);
			push([msg]);
			setState({
				withdrawMsgList: [...store.withdrawMsgList, msg]
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
	
	/*请求提现列表*/
	const [ fetchWithdrawRqst ] = Reaxes.closuredMemo(() => {
		rqstWithdraw()
	}, () => [])
	const rqstWithdraw = async () => {
		setPending('pending', true)
		return request_mch_withdraw_rqst_list(async () => {
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
			setPending('pending',false)
		})
	}
	
	/*确认提现*/
	const verifyWithdrawRqst = async (agree) => {
		const { verifyInfo: { orderID = '' }, verifyUSDT } = store;
		setPending('verifyPending' , true);
		return request_mch_withdraw_rqst(async () => {
			return {
				orderID ,
				agree ,
				usdt : + verifyUSDT,
			};
		}).then(() => {
			setPending('verifyPending' , false);
			setState({
				withdrawModalVisible : false,
				verifyUSDT: null
			})
			rqstWithdraw()
		}).catch(() => {
			setPending('verifyPending' , false);
			throw  {
				msg : '操作失败' + e
			};
		})
	};
	
	return () => {
		return {
			checkin(){
				checkin("mch-deposit-rqst");
				rqstWithdraw();
				setState({
					withdrawMsgList : [],
				})
			},
			fetchWithdrawRqst (badge) {
				return fetchWithdrawRqst(() => [badge])();
			},
			get dataList(){
				return store.dataList;
			},
			get store(){
				return store;
			},
			get setState(){
				return setState;
			},
			get pending() {
				return store.pending
			},
			get withdrawMsgList () {
				return store.withdrawMsgList
			},
			verifyWithdrawRqst (agree) {
				return verifyWithdrawRqst(agree)
			}
		};
	};
}();

import {
	reaxel_msg_notif ,
	reaxel_BE_message,
} from '@@reaxels';
import { request_mch_withdraw_rqst_list, request_mch_withdraw_rqst } from '@@requests'
