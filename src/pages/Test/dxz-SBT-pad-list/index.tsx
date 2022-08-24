
const reaxel_SBT_list = function(){
	const { store , setState } = orzMobx({
		SBT_list : [] as SBT_list.SBTListItem[] ,
		input_search : null ,
		select_chain : null ,
		select_type : null ,
		
		
		firstTimestamp : 0 ,
		/*当前分页最后一个在总列表的索引位置*/
		tailIndex : 0 ,
		hasMore : null ,
		
		pending : false ,
	});
	const prevParams = {
		firstTimestamp : 0 ,
		tailIndex : 0 ,
		
		input_search : null ,
		select_chain : null ,
		select_type : null ,
	};
	
	const reax_wallet = reaxel_wallet();
	const closuredFetch__SBT_Pad_list = Reaxes.closuredMemo((args : {
			spaceID : number;
			indexStart : number;
			count? : number;
			firstTimestamp? : number,
		}) => {
			return reax_fetch_SBT_list.grasp(args);
		} , () => [
			store.input_search ,
			store.select_chain ,
			store.select_type ,
			/*占位:spaceID*/ ,
		] ,
	);
	const reax_fetch_SBT_list = reaxel_fact__prevent_dup_request((preventDup) => {
		return ({
			spaceID ,
			count = 40 ,
			firstTimestamp = store.firstTimestamp ,
			indexStart ,
		} : {
			spaceID : number;
			indexStart : number;
			count? : number;
			firstTimestamp? : number,
		}) => {
			return request__SBT_list(async () => {
				return {
					indexStart ,
					count ,
					firstTimestamp : 0 ,
					spaceID ,
					type : store.select_type ,
					chainID : store.select_chain ,
					name : store.input_search,
				};
			}).then((res) => {
				_.assign(prevParams , {
					firstTimestamp : res.firstTimestamp ,
					tailIndex : res.indexEnd ,
					input_search : store.input_search ,
					select_chain : store.select_chain ,
					select_type : store.select_type ,
				});
				
				preventDup(() => {
					setState({
						SBT_list : res.infos ,
					});
				});
			}).finally(() => {
				preventDup(() => {
					setState({ pending : false });
				});
			});
		}
	})();
	
	return () => {
		return {
			get SBT_Pad_Store(){
				Reaxes.collectDeps(store);
				return store;
			} ,
			setSBTSearchFields (state:Partial<typeof store>){
				setState(state);
			},
			fetchSBTList({ spaceID , count = 40 }){
				closuredFetch__SBT_Pad_list(() => [
					store.input_search ,
					store.select_chain ,
					store.select_type ,
					spaceID ,
				])({
					spaceID : 2 ,
					indexStart : 0 ,
					firstTimestamp : 0 ,
					count : 40
				});
			} ,
		};
	};
}();
import { reaxel_fact__prevent_dup_request } from '../Reaxel-fact--prevent-dup-request';

export const DxzSBTPadList = ComponentWrapper(() => {
	const { params } = utils.useRouter();
	const spaceID = parseInt(params.spaceID) || 2;
	
	const {
		fetchSBTList ,
		SBT_Pad_Store ,
	} = reaxel_SBT_list();
	
	fetchSBTList({ spaceID });
	console.log('rendered');
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
				{ SBT_Pad_Store.SBT_list.map((item) => {
					return <SBTDisplayCard
						key = { item.SBTID }
						chainID = { item.chainID }
						SBT_name = { item.name }
						type = { item.type }
						picUrl = { 'https://www.ali213.net/images/yxlogo.png' }
					/>;
				}) }
			</div>
		</div>
	</>;
});

export const SBTSearchArea = ComponentWrapper(() => {
	const { SBT_Pad_Store , setSBTSearchFields , fetchSBTList } = reaxel_SBT_list();
	const { chains } = reaxel_wallet();
	const {Input,Select} = antd , { Option } = Select;
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
	
	const {navigate} = utils.useRouter();
	return <>
		<XButton
			type = "primary"
			className = { less.createNewBtn }
			onClick={() => navigate('new')}
		>
			Create new SBT
		</XButton>
	</>;
});


import { reaxel_wallet } from "@@reaxels";
import { SBT_list } from './type';
import { request__SBT_list } from './requests';
import { Img } from '@@common/Xcomponents';
import InfiniteScroll from 'react-infinite-scroller';

import {
	Input ,
	Select ,
} from 'antd';
import less from './index.module.less';
import { XButton } from '@@pages/Test/dxz-button';
import {
	SVGSearch ,
	SVGSelectSuffix ,
} from '@@pages/_SvgComponents/all-SBT-SVG';
