// import __ from "lodash";

export default Object.freeze( new class {
	/**
	 * note: this fn will change original object!
	 * @param object
	 * @param keys
	 */
	
	originalPick = <O extends {} , K extends Array<keyof O>>(object:O , keys:K) : Pick<O,ArrayType<K>> => {
		
		
		Object.keys(object).forEach((k) => {/*@ts-ignore*/
			if(!keys.includes(k)){
				delete object[ k ];
			}
		})
		return object as Pick<O,ArrayType<K>> ;
	};
} );




export * from './crayon.utility';
export * from './logProxy.utility';
export * from './ConditionRender.utility';
export * from './makePair.utility';
export * from './assert-group.utility';
export * from './timer.utility';
export * from './replaceStr.utility';
export * from './queryString.utility';
export * from './orzPromise.utility';
export * from './dataflow.utility';
export * from './checkGenericNull.utility';
export * from './runOnlyOnce.utility';

export * from "./components";
export * from "./hooks";

export {default as Cookie} from './cookie.utility';
export {default as checkType} from './checkType.utility';
export {default as getNestedValue} from './getNestedValue.utility';
export {default as Random} from './random.utility';
export {default as debounce} from './debounce.utility';
export {default as throttle} from './throttle.utility';
