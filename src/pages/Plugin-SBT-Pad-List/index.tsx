export const PluginSBTPadList = ComponentWrapper(() => {
	const { params } = utils.useRouter();
	const spaceID = parseInt(params.spaceID) || 2;
	
	const {
		fetchSBTList ,
		SBT_Pad_Store ,
		scrollParentRef ,
	} = reaxel_SBT_list();
	const ref = reaxel_scrollParentRef();
	fetchSBTList({ spaceID });
	return <>
		<div className = { less.allSBTsContainer }>
			{/*分为顶部的若干个SBT索引框和下面展示的SBT card list*/ }
			<div className = { less.SBTsDisplayTopBox }>
				<span className = { less.SBTsTitle }>SBTs</span>
				<div className = { less.SBTsIndexingWithBtn }>
					<SBTSearchArea />
					<SBTCreateNewBtn />
				</div>
			</div>
			
			<div className = { less.SBTsDisplayCardList }>
				
				<InfiniteScroll
					style = { {
						display : "flex" ,
						flexFlow : "row wrap" ,
						justifyContent : "flex-start" ,
					} }
					pageStart = { 0 }
					hasMore = { SBT_Pad_Store.hasMore }
					loadMore = { () => {
						fetchSBTList({ spaceID , count : 20 } , true);
					} }
					getScrollParent = { () => ref.current }
					useWindow = { false }
					threshold = { 300 }
				>
					{ SBT_Pad_Store.SBT_list.map((item) => {
						return <SBTDisplayCard
							key = { item.SBTID }
							chainID = { item.chainID }
							SBT_name = { item.name }
							type = { item.type }
							picUrl = { 'https://www.ali213.net/images/yxlogo.png' }
						/>;
					}) }
				</InfiniteScroll>
			</div>
		</div>
	</>;
});

export const SBTSearchArea = ComponentWrapper(() => {
	const { SBT_Pad_Store , setSBTSearchFields , fetchSBTList } = reaxel_SBT_list();
	const { chains } = reaxel_wallet();
	const { Input , Select } = antd , { Option } = Select;
	return <>
		<Input
			value = { SBT_Pad_Store.input_search }
			onChange = { (e) => {
				setSBTSearchFields({
					input_search : e.target.value ,
					
				});
			} }
			suffix = { <SVGSearch /> }
			placeholder = { i18n('Search SBTs') }
			className = { less.SBTsSearchInput }
		/>
		
		<Select
			value = { SBT_Pad_Store.select_chain }
			onChange = { (value) => {
				setSBTSearchFields({
					select_chain : value ,
				});
			} }
			suffixIcon = { <SVGSelectSuffix /> }
			className = { less.SBTSelectType }
			dropdownClassName = { less.dropDownMenu }
			dropdownStyle = { {
				border : "2px solid #e6e8ec" ,
				borderRadius : "12px" ,
				padding : "8px" ,
			} }
			placeholder = { i18n("All Chain") }
			// optionLabelProp = "label"
		>
			{ chains.map((chain) => {
				return <Option
					key = { chain.id }
				>{ chain.label }</Option>;
			}) }
		</Select>
		<Select
			suffixIcon = { <SVGSelectSuffix /> }
			className = { less.SBTSelectType }
			dropdownClassName = { less.dropDownMenu }
			dropdownStyle = { {
				border : "2px solid #e6e8ec" ,
				borderRadius : "12px" ,
				padding : "8px" ,
			} }
			placeholder = { i18n("All Type") }
		>
			<Select.Option value = "type1">type1</Select.Option>
			<Select.Option value = "type2">type2</Select.Option>
		</Select>
	</>;
});

export const SBTDisplayCard = ComponentWrapper((props : {
	SBT_name : string;
	type : string;
	chainID : string;
	picUrl : string;
}) => {
	const { chains } = reaxel_wallet();
	const chain = chains.find(({ id }) => props.chainID);
	return <>
		<div className = { less.SBTDisplayCard }>
			{/*<div className = { less.SBTShowSection }></div>*/ }
			<Img
				src = { props.picUrl }
				className = { less.SBTShowSection }
			/>
			<div className = { less.SBTInfoSection }>
				<p className = { less.SBTCardName }>{ props.SBT_name }</p>
				{/*todo @Ferry*/ }
				<span>{ props.type }</span>
				<div className = { less.divider }></div>
				<div className = { less.cardFooter }>
					<Img src = { `${ chain.icon }` } />
					<span>{ chain.label }</span>
				</div>
			</div>
		</div>
	</>;
});

export const SBTCreateNewBtn = ComponentWrapper(() => {
	
	const { navigate } = utils.useRouter();
	return <>
		<XButton
			type = "primary"
			style = { {
				height : "40px" ,
				borderRadius : '8px' ,
				fontSize : "13px",
			} }
			onClick = { () => navigate('new') }
		>
			Create new SBT
		</XButton>
	</>;
});


import {
	reaxel_SBT_list ,
	reaxel_scrollParentRef ,
	reaxel_wallet ,
} from "@@reaxels";
import { Img } from '@@common/Xcomponents';
import { XButton } from '@@pages/Test/dxz-button';
import InfiniteScroll from 'react-infinite-scroller';
import {
	SVGSearch ,
	SVGSelectSuffix ,
} from '@@pages/_SvgComponents/all-SBT-SVG';
import less from './index.module.less';
