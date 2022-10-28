export const reaxel_user_login = (function () {
	let ret;
	const { store, setState } = orzMobx({
		input_username : '',
		input_password : '',
	});
	const reax_user_auth = reaxel_user_auth();
	
	return () => {
		return (
			ret = {
				get store(){
					return store;
				} ,
				setFields(partialState){
					setState(partialState);
				} ,
				loginAction(callback? : () => void){
					reax_user_auth.login(store.loginData).then(() => {
						callback();
					});
				} ,
			}
		);
	};
})();

import { reaxel_user_auth } from '@@reaxels/user/auth';
