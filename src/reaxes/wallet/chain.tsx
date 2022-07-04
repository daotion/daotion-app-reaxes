import {web3onboard} from './init-web3onboard';

const web3Onboard = web3onboard.instance;

export const reaxel_chain = function(){
	
	const {store,setState} = orzMobx<{
		chain : Chain,
		settingChain : boolean, 
	}>({
		chain : null ,
		settingChain : false ,
	});
	
	return () => {
		return {
			selectChain (options : SetChainOptions,walletLabel?:string){
				const wallet = reaxel_wallet().wallet;
				if(!walletLabel && wallet ){
					walletLabel = wallet.label;
				}
				setState( { settingChain : true } );
				web3Onboard.setChain( {
					...options ,
					wallet : walletLabel ,
				} );
			},
			setChain(chain:Chain){
				setState( { chain } );
			},
			/*todo ObserveredChain */
			get chainStore (){
				return store;
			},
			get settingChain (){
				return store.settingChain;
			},
			get chain (){
				return store.chain;
			},
			get chains (){
				return web3Onboard.state.get().chains;
			}
		};
	};
}();

import { reaxel_wallet } from '@@reaxes/wallet/wallet';
type SetChainOptions = {
	chainId : string
	chainNamespace? : string
}
