/** @format */

import {observable, action} from 'mobx';
export {observer} from 'mobx-react';


export const orzMobx = <S extends object>(state: S) => {
	const store:Omit<S , "hasOwnProperty"> = observable<S>(state);
	
	return {
		store,
		setState: (partialState: Partial<S>) => setMobxState(store, partialState),
		/**
		 * todo
		 * 递归地自动合并进行setState
		 * @example 
		      setPartialState({
		         shopInfo : {
		            其他属性会被自动 ...xxx合并入当前对象
		            shopName : "new Name"
		         }
		      })
		 */
		setPartialState: (partialState: RecursivePartial<S>) => {},
	};
};

const makePartialState = state => {};

const setMobxState = action(<S extends {}>(store, partialState: Partial<S>) => {
	Object.assign(store, partialState);
});

type getParams<T> = T extends (a: string, ...args: infer P) => any ? P : never;

type fn = (a: string, b: {x: string}) => string;
type z = getParams<fn>;

type basic = {
	a: string;
	b: {
		a: string;
		c: {
			d: string;
		};
	};
};

type RecursivePartial<S extends object> = {
	[p in keyof S]+?: S[p] extends object ? RecursivePartial<S[p]> : S[p];
};

type newBasic = RecursivePartial<basic>;

