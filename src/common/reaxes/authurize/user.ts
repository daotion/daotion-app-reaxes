export const reaxel_login = function(){
	let ret,
		isLogin:Promise<any>|boolean = false ,
		waittingLogin = orzPromise()
	;
	const {
		store ,
		setState,
	} = orzMobx( {
		is_logged_in : false ,
	} );
	
	return (lifecycle:Lifecycle) => {
		
		/*如果cookie里有登录信息则直接视为登陆过了*/
		lifecycle?.mounted?.( () => {
			if ( document.cookie.includes( 'gfsessionid=' ) ) {
				setState( { is_logged_in : true } );
				waittingLogin.resolve( true );
			}
		} );
		
		waittingLogin.catch((e) => {
			console.error( e );
		})
		
		return ret = {
			get is_logged_in (){
				return store.is_logged_in;
			},
			login (address : string){
				/*单例,防止重复请求*/
				if(isLogin){
					return isLogin;
				}else {
					/*fixme 判断cookie可以优化*/
					if(!store.is_logged_in && !document.cookie.includes('gfsessionid=')){
						crayon.blue(!store.is_logged_in,!document.cookie.includes('gfsessionid='),'!store.is_logged_in && !document.cookie.includes(\'gfsessionid=\')');
						isLogin = request_regression_sign(address).then(() => {
							setState({
								is_logged_in : true,
							});
							isLogin = false;
							waittingLogin.resolve(true)
						}).catch(() => {
							isLogin = false ;
							waittingLogin.reject('登录失败:s2sa0d7sa87d9sad');
						});
					}else {
						waittingLogin.resolve( true );
						return Promise.resolve(true);
					}
				}
			},
			logginPromise : waittingLogin,
		};
	}
}();


import { request_regression_sign } from '@@requester/preset-interface/authorize';
