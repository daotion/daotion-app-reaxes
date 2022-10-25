/**
 * 支持实时签名的请求重播 , 形如
 * <code>
 * request.post(``,{payload:async() => {
 *    return {
 *       signature:await reax_user.sign();
 *    };
 * });
 * </code>
 */

function AsyncReplayablePayloadPlugin() {
	return (hooks) => {
		hooks.onInit((slot) => {});
		hooks.onInvoke((slot,url,options) => {
			slot.body.
		});
	};
}

/**
 * 准则: fetch不能被中间件调用,
 * 生命周期:
 * initial
 *
 */
const Requester = function (plugins) {
	const slot = {
		url: null,
		options: {
			credentials : 'include' ,
			mode : 'cors' ,
			method : "POST",
		},
		fetch(url,options){
			
			const response = window.fetch(url,options);
			response.then(() => {
				
			});
			response.catch(() => {
				
			});
		},
	} as any;
	
	const onInvokeStack = [];
	const hooks = {
		get onInit() {
			return (callback) => {
				callback(slot);
			};
		},
		get onInvoke() {
			return (callback) => {
				
			};
		},
		get onResolved(){
			return () => {
				
			}
		},
		get onError(){
			return () => {
				
			}
		},
	};

	plugins.forEach((plugin) => {
		plugin(hooks);
	});

	const requester = slot.fetch;

	return {
		fetch: requester,
		post(url: string, options) {
			slot.options.method = "POST";
			return slot.fetch(url, {
				method: 'POST',
				...options,
			});
		},
	};
};

const requester = new Requester([
	AsyncReplayablePayloadPlugin(),
]);
