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
import { crayon } from '@@utils';
import {viaMobx} from '@@mobxState';

import { Chain } from '@web3-onboard/common';
import { web3onboard } from '@@common/actions';

import {
	globalStore ,
	globalSetState ,
} from '@@common/global-controller';

const web3Onboard = web3onboard.instance;


export const walletConnection = Object.freeze( new class {
	
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
		return web3Onboard.connectWallet( options ).
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

export const wallets = Object.freeze( new class {
	
	
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
}() );

export const setChain = Object.freeze( new class {
	
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






const connect = () => {
	let walletSubscription ;
	walletConnection.connect({}).then((connectedWallet) => {
		const { wallets } = web3Onboard.state.get();
		const wallets$ = web3Onboard.state.select( 'wallets' );
		
		wallets$.subscribe( ( walletState ) => {
			globalSetState( {
				wallets : walletState ,
			} );
		} );
		
	});
	
}

