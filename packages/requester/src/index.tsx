/**
 * 准则: fetch不能被中间件调用
 * configurable-only
 * 生命周期:
 * onInit:实例化Requester时直接调用[此时对slot的任何修改都不应该修改API形状],此时无法获取到请求的实时参数
 *
 * onInvoke:在请求即将发出的时候依次调用注册过的回调,可以拿到请求url和partialOptions
 *
 * onResolve: 请求完成且成功时调用, 可以访问response除了[json,text,stream]以外的属性(因为这三个只能调用任意一次)
 *
 * onFinish: return值作为调用.fetch().then((data) => void)时返回的data;(如果有多个则管道式调用,不应关心顺序)
 * 
 * onError: 请求成功但业务报错,接收response和errorCode
 * 
 * onFail:由于各种原因导致的物理请求失败,如cors或服务器错误等,接收errorCode
 * 
 * 
 * ----------------
 * Target是描述url的对象,包括了主机地址,路径名,协议类型
 */
export const Requester = function (plugins) {
	const slot = {
		target: {
			protocol:location.protocol,
			host : location.host,
			pathname:'',
			hash: '',
			queryObject : {},
		},
		options: {
			credentials : 'include' ,
			mode : 'cors' ,
			method : "POST",
		},
		response:null,
		async fetch(url,options){
			const localUrl = new URL(url,location.origin);
			_.merge(slot.options,options);
			_.assign(slot.target , _.pick(parse(localUrl.href) , "pathname" , "protocol" , "host" , "hash" ));
			await asyncListRunner(onInvokeStack.map((callback) => () => callback(slot,url,options) ));
			try {
				if( slot.options.method === "POST"){
					slot.options.body = stringify(slot.options.body);
				}else if(slot.options.method === "GET") {
					slot.url = concatQS(slot.url , slot.options.body);
					slot.options = _.omit(slot.options , "body");
				}
				const response = (await window.fetch(slot.url,slot.options)).clone();
				Object.defineProperty(slot,"response",{
					get(){
						return response.clone();
					},
					configurable:true,
					enumerable:true,
				});
			}catch ( e ) {
				console.error(e);
				
			}
			return slot.response;
		},
	} as any;
	
	const onInvokeStack = [];
	const onErrorStack = [];
	const onResolveStack = [];
	const hooks = {
		onInit(callback){
			callback(slot);
		} ,
		onInvoke(callback) {
			onInvokeStack.push(callback);
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
	
	Object.assign(this , {
		fetch : requester ,
		post (url : string , options){
			slot.options.method = "POST";
			return requester(url , {
				...options ,
				method : 'POST' ,
			});
		} ,
		get (url : string , options){
			slot.options.method = "GET";
			return requester(url , {
				...options ,
				method : 'GET' ,
			});
		} ,
	});
};


import { asyncListRunner , concatQS } from './utils';
import {parse,} from 'url';


import { AsyncReplayablePayloadPlugin } from './plugins/async-replayable-payload-plugin';

const requester = new Requester([
	AsyncReplayablePayloadPlugin(),
]);
console.log(requester);

requester.get(`/main.bundle.js`,{
	body : 
		// () => orzPromise((resolve) => {setTimeout(() => resolve({ a : 1 }),2500);}),
		{ a : 1 },
	
}).then((res) => {
	console.log(res);
	return res.text();
}).then((text) => {
	console.log(text.slice(0,400));
})
