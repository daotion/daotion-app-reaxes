/**
 * 
 */

export function AuthIntegratedPlugin (){
	
	return (hooks) => {
		/*fixme 先假设此插件一定在<AsyncReplayablePayloadPlugin>之后运行*/
		hooks.onResolve(async (slot , url , options) => {
			try {
				const json = await slot.response.json();
				const reax_auth = reaxel_auth();
				switch(json.code){
					case 0 : {
						Object.defineProperty(slot , "response" , {
							get(){
								return json.data;
							} ,
							configurable : true ,
							enumerable : true ,
						});
					};break;
					case 50 : {
						throw json;
					};break;
					case 401 : {
						reax_auth.logout();
						throw json.message;
					};break;
					default : throw json;
				}
			}catch ( e ) {
				console.error(e);
				throw e;
			}
		});
	}
}


const reaxel_auth = function(){
	const initialState = { token : null };
	const { store , setState } = orzMobx(initialState);
	const clearStorageToken = () => {
		crayon.blue(`reaxel-auth has cleared storage`);
	};
	return () => {
		return {
			async login(){
				
			} ,
			logout(){
				clearStorageToken();
				// location.href = `/login`;
			} ,
			get auth(){
				return store.token;
			} ,
		};
	};
}();
