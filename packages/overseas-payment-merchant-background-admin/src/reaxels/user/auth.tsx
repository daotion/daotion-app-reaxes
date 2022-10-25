
export const reaxel_user_auth = function() {
	let ret;
	const { store , setState } = orzMobx({
		pending: false,
		isLoggedIn: false,
	});
	// 登录方法
	const fetchLogin = async (data: {
		userName: string,
		password: string
	}) => {
		const {userName = '', password = ''} = data
		setState({
			pending : true ,
		});
		return request_user_login( async () => {
			return {
				userName,
				password: md5(password)
			}
		}).then((token) => {
			// console.log('orzLocalstroage.set(\'token\', token)');
			setState({
				pending : false ,
				isLoggedIn: true,
			});
		}).catch((e) => {
			setState({
				pending : false ,
			});
		}).finally(() => {
			setState({
				pending: false
			})
		})
	}


	return () => {
		return ret = {
			get pending() {
				return store.pending
			},
			get isLoggedIn () {
				// if (orzLocalstroage.get('token')) {
				// 	setState({
				// 		isLoggedIn: true
				// 	})
				// } else {
				// 	setState({
				// 		isLoggedIn: false
				// 	})
				// }
				return store.isLoggedIn
			},
			login(data){
				fetchLogin(data);
			},
			// logout(){
			// 	setState({
			// 		pending : false ,
			// 		isLoggedIn : false ,
			// 	});
			// 	// console.log('orzLocalstroage.remove(\'token\');');
			// },
			
			
			
			
		}
	}
}()

// import { orzLocalstroage } from '@@common/storages';
import { request_user_login }from '@@requester'
import md5 from 'crypto-js/md5'