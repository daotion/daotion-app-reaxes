import Web3Onboard , {} from '@web3-onboard/core';
import type {
	InitOptions ,
	OnboardAPI ,
	ConnectOptions ,
	DisconnectOptions ,
	WalletState ,
	ConnectedChain ,
} from '@web3-onboard/core';
import {viaMobx} from '@@mobxState';

import { Chain } from '@web3-onboard/common';
import { web3onboard } from '@@common/actions';


const web3Onboard = web3onboard.instance;


const onerror = ( msg ) => {
	crayon.error( msg );
};


type SetChainOptions = {
	chainId: string
	chainNamespace?: string
}


const syncState = {};





export const connectWallet = (lifecycle:LifeCycle) => {
	
	lifecycle.mounted( () => {
		globalSetState( {
			connectedWallet : web3onboard.instance.state.get().wallets[ 0 ] ,
		} );
	} );
	
	const persistWallet = () => {
		const walletsSub = web3onboard.instance.state.select( 'wallets' );
		const { unsubscribe } = walletsSub.subscribe( wallets => {
			const connectedWallets = wallets.map( ( { label } ) => label );
			window.localStorage.setItem(
				'connectedWallets' ,
				JSON.stringify( connectedWallets ) ,
			);
		} );
		
	};
	
	return {
		get connectedWallet() {
			return globalStore.connectedWallet;
		} ,
		get connecting() {
			return globalStore.walletConnecting;
		} ,
		get connect() {
			return ( options: ConnectOptions ) => {
				globalSetState( { 
					walletConnecting : true ,
					windowLoading : {tipNode : "connecting wallet, please hold on.",isLoading : true}
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
					if ( connectedWallet.accounts[ 0 ].ens === null ) {
						const chain = web3onboard.instance.state.get().chains.find(({ namespace, id }) => namespace === 'evm' && id === connectedWallet.chains[0].id );
						
						return getEns(connectedWallet.accounts[0].address,chain).
						then( ( ens ) => {
							connectedWallet.accounts[0].ens = ens;
							globalSetState( {
								walletConnecting : false ,
								connectedWallet : connectedWallet || null ,
								windowLoading:{ isLoading : false}
							} );
							return connectedWallet;
						} );
					}
					
					globalSetState( {
						walletConnecting : false ,
						connectedWallet : connectedWallet || null ,
						windowLoading : {
							tipNode : "connecting wallet, please hold on." ,
							isLoading : false,
						},
					} );
					return connectedWallet;
					
				} ).catch((e) => {
					console.error( e);
				});
			};
		} ,
		get disconnect() {
			return ( label ) => {
				globalSetState( { walletConnecting : true } );
				web3onboard.instance.disconnectWallet( { label } ).
				then( ( wallet ) => {
					globalSetState( {
						connectedWallet : null ,
						walletConnecting : false ,
					} );
				} );
			};
		} ,
	};
	
}

export const wallets = (lifecycle:LifeCycle) => {
	const wallets = web3onboard.instance.state.get().wallets;
	lifecycle.mounted( () => {
		const wallets$ = web3onboard.instance.state.select( "wallets" );
		const subscription = wallets$.subscribe( ( connectedWallets ) => {
			globalSetState( { connectedWallet : connectedWallets[0] } );
			lifecycle.unmount( () => subscription.unsubscribe() );
		} );
	} );
	
	return {
		get wallet() {
			return globalStore.connectedWallet || null ;
		},
	}
}

export const chains = (lifecycle:LifeCycle) => {
	
	const {state,setChain} = web3onboard.instance;
	
	const chains = state.get().chains;
	/*typescript do not support do expression UNTIL NOW!厚礼蟹*/
	const getConnectedChain = function (walletLabel) {
		const initialWallets = state.get().wallets;
		if ( initialWallets.length === 0 ) return null;
		return (
			initialWallets.find( ( { label } ) => label === walletLabel ) ||
			initialWallets[ 0 ]
		).chains[ 0 ] || null;
	};
	
	/*订阅器作用是监听钱包extension的切换行为,*/
	lifecycle.mounted( () => {
		const subscription = state.
		select( 'wallets' ).
		subscribe( ( wallets ) => {
			console.log(`chains.subscribe()......`,wallets);
			const wallet = /*wallets.find( ( { label } ) => label === walletLabel ) ||*/ wallets[ 0 ];
			
			if ( wallet ) {
				globalSetState( { connectedChain : wallet.chains[ 0 ] } );
			}
			
		} );
		lifecycle.unmount(() => {
			subscription.unsubscribe();
		});
	} );
	
	
	
	const set = ( options: SetChainOptions,walletLabel ): Promise<boolean> => {
		globalSetState( { settingChain : true } );
		
		return setChain( {...options ,wallet : walletLabel ,} ).
		then( ( success ) => {
			globalSetState( { settingChain : false });
			return success;
		} );
	}
	
	return {
		get chains() {
			return state.get().chains;
		} ,
		/*设置globalStore的chains,引起rerender*/
		get setChainsState (){
			return () => globalSetState({chains : this.chains});
		},
		get connectedChain (){
			return globalStore.connectedChain;
		},
		get settingChain (){
			return globalStore.settingChain;
		},
		get setChain (){
			return set;
		},
	};
}


class App extends ReactComponentClass {
	connectWallet = connectWallet(this.lifecycle);
	actions = {
		connect : () => {
			this.connectWallet.connect({} )
		}
	}
	
	render (){
	
		
		return <>
			<button onClick = {this.actions.connect}>connect</button>
			<button>disconnect</button>
		</>
	}
}



import {providers,} from 'ethers';
const getEns = (address:string , chain:Chain) => {
	const provider = new providers.StaticJsonRpcProvider( chain.rpcUrl );
	const ens = {} as ArrayType<WalletState['accounts']>["ens"];
	return provider.lookupAddress( address ).
	then( ( name ) => {
		if ( name ) {
			_.assign(
				ens ,
				{ name },
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
				resolver.getAvatar(),
				resolver,
			] );
		}else {
			throw "error : resolver is null";
		}
	} ).then(([contentHash,avatar,resolver]) => {
		
		const res = _.assign(
			ens ,
			{ 
				avatar ,
				contentHash,
				getText : resolver.getText.bind(resolver),
			},
		);
		console.log(logProxy(res));
		return res;
	});
};
