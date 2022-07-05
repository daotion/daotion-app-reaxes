import type {
	InitOptions ,
	OnboardAPI ,
	ConnectOptions ,
	DisconnectOptions ,
	WalletState ,
	ConnectedChain ,
} from '@web3-onboard/core';
import fortmaticModule from '@web3-onboard/fortmatic';
import gnosisModule from '@web3-onboard/gnosis';
import injectedModule from '@web3-onboard/injected-wallets';
import keepkeyModule from '@web3-onboard/keepkey';
import keystoneModule from '@web3-onboard/keystone';
import ledgerModule from '@web3-onboard/ledger';
import portisModule from '@web3-onboard/portis';
import torusModule from '@web3-onboard/torus';
import trezorModule from '@web3-onboard/trezor';
import walletConnectModule from '@web3-onboard/walletconnect';
import walletLinkModule from '@web3-onboard/walletlink';
import magicModule from '@web3-onboard/magic';
import { init } from '@web3-onboard/react';
import Web3Onboard from '@web3-onboard/core';

// import blocknativeIcon from './icon/blocknatieIcon.svg';
// import blocknativeLogo from './icon/blocknativeLogo.svg';

const INFURA_KEY = '1886ff3d0a1143689424a8341cb75c66';

const injected = injectedModule();

const walletLink = walletLinkModule();

const walletConnect = walletConnectModule();
const portis = portisModule( {
	// Replace with your apiKey
	apiKey : 'b2b7586f-2b1e-4c30-a7fb-c2d1533b153b' ,
} );

const fortmatic = fortmaticModule( {
	// Replace with your apiKey
	apiKey : 'pk_test_886ADCAB855632AA' ,
} );

const torus = torusModule();
const ledger = ledgerModule();
const keepkey = keepkeyModule();
const keystone = keystoneModule();
const gnosis = gnosisModule();

const trezorOptions = {
	email : 'test@test.com' ,
	appUrl : 'https://www.blocknative.com' ,
};
const trezor = trezorModule( trezorOptions );

