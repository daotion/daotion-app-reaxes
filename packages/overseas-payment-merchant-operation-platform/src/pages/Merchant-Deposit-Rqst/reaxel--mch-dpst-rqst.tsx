export const reaxel_mch_dpst_rqst = function(){
	const { checkin,msgTypes } = reaxel_msg_notif();
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

import { reaxel_msg_notif } from '@@reaxels';
