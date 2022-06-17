import {
	Input ,
	Select ,
	message ,
	Modal ,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import less from '../style.module.less';
import { ethers } from 'ethers';
import { web3onboard } from '@@common/reaxes';
import { request_signature_string } from '@@common/requester/preset-interface';
import { DAOFactoryAbi } from '../../../../src/contract/abi';
import { DAOFactoryAddress } from '../../../../src/contract/address';
import { useNavigate } from 'react-router-dom';
import { reaxel_wallet } from '@@reaxes/wallet';
import { request_regression_sign } from '@@common/requester/preset-interface/authorize';
import DAOtags from '@@Public/DAO-tags.json';
import { reaxel_login , reaxel_connectWallet , reaxel_sign_via_wallet } from '@@reaxes';


const { Option } = Select;

interface signInPayload {
	address : string,
	SignatureStr : string
}

interface createDAOIDPayload {
	address : string,
	signature : string,
	name : string,
	tags : string,
	desc : string
}

interface DAOInfoPayload {
	id : number,
	name : string
}

type props = { 
	provider : ethers.providers.Web3Provider,
	modalVisible : boolean ,
	setModalVisible : Function ,
}

const _CreateModalContent =  ( props : props ) => {
	const {
		provider ,
		modalVisible ,
		setModalVisible ,
	} = props;
	const [ DAOName , setDAOName ] = useState( '' );
	const [ DAOType , setDAOType ] = useState( '' );
	const [ netWorkDesc , setNetWorkDesc ] = useState( false );
	const navigate = useNavigate();
	
	const { logginPromise } = reaxel_login( Reaxes.hooks );
	const { connect , connectedWallet } = reaxel_connectWallet( Reaxes.hooks );
	const { sign } = reaxel_sign_via_wallet( Reaxes.hooks );
	// 登录
	const signIn = async ( payload : signInPayload ) : Promise<void> => {
		request.post<signInPayload>( '/user/sign-in' , {
			body : payload ,
		} ).
		then( ( data ) => data ).
		catch( ( e ) => {
			console.error( e );
		} );
	};
	
	// 获取DAO 信息
	const getDaoId = async ( payload : createDAOIDPayload ) : Promise<DAOInfoPayload> => {
		return new Promise( ( resolve , reject ) => {
			request.post<DAOInfoPayload>( '/dao/create-dao' , {
				body : payload ,
				// env : "server_dev",
			} ).
			then( ( date ) => { resolve( date ); } ).
			catch( ( e ) => {
				console.error( e );
			} );
		} );
		
	};
	
	// 创建DAO
	const createDAO = async () : Promise<void> => {
		if ( !DAOName ) {
			message.warning( 'Name not empty!' );
			return;
		}
		if ( !DAOType ) {
			message.warning( 'DaoType not empty!' );
			return;
		}
		// 获取钱包地址
		const wallets = connectedWallet;
		const address = connectedWallet.accounts[0].address;
		await request_regression_sign( globalStore.connectedWallet.accounts[ 0 ].address );
		
		// 获取中心化签名
		const signatureNonce : any = await request_signature_string( address );
		
		// 钱包签名
		let wallerSign = await sign( signatureNonce );
		
		// 登录 2小时有效
		// await signIn({ address, SignatureStr: wallerSign })
		
		// 获取DAO id
		let payload : createDAOIDPayload = {
			address ,
			signature : wallerSign ,
			name : DAOName ,
			tags : DAOType ,
			desc : 'descs' ,
		};
		const daoInfo : DAOInfoPayload = await getDaoId( payload );
		
		// 链接合约
		let contractAddress : string = DAOFactoryAddress;
		let contract = new ethers.Contract( contractAddress , DAOFactoryAbi , provider );
		const signer = provider?.getUncheckedSigner();
		let contractWithSigner = contract.connect( signer );
		
		// 调用合约创建DAO
		contractWithSigner.createDAO( daoInfo.id , daoInfo.name , 'desc...' ).
		then( ( { hash } ) => {
			message.info( `DAO创建成功!${ hash }` );
			setModalVisible( false );
			setTimeout( () => {
				navigate( '/home/dao-info');
			} , 3000 );
		} );
		
		
		// 查询账户下面所有的DAO
		// contractWithSigner.daoList(address).then((d) => {
		//   console.log(d)
		// })
		// 使用ID查看某个DAO
		// contractWithSigner.getDao(0x16).then((d) => {
		//   console.log(d)
		// })
	};
	
	return <>
		<Modal
			title = ""
			visible = { modalVisible }
			onOk = { () => {
				createDAO();
			} }
			onCancel = { () => { setModalVisible( false ); } }
		>
			<div className = { less.modalContent }>
				<h1 className = { less.mainTitle }>Create your DAO</h1>
				<h5 className = { less.decTitle }>Create your own organization in a few minutes!</h5>
				<h3 className = { less.subTitle }>DAO Information</h3>
				<div className = { less.formList }>
					<div className = { less.formItem }>
						<p>Name</p>
						<Input
							className = { less.mInput }
							placeholder = "Name your DAO"
							value = { DAOName }
							onChange = { ( e ) => setDAOName( e.target.value ) }
						/>
					</div>
					<div className = { less.formItem }>
						<p>Type</p>
						<Select
							mode = "multiple"
							allowClear
							className = { less.mSelect }
							placeholder = "Please select"
							defaultValue = { [] }
							onChange = { ( e ) => {
								if ( e.length ) {
									setDAOType( e.join( ',' ) );
								}
							} }
						>
							{DAOtags.map((text) => <Option key = {text}>{text}</Option>)}
						</Select>
					</div>
					<div className = { less.formItem }>
						<div className = { less.titleWrp }>
							<p>Select Network</p>
							<InfoCircleOutlined
								style = { { fontSize : '13px' } }
								onClick = { () => {
									if ( netWorkDesc ) {
										setNetWorkDesc( false );
									} else {
										setNetWorkDesc( true );
									}
								} }
							/>
							{ netWorkDesc ? <span className = { less.tip }>Maximum 100 characters. No HTML or emoji allowed</span> : null }
						</div>
						<Select
							defaultValue = "Ethereum"
							className = { less.mSelect }
						>
							<Option value = "Ethereum">Ethereum</Option>
							<Option value = "ZkSync">ZkSync</Option>
							<Option value = "StarkNet">StarkNet</Option>
						</Select>
					</div>
				</div>
			</div>
		</Modal>
	</>;
} ;

export const CreateModalContent = ComponentWrapper( _CreateModalContent );
