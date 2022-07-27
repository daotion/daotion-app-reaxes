


export const GeneralMenuButtonDropdown = ComponentWrapper( () => {
	const reax_wallet = reaxel_wallet();
	const [ visible , setVisible ] = useState( false );
	const [showingLanguageCurrency,setShowingLanguageCurrency] = useState(false);
	
	useEffect( () => subscribe_root_click( () => setVisible( false ) , root_click_symbol ) , [] );
	const {
		Button ,
		Switch ,
	} = antd;
	
	return <>
		<XPopover
			overlayClassName = { less.userinfoPopoverContainer }
			align = { { targetOffset : [ 105 ] } }
			autoAdjustOverflow = { false }
			visible = { visible }
			trigger = { [ 'click' ] }
			content = { showingLanguageCurrency? <DxzLangCurrency/> : <GeneralMenuList /> }
			onVisibleChange = { ( visible ) => invoke_root_click.then( () => setVisible( () => visible ) ) }
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


const GeneralMenuList = ComponentWrapper( () => {
	
	const { Switch } = antd;
	return <>
		<div
			className = { less.container }
		>
			<MenuItem
				text = "About"
				icon = { <SVGAbout /> }
			/>
			<MenuItem
				text = "Help Center"
				icon = { <SVGHelp /> }
			/>
			<MenuItem
				text = "Language/Currency"
				icon = { <SVGLang /> }
				onClick = {() => {
					setShowingLanguageCurrency()
				}}
			/>
			<MenuItem
				text = "Dark theme"
				icon = { <Switch /> }
			/>
			<MenuItem
				text = "Docs"
				icon = { <SVGDocs /> }
			/>
			<MenuItem
				text = "Request Features"
				icon = { <SVGRequest /> }
			/>
		</div>
	</>;
} );


const reaxel_language_currency = function(){
	const {} = orzMobx({
		showingLanguageCurrency : false ,
	});
	
	return () => {
		
		return {
			
		}
	}
}();


const MenuItem = ComponentWrapper( ( props : MenuItem ) => {
	return <>
		<div
			className = { less.item }
			onClick={() => {
				props.onClick?.();
			}}
		>
			<span className = { less.itemText }>
				{ props.text }
			</span>
			{ props.icon }
		</div>
	</>;
} );
import {DxzLangCurrency} from '@@pages/Test/dxz-Lang-currency';
import { headerBtnStyle } from '../';
import { reaxel_wallet } from '@@reaxes';
import {
	invoke_root_click ,
	root_click_symbol ,
	subscribe_root_click ,
} from '@@common/global-controller';
import { XPopover } from '@@common/Xcomponents';
import less from './index.module.less';

type MenuItem = {
	icon : React.ReactElement;
	text : React.ReactNode;
	onClick? : () => any;
};


const SVGAbout = () => {
	return <>
		<svg
			width = "20"
			height = "20"
			viewBox = "0 0 20 20"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M9.99996 16.6665C13.6819 16.6665 16.6666 13.6817 16.6666 9.99984C16.6666 6.31794 13.6819 3.33317 9.99996 3.33317C6.31806 3.33317 3.33329 6.31794 3.33329 9.99984C3.33329 13.6817 6.31806 16.6665 9.99996 16.6665ZM9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332Z"
				fill = "#6F767E"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M9.99996 8.3335C10.4602 8.3335 10.8333 8.70659 10.8333 9.16683V13.3342C10.8333 13.7945 10.4602 14.1676 9.99996 14.1676C9.53972 14.1676 9.16663 13.7945 9.16663 13.3342V9.16683C9.16663 8.70659 9.53972 8.3335 9.99996 8.3335Z"
				fill = "#6F767E"
			/>
			<ellipse
				cx = "9.99996"
				cy = "6.66683"
				rx = "0.833333"
				ry = "0.833333"
				fill = "#6F767E"
			/>
		</svg>
	</>;
};
const SVGHelp = () => {
	return <>
		<svg
			width = "20"
			height = "20"
			viewBox = "0 0 20 20"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M9.99996 16.6665C13.6819 16.6665 16.6666 13.6817 16.6666 9.99984C16.6666 6.31794 13.6819 3.33317 9.99996 3.33317C6.31806 3.33317 3.33329 6.31794 3.33329 9.99984C3.33329 13.6817 6.31806 16.6665 9.99996 16.6665ZM9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332Z"
				fill = "#777E91"
			/>
			<circle
				cx = "9.99996"
				cy = "14.9998"
				r = "0.833333"
				fill = "#777E91"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M10 6.66667C9.27565 6.66667 8.65717 7.12925 8.42798 7.7777C8.2746 8.21164 7.7985 8.43907 7.36457 8.2857C6.93064 8.13233 6.7032 7.65622 6.85658 7.22229C7.31378 5.92876 8.54737 5 10 5C11.841 5 13.3334 6.49238 13.3334 8.33333C13.3334 9.88653 12.271 11.1916 10.8334 11.5617V12.5C10.8334 12.9602 10.4603 13.3333 10 13.3333C9.53978 13.3333 9.16669 12.9602 9.16669 12.5V10.8333C9.16669 10.3731 9.53978 10 10 10C10.9205 10 11.6667 9.25381 11.6667 8.33333C11.6667 7.41286 10.9205 6.66667 10 6.66667Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
};
const SVGLang = () => {
	return <>
		<svg
			width = "20"
			height = "20"
			viewBox = "0 0 20 20"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M9.99996 16.6665C13.6819 16.6665 16.6666 13.6817 16.6666 9.99984C16.6666 6.31794 13.6819 3.33317 9.99996 3.33317C6.31806 3.33317 3.33329 6.31794 3.33329 9.99984C3.33329 13.6817 6.31806 16.6665 9.99996 16.6665ZM9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332Z"
				fill = "#777E91"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M11.4556 15.147C12.0712 13.9159 12.5 12.0984 12.5 9.99984C12.5 7.90129 12.0712 6.08381 11.4556 4.85264C10.7902 3.52177 10.1793 3.33317 10 3.33317C9.82083 3.33317 9.20991 3.52177 8.54447 4.85264C7.92889 6.08381 7.50004 7.90129 7.50004 9.99984C7.50004 12.0984 7.92889 13.9159 8.54447 15.147C9.20991 16.4779 9.82083 16.6665 10 16.6665C10.1793 16.6665 10.7902 16.4779 11.4556 15.147ZM10 18.3332C12.3012 18.3332 14.1667 14.6022 14.1667 9.99984C14.1667 5.39746 12.3012 1.6665 10 1.6665C7.69885 1.6665 5.83337 5.39746 5.83337 9.99984C5.83337 14.6022 7.69885 18.3332 10 18.3332Z"
				fill = "#777E91"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M18.2921 10.8332C18.3194 10.5591 18.3333 10.2811 18.3333 9.99984C18.3333 9.71859 18.3194 9.44059 18.2921 9.1665H1.70777C1.68056 9.44059 1.66663 9.71859 1.66663 9.99984C1.66663 10.2811 1.68056 10.5591 1.70777 10.8332H18.2921Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
};
const SVGDocs = () => {
	return <>
		<svg
			width = "20"
			height = "20"
			viewBox = "0 0 20 20"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M5 9C5 8.44772 5.44772 8 6 8H14C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10H6C5.44772 10 5 9.55228 5 9Z"
				fill = "#6F767E"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M5 13C5 12.4477 5.44772 12 6 12H10C10.5523 12 11 12.4477 11 13C11 13.5523 10.5523 14 10 14H6C5.44772 14 5 13.5523 5 13Z"
				fill = "#6F767E"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M19 17C19 18.6569 17.6569 20 16 20H4C2.34315 20 1 18.6569 1 17V3C1 1.34315 2.34315 0 4 0H14L14.0107 0.0107091C14.7136 0.0702502 15.3761 0.376096 15.8787 0.87868L18.1213 3.12132C18.6239 3.6239 18.9297 4.28645 18.9893 4.98929L19 5V17ZM16 18H4C3.44772 18 3 17.5523 3 17V3C3 2.44772 3.44771 2 4 2H13V4C13 5.10457 13.8954 6 15 6H17V17C17 17.5523 16.5523 18 16 18Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
};
const SVGRequest = () => {
	return <>
		<svg
			width = "20"
			height = "20"
			viewBox = "0 0 20 20"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M14.9907 11.1142C14.8462 13.2844 13.0401 15 10.8333 15H6.66667C4.36548 15 2.5 13.1345 2.5 10.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H13.3333C14.2538 2.5 15 3.24619 15 4.16667H16.6667C17.5871 4.16667 18.3333 4.91286 18.3333 5.83333V8.1981C18.3333 9.27418 17.6448 10.2295 16.6239 10.5698L14.9907 11.1142ZM4.16667 4.16667H13.3333V10.8333C13.3333 12.214 12.214 13.3333 10.8333 13.3333H6.66667C5.28595 13.3333 4.16667 12.214 4.16667 10.8333V4.16667ZM15 9.35429L16.0969 8.98867C16.4371 8.87524 16.6667 8.55679 16.6667 8.1981V5.83333H15V9.35429Z"
				fill = "#777E91"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M1.66663 16.6668C1.66663 16.2066 2.03972 15.8335 2.49996 15.8335H15.8333C16.2935 15.8335 16.6666 16.2066 16.6666 16.6668C16.6666 17.1271 16.2935 17.5002 15.8333 17.5002H2.49996C2.03972 17.5002 1.66663 17.1271 1.66663 16.6668Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
};
