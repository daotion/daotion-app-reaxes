/**
 * 与后端断开链接
 */
import { reaxel_login } from '../authurize/user';

export const reaxel_disconnect = function(){
	
	const {
		store ,
		setState,
	} = orzMobx( { disconnected : null } );
	
	
	return () => {
		
		return {   
			get store (){
				return store;
			},
			get disconnected (){
				return store.disconnected;
			},
			setDisconnected (disconnected:boolean){
				setState( { disconnected } );
				if(disconnected){
					utils.Cookie.remove('gfsessionid');
				}
				reaxel_login().
				set_is_logged_in( !disconnected );
			} ,
			disconnect(){
				return request_disconnect().then(() => {
					setState({disconnected : true});
					reaxel_login().
					set_is_logged_in( false );
					utils.Cookie.remove('gfsessionid');
				});
			}
		}
	}
}();


import { request_disconnect } from '@@requests';
