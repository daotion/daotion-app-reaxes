import React , {} from 'react';
import { ComponentWrapper } from "@@common/ReactComponentWrapper";
import { ReactComponentClass } from '@@common/ReactComponentClass';
import {
	Button ,
	Input,
	
} from 'antd';
import { viaMobx } from '@@common/MobxState';
import utils , {} from '@@utils';
import Web3Onboard from '@web3-onboard/core';
import type {
	InitOptions ,
	OnboardAPI ,
	ConnectOptions ,
	DisconnectOptions ,
	WalletState ,
	ConnectedChain ,
} from '@web3-onboard/core';

import { Chain } from '@web3-onboard/common';


import { web3Onboard } from './onboard';

import type { Account } from './types';
import {
	walletConnection ,
	wallets ,
	setChain ,
} from './actions';

export interface Store {
	/**
	 * null:第一次还没连接, false:已断开连接
	 */
	connecting : null|boolean,
	connectedWallet : WalletState,
	wallets : WalletState[] ,
	settingChain : boolean ,
	connectedChain : ConnectedChain|null ,
	
	account : Account|null ,
};
export const {
	store ,
	setState ,
} = viaMobx<Store>( {
	connecting : null ,
	connectedWallet : null ,
	wallets : null ,
	settingChain : false ,
	connectedChain : null ,
	account : null ,
} );


export const WalletTest = ComponentWrapper( class extends ReactComponentClass {
	
	
	componentDidMount() {
		wallets.didMount();
		setChain.didMount(walletConnection.connectedWallet?.label);
		
		
		
		if(walletConnection.connectedWallet){
			
		}
		
	};
	
	componentWillUnmount() {
		wallets.unMount();
		setChain.unMount()
	}
	
	componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {

	}
	
	actions = {
		connect : () => {
			walletConnection.connect( {} ).then(() => {
				const wallet = store.connectedWallet;
				const { name, avatar } = wallet?.accounts[0].ens ?? {}
				setState( {
					account : {
						address : wallet.accounts[ 0 ].address ,
						balance : wallet.accounts[ 0 ].balance ,
						ens : {
							name ,
							avatar : avatar?.url ,
						} ,
					} ,
				} );
			});
		} ,
	};
	
	render() {
		
	
		
		
		return <>
			<Button
				onClick = { () => { this.actions.connect() } }
			>connect wallet</Button>
			<Button
				onClick = { () => {
					walletConnection.disconnect( {label : walletConnection.connectedWallet.label} );
				} }
			>disconnect wallet</Button>
			
			
			<>
				{(() => {
					switch ( walletConnection.connecting ) {
						case null :
							return "null";
						case false :
							return "false";
						case true :
							return "true";
					}
				})()}
				{!!walletConnection.connectedWallet && (console.log(walletConnection.connectedWallet,null)) || "ffffff"}
			</>
		</>;
	}
} );