const magic = magicModule( {
	// Replace with your apiKey
	apiKey : 'pk_live_02207D744E81C2BA' ,
} );
const options:InitOptions =  {
	accountCenter : {
		desktop : {
			enabled : false ,
		},
		mobile : {
			enabled : false,
		}
	} ,
	// An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
	wallets : [
		injected ,
		ledger ,
		trezor ,
		walletConnect ,
		keepkey ,
		keystone ,
		walletLink ,
		magic ,
		fortmatic ,
		portis ,
		torus ,
		gnosis ,
	] ,
	// An array of Chains that your app supports
	chains : [
		/*todo <goerli>  <>*/
		{
			// hex encoded string, eg '0x1' for Ethereum Mainnet
			id : '0x1' ,
			// string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
			namespace : 'evm' ,
			// the native token symbol, eg ETH, BNB, MATIC
			token : 'ETH' ,
			// used for display, eg Ethereum Mainnet
			label : 'Ethereum Mainnet' ,
			// used for network requests
			rpcUrl : `https://mainnet.infura.io/v3/${ INFURA_KEY }` ,
			
			icon : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI5MF84MTM2KSI+CjxwYXRoIGQ9Ik0wIDEyQzAgNS4zNzI0IDUuMzcyNSAwIDEyLjAwMDIgMEMxOC42Mjc5IDAgMjQuMDAwNCA1LjM3MjQgMjQuMDAwNCAxMkMyNC4wMDA0IDE4LjYyNzYgMTguNjI3OSAyNCAxMi4wMDAyIDI0QzUuMzcyNSAyNCAwIDE4LjYyNzYgMCAxMloiIGZpbGw9IiM2MjdFRUEiLz4KPHBhdGggZD0iTTYuMDAwMTIgMTEuNTg2OUwxMi4wMDAxIDE1VjJMNi4wMDAxMiAxMS41ODY5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC44IiBkPSJNMTIuMDAwNiAyTDEyIDE1TDE4IDExLjYyOTZMMTIuMDAwNiAyWiIgZmlsbD0iI0MwQ0JGNiIvPgo8cGF0aCBkPSJNNi4wMDAxMiAxMy4yOTU5TDExLjg5NCAyMS41OTk5VjE2Ljc3ODNMNi4wMDAxMiAxMy4yOTY1VjEzLjI5NTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik0xMS44OTQ2IDE2Ljc3ODNWMjEuNTk5OUwxNy43OTA5IDEzLjI5NTlMMTEuODk0NiAxNi43NzgzWiIgZmlsbD0iI0MwQ0JGNiIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMi4wMDA5IDlMNiAxMS42MDk1TDEyLjAwMDkgMTVMMTggMTEuNjA5NUwxMi4wMDA5IDlaIiBmaWxsPSIjODE5N0VFIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjkwXzgxMzYiPgo8cmVjdCB3aWR0aD0iMjQuMDAwNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4",
			
		} ,
		// {
		// 	id : '0x3' ,
		// 	token : 'tROP' ,
		// 	label : 'Ropsten Testnet' ,
		// 	rpcUrl : `https://ropsten.infura.io/v3/${ INFURA_KEY }` ,
		// 	icon : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIxNzZfMTkwNTApIj4KPHBhdGggZD0iTTAgMTJDMCA1LjM3MjQgNS4zNzI1IDAgMTIuMDAwMiAwQzE4LjYyNzkgMCAyNC4wMDA0IDUuMzcyNCAyNC4wMDA0IDEyQzI0LjAwMDQgMTguNjI3NiAxOC42Mjc5IDI0IDEyLjAwMDIgMjRDNS4zNzI1IDI0IDAgMTguNjI3NiAwIDEyWiIgZmlsbD0iI0VGNDY2RiIvPgo8cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik02LjAwMDEyIDExLjU4NjlMMTIuMDAwMSAxNVYyTDYuMDAwMTIgMTEuNTg2OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTEyLjAwMDYgMkwxMiAxNUwxOCAxMS42Mjk2TDEyLjAwMDYgMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjAwMDEyIDEzLjI5NTlMMTEuODk0IDIxLjU5OTlWMTYuNzc4M0w2LjAwMDEyIDEzLjI5NTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik0xMS44OTQ2IDE2Ljc3ODNWMjEuNTk5OUwxNy43OTA5IDEzLjI5NTlMMTEuODk0NiAxNi43NzgzVjE2Ljc3ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMi4wMDA5IDlMNiAxMS42MDk1TDEyLjAwMDkgMTVMMTggMTEuNjA5NUwxMi4wMDA5IDlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIxNzZfMTkwNTAiPgo8cmVjdCB3aWR0aD0iMjQuMDAwNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
		// } ,
		{
			id : '0x4' ,
			token : 'rETH' ,
			label : 'Rinkeby Testnet' ,
			rpcUrl : `https://rinkeby.infura.io/v3/${ INFURA_KEY }` ,
			icon : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIxNzZfMTkwODkpIj4KPHBhdGggZD0iTTAgMTJDMCA1LjM3MjQgNS4zNzI1IDAgMTIuMDAwMiAwQzE4LjYyNzkgMCAyNC4wMDA0IDUuMzcyNCAyNC4wMDA0IDEyQzI0LjAwMDQgMTguNjI3NiAxOC42Mjc5IDI0IDEyLjAwMDIgMjRDNS4zNzI1IDI0IDAgMTguNjI3NiAwIDEyWiIgZmlsbD0iI0Y0QkYwMCIvPgo8cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik02LjAwMDEyIDExLjU4NjlMMTIuMDAwMSAxNVYyTDYuMDAwMTIgMTEuNTg2OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTEyLjAwMDYgMkwxMiAxNUwxOCAxMS42Mjk2TDEyLjAwMDYgMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjAwMDEyIDEzLjI5NTlMMTEuODk0IDIxLjU5OTlWMTYuNzc4M0w2LjAwMDEyIDEzLjI5NjVWMTMuMjk1OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuOCIgZD0iTTExLjg5NDYgMTYuNzc4M1YyMS41OTk5TDE3Ljc5MDkgMTMuMjk1OUwxMS44OTQ2IDE2Ljc3ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0xMi4wMDA5IDlMNiAxMS42MDk1TDEyLjAwMDkgMTVMMTggMTEuNjA5NUwxMi4wMDA5IDlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIxNzZfMTkwODkiPgo8cmVjdCB3aWR0aD0iMjQuMDAwNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
		} ,
		{
			id : '0x5' ,
			token : 'GoerliETH' ,
			rpcUrl : `https://goerli.infura.io/v3/${ INFURA_KEY }` ,
			label : 'Goerli Testnet' ,
			icon : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIxNzZfMTkwOTYpIj4KPHBhdGggZD0iTTAgMTJDMCA1LjM3MjQgNS4zNzI1IDAgMTIuMDAwMiAwQzE4LjYyNzkgMCAyNC4wMDA0IDUuMzcyNCAyNC4wMDA0IDEyQzI0LjAwMDQgMTguNjI3NiAxOC42Mjc5IDI0IDEyLjAwMDIgMjRDNS4zNzI1IDI0IDAgMTguNjI3NiAwIDEyWiIgZmlsbD0iIzJBNUVDNCIvPgo8cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik02LjAwMDEyIDExLjU4NjlMMTIuMDAwMSAxNVYyTDYuMDAwMTIgMTEuNTg2OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTEyLjAwMDYgMkwxMiAxNUwxOCAxMS42Mjk2TDEyLjAwMDYgMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjAwMDEyIDEzLjI5NTlMMTEuODk0IDIxLjU5OTlWMTYuNzc4M0w2LjAwMDEyIDEzLjI5NjVWMTMuMjk1OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuOCIgZD0iTTExLjg5NDYgMTYuNzc4M1YyMS41OTk5TDE3Ljc5MDkgMTMuMjk1OUwxMS44OTQ2IDE2Ljc3ODNWMTYuNzc4M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTEyLjAwMDkgOUw2IDExLjYwOTVMMTIuMDAwOSAxNUwxOCAxMS42MDk1TDEyLjAwMDkgOVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjE3Nl8xOTA5NiI+CjxyZWN0IHdpZHRoPSIyNC4wMDA0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
		} ,
		{
			id : '0x504' ,
			token : 'GLMR' ,
			rpcUrl : `https://rpc.api.moonbeam.network` ,
			label : 'Moonbeam' ,
			icon : "data:image/webp;base64,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",
		} ,
	] ,
	appMetadata : {
		// The name of your dApp
		name : 'Blocknative' ,
		// SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
		icon : "data:image/svg+xml;base64,PHN2ZyBpZCA9ICJMYXllcl8xIgoJaGVpZ2h0ID0gIjEwMCUiCglkYXRhLW5hbWUgPSAiTGF5ZXIgMSIKCXhtbG5zID0gImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJeG1sbnM6eGxpbmsgPSAiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCXZpZXdCb3ggPSAiMCAwIDM4MC45NCA0MzQuMDMiID4KCTxkZWZzID4KCQk8c3R5bGUgPgoJCQkuY2xzLTEgeyBmaWxsOiAjMjYyYTNkOyB9CgkJCQoJCQkuY2xzLTIgeyBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7IH0KCQkJCgkJCS5jbHMtMyB7IGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50LTIpOyB9CgkJPC9zdHlsZSA+CgkJPGxpbmVhckdyYWRpZW50IGlkID0gImxpbmVhci1ncmFkaWVudCIKCQkJeDEgPSAiMi4xOSIKCQkJeTEgPSAiMTYzLjAzIgoJCQl4MiA9ICIxODguOSIKCQkJeTIgPSAiMTYzLjAzIgoJCQlncmFkaWVudFVuaXRzID0gInVzZXJTcGFjZU9uVXNlIiA+CgkJCTxzdG9wIG9mZnNldCA9ICIwIgoJCQkJc3RvcC1jb2xvciA9ICIjNTVjY2ZlIiAvPgoJCQk8c3RvcCBvZmZzZXQgPSAiMSIKCQkJCXN0b3AtY29sb3IgPSAiIzVlOTNlZiIgLz4KCQk8L2xpbmVhckdyYWRpZW50ID4KCQk8bGluZWFyR3JhZGllbnQgaWQgPSAibGluZWFyLWdyYWRpZW50LTIiCgkJCXgxID0gIjIuMTkiCgkJCXkxID0gIjMyNC43MyIKCQkJeDIgPSAiMzc1LjYxIgoJCQl5MiA9ICIzMjQuNzMiCgkJCXhsaW5rOmhyZWYgPSAiI2xpbmVhci1ncmFkaWVudCIgLz4KCTwvZGVmcyA+Cgk8cG9seWdvbiBjbGFzcyA9ICJjbHMtMSIKCQlwb2ludHMgPSAiNjQuNDIgMzI0LjczIDIuMTkgMjE2LjkzIDEyNi42NiAyMTYuOTMgMTI2LjY2IDIxNi45MyAxODguOSAzMjQuNzMgNjQuNDIgMzI0LjczIiAvPgoJPHBvbHlnb24gY2xhc3MgPSAiY2xzLTIiCgkJcG9pbnRzID0gIjEyNi42NiAyMTYuOTMgMi4xOSAyMTYuOTMgNjQuNDIgMTA5LjEzIDE4OC45IDEwOS4xMyAxMjYuNjYgMjE2LjkzIiAvPgoJPHBvbHlnb24gY2xhc3MgPSAiY2xzLTEiCgkJcG9pbnRzID0gIjI1MS4xNCAyMTYuOTMgMTg4LjkgMTA5LjEzIDY0LjQyIDEwOS4xMyAyLjE5IDEuMzMgMjUxLjE0IDEuMzMgMzc1LjYxIDIxNi45MyAyNTEuMTQgMjE2LjkzIiAvPgoJPHBvbHlnb24gY2xhc3MgPSAiY2xzLTMiCgkJcG9pbnRzID0gIjI1MS4xNCA0MzIuNTMgMi4xOSA0MzIuNTMgNjQuNDIgMzI0LjczIDE4OC45IDMyNC43MyAyNTEuMTQgMjE2LjkzIDM3NS42MSAyMTYuOTMgMjUxLjE0IDQzMi41MyIgLz4KPC9zdmcgPg==" ,
		// Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
		logo : "data:image/svg+xml;base64,PHN2ZyBpZCA9ICJMYXllcl8xIgoJZGF0YS1uYW1lID0gIkxheWVyIDEiCgl4bWxucyA9ICJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKCXhtbG5zOnhsaW5rID0gImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgl2aWV3Qm94ID0gIjAgMCA3OTAuMzQgMTE0LjUxIiA+Cgk8ZGVmcyA+CgkJPHN0eWxlID4uY2xzLTF7ZmlsbDojMjYyYTNkO30uY2xzLTJ7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtM3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTIpO308L3N0eWxlID4KCQk8bGluZWFyR3JhZGllbnQgaWQgPSAibGluZWFyLWdyYWRpZW50IgoJCQl4MSA9ICI2OTQuNDUiCgkJCXkxID0gIjQ2LjA4IgoJCQl4MiA9ICI3NDEuMzkiCgkJCXkyID0gIjQ2LjA4IgoJCQlncmFkaWVudFVuaXRzID0gInVzZXJTcGFjZU9uVXNlIiA+CgkJCTxzdG9wIG9mZnNldCA9ICIwIgoJCQkJc3RvcC1jb2xvciA9ICIjNTVjY2ZlIiAvPgoJCQk8c3RvcCBvZmZzZXQgPSAiMSIKCQkJCXN0b3AtY29sb3IgPSAiIzVlOTNlZiIgLz4KCQk8L2xpbmVhckdyYWRpZW50ID4KCQk8bGluZWFyR3JhZGllbnQgaWQgPSAibGluZWFyLWdyYWRpZW50LTIiCgkJCXgxID0gIjY5NC40NSIKCQkJeTEgPSAiODYuNzMiCgkJCXgyID0gIjc4OC4zMyIKCQkJeTIgPSAiODYuNzMiCgkJCXhsaW5rOmhyZWYgPSAiI2xpbmVhci1ncmFkaWVudCIgLz4KCTwvZGVmcyA+Cgk8cG9seWdvbiBjbGFzcyA9ICJjbHMtMSIKCQlwb2ludHMgPSAiNzEwLjA5IDg2LjczIDY5NC40NSA1OS42MyA3MjUuNzQgNTkuNjMgNzI1Ljc0IDU5LjYzIDc0MS4zOSA4Ni43MyA3MTAuMDkgODYuNzMiIC8+Cgk8cG9seWdvbiBjbGFzcyA9ICJjbHMtMiIKCQlwb2ludHMgPSAiNzI1Ljc0IDU5LjYzIDY5NC40NSA1OS42MyA3MTAuMDkgMzIuNTMgNzQxLjM5IDMyLjUzIDcyNS43NCA1OS42MyIgLz4KCTxwb2x5Z29uIGNsYXNzID0gImNscy0xIgoJCXBvaW50cyA9ICI3NTcuMDMgNTkuNjMgNzQxLjM5IDMyLjUzIDcxMC4wOSAzMi41MyA2OTQuNDUgNS40MyA3NTcuMDMgNS40MyA3ODguMzMgNTkuNjMgNzU3LjAzIDU5LjYzIiAvPgoJPHBvbHlnb24gY2xhc3MgPSAiY2xzLTMiCgkJcG9pbnRzID0gIjc1Ny4wMyAxMTMuODMgNjk0LjQ1IDExMy44MyA3MTAuMDkgODYuNzMgNzQxLjM5IDg2LjczIDc1Ny4wMyA1OS42MyA3ODguMzMgNTkuNjMgNzU3LjAzIDExMy44MyIgLz4KCTxwYXRoIGNsYXNzID0gImNscy0xIgoJCWQgPSAiTTcwLjUxLDY1Ljc3YzAsMTkuNDctMTQuMzcsMzQuNS0zMS44OCwzNC41LTkuNTQsMC0xNi40Ny0zLjUzLTIxLjE3LTkuNTR2Ny43MUguNlY2Ljg3TDE3LjQ2LDEuNjhWNDAuODJjNC43LTYsMTEuNjMtOS41NCwyMS4xNy05LjU0QzU2LjE0LDMxLjI4LDcwLjUxLDQ2LjMsNzAuNTEsNjUuNzdabS0xNi44NiwwYzAtMTEtNy43LTE4LjQyLTE4LjE2LTE4LjQycy0xOCw3LjQ1LTE4LDE4LjQyLDcuNzEsMTguNDMsMTgsMTguNDNTNTMuNjUsNzYuNzUsNTMuNjUsNjUuNzdaIiAvPgoJPHBhdGggY2xhc3MgPSAiY2xzLTEiCgkJZCA9ICJNNzguMDksNi44Nyw5NC45NCwxLjY4Vjk4LjQ0SDc4LjA5WiIgLz4KCTxwYXRoIGNsYXNzID0gImNscy0xIgoJCWQgPSAiTTEwMi4zOSw2NS43N2EzNC41NiwzNC41NiwwLDEsMSwzNC40OSwzNC41QTM0LjEzLDM0LjEzLDAsMCwxLDEwMi4zOSw2NS43N1ptNTIuMjYsMGMwLTEwLjU4LTcuNzEtMTgtMTcuNzctMThzLTE3LjY0LDcuNDUtMTcuNjQsMTgsNy43MSwxOCwxNy42NCwxOFMxNTQuNjUsNzYuMzYsMTU0LjY1LDY1Ljc3WiIgLz4KCTxwYXRoIGNsYXNzID0gImNscy0xIgoJCWQgPSAiTTE3Ny45LDY1Ljc3YzAtMTkuNDcsMTQuNjMtMzQuNDksMzQuNDktMzQuNDksMTIuODEsMCwyMy45MSw2Ljc5LDI5LjI3LDE2Ljg1bC0xNC41LDguNWMtMi42Mi01LjM2LTguMjQtOC43Ni0xNC45LTguNzYtMTAuMDYsMC0xNy41MSw3LjQ1LTE3LjUxLDE3LjlzNy40NSwxNy43NywxNy41MSwxNy43N2M2LjgsMCwxMi40MS0zLjI2LDE1LTguNjJsMTQuNjMsOC4zNmEzMy40NywzMy40NywwLDAsMS0yOS41MywxN0MxOTIuNTMsMTAwLjI3LDE3Ny45LDg1LjI0LDE3Ny45LDY1Ljc3WiIgLz4KCTxwYXRoIGNsYXNzID0gImNscy0xIgoJCWQgPSAiTTI5MC4zMiw5OC40NCwyNjYuNTQsNjguNzhWOTguNDRIMjQ5LjY4VjYuODdsMTYuODYtNS4xOVY2MS44NUwyODksMzMuMTFoMjAuMTJMMjgyLjg3LDY1LjM4bDI3LjA1LDMzLjA2WiIgLz4KCTxwYXRoIGNsYXNzID0gImNscy0xIgoJCWQgPSAiTTM3Ny4yNiw1OC4zMlY5OC40NEgzNjAuNHYtMzhjMC04Ljg5LTUuMzUtMTMuNDYtMTIuOTMtMTMuNDYtOC4yMywwLTE0LjM4LDQuODMtMTQuMzgsMTYuMlY5OC40NEgzMTYuMjRWMzMuMTFoMTYuODV2Ny4zMWMzLjkyLTUuODgsMTAuNzItOS4xNCwxOS40Ny05LjE0QzM2Ni40MSwzMS4yOCwzNzcuMjYsNDEsMzc3LjI2LDU4LjMyWiIgLz4KCTxwYXRoIGNsYXNzID0gImNscy0xIgoJCWQgPSAiTTQ1NC43MiwzMy4xMVY5OC40NEg0MzcuODdWOTAuNzNjLTQuNzEsNS44OC0xMS43Niw5LjU0LTIxLjMsOS41NC0xNy4zOCwwLTMxLjc1LTE1LTMxLjc1LTM0LjVzMTQuMzctMzQuNDksMzEuNzUtMzQuNDljOS41NCwwLDE2LjU5LDMuNjYsMjEuMyw5LjU0VjMzLjExWk00MzcuODcsNjUuNzdjMC0xMS03LjcxLTE4LjQyLTE4LjE3LTE4LjQycy0xOCw3LjQ1LTE4LDE4LjQyLDcuNzEsMTguNDMsMTgsMTguNDNTNDM3Ljg3LDc2Ljc1LDQzNy44Nyw2NS43N1oiIC8+Cgk8cGF0aCBjbGFzcyA9ICJjbHMtMSIKCQlkID0gIk00OTguNjUsNDkuMzFWMzMuMTFINDgzLjg4VjEzLjlMNDY3LDE5LjA5djU3LjRjMCwxNy42NCw4LDI0LjU2LDMxLjYzLDIyVjgzLjE1Yy05LjY3LjUzLTE0Ljc3LjM5LTE0Ljc3LTYuNjZWNDkuMzFaIiAvPgoJPHBhdGggY2xhc3MgPSAiY2xzLTEiCgkJZCA9ICJNNTEwLjQ2LDMzLjExaDE2Ljg1Vjk4LjQ0SDUxMC40NloiIC8+Cgk8cGF0aCBjbGFzcyA9ICJjbHMtMSIKCQlkID0gIk02MDMuMTMsMzMuMTEsNTc4LjMsOTguNDRINTU5LjA5TDUzNC4yNywzMy4xMWgxOC41NWwxNS44MSw0NS43MywxNS45NC00NS43M1oiIC8+Cgk8cGF0aCBjbGFzcyA9ICJjbHMtMSIKCQlkID0gIk02MzkuMiw4NWM2LjUzLDAsMTEuNzYtMi43NCwxNC42NC02LjUzbDEzLjU4LDcuODRjLTYuMTQsOC44OC0xNS45NCwxNC0yOC40OCwxNC0yMiwwLTM1LjgtMTUtMzUuOC0zNC41czE0LTM0LjQ5LDM0LjQ5LTM0LjQ5YzE5LjM0LDAsMzMuMDYsMTUuMjksMzMuMDYsMzQuNDlBMzkuMTEsMzkuMTEsMCwwLDEsNjcwLDcyLjdINjIwLjc4QzYyMy4xMyw4MS4zMiw2MzAuMzIsODUsNjM5LjIsODVabTE0LjY0LTI1LjM1Yy0yLjEtOS40MS05LjE1LTEzLjItMTYuMjEtMTMuMi05LDAtMTUuMTUsNC44NC0xNy4xMiwxMy4yWiIgLz4KPC9zdmcgPg==" ,
		// The description of your app
		description : 'Demo app for Onboard V2' ,
		// The url to a getting started guide for app
		gettingStartedGuide : 'http://mydapp.io/getting-started' ,
		// url that points to more information about app
		explore : 'http://mydapp.io/about' ,
		// if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
		recommendedInjectedWallets : [
			{
				// display name
				name : 'MetaMask' ,
				// link to download wallet
				url : 'https://metamask.io' ,
			} ,
			{
				name : 'Coinbase' ,
				url : 'https://wallet.coinbase.com/' ,
			} ,
		] ,
		// Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
		agreement : {
			version : '1.0.0' ,
			termsUrl : 'https://www.blocknative.com/terms-conditions' ,
			privacyUrl : 'https://www.blocknative.com/privacy-policy' ,
		} ,
	} ,
	// example customising copy
	// i18n: {
	//   en: {
	//     connect: {
	//       selectingWallet: {
	//         header: 'custom text header'
	//       }
	//     }
	//   }
	// }
};
/**
 * web3onboard无法被初始化两次 , 所以使用单例模式
 */
export const web3onboard = new class web3Onboard {
	
	initialized = false;
	#web3Onboard: OnboardAPI = null ;
	get instance () {
		if ( this.initialized ) {
			return this.#web3Onboard;
		} else {
			this.initialized = true;
			this.#web3Onboard = init( options ) as OnboardAPI;
			return this.#web3Onboard;
		}
	}
	
};



