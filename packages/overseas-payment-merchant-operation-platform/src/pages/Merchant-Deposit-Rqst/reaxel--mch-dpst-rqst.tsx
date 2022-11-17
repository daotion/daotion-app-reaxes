export const reaxel_mch_dpst_rqst = function(){
	const { checkin,msgTypes,push } = reaxel_msg_notif();
	const { regist_BE_message } = reaxel_BE_message();
	
	regist_BE_message((msg) => {
		if(msg.type === "mch-deposit-rqst") {
			crayon.green(`更新了商户充值列表`);
			push([msg]);
		}
	});
	
	/*请求充值列表*/
	const rqstDeposit = () => {
		return orzPromise((res) => {
			res();
			crayon.green(`更新了商户充值列表`);
		})
	}
	
	return ({navigate}) => {
		
		return {
			checkin(){
				checkin("mch-deposit-rqst");
				navigate(msgTypes['mch-deposit-rqst'].path);
			},
		};
	};
}();

import {
	reaxel_msg_notif ,
	reaxel_BE_message,
} from '@@reaxels';
