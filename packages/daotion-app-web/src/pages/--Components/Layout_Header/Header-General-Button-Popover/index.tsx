export const GeneralMenuButtonDropdown = ComponentWrapper( () => {
	const reax_general_button = reaxel_general_button( Reaxes.hooks );
	
	const {
		Button ,
		Switch ,
	} = antd;
	return <>
		<XPopover
			overlayClassName = { less.userinfoPopoverContainer }
			align = { { targetOffset : [ reax_general_button.language_currency_visible ? 145 : 105 ] } }
			autoAdjustOverflow = { true }
			visible = { reax_general_button.general_popover_visible }
			trigger = { [ 'click' ] }
			onVisibleChange = { ( visible ) => invoke_root_click.then( () => {
				reax_general_button.setVisible( {
					general_popover_visible : visible ,
				} );
				setTimeout( () => {
					if ( !visible ) {
						reax_general_button.setVisible( {
							language_currency_visible : false ,
						} );
					}
				} , 300 );
			} ) }
			content = { reax_general_button.language_currency_visible ? <DxzLangCurrency /> : <GeneralMenuList /> }
		>
			<Button
				style = { headerBtnStyle }
				onClick = { ( e ) => {
					e.stopPropagation();
					reax_general_button.setVisible( {
						general_popover_visible : true ,
					} );
				} }
			>
				<BtnGeneralMenuSvg />
			</Button>
		</XPopover>
	</>;
} );


const GeneralMenuList = ComponentWrapper( () => {
	const reax_general_button = reaxel_general_button();
	const reax_theme = reaxel_theme();
	const { Switch } = antd;
	return <>
		<div
			className = { less.container }
		>
			<MenuItem
				text = { i18n( "About" ) }
				icon = { <SVGAbout /> }
			/>
			<MenuItem
				text = { i18n( "Help Center" ) }
				icon = { <SVGHelp /> }
			/>
			<MenuItem
				text = { i18n( "Language/Currency" ) }
				icon = { <SVGLang /> }
				onClick = { ( e ) => {
					e.stopPropagation();
					
					reax_general_button.setVisible( {
						general_popover_visible : true ,
						language_currency_visible : true ,
					} );
				} }
			/>
			<MenuItem
				text = { i18n( "Dark theme" ) }
				icon = { <Switch
					className = { less.popSwitch }
					onChange = { ( e ) => {
						reax_theme.switch();
					} }
					checked = { reax_theme.theme === "dark" }
				/> }
			/>
			<MenuItem
				text = { i18n( "Docs" ) }
				icon = { <SVGDocs /> }
			/>
			<MenuItem
				text = { i18n( "Request Features" ) }
				icon = { <SVGRequest /> }
			/>
		</div>
	</>;
} );


export const reaxel_general_button = function () {
	const {
		store ,
		setState,
	} = orzMobx( {
		general_popover_visible : false ,
		language_currency_visible : false ,
	} );
	
	const reax_theme = reaxel_theme();
	
	return ( lifecycle? : Lifecycle ) => {
		
		lifecycle?.mounted( () => {
			const unsubscribe = subscribe_root_click( () => {
				setTimeout( () => {
					setState( {
						general_popover_visible : false ,
					} );
					setTimeout( () => {
						setState({
							language_currency_visible : false ,
						})
					} , 200 );
				} , 50 );
			} , root_click_symbol );
			return unsubscribe;
		} );
		
		return {
			get general_popover_visible() {
				return store.general_popover_visible;
			} ,
			get language_currency_visible() {
				return store.language_currency_visible;
			} ,
			setVisible( visible : {
				general_popover_visible? : boolean,
				language_currency_visible? : boolean,
			} ) {
				setState( visible );
			} ,
			
		};
	};
}();


const MenuItem = ComponentWrapper( ( props : MenuItem ) => {
	return <>
		<div
			className = { less.item }
			onClick = { ( e ) => {
				props.onClick?.( e );
			} }
		>
			<span className = { less.itemText }>
				{ props.text }
			</span>
			{ props.icon }
		</div>
	</>;
} );

import { DxzLangCurrency } from '@@pages/Test/dxz-Lang-currency';
import { headerBtnStyle } from '../';
import {
	reaxel_wallet ,
	reaxel_theme ,
} from '@@RootPath/src/reaxels';
import {
	invoke_root_click ,
	root_click_symbol ,
	subscribe_root_click ,
} from '@@common/global-controller';
import { XPopover } from '@@common/Xcomponents';
import less from './index.module.less';
import {
	SVGAbout ,
	SVGHelp ,
	SVGLang ,
	SVGDocs ,
	SVGRequest ,
} from '@@SvgComponents/header-panel-svg';
import {
	BtnGeneralMenuSvg,
} from '@@SvgComponents/Btn-general-menu-svg';

type MenuItem = {
	icon : React.ReactElement;
	text : React.ReactNode;
	onClick? : ( e : React.MouseEvent<HTMLDivElement> ) => any;
};


