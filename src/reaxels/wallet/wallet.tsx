import type {
	ConnectOptions ,
	WalletState ,
	ConnectedChain ,
	
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
	web3onboard ,
} from './init-web3onboard';

const web3Onboard = web3onboard.instance;





/*当链接钱包和获取ens完成时存入storage*/
const connect_wallet_from_storage = function() {
	
	return {
		/*从localstorage读入缓存并链接钱包*/
		connectWalletFromStorage() {
			const wallet = orzLocalstroage.get<WalletState>( orzLocalstroage.account_storage_symbol );
			if ( wallet !== null && globalStore.wallet === null ) {
				// crayon.blue( 'connectWalletFromStorage:' , wallet );
				web3onboard.instance.connectWallet( {
					autoSelect : {
						label : wallet.label ,
						disableModals : true ,
					} ,
				} ).then(() => {
					
				}).catch(() => {
					crayon.gold( '222cannot get previous wallet info' );
				});
			} else {
				crayon.gold( 'cannot get previous wallet info' );
			}
		} ,
	};
}();







export const reaxel_wallet = function () {
	
	const {
		store ,
		setState ,
	} = orzMobx<{
		/*用户已连接的钱包对象*/
		wallet : WalletState,
		/*是否正在链接钱包*/
		connecting : boolean,
		/*已链接的链*/
		chain : ConnectedChain,
		/*是否正在选择修改链*/
		settingChain : boolean,
		/*钱包下的account对象.*/
		account : Account,
	}>( {
		wallet : null ,
		connecting : false ,
		chain : null ,
		settingChain : false ,
		account : null ,
	} );
	
	const memedChain = Reaxes.closuredMemo( ( chain : ConnectedChain ) => {
		if ( chain ) {
			setState( { chain } );
		}
	} , () => [] );
	const memoedLogWalletInfo = Reaxes.closuredMemo((connectedWallet:WalletState) => {
		if(true || store.wallet){
			crayon.green( 'connectedWallet : ' , connectedWallet , connectedWallet.chains );
		}
	},() => [store.wallet]);
	
	/*wallet subscription监听钱包的(外部和内部)改动*/
	web3Onboard.state.select( "wallets" ).
	subscribe( ( [ connectedWallet ] ) => {
		if ( connectedWallet == undefined ) {
			globalSetState( {
				wallet : null ,
				walletConnecting : false ,
				account : null ,
			} );
			setState( {
				wallet : null ,
				account : null ,
			} );
			return;
		} else {
			
			memoedLogWalletInfo( () => [ connectedWallet ] )(connectedWallet);
			globalSetState( {
				wallet : connectedWallet ,
				walletConnecting : false ,
				account : connectedWallet.accounts[0],
			} );
			setState( {
				wallet : connectedWallet ,
				account : connectedWallet.accounts[0] ,
			} );
			setWalletToLocalstorage( connectedWallet );
			memedChain( () => [ connectedWallet.chains?.[ 0 ]?.id ] )( connectedWallet.chains?.[ 0 ] );
			return;
		}
	} );
	
	connect_wallet_from_storage.connectWalletFromStorage();
	
	let web3provider:ethers.providers.Web3Provider = Reaxes.observedMemo( ( first ) => {
		if ( !store.wallet ) return web3provider = null;
		return web3provider = new ethers.providers.Web3Provider( store.wallet?.provider ?? null , 'any' );
	} , () => [ store.wallet ] );
	
	return () => {
		return {
			/*连接钱包,此promise完成不代表连接完成*/
			connectWallet( options : ConnectOptions = {} ) {
				setState( { connecting : true } );
				return web3Onboard.connectWallet( null).
				finally( () => {
					setState( { connecting : false } );
				} );
			} ,
			/*断开与钱包的链接*/
			disconnectWallet( label : string ) {
				setState( { connecting : true } );
				web3Onboard.disconnectWallet( { label } ).
				then( () => {
					orzLocalstroage.remove( account_storage_symbol );
				} ).finally(() => {
					
					setState( { connecting : false } );
				});
			} ,
			/*通过web3onboard.setChain来修改当前钱包的链,需要钱包确认才能被确认*/
			selectChain( options : SetChainOptions , walletLabel? : string ) {
				if ( !walletLabel && store.wallet ) {
					walletLabel = store.wallet.label;
				}
				setState( { settingChain : true } );
				return web3Onboard.setChain( {
					...options ,
					wallet : walletLabel ,
				} );
			} ,
			/*传入链对象来修改store的chain对象*/
			setChain( chain : ConnectedChain ) {
				setState( { chain } );
			} ,
			get wallet() {
				return store.wallet;
			} ,
			get account():Account {
				return store.account;
			} ,
			get walletStore() {
				return store;
			} ,
			get web3Provider() {
				return web3provider;
			} ,
			get settingChain() {
				return store.settingChain;
			} ,
			get chain() {
				return store.chain;
			} ,
			get chains() {
				const blockchainExplorerMap = {
					'0x1' : 'https://etherscan.io',
					'0x3' : 'https://ropsten.etherscan.io',
					'0x4' : 'https://rinkeby.etherscan.io',
					'0x5' : 'https://goerli.etherscan.io',
					'0x42' : 'https://kovan.etherscan.io',
				};
				// crayon.orange( 'web3Onboard.state.get().chains:' , web3Onboard.state.get().chains );
				return web3Onboard.state.get().chains.map((chain) => {
					return {
						...chain ,
						blockchainExplorer : blockchainExplorerMap[ chain.id ] ,
					};
				});
			} ,
			/*当钱包地址发生变化时自动执行*/
			address_memoed_reaction( cb : ( address : string ) => any ) {
				const lazyInvoke = Reaxes.closuredMemo( () => cb( store.account?.address ) , () => [] );
				const memo = Reaxes.observedMemo( () => {
					lazyInvoke( () => [ store.account?.address ] )();
				} , () => [ store.account?.address ] );
				
			} ,
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



function setWalletToLocalstorage( connectWallet : WalletState ) {
	orzLocalstroage.set( account_storage_symbol , stringify( _.omit( connectWallet , [ "provider" ] ) ) );
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
			crayon.warn( 'there is no "ens:name" , will show address directly' );
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
	} ).
	catch( ( e ) => {
		if ( e === null ) {
			return null;
		}
	} );
}
