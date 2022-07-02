/**
 * 签名服务,包含了712签名和假钱包签名
 */
export const reaxel_sign = function () {
	
	
	return () => {
		
		return {
			sign712(){
				/*todo to be continued*/
				
			},
			/*传入要被签名的对象或字符串*/
			signByFakeWallet(data:any){
				const reax_wallet = reaxel_wallet();
				const reax_user = reaxel_user_sign_login();
				const { fakeWallet } = reax_user.fake_wallet_store;
				if({
					"string" : true,
					"number" : true,
					"boolean" : true,
				}[typeof data]){
					return fakeWallet.signMessage( data );
				}
				return fakeWallet.signMessage( JSON.stringify( data ) );
			},
		};
	};
}();



import { ethers } from 'ethers';
import { reaxel_wallet } from '@@reaxes/wallet/wallet';
import { reaxel_user_sign_login } from '@@reaxes/authurize/user';


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
