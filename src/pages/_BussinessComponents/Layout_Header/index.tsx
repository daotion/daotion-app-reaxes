
import {SelectNetworkButtonDropdown} from './Header-Select-Network-Button-Popover';

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
						padding : '8px' ,
						borderRadius : "12px" ,
						height : "40px" ,
						border : "none" ,
						boxShadow:"unset",
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
						padding : '8px' ,
						borderRadius : "12px" ,
						height : "40px" ,
						border : "none" ,
						marginLeft : "8px" ,
						boxShadow:"unset",
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
						height : "40px" ,
						border : "none" ,
						marginLeft : "8px" ,
						boxShadow:"none",
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

export const reaxel_header_svg_tool = function () {
	
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



export const headerBtnStyle : React.CSSProperties = {
	padding : "8px " ,
	borderRadius : "12px" ,
	height : "40px" ,
	border : "none" ,
	marginLeft : "8px" ,
	display : "flex" ,
	alignItems : "center" ,
	fontWeight : "bold" ,
	boxShadow : "unset",
};




import less from './index.module.less';

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
	HeaderNotificationIconSvgComponent ,
	HeaderToggleThemeIconSvgComponent ,
	ItemIconDisconnectSvgComponent ,
	ItemIconI18nSvgComponent ,
	ItemIconProfileSvgComponent ,
	ItemIconThemeSvgComponent ,
} from '@@pages/_SvgComponents';

import {
	reaxel_blockies ,
	reaxel_user ,
	reaxel_wallet ,
} from '@@reaxes';
import { UserButtonDropdown } from './Header-User-Button-Popover';
import { GeneralMenuButtonDropdown } from './Header-General-Button-Popover';

