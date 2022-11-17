/**
 * 立即注册的后端消息服务
 */
export const reaxel_BE_message = function(){
	const { regist } = reaxel_poll_rqst();
	const { push } = reaxel_msg_notif();
	const reax_auth = reaxel_user_auth();
	
	const rqstMsg = () => {
		if(!reax_auth.isLoggedIn){
			return Promise.reject('not login yet');
		}
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
	/*注册轮询请求后端消息，每次请求时更新msgPromise的指向，并重新挂载onCheckin*/
	const stack = [];
	regist(5 , () => {
		const promise = rqstMsg();
		for(const fn of stack){
			promise.then(fn);
		}
		promise.then((data) => {
			console.log(data);
		})
	});
	
	return () => {
		return {
			regist_BE_message(cb){
				stack.push(cb);
			},
		};
	};
}();
import { reaxel_msg_notif } from '@@reaxels/msg-notif';
import { reaxel_poll_rqst } from '@@reaxels/poll-rqst';
import { reaxel_user_auth } from '@@reaxels/user/auth';
