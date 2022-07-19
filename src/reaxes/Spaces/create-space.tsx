import {
	Reaxes ,
	Reaxper ,
	orzMobx ,
	Reaxlass,
} from 'reaxes';
import {reaxel_wallet} from '@@reaxes/wallet/wallet';
import {reaxel_user} from '@@reaxes/authurize/user';
import {reaxel_space_list} from '@@reaxes/Spaces/all-space-list';

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
		visible : false ,
		modal_showing : false ,
		input_space_name : '' ,
		select_types : [] ,
		select_network : null ,
		input_email : null ,
	} );
	let ret;
	const {Modal} = antd;
	
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
		
		const contract_create = async (spaceID:number) => {
			const spaceName = store.input_space_name;
			const contract = new ethers.Contract( SpaceFactoryAddress , SpaceFactoryAbi , reax_wallet.web3Provider );
			const contractWithSigner = contract.connect(reax_wallet.web3Provider.getSigner(reax_wallet.account.address));
			return contractWithSigner.createDAO(spaceID,spaceName,"desciption").then(({hash,receipt}) => {
				
				/*todo 两种方法都可以,测试哪种更好*/
				
				return reax_wallet.web3Provider.waitForTransaction( hash , 1 ).
				then( () => {
					
					Modal.success( {
						title : "transaction success !" ,
					} );
					reaxel_space_list
					setState( {
						visible : false ,
						modal_showing : false ,
						input_space_name : '' ,
						select_types : [] ,
						select_network : null ,
						input_email : null ,
					} );
				} );
				
				return reax_wallet.web3Provider.getTransaction( hash ).
				then( ( response ) => {
					return response.wait().then( ( receipt ) => {
						if ( receipt?.confirmations ) {
							Modal.success( {
								title : "transaction success !" ,
							} );
							setState( {
								visible : false ,
								modal_showing : false ,
								input_space_name : '' ,
								select_types : [] ,
								select_network : null ,
								input_email : null ,
							} );
						}
					} );
				} );
				// ethers.providers.getDefaultProvider().getTransaction()
			});
		}
		
		if(!reax_wallet.account){
			try {
				ret.setCreateModalVisible( false );
				await reax_wallet.connectWallet();
				if(!reax_user.fake_wallet_store.logged_in){
					await reax_user.loginWithUserWallet();
				}
			}catch ( e ) {
				console.error( e );
				ret.setCreateModalVisible( true );
				Modal.error( {
					title : e.toString() ,
				} );
			}
		}else {
			try {
				const spaceID = await fetch_space_ID();
				await contract_create( spaceID );
				ret.setCreateModalVisible( false );
			}catch ( e ){
				console.error( e );
				Modal.error( {
					title : e.toString() ,
				} );
			}
		}
	};
	const validations = {
		input_space_name : () => {
			return true;
			/*暂时不对space-name做限制 , beta阶段出问题再限制*/
		},
		input_email_address : (address:string) => {
			return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( address );
		},
	};
	
	return () => {
		return ret = {
			get store (){
				return store;
			},
			setCreateModalVisible : (visible:boolean) => setState({visible}),
			CreateSpaceModal : Reaxper(class extends Reaxlass{
				
				render() {
					const {Form,Modal , Button , Input , Select ,} = antd;
					return <>
						<Modal
							visible = { store.visible }
							onCancel = { () => setState( { visible : false } ) }
							footer = { <>
								<Button
									onClick = { () => {
										if(!validations.input_email_address(store.input_email)){
											return;
										}
										if(!validations.input_space_name()){
											return ;
										}
										create_space();
									} }
								>
									Create
								</Button>
							</> }
							width="100%"
							wrapClassName = {less.antdCreateSpaceModal}
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
										<p
											style = { {
												display : "flex" ,
												justifyContent : "space-between",
											} }
										>
											<span>Type</span>
											<span style = { { color : "#b1b5c3",fontWeight : "normal" } }>
												<span style = { { color : "#313436" } }>{ store.select_types.length }</span>
												/3 Types
											</span>
										</p>
										<Select
											mode = "tags"
											allowClear
											className = { less.mSelect }
											placeholder = "Please select"
											value = { store.select_types }
											onChange = { ( selectedTypes ) => {
												if ( selectedTypes.length < 4 ) {
													setState( {
														select_types : selectedTypes ,
													} );
												}
											} }
										>
											{ spaceTags.filter( ( text ) => !store.select_types.includes( text ) ).
											map( ( text ) => <Select.Option key = { text }>{ text }</Select.Option> ) }
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
											} }
										/>
										{ (
											!validations.input_email_address( store.input_email ) && store.input_email
										) && <p
											style = { {
												color : "red" ,
												fontWeight : "normal" ,
											} }
										>email address is not valid</p> }
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
