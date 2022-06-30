import {
	ethers ,
	Wallet,
} from 'ethers';
import {reaxel_connect_wallet_from_storage , reaxel_wallet} from '@@reaxes/wallet/index';
import { globalStore } from '@@common/global-controller';
import { Button } from 'antd';

const randomWallet = Wallet.createRandom();
/*登录验证接口 EIP-712*/
const reaxel_login = function(){
	const {store,setState} = orzMobx({
		sign_avalable : false ,
		
	})
	reaxel_connect_wallet_from_storage().connectWalletFromStorage();
	const {address_reaction} = reaxel_wallet();
	const sign_reaction = address_reaction((address) => {
		if(address){
			setState( { sign_avalable : true } );
		}else {
			setState( { sign_avalable : false } );
			
		}
	})
	return (lifecycle:Lifecycle) => {
		
		return {
			get store (){
				return store;
			},
			login(){
				const {
					address : randomAdress ,
					privateKey ,
				} = randomWallet;
				
				const address = globalStore.connectedWallet.accounts[ 0 ].address;
				
				
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
					from: address,
					alias: randomAdress,
					timestamp : Date.now().toString(),
				};
				
				const data = ({
					types: {
						EIP712Domain: domainTypes,
						AddressAlias: messageTypes,
					},
					domain: domainData,
					primaryType: "AddressAlias",
					message: message
				})
				
				const provider = new ethers.providers.Web3Provider(globalStore.connectedWallet.provider, 'any');
				provider.send( 'eth_signTypedData_v3' , [
					globalStore.connectedWallet.accounts[ 0 ].address.toLowerCase() ,
					JSON.stringify( data ),
				] ).then((res) => {
					return request.post( `/user/address-alias` , {
						env : "server_yang" ,
						body : {
							address : globalStore.connectedWallet.accounts[ 0 ].address ,
							data : message ,
							signature : res ,
						} ,
					} );
				}).then((res) => {
					console.log( res );
				});
			}
		};
	};
}();
/*普通校验假签名请求后端*/
const reaxel_sign_request = function(){
	
	// new Wallet(randomWallet.privateKey);
	// ethers.getDefaultProvider();
	return (lifecycle:Lifecycle) => {
		const {
			address : randomAdress ,
			privateKey ,
		} = randomWallet;
		
		
		return {
			sign (){
				//todo 当用户点击签名按钮后 往localstorage里存key:真钱包address&value:假钱包私钥.
				// (new ethers.providers.Web3Provider(randomWallet.provider, 'any')).getSigner().signMessage(JSON.stringify({
				randomWallet.signMessage(JSON.stringify({
					"daoID": 0,
					"joinAddress": "0x46DE5Eb1ecd41A974b86B85C6c53e1a04606dA59"
				})).then((signature) => {
					request.post( '/user/join-dao' , {
						body : {
							address : globalStore.connectedWallet.accounts[0].address ,
							data : {
								"daoID" : 0 ,
								"joinAddress" : "0x46DE5Eb1ecd41A974b86B85C6c53e1a04606dA59" ,
							} ,
							signature ,
						} ,
					} );
				}).then((res) => {
					console.log( res );
				});
				
			},
		};
	};
}();

export const SignTest = ComponentWrapper(class extends ReactComponentClass{
	
	reax_login = reaxel_login(this.lifecycle);
	
	reax_sign_request = reaxel_sign_request( this.lifecycle );
	
	render() {
		return <>
			{ this.reax_login.store.sign_avalable ? <Button
				type="primary"
				onClick = { () => {
					this.reax_login.login();
				} }
			>
				sign
			</Button> : null }
			<Button
				onClick={() => {
					this.reax_sign_request.sign();
				}}
				type="dashed"
			>
				request with fake wallet sign
			</Button>
		</>
	}
})
