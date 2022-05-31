/** @format */

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.bmp';
// declare module '*.less';
// declare module '*.css';
// declare module "*";
// declare module "common/requests"{
// 	export type options = {};
// }

declare interface globalStoreType {
	theme : "light" | "dark" | string;
	language : "enUS"|"zhCN"|string;
	/* null:第一次还没连接, false:已断开连接 */
	walletConnecting : null|boolean,
	connectedWallet : WalletState,
	// wallets : WalletState[] ,
	settingChain : boolean ,
	currentChain : Chain ,
	/*可选链路*/
	chains : Chain[],
	account : Account|null ,
	walletAddress : string ,
	windowLoading : {
		isLoading : boolean ,
		tipNode?: React.ReactNode;
	} ,
}

declare module '*.module.less' {
	const classes : {
		readonly [ key: string ]: string;
	};
	
	export default classes;
}

declare interface Window {}
declare interface NodeModule {
  hot?: {
    accept: Function;
  };
}
/*后端返回的JSON外层包裹*/
declare type responseWrap<T> = {
	code: number;
	data: T;
	message?: string;
	errorCode?: string;
};
declare var __IS_MOCK__: boolean;
declare interface NodeRequire {
  context: Function;
}
/*获取数组泛型参数*/
declare type ArrayElement<ArrayType extends any[]> = ArrayType extends (infer P)[] ? P : never;

/*批量将一个包含键名的数组KEY指定为一个值都为F的对象类型*/
declare type Batch<KEY extends (string | number | symbol)[], F> = {
  [p in ArrayElement<KEY>]: F;
};

/*将所有属性变为只读*/
declare type Immutable<T> = {
  +readonly [key in keyof T]: T[key];
};



type WalletState = import('@web3-onboard/core').WalletState;
type ConnectedChain = import('@web3-onboard/core').ConnectedChain;
type Chain = import('@web3-onboard/common').Chain;


declare interface Account {
	address: string
	ens: { name?: string; avator?: string }
	balance: Record<string, string> | null
}

type lifecycle = (callback:Function) => void;
declare interface LifeCycle {
	unmount : lifecycle ,
	mounted : lifecycle ,
	rendered : lifecycle ,
	updated : lifecycle ,
	
}



declare namespace ORZ {
	
	export type env = {
		host : string ,
		prefix : string ,
	};
	
	export type RequestOptions<body extends object> = Omit<RequestInit, 'body'> & {
		env? : env,
		body?: body;
		mock? : boolean ;
	};
}
