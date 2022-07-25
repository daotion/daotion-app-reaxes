import less from './style.module.less';

import {
	globalSetState ,
	globalStore ,
	invoke_root_click ,
	root_click_symbol ,
	subscribe_root_click ,
} from '@@common/global-controller';
import { XPopover } from '@@common/Xcomponents';

import {
	BtnIconCopySvgComponent ,
	BtnIconRenameSvgComponent ,
	BtnIconShare ,
	HeaderNotificationIconSvgComponent ,
	HeaderToggleThemeIconSvgComponent ,
	ItemIconDisconnectSvgComponent ,
	ItemIconEthNode ,
	ItemIconI18nSvgComponent ,
	ItemIconProfileSvgComponent ,
	ItemIconThemeSvgComponent ,
} from '@@pages/_SvgComponents';

import {
	reaxel_blockies ,
	reaxel_wallet ,
	reaxel_user ,
} from '@@reaxes';


export const Layout_Header = ComponentWrapper( class extends ReactComponentClass {
	
	
	reax_header_svg_tool = reaxel_header_svg_tool();
	
	reax_wallet = reaxel_wallet();
	
	reax_user = reaxel_user();
	
	reax_blockies = reaxel_blockies();
	
	render() {
		const {
			Input ,
			Button ,
		} = antd;
		const { navigate } = utils.useRouter();
		return <div className = { less.topBanner }>
			{ __EXPERIMENTAL__ && <div>
				<Input.TextArea
					value = { this.reax_header_svg_tool.inputSvgString }
					onChange = { ( e ) => this.reax_header_svg_tool.setInputSvgString( e.target.value ) }
					onPaste = { ( e ) => {
						if ( e.clipboardData.items[ 0 ].kind === "file" ) {
							const picFile = e.clipboardData.items[ 0 ].getAsFile();
							/*navigator?.clipboard?.readText?.().
							then( ( value ) => {
								console.log( value );
							} );*/
							(
								new Promise( ( resolve ) => {
									const fileReader = new FileReader();
									fileReader.onload = ( e ) => {
										resolve( e.target.result );
									};
									fileReader.readAsDataURL( picFile );
								} )
							).then( ( base64 : string ) => {
								console.log( base64 );
								navigator.clipboard.writeText( `url('${ base64 }')` );
							} );
						}
					} }
				/>
			</div> }
			<div className = { less.rightSideGroup }>
				<Button
					style = { {
						padding : '8px 8px 10px 12px' ,
						borderRadius : "12px" ,
						height : "100%" ,
						borderWidth : "2px" ,
					} }
					onClick = { () => {
						globalSetState( {
							theme : globalStore.theme === "dark" ? "light" : "dark" ,
						} );
						navigate( '/profile' );
					} }
					autoFocus = { false }
				>
					<HeaderToggleThemeIconSvgComponent />
				</Button>
				
				<Button
					style = { {
						padding : '8px 8px 10px 12px' ,
						borderRadius : "12px" ,
						height : "100%" ,
						borderWidth : "2px" ,
						marginLeft : "16px" ,
					} }
					onClick = { () => {
						console.log( `url('data:image/svg+xml;base64,${ window.btoa( this.reax_header_svg_tool.inputSvgString ) }')` );
						
					} }
					autoFocus = { false }
				>
					<HeaderNotificationIconSvgComponent />
				</Button>
				
				{ __EXPERIMENTAL__ && this.reax_user.fake_wallet_store.logged_in && <Button
					style = { {
						padding : '8px' ,
						borderRadius : "12px" ,
						height : "100%" ,
						borderWidth : "2px" ,
						marginLeft : "16px" ,
					} }
					onClick = { () => {
						request.post( '/user/invalidate-alias' );
					} }
					autoFocus = { false }
				>
					logout
				</Button> }
				
				<SelectNetworkButtonDropdown />
				<UserButtonDropdown />
				<GeneralMenuButtonDropdown/>
			</div>
		</div>;
	}
} );

