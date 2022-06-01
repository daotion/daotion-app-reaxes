import type {
	ConnectOptions ,
	WalletState ,
} from '@web3-onboard/core';
import { providers } from 'ethers';
import {
	account_storage_symbol ,
	orzLocalstroage ,
} from '@@common/storages';
import { Chain } from '@web3-onboard/common';
import { web3onboard } from '@@common/actions';

const web3Onboard = web3onboard.instance;


const onerror = ( msg ) => {
	crayon.error( msg );
};


type SetChainOptions = {
	chainId : string;
	chainNamespace? : string;
}


const syncState = {};


export const connectWallet = ( lifecycle : LifeCycle ) => {
	let ret ;
	/**
	 * 不需要在mounted生命周期里globalSetState({connectWallet}),因为在action:wallet里已经订阅改变
	 */
	lifecycle.mounted(() => {
		ret.connectWalletFromStorage();
	});
	
	return ret = {
		get connectedWallet() {
			return globalStore.connectedWallet;
		} ,
		get connecting() {
			return globalStore.walletConnecting;
		} ,
		get connect() {
			
			return ( options : ConnectOptions ):Promise<WalletState> => {
				globalSetState( {
					walletConnecting : true ,
					windowLoading : {
						tipNode : "connecting wallet, please hold on." ,
						isLoading : true ,
					} ,
				} );
				
				return web3onboard.
				instance.
				connectWallet( options ).
				then( ( [ connectedWallet ] ) => {
					/**
					 * 陷阱!!!原connectWallet()的wallet Promise会先resolve掉
					 * 随后发起异步请求getEns修改已resolve的wallet对象.
					 * 由于mobx将对象递归深拷贝设置为新的Proxy对象,
					 * 所以在connectWallet()修改ens时的wallet对象与已在globalStore的Proxy已无关系.
					 * 所以在此从源码中提取出了getEns逻辑,和connectWallet一起resolve
					 */
					/*如果wallet是undefined , 说明用户取消了连接钱包*/
					if(connectedWallet === undefined){
						return Promise.reject( 'canceled' );
					}
					return connectedWallet;
				} ).
				catch( ( e ) => {
					console.error( e );
					globalSetState( {
						walletConnecting : false ,
						connectedWallet : null ,
						windowLoading : { isLoading : false } ,
					} );
					throw e;
				} );
			};
		} ,
		get disconnect() {
			return ( label ) => {
				web3onboard.instance.disconnectWallet( { label } ).
				then( ( [wallet] ) => {
					/*remove cache*/
					orzLocalstroage.remove( orzLocalstroage.account_storage_symbol );
				} );
			};
		} ,
		/*从localstorage读入缓存并链接钱包*/
		connectWalletFromStorage (){
			const wallet = orzLocalstroage.get<WalletState>(orzLocalstroage.account_storage_symbol);
			if(wallet!==null){
				crayon.blue('connectWalletFromStorage:', wallet );
				web3onboard.instance.connectWallet( {
					autoSelect : {
						label : wallet.label,
						disableModals : true ,
					} ,
				} );
				globalSetState( {
					windowLoading : {
						isLoading : true ,
						tipNode : "connecting wallet and fetch for ens .." ,
					} ,
					walletConnecting : true ,
				} );
			}else {
				crayon.gold('cannot get previous wallet info');
			}
		},
	};
};

export const wallets = ( lifecycle : LifeCycle ) => {
	const wallets = web3onboard.instance.state.get().wallets;
	lifecycle.mounted( () => {
		const wallets$ = web3onboard.instance.state.select( "wallets" );
		const subscription = wallets$.subscribe( ( [connectedWallet] ) => {
			if(connectedWallet === undefined){
				globalSetState({
					connectedWallet : null , 
					windowLoading : {
						isLoading : false ,
					},
					walletConnecting :false ,
				});
				return;
			}else {
				if(connectedWallet.accounts[0].ens !== null ) {
					globalSetState( {
						connectedWallet : connectedWallet ,
						windowLoading : {
							isLoading : false ,
						} ,
						walletConnecting : false ,
					} );
					setWalletToLocalstorage(connectedWallet);
				}else {
					fetchENS(
						connectedWallet.accounts[0].address ,
						web3onboard.instance.state.get().chains[0],
					).then((ens) => {
						connectedWallet.accounts[0].ens = ens;
						globalSetState( {
							connectedWallet : connectedWallet ,
							windowLoading : {
								isLoading : false ,
							} ,
							walletConnecting : false ,
						} );
						setWalletToLocalstorage(connectedWallet);
					});
				}
			}
			
			lifecycle.unmount( () => subscription.unsubscribe() );
		} );
	} );
	
	return {
		get wallet() {
			return globalStore.connectedWallet || null;
		} ,
	};
};

export const chains = ( lifecycle : LifeCycle ) => {
	
	const {
		state ,
		setChain ,
	} = web3onboard.instance;
	
	const chains = state.get().chains;
	/*typescript do not support do expression UNTIL NOW!厚礼蟹*/
	const getConnectedChain = function ( walletLabel ) {
		const initialWallets = state.get().wallets;
		if ( initialWallets.length === 0 ) return null;
		return (
			initialWallets.find( ( { label } ) => label === walletLabel ) ||
			initialWallets[ 0 ]
		).chains[ 0 ] || null;
	};
	
	/*订阅器作用是监听任何链接钱包的行为, 包括调用blocknativeAPI或UI widget*/
	lifecycle.mounted( () => {
		const subscription = state.
		select( 'chains' ).
		subscribe( ( [chain] ) => {
			
			if ( chain ) {
				crayon.green('connected chain:',chain);
				globalSetState( { 
					currentChain : chain ,
				} );
			}
			
		} );
		lifecycle.unmount( () => {
			subscription.unsubscribe();
		} );
	} );
	
	
	const set = ( options : SetChainOptions , walletLabel ) : Promise<boolean> => {
		globalSetState( { settingChain : true } );
		
		return setChain( {
			...options ,
			wallet : walletLabel ,
		} ).
		then( ( success ) => {
			globalSetState( { settingChain : false } );
			return success;
		} );
	};
	
	return {
		get chains() {
			return state.get().chains;
		} ,
		/*设置globalStore的chains,引起rerender*/
		get setChainsState() {
			return () => globalSetState( { chains : this.chains } );
		} ,
		get currentChain() {
			return globalStore.currentChain;
		} ,
		get settingChain() {
			return globalStore.settingChain;
		} ,
		get setChain() {
			return set;
		} ,
	};
};


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
			throw "error : name is null ";
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
			throw "error : resolver is null";
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
	} );
}
