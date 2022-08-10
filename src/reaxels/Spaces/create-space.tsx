import {
	reaxel_i18n ,
	reaxel_space_list ,
	reaxel_user ,
	reaxel_wallet ,
	reaxel_joined_Space_list,
} from '@@reaxels';

import spaceTags from '@@Public/space-tags.json';
import { SpaceFactoryAbi } from '@@common/contract/abi';
import { SpaceFactoryAddress } from '@@common/contract/address';
import {
	request_create_space ,
	request_server_timestamp ,
} from '@@requests';
import { ethers } from 'ethers';
import { PrimaryInput } from '@@pages/Test/dxz-input';
import { MultipleSelect } from '@@pages/Test/dxz-select';
import less from '../../styles/reaxels.module.less';
import { SVGClear } from '@@pages/_SvgComponents/space-setting-svg';

export const reaxel_create_space = function () {
	const {
		store ,
		setState ,
	} = orzMobx( {
		visible : false ,
		modal_showing : false ,
		input_space_name : '' ,
		select_types : [] ,
		select_network : null ,
		input_email : null ,
		/*是否正在创建 , 冻结输入元素*/
		creating : false ,
	} );
	let ret;
	const { Modal } = antd;
	
	const create_space = async () => {
		const reax_wallet = reaxel_wallet();
		const reax_user = reaxel_user();
		
		const fetch_space_ID = async () => {
			setState( { creating : true  } );
			const address = reax_wallet.account.address;
			
			const createPayload = async () => {
				const data = {
					name : store.input_space_name ,
					tags : store.select_types.join( ',' ) ,
					email : store.input_email ,
					/*当前用户地址*/
					createAddress : address ,
					timestamp : await request_server_timestamp() ,
				};
				return {
					address ,
					data : data ,
					signature : await reax_user.signByFakeWallet( data ) ,
				};
			};
			return request_create_space( createPayload );
		};
		
		const contract_create = async ( spaceID : number ) => {
			setState( { creating : true  } );
			const spaceName = store.input_space_name;
			const contract = new ethers.Contract( SpaceFactoryAddress , SpaceFactoryAbi , reax_wallet.web3Provider );
			const contractWithSigner = contract.connect( reax_wallet.web3Provider.getSigner( reax_wallet.account.address ) );
			return contractWithSigner.createDAO( spaceID , spaceName , "desciption" ).
			then( ( {
				hash ,
				receipt ,
			} ) => {
				
				/*todo 两种方法都可以,测试哪种更好*/
				
				return reax_wallet.web3Provider.waitForTransaction( hash , 1 ).
				then( () => {
					
					Modal.success( {
						title : "transaction success !" ,
					} );
					reaxel_space_list;
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
					return response.wait().
					then( ( receipt ) => {
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
			} );
		};
		
		if ( !reax_wallet.account ) {
			try {
				ret.setCreateModalVisible( false );
				await reax_wallet.connectWallet();
				if ( !reax_user.fake_wallet_store.logged_in ) {
					await reax_user.loginWithUserWallet();
				}
			} catch ( e ) {
				console.error( e );
				ret.setCreateModalVisible( true );
				Modal.error( {
					title : e.toString() ,
				} );
			}
		} else {
			try {
				const spaceID = await fetch_space_ID();
				await contract_create( spaceID );
				ret.setCreateModalVisible( false );
				upload_space_list( spaceID );
			} catch ( e ) {
				console.error( e );
				Modal.error( {
					title : e.toString() ,
				} );
			}finally {
				
				setState( { creating : false  } );
			}
		}
	};
	const validations = {
		input_space_name : () => {
			return true;
			/*暂时不对space-name做限制 , beta阶段出问题再限制*/
		} ,
		input_email_address : ( address : string ) => {
			return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( address );
		} ,
	};
	
	return () => {
		return ret = {
			get store() {
				return store;
			} ,
			setCreateModalVisible : ( visible : boolean ) => setState( { visible } ) ,
			CreateSpaceModal : ComponentWrapper( class extends ReactComponentClass {
				
				render() {
					const {
						Form ,
						Modal ,
						Button ,
						Input ,
						Select ,
					} = antd;
					const {
						language ,
						changeLang ,
					} = reaxel_i18n();
					return <>
						<Modal
							visible = { store.visible }
							// visible = { true }
							centered
							maskClosable
							closeIcon = { <SVGCloseIcon /> }
							mask = { true }
							className = { less.antdCreateSpaceModal }
							onCancel = { () => setState( { visible : false } ) }
							footer = { <>
								<Button
									type = { "primary" }
									loading = {store.creating}
									onClick = { () => {
										if ( !validations.input_email_address( store.input_email ) ) {
											return;
										}
										if ( !validations.input_space_name() ) {
											return;
										}
										create_space();
									} }
									style = { {
										display : "flex" ,
										alignItems : "center" ,
										justifyContent : "center" ,
										height : '56px' ,
										width : "100%" ,
										borderRadius : "12px" ,
										fontSize : "15px" ,
										fontWeight : "700" ,
										lineHeight : "24px" ,
										marginTop : '24px' ,
										border : "none" ,
									} }
								>
									{store.creating ? <I18n>
										Creating...
									</I18n> : <I18n>
										Create
									</I18n>}
								</Button>
							</> }
							width = "596px"
							maskStyle = { {
								background : "#f4f4f4" ,
							} }
						>
							<div
								className = { less.modalContent }
								style = { {
									height : "fit-content" ,
								} }
							>
								<h1 className = { less.mainTitle }>
									<I18n>
										Create your Space
									</I18n>
								</h1>
								<h5 className = { less.decTitle }>
									<I18n>
										Create your own organization in a few minutes!
									</I18n>
								</h5>
								<h3 className = { less.subTitle }>
									<I18n>
										Space Information
									</I18n>
								</h3>
								<div className = { less.formList }>
									<div className = { less.formItem }>
										<p>
											<I18n>
												Name
											</I18n>
										</p>
										<PrimaryInput
											disabled = { store.creating }
											type = "primary"
											placeholder = { i18n( "Name your Space" ) }
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
												justifyContent : "space-between" ,
											} }
										>
											<span>
												<I18n>
													Type
												</I18n>
											</span>
											<span
												style = { {
													color : "#b1b5c3" ,
													fontWeight : "normal" ,
												} }
											>
												<span style = { { color : "#313436" } }>{ store.select_types.length }</span>
												/3
											</span>
										</p>
										<MultipleSelect
											type = "primary"
											disabled = { store.creating }
											suffixIcon = { <SVGSelectArrowIcon /> }
											removeIcon = { <SVGClear /> }
											mode = "tags"
											dropdownMatchSelectWidth = { true }
											placeholder = { i18n( "Please select" ) }
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
										</MultipleSelect>
									</div>
									<div className = { less.formItem }>
										<div className = { less.titleWrp }>
											<p>
												<I18n>
													Network
												</I18n></p>
										</div>
										<Select
											disabled = { store.creating }
											suffixIcon = { <SVGSelectArrowIcon /> }
											defaultValue = "Ethereum"
											className = { less.antdNetSelect }
											dropdownClassName = { less.dropDownMenu }
										>
											<Select.Option value = "Ethereum">Ethereum</Select.Option>
										</Select>
									</div>
									<div className = { less.formItem }>
										<p>
											<I18n>
												Email
											</I18n>
										</p>
										<PrimaryInput
											disabled = { store.creating }
											type = "primary"
											placeholder = { i18n( "Enter your email" ) }
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
										>
											<I18n>email address is not valid</I18n>
										</p> }
									</div>
								</div>
							</div>
						</Modal>
					</>;
				}
			} ) ,
		};
	};
}();

const upload_space_list = async (spaceID:number) => {
	const {result} = await request.post<{result:boolean}>( '/space/query-space-created' ,{
		body : async () => {
			return {
				spaceID ,
			};
		},
	});
	
	if(result){
		const {updateSpacesList} = reaxel_space_list();
		const {fetchUpdate_joined_space_list} = reaxel_joined_Space_list();
		updateSpacesList();
		fetchUpdate_joined_space_list();
	}else {
		console.log( result );
	}
	
	
}










const SVGCloseIcon = () => {
	return <>
		<svg
			width = "40"
			height = "40"
			viewBox = "0 0 40 40"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z"
				fill = "#313436"
			/>
			<rect
				x = "1"
				y = "1"
				width = "38"
				height = "38"
				rx = "19"
				stroke = "#E6E8EC"
				strokeWidth = "2"
			/>
		</svg>
	</>;
};

const SVGSelectArrowIcon = () => {
	return <>
		<svg
			width = "24"
			height = "24"
			viewBox = "0 0 24 24"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				d = "M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L6.70711 8.29289ZM12 15L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L12 15ZM18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L18.7071 9.70711ZM5.29289 9.70711L11.2929 15.7071L12.7071 14.2929L6.70711 8.29289L5.29289 9.70711ZM12.7071 15.7071L18.7071 9.70711L17.2929 8.29289L11.2929 14.2929L12.7071 15.7071Z"
				fill = "#6F767E"
			/>
		</svg>
	</>;
};
