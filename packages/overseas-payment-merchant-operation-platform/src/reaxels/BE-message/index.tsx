/**
 * 后端消息服务
 */
export const reaxel_BE_message = function(){
	const { regist } = reaxel_poll_rqst();
	const { push } = reaxel_msg_notif();
	
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
		return {
			onCheckin(){
				
			},
		};
	};
}();
import { reaxel_msg_notif } from '@@reaxels/msg-notif';
import { reaxel_poll_rqst } from '@@reaxels/poll-rqst';