const SelectNetworkButtonDropdown = ComponentWrapper( () => {
	const [ visible , setVisible ] = useState( false );
	const reax_wallet = reaxel_wallet();
	const reax_header_svg_tool = reaxel_header_svg_tool();
	useEffect( () => {
		const symbol = Symbol();
		const subscription = () => {
			setVisible( false );
		};
		return subscribe_root_click( subscription , symbol );
		
	} , [] );
	
	const btnStyle : React.CSSProperties = {
		...headerBtnStyle,
		padding : "12px 12px 12px 12px" ,
		borderRadius : "12px" ,
		borderWidth : "2px" ,
		marginLeft : "16px" ,
		display : "flex" ,
		alignItems : "center" ,
	};
	const { Button } = antd;
	if ( !reax_wallet.wallet ) {
		return <>
			<Button
				type = "primary"
				style = { btnStyle }
				onClick = { () => {
					reaxel_wallet().
					connectWallet();
				} }
			>
				Connect Wallet
			</Button>
		</>;
	}
	const currentNetworkInfo = reax_wallet.chains.find( ( { id } ) => reax_wallet.chain?.id === id );
	return <>
		<XPopover
			overlayClassName = { less.userinfoPopoverContainer }
			align = { {
				// targetOffset : [ -61 ] ,
			} }
			onVisibleChange = { ( visible ) => {
				invoke_root_click.then( () => setVisible( () => visible ) );
			} }
			autoAdjustOverflow = { false }
			// visible = { true }
			visible = { visible }
			content = { <div
				style = { {
					padding : "24px 16px" ,
					display : "flex" ,
					flexFlow : "column nowrap" ,
					whiteSpace : "nowrap" ,
					
				} }
				onClick = { ( e ) => {
					e.stopPropagation();
				} }
			>
				<div
					style = { {
						fontWeight : 600 ,
						fontSize : "14px" ,
						color : "#353945" ,
					} }
				>
					Select a network
				</div>
				{ reax_wallet.chains.map( ( chain ) => {
					if ( chain.id === reax_wallet.chain?.id ) {
						
						return <div
							key = { chain.id }
							style = { {
								padding : "8px 16px" ,
								display : "flex" ,
								alignItems : "center" ,
								backgroundColor : "#f4f5f6" ,
								borderRadius : "12px" ,
								marginTop : "8px" ,
								userSelect : "none" ,
								
							} }
						>
							<ItemIconEthNode src = { chain.icon } />
							<div
								style = { {
									width : "152px" ,
									display : "flex" ,
									justifyContent : "space-between" ,
									alignItems : "center" ,
									height : "46px" ,
									marginLeft : "16px" ,
									
								} }
							>
								<div
									style = { {
										display : "flex" ,
										flexFlow : "column nowrap" ,
										justifyContent : "space-between" ,
										lineHeight : "normal" ,
										height : "100%" ,
										
									} }
								>
									<span
										style = { {
											fontWeight : 600 ,
											fontSize : "14px" ,
											color : "#777e91" ,
											
										} }
									>{ chain.label }
									</span>
									<a
										style = { {
											fontWeight : 400 ,
											fontSize : "12px" ,
											textDecoration : "underline" ,
											color : "#777e90" ,
										} }
										onClick = { () => {
											window.open( chain.blockchainExplorer );
										} }
									>Etherscan
									</a>
								</div>
								<div
									style = { {
										display : "flex" ,
										flexFlow : "column nowrap" ,
										justifyContent : 'space-between' ,
										alignItems : "center" ,
										height : "100%" ,
										
									} }
								>
									<span
										style = { {
											display : "flex" ,
											width : "10px" ,
											height : "10px" ,
											backgroundColor : "#45b26b" ,
											borderRadius : "50%" ,
											
										} }
									></span>
									<BtnIconShare
										style = { {
											cursor : "pointer" ,
											
										} }
									/>
								</div>
							</div>
						</div>;
					}
					
					return <div
						key = { chain.id }
						onClick = { () => {
							reax_wallet.selectChain( { chainId : chain.id } ).
							then( ( success ) => {
								if ( !success ) return Promise.reject( false );
								setTimeout( () => {setVisible( false );} , 500 );
							} ).
							catch( ( e ) => {
								console.error( e );
							} );
						} }
						style = { {
							padding : "8px 16px" ,
							display : "flex" ,
							alignItems : "center" ,
							borderRadius : "12px" ,
							marginTop : "8px" ,
							userSelect : "none" ,
						} }
					>
						<ItemIconEthNode src = { chain.icon } />
						<div
							className = { less.selectNetworkUnselected }
						>
							<span>{ chain.label }</span>
						</div>
					</div>;
				} ) }
			</div> }
			
			placement = "bottom"
			trigger = { [ 'click' ] }
		>
			{ currentNetworkInfo ? <Button
				style = { btnStyle }
				onClick = { () => {
					setVisible( !visible );
					console.log( "data:image/svg+xml;base64," + window.btoa( reax_header_svg_tool.inputSvgString ) );
				} }
			>
				<img
					src = { currentNetworkInfo.icon }
					style = { { borderRadius : "50%" } }
				/>
				<span
					style = { {
						fontWeight : "bold" ,
						marginLeft : "8px" ,
						
					} }
				>
					{ currentNetworkInfo.label }
				</span>
				<img
					style = { {
						marginLeft : "8px" ,
						
					} }
					src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjcwNzExIDAuMjkyODkzQzEuMzE2NTggLTAuMDk3NjMxMSAwLjY4MzQxNyAtMC4wOTc2MzExIDAuMjkyODkzIDAuMjkyODkzQy0wLjA5NzYzMTEgMC42ODM0MTcgLTAuMDk3NjMxMSAxLjMxNjU4IDAuMjkyODkzIDEuNzA3MTFMMS43MDcxMSAwLjI5Mjg5M1pNNyA3TDYuMjkyODkgNy43MDcxMUM2LjY4MzQyIDguMDk3NjMgNy4zMTY1OCA4LjA5NzYzIDcuNzA3MTEgNy43MDcxMUw3IDdaTTEzLjcwNzEgMS43MDcxMUMxNC4wOTc2IDEuMzE2NTggMTQuMDk3NiAwLjY4MzQxNyAxMy43MDcxIDAuMjkyODkzQzEzLjMxNjYgLTAuMDk3NjMxMSAxMi42ODM0IC0wLjA5NzYzMTEgMTIuMjkyOSAwLjI5Mjg5M0wxMy43MDcxIDEuNzA3MTFaTTAuMjkyODkzIDEuNzA3MTFMNi4yOTI4OSA3LjcwNzExTDcuNzA3MTEgNi4yOTI4OUwxLjcwNzExIDAuMjkyODkzTDAuMjkyODkzIDEuNzA3MTFaTTcuNzA3MTEgNy43MDcxMUwxMy43MDcxIDEuNzA3MTFMMTIuMjkyOSAwLjI5Mjg5M0w2LjI5Mjg5IDYuMjkyODlMNy43MDcxMSA3LjcwNzExWiIgZmlsbD0iIzg4ODg4OCIvPgo8L3N2Zz4K"
				/>
			</Button> : <Button
				style = { {
					...btnStyle ,
					backgroundColor : "#ef466f" ,
					padding : "8px 24px" ,
				} }
			>
				<svg
					width = "24"
					height = "24"
					viewBox = "0 0 24 24"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<path
						d = "M2.25 12H5.25L9 3.75L15 19.5L18.75 12H21.75"
						stroke = "white"
						strokeWidth = "2"
						strokeLinecap = "round"
						strokeLinejoin = "round"
					/>
				</svg>
				<span
					style = { {
						marginLeft : "8px" ,
						fontWeight : 600 ,
						fontSize : "16px" ,
						color : "white" ,
					} }
				>
					Wrong Network
				</span>
			</Button> }
		</XPopover>
	</>;
} );

