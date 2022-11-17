/**
 * 站内信服务
 */
const msgTypes = {
	"mch-withdraw-rqst" : {
		label : "新的商户提现申请",
		path : "/mch-withdraw-rqst"
	},
	"mch-deposit-rqst" : {
		label : "新的商户充值申请",
		path : "/mch-deposit-rqst"
	},
	
};
export const reaxel_msg_notif = function(){
	const { store , setState } = orzMobx({
		list : [] as notifMsgItem[] ,
	});
	
	return () => {
		
		return {
			msgTypes,
			get messages (){
				return store.list;
			},
			checkin(type:notifMsgItem['type']){
				setState({
					list : store.list.filter((item) => {
						return item.type !== type;
					}) ,
				});
			},
			push(msgList : notifMsgItem[]){
				setState({
					list : [ ...store.list , ...msgList ] ,
				});
			},
			
		};
	};
}();

import {notifMsgItem} from './types';
