import {
	Reaxes ,
	Reaxper ,
	orzMobx ,
	Reaxlass,
} from 'reaxes';
import {
	reaxel_wallet,
	reaxel_user ,
	
} from '@@reaxes';
import {Modal , Button , Input , Select ,} from 'antd';
import less from './create-space-modal.module.less';
import spaceTags from '@@Public/space-tags.json';
import { InfoCircleOutlined } from '@ant-design/icons';
import { SpaceFactoryAbi } from '@@common/contract/abi';
import { SpaceFactoryAddress } from '@@common/contract/address';
import {request_server_timestamp,request_create_space} from '@@requests';
import { ethers } from 'ethers';

export const reaxel_create_space = function(){
	const {
		store ,
		setState,
	} = orzMobx( {
		visible : true ,
		modal_showing : false ,
		input_space_name : '' ,
		select_types : [] ,
		select_network : null ,
		input_email : null ,
	} );
	let ret;
	
	const create_space = async () => {
		const reax_wallet = reaxel_wallet();
		const reax_user = reaxel_user();
		
		const fetch_space_ID = async () => {
			const address = reax_wallet.account.address;
			const data_wait_for_signature = {
				name : store.input_space_name,
				tags : store.select_types.join(','),
				email : store.input_email ,
				/*当前用户地址*/
				createAddress : address,
				timestamp : await request_server_timestamp() ,
			};
			return request_create_space( {
				address ,
				data : data_wait_for_signature ,
				signature : await reax_user.signByFakeWallet( data_wait_for_signature ) ,
			} );
		};
		
		const contract_create = (spaceID:number) => {
			const spaceName = store.input_space_name;
			const contract = new ethers.Contract( SpaceFactoryAddress , SpaceFactoryAbi , reax_wallet.web3Provider );
			const contractWithSigner = contract.connect(reax_wallet.web3Provider);
			contractWithSigner.createDAO(spaceID,spaceName,"desciption").then(({hash,receipt}) => {
				reax_wallet.web3Provider.getTransaction('').then()
				ethers.providers.getDefaultProvider().getTransaction()
			});
		}
		
		if(!reax_wallet.account){
			try {
				ret.setCreateModalVisible( false );
				await reax_wallet.connectWallet();
				if(!reax_user.fake_wallet_store.logged_in){
					await reax_user.loginWithUserWallet();
				}
				const spaceID = await fetch_space_ID();
				
				
				ret.setCreateModalVisible( false );
			}catch ( e ) {
				ret.setCreateModalVisible( true );
			}
		}
	};
	
	return () => {
		type props = {};
		return ret = {
			get store (){
				return store;
			},
			setCreateModalVisible : (visible:boolean) => setState({visible}),
			CreateSpaceModal : Reaxper(class extends Reaxlass{
				
				
				render() {
					return <>
						<Modal
							visible={store.visible}
							maskClosable={true}
							onCancel={() => setState({ visible : false})}
							footer={<>
								<Button 
									onClick={() => {
										create_space();
									}}
								>
									Create
								</Button>
							</>}
						>
							<div className = { less.modalContent }>
								<h1 className = { less.mainTitle }>Create your Space</h1>
								<h5 className = { less.decTitle }>Create your own organization in a few minutes!</h5>
								<h3 className = { less.subTitle }>Space Information</h3>
								<div className = { less.formList }>
									<div className = { less.formItem }>
										<p>Name</p>
										<Input
											className = { less.mInput }
											placeholder = "Name your Space"
											value = { store.input_space_name }
											onChange = { ( e ) => {
												setState( {
													input_space_name : e.target.value ,
												} );
											} }
										/>
									</div>
									<div className = { less.formItem }>
										<p>Type</p>
										<Select
											mode = "tags"
											allowClear
											className = { less.mSelect }
											placeholder = "Please select"
											value={store.select_types}
											onChange = { ( e ) => {
												console.log( e );
												setState(({
													select_types : e,
												}))
											} }
										>
											{spaceTags.filter((text) => !store.select_types.includes(text) ).map((text) => <Select.Option key = {text}>{text}</Select.Option>)}
										</Select>
									</div>
									<div className = { less.formItem }>
										<div className = { less.titleWrp }>
											<p>Network</p>
										</div>
										<Select
											defaultValue = "Ethereum"
											className = { less.mSelect }
										>
											<Select.Option value = "Ethereum">Ethereum</Select.Option>
										</Select>
									</div>
									<div className = { less.formItem }>
									<p>Email</p>
									<Input
										className = { less.mInput }
										placeholder = "Enter your email"
										value = { store.input_email }
										onChange = { ( e ) => {
											setState( { input_email : e.target.value } );
										}}
									/>
								</div>
								</div>
							</div>
						</Modal>
					</>;
				}
			}),
		}
	}
}();
