/**
 * 根据环境不同应用不同的env,
 */
export function ApplyEnvConfigPlugin(envConfig:__ENV_CONFIG__) {
	return (hooks) => {
		hooks.onInit((slot) => {
			
		});
		hooks.onInvoke(async (slot,url,options) => {
			
		});
		
		hooks.onError(() => {
			
		});
	};
}


type __ENV_CONFIG__ = {
	"env" : string,
		"proxy_path_dev" : string ,
		"proxy_path_server" : string ,
		"server_host" : string ,
		"path_rewrite" : {
		[p:string] : string,
	} ,
	"secure" : boolean,
}[];
