/**
 * 
 */

export function AuthIntegratedPlugin (){
	
	return (hooks) => {
		/*fixme 先假设此插件一定在<AsyncReplayablePayloadPlugin>之后运行*/
		hooks.onResolve(async (slot , url , options) => {
			try {
				const json = await slot.response.json();
				const reax_auth = reaxel_user_auth();
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

import { reaxel_user_auth } from '@@reaxels';

