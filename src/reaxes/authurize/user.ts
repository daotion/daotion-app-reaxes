/**
 * 真钱包签名,登录
 * localstorage._fake_wallets_map_ === "{'<address>':'<private_key>'}"
 */
export const reaxel_user_sign_login = function () {
	const {
		store ,
		setState ,
	} = orzMobx<{
		logged_in:boolean;
		privateKey : string;
		real_address : string;
		fakeWallet : Wallet;
	}>( {
		logged_in : false ,
		/*假钱包私钥*/
		privateKey : null ,
		/*用户真实钱包的地址*/
		real_address : null ,
		fakeWallet : null ,
	} );
	const reax_wallet = reaxel_wallet();
	const symbol__fake_wallets_map_ = Symbol( '_fake_wallets_map_' );
	
	/*从storage获取私钥*/
	const checkAddressIsLoggedIn = ( address : string ) => {
		const walletsMap : string = orzLocalstroage.get<string>( symbol__fake_wallets_map_.description ) || '{}';
		const privateKey : string = (typeof walletsMap === "string" ? JSON.parse( walletsMap )[ address ] : walletsMap[address]) ?? null;
		
		return privateKey;
	};
	/*用于操作localstorage存的私钥组*/
	const address_map_private_key_utils = {
		add( [ address , privateKey ] : [ string , string ] ) {
			// if ( address_map_private_key_utils.getAll().hasOwnProperty( address ) ) {
			//	
			// }
			const pairs = address_map_private_key_utils.getAll();
			pairs[address] = privateKey;
			orzLocalstroage.set( symbol__fake_wallets_map_.description , JSON.stringify( pairs ) );
		} ,
		remove(address:string) {
			const pairs = _.omit(address_map_private_key_utils.getAll(),[address]);
			orzLocalstroage.set( symbol__fake_wallets_map_.description , JSON.stringify( pairs ) );
		} ,
		empyt() {
			orzLocalstroage.set( symbol__fake_wallets_map_.description , JSON.stringify( {} ) );
		} ,
		/*获取所有的映射关系键值对 exa:{k1:v1,k2:v2}*/
		getAll() : member {
			const map_string = orzLocalstroage.get<string>( symbol__fake_wallets_map_.description ) ?? '{}';
			return typeof map_string === "string" ? JSON.parse( map_string ) : map_string ;
		} ,
		checkAddressIsLoggedIn ,
	};
	
	reax_wallet.address_memoed_reaction( ( address ) => {
		if ( address ) {
			setState( { real_address : address } );
			const privateKey = checkAddressIsLoggedIn( address );
			if ( privateKey ) {
				setState( { privateKey,logged_in:true , fakeWallet : new Wallet(privateKey) } );
			}else {
				setState( { privateKey : null , logged_in : false } );
			}
		}
	} );
	
	return () => {
		
		return {
			get fake_wallets_map_string() {
				return symbol__fake_wallets_map_.description;
			} ,
			get fake_wallet_store() {
				return store;
			} ,
			/*使用用户真实的钱包签名并登录 ,当用户点击了签名按钮并且与后端交互成功时,将假钱包私钥缓存进localstorage*/
			loginWithUserWallet() {
				if ( !store.privateKey ) {
					const fakeWallet = Wallet.createRandom();
					const {
						address : fakeAddress ,
						privateKey : fakePrivateKey ,
					} = fakeWallet;
					const real_address = store.real_address || globalStore.wallet.accounts[ 0 ].address;
					
					const message = {
						from : real_address ,
						alias : fakeAddress ,
						timestamp : Date.now().toString() ,
					};
					
					const data = (
						{
							types : {
								EIP712Domain : domainTypes ,
								AddressAlias : messageTypes ,
							} ,
							domain : domainData ,
							primaryType : "AddressAlias" ,
							message : message ,
						}
					);
					
					return reax_wallet.web3Provider.send( 'eth_signTypedData_v3' , [
						globalStore.wallet.accounts[ 0 ].address.toLowerCase() ,
						JSON.stringify( data ) ,
					] ).
					then( ( res ) => {
						return fetch_user_address_alias( {
							address : globalStore.wallet.accounts[ 0 ].address ,
							data : message ,
							signature : res ,
						} );
					} ).
					then( ( res ) => {
						crayon.green( "登录成功!" );
						address_map_private_key_utils.add( [
							globalStore.wallet.accounts[ 0 ].address ,
							fakePrivateKey,
						] );
						setState( {
							logged_in : true ,
							privateKey : fakePrivateKey ,
							real_address,
							fakeWallet ,
						} );
					} );
				}
			} ,
		};
	};
}();

import { orzLocalstroage } from '@@common/storages';
import {
	ethers ,
	Wallet ,
} from 'ethers';
import { fetch_user_address_alias } from '@@requests';
import {reaxel_wallet} from '@@reaxes/wallet/wallet';
/*address-privateKey映射*/
type member = { [ p : string ] : string };
const domainTypes = [
	{
		name : "name" ,
		type : "string" ,
	} ,
	{
		name : "version" ,
		type : "string" ,
	} ,
	{
		name : "salt" ,
		type : "bytes32" ,
	} ,
];
const domainData = {
	name : "dao_app" ,
	version : "1" ,
	salt : "0xf2d857f4a3edcb9b78b5d503bfe733db1e3f6cdc2b7971ee739626c97e86a558" ,
};
const messageTypes = [
	{
		name : "from" ,
		type : "address" ,
	} ,
	{
		name : "alias" ,
		type : "address" ,
	} ,
	{
		name : "timestamp" ,
		type : "string" ,
	} ,
];
