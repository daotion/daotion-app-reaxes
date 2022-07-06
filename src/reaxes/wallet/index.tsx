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
import {getConnectedPromise,setConnectedPromise} from './exported-connected-promise';
const web3Onboard = web3onboard.instance;


const onerror = ( msg ) => {
	crayon.error( msg );
};


type SetChainOptions = {
	chainId : string;
	chainNamespace? : string;
}


const syncState = {};
/*全局的登录promise*/


export const reaxel_connect_wallet_from_storage = ( lifecycle : Lifecycle ) => {
	
	return {
		/*从localstorage读入缓存并链接钱包*/
		connectWalletFromStorage() {
			const wallet = orzLocalstroage.get<WalletState>( orzLocalstroage.account_storage_symbol );
			if ( wallet !== null ) {
				// crayon.blue( 'connectWalletFromStorage:' , wallet );
				web3onboard.instance.connectWallet( {
					autoSelect : {
						label : wallet.label ,
						disableModals : true ,
					} ,
				} ).then(() => {
					globalSetState( {
						// windowLoading : {
						// 	isLoading : true ,
						// 	tipNode : "connecting wallet and fetch for ens .." ,
						// } ,
						walletConnecting : true ,
					} );
				}).catch(() => {
					crayon.gold( '222cannot get previous wallet info' );
				});
			} else {
				crayon.gold( 'cannot get previous wallet info' );
			}
		} ,
	};
};

export const reaxel_connect_wallet_when_mounted = ( lifecycle : Lifecycle ) => {
	const { connectWalletFromStorage } = reaxel_connect_wallet_from_storage( lifecycle );
	lifecycle.mounted( () => {
		connectWalletFromStorage();
	} );
};

export const reaxel_connectWallet = function(){
	
	
	return ( lifecycle : Lifecycle ) => {
		
		return {
			get connectedWallet() {
				return globalStore.connectedWallet;
			} ,
			get connecting() {
				return globalStore.walletConnecting;
			} ,
			connect( options : ConnectOptions ) : Promise<WalletState> {
				setConnectedPromise();
				globalSetState( {
					walletConnecting : true ,
					// windowLoading : {
					// 	tipNode : "connecting wallet, please hold on." ,
					// 	isLoading : true ,
					// } ,
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
					if ( connectedWallet === undefined ) {
						return Promise.reject( 'canceled' );
					}
					return connectedWallet;
				} ).
				catch( ( e ) => {
					console.error( e );
					globalSetState( {
						walletConnecting : false ,
						connectedWallet : null ,
						// windowLoading : { isLoading : false } ,
					} );
					throw e;
				} );
			} ,
			disconnect(label) {
				web3onboard.instance.disconnectWallet( { label } ).
				then( ( [wallet] ) => {
					/*remove cache*/
					orzLocalstroage.remove( orzLocalstroage.account_storage_symbol );
				} );
			} ,
			
		};
	}
}();

export const reaxel_wallet = function(){
	
	const wallets = web3onboard.instance.state.get().wallets;
	
	
	return ( lifecycle? : Lifecycle ) => {
		
		
		lifecycle?.mounted?.( () => {
			const wallets$ = web3onboard.instance.state.select( "wallets" );
			const subscription = wallets$.subscribe( ( [connectedWallet] ) => {
				lifecycle.unmount( () => subscription.unsubscribe() );
				
				if(connectedWallet === undefined){
					globalSetState({
						connectedWallet : null ,
						// windowLoading : {
						// 	isLoading : false ,
						// },
						walletConnecting :false ,
					});
					return;
				}else {
					if(connectedWallet.accounts[0].ens !== null ) {
						globalSetState( {
							connectedWallet : connectedWallet ,
							// windowLoading : {
							// 	isLoading : false ,
							// } ,
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
						}).catch((e) => {
							console.trace(e);
						});
					}
				}
				
			} );
		} );
		
		let prodiver = Reaxes.observedMemo((first) => {
			if(!globalStore.connectedWallet) return prodiver = null;
			return prodiver = new ethers.providers.Web3Provider(globalStore.connectedWallet?.provider ?? null, 'any');
		} , () => [globalStore.connectedWallet]);
		
		
		return {
			get connectedWallet (){
				return globalStore.connectedWallet;
			},
			get wallet() {
				return globalStore.connectedWallet || null;
			} ,
			get provider (){
				return prodiver;
			},
			
			/*当钱包地址发生变化时自动执行*/
			address_reaction(cb:(address:string) => any){
				const lazyInvoke = Reaxes.closuredMemo(() => cb(globalStore.connectedWallet?.accounts?.[0]?.address) , () => []);
				const memo = Reaxes.observedMemo( () => {
					lazyInvoke(() => [globalStore.connectedWallet?.accounts?.[0]?.address])()
				} , () => [globalStore.connectedWallet?.accounts?.[0]?.address] );
				
			},
		};
	};
}();

/*todo refactory*/
export const reaxel_chains = function(){
	const {
		state ,
		setChain ,
	} = web3onboard.instance;
	
	const chains = state.get().chains;
	const closured = Reaxes.closuredMemo( (currentChain) => {
		crayon.green( `currentChain:` , currentChain );
	} , () => [] );
	const subscription = state.
	select( 'chains' ).
	subscribe( ( [chain] ) => {
		
		console.log( chain );
		if ( chain ) {
			// crayon.green('connected chain:',chain);
			globalSetState( {
				currentChain : chain ,
			} );
			closured(() => [chain])(chain);
		}
		
	} );
	
	return ( lifecycle : Lifecycle ) => {
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
				console.log( 'kkkkkkkkkkkkkkk' , chain );
				if ( chain ) {
					// crayon.green('connected chain:',chain);
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
			
			memo_chain_changing (callback) {
				const closured = Reaxes.closuredMemo( (currentChain) => {
					crayon.green( `currentChain:` , currentChain );
				} , () => [] );
				return Reaxes.observedMemo(() => {
					closured(() => [globalStore.currentChain])(globalStore.currentChain);
				},() => [globalStore.currentChain]);
			},
		};
	};
}();


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
			console.error('there is no "ens:name" , will show address directly');
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
