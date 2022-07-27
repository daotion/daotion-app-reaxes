export const UserButtonDropdown = ComponentWrapper( () => {
	const {
		Button ,
		Switch,
	} = antd;
	const reax_wallet = reaxel_wallet();
	const [ visible , setVisible ] = useState( false );
	useEffect( () => {
		
		return subscribe_root_click( () => {
			setVisible( false );
		} , root_click_symbol );
	} , [] );
	const { navigate } = utils.useRouter();
	
	if ( !reax_wallet.wallet ) return null;
	const btnStyle : React.CSSProperties = {
		...headerBtnStyle,
		padding : "8px" ,
		borderRadius : "12px" ,
		border : "none" ,
		marginLeft : "8px" ,
		display : "flex" ,
		alignItems : "center" ,
		fontWeight : "bold" ,
		
	};
	return <>
		<XPopover
			overlayClassName = { less.userinfoPopoverContainer }
			align = { {
				targetOffset : [ 32 ] ,
			} }
			autoAdjustOverflow = { false }
			visible = { visible }
			onVisibleChange = { ( visible ) => {
				invoke_root_click.then( () => setVisible( () => visible ) );
			} }
			trigger = { [ 'click' ] }
			content = { <div
				className = { less.userinfoPopoverContent }
				onClick = { ( e ) => {
					e.stopPropagation();
				} }
			>
				<div
					style = { { display : "flex" } }
				>
					<UserAvatar />
					<div
						style = { {
							display : "flex" ,
							justifyContent : "center" ,
							flexFlow : "column nowrap" ,
							marginLeft : "8px" ,
							width : "100px" ,
							lineHeight : "normal" ,
							
						} }
					>
						<span
							style = { {
								fontSize : 16 ,
								color : "#23262f" ,
							} }
						>{ reax_wallet.account?.ens?.name }</span>
						<EllipsisAddress />
					</div>
					<div
						style = { {
							display : "flex" ,
							justifyContent : "space-between" ,
							marginLeft : "16px" ,
							alignItems : "center" ,
							width : "48px" ,
							
						} }
					>
						<BtnIconRenameSvgComponent />
						<BtnIconCopySvgComponent />
					</div>
				</div>
				
				<div
					className = { less.userPopoverMenuItem }
					onClick={(e) => {
						setVisible( false );
						navigate('/profile');
					}}
				>
					<div>
						<ItemIconProfileSvgComponent />
						<span>My profile</span>
					</div>
				</div>
				<div
					className = { less.userPopoverMenuItem }
					onClick = { () => {
						setVisible( false );
						reax_wallet.disconnectWallet( reax_wallet.wallet.label );
					} }
				>
					<div>
						<ItemIconDisconnectSvgComponent />
						<span>Disconnect</span>
					</div>
				</div>
			
			
			</div> }
		>
			<Button
				style = { btnStyle }
				onClick = { () => {
					setVisible( !visible );
				} }
			>
				<span
					style = { {
						fontSize : "16px" ,
						fontWeight : "bold" ,
						color : "#23262f" ,
						fontFamily : "Inter , Consolas" ,
					} }
				>
					{ reax_wallet.account?.ens?.name ?? <EllipsisAddress /> }
				</span>
				<UserAvatar />
			</Button>
		</XPopover>
	</>;
} );


import less from '../index.module.less';

import {
	globalStore ,
	invoke_root_click ,
	root_click_symbol ,
	subscribe_root_click ,
} from '@@common/global-controller';
import { XPopover } from '@@common/Xcomponents';

import {
	BtnIconCopySvgComponent ,
	BtnIconRenameSvgComponent ,
	ItemIconDisconnectSvgComponent ,
	ItemIconI18nSvgComponent ,
	ItemIconProfileSvgComponent ,
	ItemIconThemeSvgComponent ,
} from '@@pages/_SvgComponents';
import { headerBtnStyle } from '../';
import { UserAvatar } from '../Header-User-Avatar';
import { EllipsisAddress } from '../Header-Ellipsis-Address';

import { reaxel_wallet  } from '@@reaxes';
