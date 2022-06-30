/**
 * 真钱包签名,登录
 */



const reaxel_user_sign_login = function(){
	const {store,setState} = orzMobx({
		logged_in : false ,
		privateKey : null ,
		/*用户真实钱包的地址*/
		real_address : null ,
	});
	const { address_memoed_reaction , provider } = reaxel_wallet();
	const symbol__fake_wallets_map_ = Symbol( '_fake_wallets_map_' );
	
	/*从storage获取私钥*/
	const checkAddressIsLoggedIn = (address:string) => {
		const walletsMap:string = orzLocalstroage.get<string>(symbol__fake_wallets_map_.description);
		const privateKey:string = JSON.parse(walletsMap)[address] ?? null;
		
		return privateKey;
	}
	/*用于操作localstorage存的私钥组*/
	const address_map_private_key_utils = {
		add([address,privateKey]:[string,string]){
			address_map_private_key_utils.getAll().find(() => )
		},
		remove(){},
		empyt(){},
		getAll():member[]{
			const map_string = orzLocalstroage.get<string>( symbol__fake_wallets_map_.description );
			return JSON.parse( map_string );
		},
		
	};
	
	address_memoed_reaction( ( address ) => {
		if(address){
			setState( { real_address : address } );
			const privateKey = checkAddressIsLoggedIn(address);
			if(privateKey){
				setState( { privateKey } );
			}
		}
	} );
	
	return () => {
		
		return {
			get fake_wallets_map_string (){
				return symbol__fake_wallets_map_.description;
			} ,
			get fake_wallet_store (){ 
				return store;
			},
			/*使用用户真实的钱包签名并登录 ,当用户点击了签名按钮并且与后端交互成功时,将假钱包私钥缓存进localstorage*/
			loginWithUserWallet (){
				if(!store.privateKey){
					const fakeWallet = Wallet.createRandom();
					const {address:fakeAddress,privateKey:fakePrivateKey} = fakeWallet;
					const real_address = store.real_address || globalStore.connectedWallet.accounts[ 0 ].address;
					const domainTypes = [
						{ name: "name", type: "string" },
						{ name: "version", type: "string" },
						{ name: "salt", type: "bytes32" },
					];
					const domainData = {
						name : "dao_app" ,
						version : "1",
						salt : "0xf2d857f4a3edcb9b78b5d503bfe733db1e3f6cdc2b7971ee739626c97e86a558" ,
					};
					const messageTypes = [
						{name : "from" , type : "address"},
						{name : "alias" , type : "address"},
						{name : "timestamp" , type : "string"},
					];
					
					const message = {
						from: real_address,
						alias: fakeAddress,
						timestamp : Date.now().toString(),
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
					
					const web3provider = new ethers.providers.Web3Provider(provider, 'any');
					
					web3provider.send( 'eth_signTypedData_v3' , [
						globalStore.connectedWallet.accounts[ 0 ].address.toLowerCase() ,
						JSON.stringify( data ),
					] ).then((res) => {
						return fetch_user_address_alias( {
							address : globalStore.connectedWallet.accounts[ 0 ].address ,
							data : message ,
							signature : res ,
						} );
					}).then((res) => {
						crayon.green("登录成功!");
						
					});
				}
			}
		};
	};
}();

import { reaxel_wallet } from '@@reaxes/wallet';
import {orzLocalstroage} from '@@common/storages';
import { ethers ,Wallet } from 'ethers';
import { fetch_user_address_alias } from '@@requests';
/*address-privateKey映射*/
type member = {[p:string]:string};
