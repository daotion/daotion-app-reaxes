import type {
	ConnectOptions ,
	WalletState ,
} from '@web3-onboard/core';
import {
	ethers ,
	providers ,
} from 'ethers';
import {
	account_storage_symbol ,
	orzLocalstroage ,
} from '@@common/storages';
import { Chain } from '@web3-onboard/common';
import {
	web3onboard,
} from './init-web3onboard';
const web3Onboard = web3onboard.instance;
import { reaxel_chain } from '@@reaxes/wallet/chain';


export const reaxel_wallet = function(){
	
	const {
		store ,
		setState,
	} = orzMobx<{
		wallet : WalletState,
		connecting : boolean,
		chain : Chain,
		settingChain : boolean,
	}>( {
		wallet : null ,
		connecting : false ,
		chain : null ,
		settingChain : false ,
	} );
	const memedChain = Reaxes.closuredMemo((chain:Chain) => {
		if(chain){
			setState( { chain } );
		}
	},() => []);
	/*wallet subscription监听钱包的(外部和内部)改动*/
	web3Onboard.state.select( "wallets" ).subscribe( ( [connectedWallet] ) => {
		if(connectedWallet === undefined){
			globalSetState({
				wallet : null ,
				walletConnecting :false ,
			});
			setState( {
				wallet : null ,
			} );
			return;
		} else {
			memedChain(() => [connectedWallet.chains[0].id])(connectedWallet.chains[0]);
			crayon.green( 'connectedWallet : ' , connectedWallet,connectedWallet.chains );
			globalSetState( {
				wallet : connectedWallet ,
				walletConnecting : false ,
			} );
			setState( {
				wallet : connectedWallet ,
			} );
			setWalletToLocalstorage(connectedWallet);
			return ;
		}
	} );
	let web3provider = Reaxes.observedMemo((first) => {
		if(!store.wallet) return web3provider = null;
		return web3provider = new ethers.providers.Web3Provider(store.wallet?.provider ?? null, 'any');
	} , () => [store.wallet]);
	
	return () => {
		return {
			connectWallet(options:ConnectOptions = {}){
				setState( { connecting : true } );
				web3Onboard.connectWallet( options ).
				then( () => {
					setState( { connecting : false } );
				} );
			},
			/*断开与钱包的链接*/
			disconnectWallet(label:string){
				setState( { connecting : true } );
				web3Onboard.disconnectWallet( { label } ).
				then( () => {
					setState( { connecting : false } );
				} );
			},
			selectChain (options : SetChainOptions,walletLabel?:string){
				if(!walletLabel && store.wallet ){
					walletLabel = store.wallet.label;
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
			get wallet (){
				return store.wallet;
			},
			get walletStore(){
				return store;
			},
			get web3Provider (){
				return web3provider;
			},
			get settingChain (){
				return store.settingChain;
			},
			get chain (){
				return store.chain;
			},
			get chains (){
				return web3Onboard.state.get().chains;
			},
			/*当钱包地址发生变化时自动执行*/
			address_memoed_reaction(cb:(address:string) => any){
				const lazyInvoke = Reaxes.closuredMemo(() => cb(store.wallet?.accounts?.[0]?.address) , () => []);
				const memo = Reaxes.observedMemo( () => {
					lazyInvoke(() => [store.wallet?.accounts?.[0]?.address])()
				} , () => [store.wallet?.accounts?.[0]?.address] );
				
			},
		};
	};
}();




const onerror = ( msg ) => {
	crayon.error( msg );
};


type SetChainOptions = {
	chainId : string;
	chainNamespace? : string;
}
/*当链接钱包和获取ens完成时存入storage*/
function setWalletToLocalstorage( connectWallet : WalletState ) {
	orzLocalstroage.set( account_storage_symbol , stringify( _.omit(connectWallet,["provider"]) ) );
}

function fetchENS( address : string , chain : Chain ) {
	const provider = new providers.StaticJsonRpcProvider( chain.rpcUrl );
	const ens = {} as ArrayElement<WalletState['accounts']>["ens"];
	return provider.lookupAddress( address ).
	then( ( name ) => {
		if ( name ) {
			_.assign(
				ens ,
				{ name } ,
			);
			return provider.getResolver( name );
		} else {
			crayon.warn('there is no "ens:name" , will show address directly');
			return null;
		}
		
	} ).
	then( ( resolver ) => {
		if ( resolver ) {
			return Promise.all( [
				resolver.getContentHash() ,
				resolver.getAvatar() ,
				resolver ,
			] );
		} else {
			throw null;
		}
	} ).
	then( ( [ contentHash , avatar , resolver ] ) => {
		
		const res = _.assign(
			ens ,
			{
				avatar ,
				contentHash ,
				getText : resolver.getText.bind( resolver ) ,
			} ,
		);
		console.log( logProxy( res ) );
		return res;
	} ).catch((e) => {
		if(e === null){
			return null ;
		}
	});
}
