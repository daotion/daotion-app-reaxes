

export const request = new (class {
	
	#testURL = /^https?:\/\//;
	
	#fetch = async <request extends object = any, response extends any = any>(
		url: string,
		options: ORZ.RequestOptions<request> = {
			method: 'get',
		},
	): Promise<response> => {
		/**
		 * 需 mock 的情形，走mock请求
		 * */
		if (__IS_MOCK__ && options.mock !== false) {
			try {
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
		
		const target = this.#testURL.test(url) ? url : `${env.request_base_url}${url}`;
		const body = typeof options.body === 'string' ? options.body : JSON.stringify( options.body ?? {} );
			
		const opt = {...options} as RequestInit;
		if (!/get/i.test(opt.method)) _.assign(opt,{body});
		try {
			const json: response = await fetch(target, {
				...opt,
				credentials: 'include',
				mode: 'cors',
				headers: {
					...opt.headers,
				},
			})
			.then(response => {
				return response.json();
			})
			.then(async (json: responseWrap<response> & response) => {
				if (json.hasOwnProperty('code')) {
					switch (json.code) {
						case 1: {
							return json.data ?? null;
						}
						case 0: {
							
							throw json.message;
						}
					}
				} else if (json.code === 0) {
					throw json.message ?? '错误7921';
				} else {
					return json;
				}
			});
			
			return json;
		}catch ( e ) {
			return Promise.reject( e );
		}
	};
	
	post = async <request extends object = any, response = any>(
		url: string,
		options: ORZ.RequestOptions<request> = {},
	): Promise<response> => {
		return this.#fetch(url, {
			method: 'POST',
			...options,
		});
	};
	
	get = async <request extends object = any, response = any>(
		url: string,
		options: ORZ.RequestOptions<request> = {},
	): Promise<response> => {
		const requestBody = (function () {
			if (typeof options.body === 'object' && options.body !== null) {
				return encodeQueryString(options.body);
			} else if (typeof options.body === 'string') {
				return options.body;
			} else {
				return ``;
			}
		})();
		const opt = {...options};
		delete opt.body;
		
		return this.#fetch(`${url}${requestBody ? '?' : ''}${requestBody}`, {
			...opt,
			method: 'GET',
		});
	};
})();



