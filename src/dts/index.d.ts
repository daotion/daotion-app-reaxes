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
declare type ArrayType<ARR> = ARR extends (infer P)[] ? P : never;

/*批量将一个包含键名的数组KEY指定为一个值都为F的对象类型*/
declare type Batch<KEY extends (string | number | symbol)[], F> = {
  [p in ArrayType<KEY>]: F;
};

/*将所有属性变为只读*/
declare type Immutable<T> = {
  +readonly [key in keyof T]: T[key];
};




declare class ReactClassComponent {
	
	constructor(props: Readonly<P> | P);
}
