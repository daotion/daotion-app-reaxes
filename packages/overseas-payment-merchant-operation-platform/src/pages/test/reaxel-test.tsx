

export const reaxel_test = function(){
	let ret;
	const { store , setState } = orzMobx({
		data : [],
	});
	const { regist } = reaxel_poll_rqst();
	const { checkin , msgTypes , push } = reaxel_msg_notif();
	
	const rqstMsg = () => {
		const map = {
			1 : 'mch-withdraw-rqst',
			2 : 'mch-deposit-rqst',
		};
		return orzPromise((resolve , reject) => {
			setTimeout(() => {
				resolve({
					type : map[_.random(1,2)],
					number : _.random(1,20),
				})
			} , 200);
		});
	};
	
	regist(5 , () => {
		rqstMsg().then((data) => {
			console.log(data);
			push([data]);
		})
	});
	
	
	return () => {
		return ret = {
			store,
		}
	}
}();

import {
	reaxel_msg_notif ,
	reaxel_poll_rqst,
} from "@@reaxels";
