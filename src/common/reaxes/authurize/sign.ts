/**
 * 钱包签名
 */
export const reaxel_sign_via_wallet = (lifecycle?:Lifecycle) => {
	const provider_promise = orzPromise();
	let provider:ethers.providers.Web3Provider = Reaxes.memory(() => {
		if(!globalStore.connectedWallet){
			/**
			 * Warning:返回值必须加provider=xxx;
			 */
			return provider = null;
		}
		provider = new ethers.providers.Web3Provider(globalStore.connectedWallet.provider, 'any')
		provider_promise.resolve(provider);
		return provider;
	},() => [
		/**
		 * fixme API Deisgn : 不可能所有依赖项都是observables数据 ,很多场景需要强制触发刷新
		 * forceCompare ,强制比对API
		 */
		globalStore.connectedWallet ,
	]);
	
	return {
		sign( msg : string ) {
			return provider_promise.then(() => {
				return provider.getSigner().signMessage( msg );
			});
		},
	}
};

export const reaxel_counter = (lifecycle:Lifecycle , initialCount = 0) => {
	const {
		store ,
		setState,
	} = orzMobx( { count : initialCount } );
	
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


import { ethers } from 'ethers';
