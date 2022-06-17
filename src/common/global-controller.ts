// import { orzPromise } from '@@utils';


/*存储全局性状态*/
export const {
	store : globalStore ,
	setState : globalSetState ,
} = orzMobx<globalStoreType>( {
	experimental : __EXPERIMENTAL__ ,
	theme : "light" ,
	language : "zhCN" ,
	/* null:第一次还没连接, false:已断开连接 */
	walletConnecting : null ,
	/*已连接的钱包*/
	connectedWallet : null ,
	// /*?*/
	// wallets : null ,
	/*正在切换线路*/
	settingChain : false ,
	/*可以选择的线路*/
	chains : [],
	/*已连接的线路*/
	currentChain : null ,
	
	account : null ,
	
	walletAddress : null ,
	
	/*窗口级别的loading*/
	windowLoading : {
		isLoading : false ,
		tipNode : "loading..."
	} ,
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
		const promise = orzPromise<boolean>();
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


