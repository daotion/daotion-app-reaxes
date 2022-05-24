import React from 'react';
import { Button  } from 'antd';

import type {
	ConnectedChain ,
	WalletState ,
} from '@web3-onboard/core';

import { ComponentWrapper } from "@@common/ReactComponentWrapper";
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { viaMobx } from '@@common/MobxState';


import {
	setChain ,
	walletConnection ,
	wallets ,
} from '@@common/actions';

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
				{/*@ts-ignore*/ }
				{!!walletConnection.connectedWallet && (console.log(walletConnection.connectedWallet,null)) || "ffffff"}
			</>
		</>;
	}
} );
