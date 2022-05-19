import {
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

import { Chain } from '@web3-onboard/common';
import { web3Onboard } from './onboard';

import type { Account } from './types';
import {
	store ,
	setState ,
	Store ,
} from './';


export const walletConnection = Object.freeze( new class {
	
	get connectedWallet(): Store["connectedWallet"] {
		return store.connectedWallet;
	}
	
	get connecting(): Store["connecting"] {
		return store.connecting;
	}
	
	connect = ( options ) => {
		setState( {
			connecting : true ,
		} );
		return web3Onboard.connectWallet( options ).
		then( ( [ connectedWallet ] ) => {
			setState( {
				connectedWallet ,
				connecting : false ,
			} );
		} );
	};
	
	disconnect = ( { label } ) => {
		setState( { connecting : true } );
		web3Onboard.disconnectWallet( { label } ).
		then( () => {
			setState( {
				connectedWallet : null ,
				connecting : false ,
			} );
		} );
		
	};
	
}() );

export const wallets = Object.freeze( new class {
	
	
	#subscription;
	
	get connectedWallets() {
		return store.wallets;
	}
	
	didMount = () => {
		setState( {
			wallets : web3Onboard.state.get().wallets ,
		} );
		const wallets$ = web3Onboard.state.select( 'wallets' );
		this.#subscription = wallets$.subscribe( ( walletState ) => {
			setState( {
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
		setState( {
			settingChain : value ,
		} );
	};
	
	get chains (){
		return web3Onboard.state.get().chains;
	}
	get connectedChain (){
		return store.connectedChain;
	}
	
	get settingChain (){
		return store.settingChain;
	}
	
	didMount = (walletLabel?:string) => {
		
		this.#subscription = web3Onboard.state.select( 'wallets' ).
		subscribe( wallets => {
			const wallet = wallets.find( ( { label } ) => label === walletLabel ) || wallets[ 0 ];
			
			wallet && setState( {
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
		
		this.lifecycle.use(
			() => {
				const subs = action.subscribe( () => {} );
				
				return () => {
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
