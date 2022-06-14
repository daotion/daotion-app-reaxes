/**
 * 钱包签名
 */
export const signViaWallet = (lifecycle:LifeCycle) => {
	
	let provider:ethers.providers.Web3Provider = lifecycle?.memory?.(() => {
		console.log('memory callback called!');
		if(!globalStore.connectedWallet){
			/**
			 * Warning:所有返回值必须加provider=xxx;
			 */
			return provider = null;
		}
		return provider = new ethers.providers.Web3Provider(globalStore.connectedWallet.provider, 'any');
	},() => [
		/**
		 * fixme API Deisgn : 不可能所有依赖项都是observables数据 ,很多场景需要强制触发刷新
		 * forceCompare ,强制比对API
		 */
		globalStore.connectedWallet ,
	]);
	
	return {
		sign( msg : string ) {
			return provider?.getSigner().signMessage( msg );
		},
	}
};

export const counter = (lifecycle:LifeCycle , initialCount = 0) => {
	const {
		store ,
		setState,
	} = viaMobx( { count : initialCount } );
	
	return {
		get count (){
			return store.count;
		},
		plus(){
			setState({count : store.count + 1});
			// setTimeout(() => console.log(store.count) , 100);
		},
		minus(){
			setState({count : store.count - 1});
		}
	}
}


import { reaction } from 'mobx';
import { ethers  } from 'ethers';
import {viaMobx} from '@@mobxState';