const UserButtonDropdown = ComponentWrapper( () => {
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

const GeneralMenuButtonDropdown = ComponentWrapper( () => {
	const reax_wallet = reaxel_wallet();
	const [ visible , setVisible ] = useState( false );
	useEffect( () => subscribe_root_click( () => setVisible( false ) , root_click_symbol ), [] );
	const {
		Button ,
		Switch,
	} = antd;
	return <>
		<XPopover
			overlayClassName = { less.userinfoPopoverContainer }
			align = { {
				targetOffset : [ 105 ] ,
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
				style = { headerBtnStyle }
				onClick = { () => {
					setVisible( !visible );
				} }
			>
				<svg
					width = "24"
					height = "24"
					viewBox = "0 0 24 24"
					fill = "none"
					xmlns = "http://www.w3.org/2000/svg"
				>
					<path
						d = "M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z"
						fill = "#23262F"
					/>
				</svg>
			</Button>
		</XPopover>
	</>;
} );


const UserAvatar = ComponentWrapper( () => {
	const reax_wallet = reaxel_wallet();
	const reax_blockies = reaxel_blockies();
	
	if ( reax_wallet.account?.ens?.avatar?.url ) {
		return <span
			style = { {
				marginLeft : "8px" ,
				backgroundSize : "100%" ,
				backgroundRepeat : "no-repeat" ,
				backgroundPosition : "center" ,
				backgroundImage : `url("${ reax_wallet.account.ens.avatar.url }")` ,
				backgroundColor : "#eeeeee" ,
				display : "flex" ,
				width : 36 ,
				height : 36 ,
				borderRadius : "50%" ,
			} }
		/>;
	}
	const { BlockiesAvatar } = reax_blockies;
	return <BlockiesAvatar />;
} );

const EllipsisAddress = ComponentWrapper( () => {
	const reax_wallet = reaxel_wallet();
	if ( !reax_wallet.wallet ) return null;
	const address = reax_wallet.account.address;
	return <span
		style = { {
			width : "100%" ,
			overflow : "hidden" ,
			whiteSpace : "nowrap" ,
			display : "flex" ,
		} }
	>
		<span
			style = { {
				display : "flex" ,
				textOverflow : "ellipsis" ,
				overflow : "hidden" ,
			} }
		>{ address.slice( 0 , 6 ) }</span>
		<span>...{ address.slice( -4 ) }</span>
	</span>;
} );

const reaxel_header_svg_tool = function () {
	
	const {
		store ,
		setState ,
	} = orzMobx( {
		inputSvgString : '' ,
	} );
	
	return () => {
		
		return {
			get inputSvgString() {
				return store.inputSvgString;
			} ,
			setInputSvgString( inputSvgString : string ) {
				setState( { inputSvgString } as const );
			} ,
		};
	};
}();



const headerBtnStyle : React.CSSProperties = {
	padding : "8px " ,
	borderRadius : "12px" ,
	height : "fit-content" ,
	borderWidth : "2px" ,
	marginLeft : "16px" ,
	display : "flex" ,
	alignItems : "center" ,
	fontWeight : "bold" ,
	boxShadow : "unset",
};
