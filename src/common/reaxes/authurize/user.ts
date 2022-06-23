import {getConnectedPromise} from '@@reaxes/wallet/exported-connected-promise';
import { reaxel_disconnect } from '@@reaxes/authurize/disconnect';

export const reaxel_login = function(){
	let ret,
		/*是否正在登录进程中,如果是则是登录中的promise,否则是false*/
		isLogin:Promise<any>|boolean = false 
	;
	const {
		store ,
		setState,
	} = orzMobx( {
		is_logged_in : false ,
	} );
	
	const {
		setDisconnected,
	} = reaxel_disconnect();
	
	return (lifecycle?:Lifecycle) => {
		
		/*如果cookie里有登录信息则直接视为登陆过了*/
		lifecycle?.mounted?.( () => {
			if ( utils.Cookie.get('gfsessionid') ) {
				setState( { is_logged_in : true } );
				getConnectedPromise().resolve( true );
			}
		} );
		
		
		return ret = {
			get store (){
				return store;
			},
			get logginPromise (){
				return getConnectedPromise();
			},
			set_is_logged_in (is_logged_in:boolean){
				setState( { is_logged_in } );
			},
			login (address : string){
				/*单例,防止重复请求*/
				if(isLogin !== false){
					return isLogin as Promise<any>;
				}else {
					/*fixme 判断cookie可以优化*/
					if(!store.is_logged_in || !(utils.Cookie.get('gfsessionid'))){
						crayon.blue(!store.is_logged_in,utils.Cookie.get('gfsessionid'),'!store.is_logged_in && !document.cookie.includes(\'gfsessionid=\')');
						return isLogin = request_regression_sign(address).then(() => {
							setState({
								is_logged_in : true,
							});
							isLogin = false;
							getConnectedPromise().resolve(true);
							setDisconnected( false );
						}).catch((e) => {
							isLogin = false ;
							getConnectedPromise().reject('登录失败:s2sa0d7sa87d9sad');
							throw e;
						});
					}else {
						getConnectedPromise().resolve(true);
						return Promise.resolve(true);
					}
				}
			},
			/*监听store.is_logged_in变化,变化时执行回调函数.*/
			memedLogin(callback:(is_logged_in:boolean) => any){
				const memo = Reaxes.closuredMemo(callback,() => []);
				Reaxes.observedMemo( () => {
					memo(() => [store.is_logged_in])(store.is_logged_in);
				} , () => [ store.is_logged_in ] );
			},
		};
	}
}();


import { request_regression_sign } from '@@requester/preset-interface/authorize';
