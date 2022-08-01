import less from './index.module.less';
import { Switch } from 'antd';

import { reaxel_i18n } from '@@RootPath/src/reaxels';
import {
	SVGAbout ,
	SVGHelp,
	SVGLang ,
	SVGDocs,
	SVGRequest ,
} from '@@pages/_SvgComponents/header-panel-svg';

export const DxzHeaderPanel = ComponentWrapper( () => {
	const { i18n } = reaxel_i18n();
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
			/>
			<MenuItem
				text = { i18n( "Dark theme" ) }
				icon = { <Switch /> }
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


const MenuItem = ComponentWrapper( ( props : MenuItem ) => {
	return <>
		<div
			className = { less.item }
		>
			<span className = { less.itemText }>
				{ props.text }
			</span>
			{ props.icon }
		</div>
	</>;
} );

type MenuItem = {
	icon : React.ReactElement;
	text : React.ReactNode;
	onClick? : () => any;
};
