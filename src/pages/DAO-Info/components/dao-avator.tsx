import {
	Input ,
	message ,
	Select ,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { NextIcon } from './next-svg-icon';
import { CopyIcon } from './copy-svg-icon';
import less from '../style.module.less';

interface DAOInfoParamspayload {
	id : number;
}

interface DAOData {
	desc : string,
	links : any,
	info : {
		id : number,
		name : string,
		addrChain : string,
		chainIDs : string[],
		iconUrl : string,
		tags : string[]
	}
}


export const _DaoAvator = ComponentWrapper( ( props : { id : number } ) => {
	const { id } = props;
	const [ DAOInfo , setDAOInfo ] = useState<DAOData>( {
		desc : '' ,
		links : {} ,
		info : {
			id : 0 ,
			name : '' ,
			addrChain : '' ,
			chainIDs : [] ,
			iconUrl : '' ,
			tags : [] ,
		} ,
	} );
	// 获取DAO 信息
	const getDaoInfo = ( payload : DAOInfoParamspayload ) : Promise<DAOData> => {
		return new Promise( ( resolve , reject ) => {
			request.post<DAOData>( '/dao/dao-detail' , {
				body : payload ,
			} ).
			then( ( date ) => { resolve( date ); } ).
			catch( ( e ) => {
				console.error( e );
			} );
		} );
		
	};
	
	// 处理地址显示
	const formatAddress = ( address : string ) : string => {
		const str_1 = address.substring( 0 , 4 );
		const str_2 = address.substring( address.length - 4 );
		return `${ str_1 }......${ str_2 }`;
	};
	
	// 复制
	const copyInfo = ( str : string ) : void => {
		navigator.clipboard.writeText( str ).
		then( () => {
			message.info( 'Address copied to clipboard' );
		} ).
		catch( err => {
			console.log( 'Something went wrong' , err );
		} );
	};
	
	useEffect( () => {
		if ( !DAOInfo.info.id ) {
			getDaoInfo( { id } ).
			then( ( data ) => {
				setDAOInfo( data );
			} );
		}
		
	} , [ DAOInfo ] );
	
	return <div className = { less.daoAvatorWrp }>
		<div className = { less.daoAvator }>
			<img
				src = { DAOInfo.info.iconUrl }
				alt = ""
				className = { less.left }
			/>
			<div className = { less.right }>
				<div className = { less.rightTop }>
					<span className = { less.daoName }>{ DAOInfo.info.name }</span>
					{
						DAOInfo.info.chainIDs.map( ( item , index ) => (
							<img
								key = { index }
								className = { less.netIcon }
								src = { item }
								alt = ""
							/>
						) )
					}
				</div>
				<div className = { less.rightBottom }>
					<p className = { less.address }>{ formatAddress( DAOInfo.info.addrChain ) }</p>
					<div onClick = { () => copyInfo( DAOInfo.info.addrChain ) }><CopyIcon /></div>
				</div>
			</div>
		</div>
		<div className = { less.daoTags }>
			{
				DAOInfo.info.tags.map( ( item , index ) => (
					<div
						className = { less.tag }
						key = { index }
					>{ item }</div>
				) )
			}
		</div>
		<div className = { less.daoInfo }>
			<p className = { less.daoDec }>
				{ DAOInfo.desc }
			</p>
			<div className = { less.seaMore }>
				<span className = { less.tagBtn }>See More</span>
				<NextIcon />
			</div>
		</div>
		<div className = { less.daoData }>
			<div className = { less.daoDataItem }>
				<div className = { less.itemData }>13.6K</div>
				<div className = { less.itemDec }>Member</div>
			</div>
			<div className = { less.daoDataItem }>
				<div className = { less.itemData }>$982,332</div>
				<div className = { less.itemDec }>Total Vault</div>
			</div>
			<div className = { less.daoDataItem }>
				<div className = { less.itemData }>GTC</div>
				<div className = { less.itemDec }>Token</div>
			</div>
		</div>
	</div>;
} );

export const DaoAvator = ComponentWrapper( _DaoAvator );
