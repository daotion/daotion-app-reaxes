import { viaMobx } from '@@mobxState';
import { viaPromise } from '@@utils';


/*存储全局性状态*/
export const {
	store : globalStore ,
	setState : globalSetState ,
} = viaMobx<globalStoreType>( {
	theme : "light" ,
	language : "zhCN" ,
	/* null:第一次还没连接, false:已断开连接 */
	walletConnecting : null ,
	connectedWallet : null ,
	wallets : null ,
	settingChain : false ,
	connectedChain : null ,
	
	account : null ,
	
	walletAddress : null ,
} );

/*@ts-ignore*/
window.store = globalStore;

/**
 * 创建一个订阅状态机
 */
export const createSubscriber = ( description?: string ): [
	( callback: Function , symbol: Symbol ) => void ,
	{ (): void; then( callback: Function ): void; } ,
	Symbol
] => {
	let running = false;
	const subscribe = ( callback , symbol ) => {
		subscribe_symbol_map[ symbol ] = callback;
	};
	const subscribe_symbol_map: { [ p: symbol ]: Function } = {};
	
	const invoke = () => {
		const promise = viaPromise();
		Object.getOwnPropertySymbols( subscribe_symbol_map ).
		forEach( ( key ) => {
			const fn = subscribe_symbol_map[ key ];
			try {
				fn();
			} catch ( e ) {
				promise.reject( e );
				console.error( e );
			}
		} );
		promise.resolve( true );
		return promise;
	};
	
	invoke.then = ( callback ) => {
		queueMicrotask( callback );
	};
	
	return [
		subscribe ,
		invoke ,
		Symbol( description ) ,
	];
};

/*为根节点创建的订阅器*/
export const [ subscribe_root_click , invoke_root_click , root_click_symbol ] = createSubscriber( 'root-onclick' );



