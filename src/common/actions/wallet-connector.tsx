import React , {
	useEffect ,
	useState ,
	useCallback ,
	useMemo ,
	Component ,
} from 'react';

import Web3Onboard from '@web3-onboard/core';
import type {
	InitOptions ,
	OnboardAPI ,
	ConnectOptions ,
	DisconnectOptions ,
	WalletState ,
	ConnectedChain ,
} from '@web3-onboard/core';
import { crayon , viaPromise } from '@@utils';
import {viaMobx} from '@@mobxState';

import { Chain } from '@web3-onboard/common';
import { web3onboard } from '@@common/actions';

import {
	globalStore ,
	globalSetState ,
} from '@@common/global-controller';

const web3Onboard = web3onboard.instance;


export const _walletConnection = Object.freeze( new class {
	
	get connectedWallet(): globalStoreType["connectedWallet"] {
		return globalStore.connectedWallet;
	}
	
	get connecting(): globalStoreType["walletConnecting"] {
		return globalStore.walletConnecting;
	}
	
	connect = ( options ) => {
		globalSetState( {
			walletConnecting : true ,
		} );
		return web3Onboard.
		connectWallet( options ).
		then( ( [ connectedWallet ] ) => {
			
			globalSetState( {
				connectedWallet ,
				walletConnecting : false ,
			} );
			return connectedWallet;
		} );
	};
	
	disconnect = ( { label } ) => {
		globalSetState( { walletConnecting : true } );
		web3Onboard.disconnectWallet( { label } ).
		then( () => {
			globalSetState( {
				connectedWallet : null ,
				walletConnecting : false ,
			} );
		} );
		
	};
	
}() );

export const _wallets = Object.freeze( new class {
	
	
	#subscription;
	
	get connectedWallets() {
		return globalStore.wallets;
	}
	
	didMount = () => {
		globalSetState( {
			wallets : web3Onboard.state.get().wallets ,
		} );
		const wallets$ = web3Onboard.state.select( 'wallets' );
		this.#subscription = wallets$.subscribe( ( walletState ) => {
			globalSetState( {
				wallets : walletState ,
			} );
		} );
	};
	unMount = () => {
		this.#subscription.unsubscribe();
	};
	
	connectWallets = (lifecycle,connectedWallet) => {
		
		globalSetState( {
			wallets : web3Onboard.state.get().wallets ,
		} );
		const wallets$ = web3Onboard.state.select( 'wallets' );
		const subscription = wallets$.subscribe( ( walletState ) => {
			globalSetState( {
				wallets : walletState ,
			} );
		} );
		lifecycle.unmount(subscription);
		return Promise.resolve(connectedWallet);
	}
}() );

export const _setChain = Object.freeze( new class {
	
	#subscription;
	#setInProgress = (value) => {
		globalSetState( {
			settingChain : value ,
		} );
	};
	
	get chains (){
		return web3Onboard.state.get().chains;
	}
	get connectedChain (){
		return globalStore.connectedChain;
	}
	get settingChain (){
		return globalStore.settingChain;
	}
	
	didMount = (walletLabel?:string) => {
		
		this.#subscription = web3Onboard.state.select( 'wallets' ).
		subscribe( wallets => {
			const wallet = wallets.find( ( { label } ) => label === walletLabel ) || wallets[ 0 ];
			
			wallet && globalSetState( {
				connectedChain : wallet.chains[ 0 ] ,
			} );
		} );
		
	};
	
	unMount = () => {
		this.#subscription.unsubscribe();
	};
	
	set = ( options: SetChainOptions ,walletLabel?:string ): Promise<boolean> => {
		this.#setInProgress( true );
		
		return web3Onboard.setChain( {
			...options ,
			wallet : walletLabel ,
		} ).
		then( ( success ) => {
			this.#setInProgress( false );
			return success;
		} );
	}
	
}() );


const onerror = ( msg ) => {
	crayon.error( msg );
};


class test extends Component {
	
	constructor( props ) {
		super( props );
		/*@ts-ignore*/
		this.lifecycle.use(
			() => {/*@ts-ignore*/
				const subs = action.subscribe( () => {} );
				
				return () => {/*@ts-ignore*/
					action.unsubscribe( subs );
				};
			} ,
			[] ,
		);
	}
	
}
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
	
	return {
		get connectedWallet() {
			return globalStore.connectedWallet;
		} ,
		get connecting() {
			return globalStore.walletConnecting;
		} ,
		get connect() {
			return ( options: ConnectOptions ) => {
				globalSetState( { walletConnecting : true } );
				
				return web3onboard.
				instance.
				connectWallet( options ).
				then( ( [ connectedWallet ] ) => {
					if ( connectedWallet.accounts[ 0 ].ens === null ) {
						return viaPromise<WalletState>( ( resolve ) => {
							setTimeout(
								() => {
									resolve( connectedWallet );
								} ,
								1800 ,
							);
						} ).
						then( ( connectedWallet ) => {
							globalSetState( {
								walletConnecting : false ,
								connectedWallet : connectedWallet || null ,
							} );
							return connectedWallet;
						} );
					} else {
						globalSetState( {
							walletConnecting : false ,
							connectedWallet : connectedWallet || null ,
						} );
						return connectedWallet;
					}
				} );
				
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
			globalSetState( { wallets : connectedWallets } );
			lifecycle.unmount( () => subscription.unsubscribe() );
		} );
	} );
	
	return {
		get wallet() {
			return globalStore.wallets?.[0] || null ;
		},
	}
}

export const chains = () => {
	
}



import {ReactComponentClass} from '@@common/ReactComponentClass';
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
