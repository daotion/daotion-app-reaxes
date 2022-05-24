// class
import _ from 'lodash';
import React , {
	Component ,
	useState ,
	useEffect ,
} from "react";
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {
	viaMobx ,
} from '@@common/MobxState';
export const {
	setState ,
	store,
} = viaMobx<any>( {
	
	count : 2 ,
	
} );


class Apx extends ReactComponentClass<any , any> {
	
	
	
	render() {
		const [store , setCount ] = orzWallet(this)(0);
		
		return <>
			<span
				onClick = {() => setCount()}
			>{store.count}</span>
		</>;
	}
}

const wrapper = (callback) => {
	let first = true ;
	let instance;
	const lifecycle = {
		mounted : (cb) => {
			instance.mountedStack.push(cb);
		},
		unmount : (cb) => {
			instance.unmountStack.push(cb);
		} ,
		updated : (cb) => {
			instance.updatedStack.push(cb);
		} ,
		rendered : (cb) => {
			instance.renderedStack.push(cb);
		} ,
	};
	const preventDuplicate = (cb) => {
		if(!first){
			const noop = () => null ;
			Object.assign(lifecycle,{
				"mounted" : noop,
				"unmount" : noop,
				"updated" : noop,
				"rendered" : noop,
			});
		}
		return cb;
	};
	const prevented = preventDuplicate(callback());
	return (_instance) => (...props) => {
		instance = _instance ;
		return first = false,prevented(lifecycle,...props);
	}
}

const orzWallet = wrapper( () => {
	
	const {
		store ,
		setState,
	} = viaMobx( {
		count : 0 ,
	} );
	let prevInstance = null;
	
	return ( lifecycle , initialCount  ) => {
		
		let timer;
		lifecycle.mounted( () => {
			console.log( 'lifecycle.mounted' );
			timer = setInterval(
				() => {
					console.log( `setIntervel ${ store.count }` );
					setState( {
						count : store.count + 1 ,
					} );
				} ,
				2500 ,
			);
		} );
		
		lifecycle.unmount( () => {
			clearInterval( timer );
			console.log( 'timer cleared' );
		} );
		
		return [
			store ,
			() => setState( { count : store.count + 1 } ) ,
		];
	};
} );





export const Test = ComponentWrapper(Apx);
