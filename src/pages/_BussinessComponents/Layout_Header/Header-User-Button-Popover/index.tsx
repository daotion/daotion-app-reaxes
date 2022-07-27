export const UserButtonDropdown = ComponentWrapper( () => {
	const reax_wallet = reaxel_wallet();
	const [ visible , setVisible ] = useState( false );
	useEffect( () => {
		
		return subscribe_root_click( () => {
			setVisible( false );
		} , root_click_symbol );
	} , [] );
	if ( !reax_wallet.wallet ) return null;
	const btnStyle : React.CSSProperties = {
		...headerBtnStyle,
		padding : "8px" ,
		borderRadius : "12px" ,
		borderWidth : "2px" ,
		marginLeft : "16px" ,
		display : "flex" ,
		alignItems : "center" ,
		fontWeight : "bold" ,
		
	};
	const {
		Button ,
		Switch,
	} = antd;
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
							marginLeft : "16px" ,
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
				>
					<div>
						<ItemIconProfileSvgComponent />
						<span>My profile</span>
					</div>
				</div>
				
				<div
					className = { less.userPopoverMenuItem }
				>
					<div>
						<ItemIconI18nSvgComponent />
						<span>Language/Currency</span>
					</div>
				</div>
				
				<div
					className = { less.userPopoverMenuItem }
				>
					<div>
						<ItemIconThemeSvgComponent />
						<span>Dark theme</span>
					</div>
					<Switch
						size = "small"
						checked = { {
							light : false ,
							dark : true ,
						}[ globalStore.theme ] }
					/>
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
