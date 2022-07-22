type global_env_config = {
	[o in typeof __ENV__] : {
		proxy_dev : string;
		proxy_server : string;
	}
};
const global_env_config = __ENV_CONFIG__.reduce((accu,itm) => {
	accu[itm.env] = {
		proxy_dev : itm.proxy_path_dev ,
		proxy_server : itm.proxy_path_server ,
	};
	return accu;
},{} as global_env_config);

export const request = new class {
	
	#testHTTP = /^https?:\/\//;
	
	fetch = async <response extends any = any,request extends object = any>(
		orignal_url: string,
		orignal_options: ORZ.RequestOptions<request>&{method:string} = {
			method: 'GET',
		},
	): Promise<response> => {
		let url = orignal_url,options = _.cloneDeep(orignal_options);
		const env = (options.env ?? __ENV__) ?? "default_server";
		/**
		 * 暂时禁用
		 * 需 mock 的情形，走mock请求
		 * */
		if (false && __IS_MOCK__ && options.mock === true) {
			try {
				/*@ts-ignore*/
				const resArr = mockArr.filter(item => url.endsWith(item.url));
				if (resArr[0]?.code === 1) {
					return resArr[0]?.data || [];
				} else {
					throw Error('code not 1');
				}
			} catch (error) {
				crayon.info['#ffd12cd9']('请检查mock文件相关配置!',url);
			}
		}
		/**
		 * 处理请求地址
		 * 如果不是绝对地址则加http前缀
		 * 这一步得到"http://baidu.com" || "/server_dev/space-list"
		 */
		url = (() => {
			/*如果是绝对地址,则不作处理*/
			if(this.#testHTTP.test( url )) return url;
			else {
				const prefixPath = (() => {
					/**
					 * 
					 */
					if(env === "default_server"){
						if(__NODE_ENV__ === "development") return "/server_dev"
						return "/server";
					}else {
						return {
							"development" : global_env_config[env].proxy_dev ,
							"production" : global_env_config[env].proxy_server ,
						}[__NODE_ENV__];
					}
				})();
				return `${ prefixPath }${ url.startsWith( '/' ) ? url : `/${ url }`}`;
			}
		})();
		/*把GET请求的body对象转成queryString.去除body属性*/
		if (/GET/i.test(options.method)){
			/*检测绝对地址中是否存在qs并警告*/
			if(url.includes('?') && options.body) crayon.warn( 'url参数中不应包含queryString!' );
			
			if ( typeof options.body === 'object' && options.body !== null ) {
				url += `?${ encodeQueryString( options.body ) }`;
			} else if ( typeof options.body === 'string' ) {
				crayon.warn( 'options.body不能是字符串!' );
				/*字符串不是合法的body,必须传对象或不传*/
				return Promise.reject( 'options.body不能是字符串!' );
			}
			delete options.body;
		} else {
			/*支持请求体是FormData*/
			if(options.body instanceof FormData){
				
			}else {
				options.body = JSON.stringify(options.body || {}) as request & string ;
			}
		}
			
		try {
			const real_address = __ENV_CONFIG__.find(({env}) => {
				if(__ENV__ === "default_server" || __ENV__ === "server_dev"){
					return env === "server_dev";
				}
			}).server_host + url.replace(/\/(server_dev|server_yang|server_production)/,'');
			const json: response = await fetch(url, {
				credentials: 'include',
				mode: 'cors',
				...options,
				body : options.body as request&string,
				headers: {
					/*没有devserver真实请求的地址*/
					"_real_address_" : real_address,
					...options.headers,
				},
			})
			.then(response => {
				return response.json();
			})
			.then(async (json: responseWrap<response> & response) => {
				if (json.hasOwnProperty('code')) {
					switch (json.code) {
						/*success*/
						case 0: {
							return json.data ?? null;
						}
						case 1002: {
							const {
								loginWithUserWallet ,
								clearInvalidFakeWallet ,
								storage_key_fake_wallets_secret_map,
							} = reaxel_user();
							clearInvalidFakeWallet();
							orzLocalstroage.remove( storage_key_fake_wallets_secret_map );
							return loginWithUserWallet().then(() => {
								
							});
						}
						/**/
						case 403: {
							throw [symbol_no_authorized,json.message];
						}
						default : 
							throw json.message;
					}
				}else {
					throw 'uncatched error : 22041';
				}
			});
			
			return json;
		}catch ( e ) {
			if(Array.isArray(e) && e[0] === symbol_no_authorized){
				return Promise.reject( symbol_no_authorized );
			}
			return Promise.reject( e );
		}
	};
	
	post = async <response = any,request extends object = any>(
		url: string,
		options: ORZ.RequestOptions<request> = {},
	): Promise<response> => {
		return this.fetch(url, {
			method: 'POST',
			...options,
		});
	};
	
	get = async <response = any,request extends object = any>(
		url: string,
		options: ORZ.RequestOptions<request> = {},
	): Promise<response> => {
		const requestBody = function () {
			if (typeof options.body === 'object' && options.body !== null) {
				return encodeQueryString(options.body);
			} else if (typeof options.body === 'string') {
				return options.body;
			} else {
				return null;
			}
		}();
		
		return this.fetch(`${url}${requestBody ? '?' : ''}${requestBody}`, {
			..._.omit(options,['body']),
			method: 'GET',
		});
	};
};




const symbol_no_authorized = Symbol( 'no_authorized' );
import {reaxel_user} from '@@reaxes/authurize/user';
import { orzLocalstroage } from '@@common/storages';

