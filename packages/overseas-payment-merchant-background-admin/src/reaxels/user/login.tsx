export const reaxel_user_login = function(){
	let ret;
	const { store, setState } = orzMobx({
		loginData: {
			userName: '',
			password: ''
		}
	})
	return () => {
		const reax_user_auth = reaxel_user_auth();
		const { login } = reax_user_auth
		return ret = {
			get store () {
				return store
			},
			loginInput (key: string, value: string) {
				setState({
					loginData: {
						...store.loginData,
						[key]: value
					}
					
				})
			},
			loginAction (callback?: () => void) {
				login(store.loginData).then(() => {
					callback()
					
				})
			}
			
		}
	}
}();

import { reaxel_user_auth } from '@@reaxels'
import { debounce } from '@@utils'