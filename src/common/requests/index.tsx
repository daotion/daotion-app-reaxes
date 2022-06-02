const env = __ENV__ || "server_dev";

export const request = new class {
	
	#testHTTP = /^https?:\/\//;
	
	fetch = async <response extends any = any,request extends object = any>(
		url: string,
		options: ORZ.RequestOptions<request>&{method:string} = {
			method: 'GET',
		},
	): Promise<response> => {
		
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
		 * 这一步得到"http://baidu.com" || "/server_dev/dao-list"
		 */
		url = this.#testHTTP.test( url ) ? url : `/${ env }${ url.startsWith( '/' ) ? url : `/${ url }` }`;
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
			options.body = JSON.stringify(options.body) as request & string ;
		}
		const body = typeof options.body === 'string' ? options.body : JSON.stringify( options.body ?? {} );
			
		try {
			const json: response = await fetch(url, {
				credentials: 'include',
				mode: 'cors',
				...options,
				body : options.body as request&string,
				headers: {
					...options.headers,
				},
			})
			.then(response => {
				return response.json();
			})
			.then(async (json: responseWrap<response> & response) => {
				if (json.hasOwnProperty('code')) {
					switch (json.code) {
						case 0: {
							return json.data ?? null;
						}
						/**/
						case 403: {
							throw [symbol_no_authorized,json.message];
						}
						default : 
							throw json.message;
					}
				} else if (json.code === 0) {
					throw json.message ?? '错误7921';
				} else {
					return json;
				}
			});
			
			return json;
		}catch ( e ) {
			if(Array.isArray(e)){
				
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



import {
	request_regression_sign
} from '@@common/requests/preset-interface';


const symbol_no_authorized = Symbol( 'no_authorized' );
