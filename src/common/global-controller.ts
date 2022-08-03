// import { orzPromise } from '@@utils';


const subscribe_symbol_map: { [ p: symbol ]: Function[] } = {};
/**
 * 创建一个订阅状态机
 */
export const createSubscriber = ( description?: string ): [
	( callback: Function , symbol: Symbol ) => Function ,
	{ (): void; then( callback: Function ): void; } ,
	Symbol
] => {
	let running = false;
	const symbol = Symbol( description );
	
	const subscribe = ( callback ) => {
		if(subscribe_symbol_map.hasOwnProperty(symbol)){
			subscribe_symbol_map[symbol].push(callback);
		}else {
			subscribe_symbol_map[ symbol ] = [callback];
		}
		return function unsubscribe (){
			_.remove( subscribe_symbol_map[ symbol ] , ( _cb ) => {
				return _cb === callback;
			} );
		}
	};
	
	
	const invoke = () => {
		const callbackList = subscribe_symbol_map[ symbol ];
		try {
			for(const fn of callbackList){
				fn();
			}
		} catch ( e ) {
			throw e;
			console.error( e );
		}
	};
	
	invoke.then = ( callback ) => {
		queueMicrotask( callback );
	};
	
	return [
		subscribe ,
		invoke ,
		symbol ,
	];
};

/*为根节点创建的订阅器*/
export const [ subscribe_root_click , invoke_root_click , root_click_symbol ] = createSubscriber( 'root-onclick' );

/*登录&连接钱包<->断开的订阅*/
export const [ subscribe_connect_login , invoke_connect_login , connect_login_symbol ] = createSubscriber( 'connected-wallet&login' );


