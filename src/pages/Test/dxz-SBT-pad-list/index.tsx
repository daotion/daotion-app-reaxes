import { reaxel_wallet } from "@@reaxels";
import { SBT_list } from './type';
import { request__SBT_list } from './requests';
import { Img } from '@@common/Xcomponents';


import {
	Input ,
	Select ,
} from 'antd';
import less from './index.module.less';
import { XButton } from '@@pages/Test/dxz-button';
import {
	SVGSBTCardInfoLogo ,
	SVGSBTCardPolygon ,
	SVGSearch ,
	SVGSelectSuffix ,
} from '@@pages/_SvgComponents/all-SBT-SVG';

const reaxel_SBT_list = function () {
	let firstTimestamp = 0;
	const {
		store ,
		setState ,
	} = orzMobx( {
		SBT_list : [] as SBT_list.SBTListItem[] ,
		input_search : null ,
		select_chain : null ,
		select_type : null ,
		
		indexStart : 0 ,
		
		pending : false ,
		
	} );
	const reax_wallet = reaxel_wallet();
	const closuredFetch__SBT_Pad_list = Reaxes.closuredMemo( ( {
			spaceID ,
			count = 40 ,
		} ) => {
			console.log( spaceID );
			request__SBT_list( async () => {
				return {
					indexStart : store.indexStart ,
					count ,
					firstTimestamp ,
					spaceID ,
					type : store.select_type ,
					chainID : store.select_chain ,
				};
			} ).then( ( res ) => {
				console.log( res );
				setState( {
					SBT_list : res.infos ,
					
				} );
			} );
		} ,
		() => [
			store.input_search ,
			store.select_chain ,
			store.select_type ,
			/*占位:spaceID*/
		] ,
	);
	
	
	return () => {
		
		return {
			get SBT_Pad_Store() {
				Reaxes.collectDeps( store );
				return store;
			} ,
			fetchSBTList( {
				spaceID ,
				count = 40 ,
			} ) {
				closuredFetch__SBT_Pad_list( () => [
					store.input_search ,
					store.select_chain ,
					store.select_type ,
					spaceID ,
				] )( {
					spaceID ,
					count ,
				} );
			} ,
		};
	};
}();


export const DxzSBTPadList = ComponentWrapper( () => {
	const { params } = utils.useRouter();
	const spaceID = parseInt( params.spaceID ) || 2;
	
	const {
		fetchSBTList ,
		SBT_Pad_Store ,
	} = reaxel_SBT_list();
	
	fetchSBTList( { spaceID } );
	console.log( 'rendered' );
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
				{ SBT_Pad_Store.SBT_list.map( ( item ) => {
					return <SBTDisplayCard
						key = { item.SBTID }
						chainID = {item.chainID}
						SBT_name = {item.name}
						type = {item.type}
						picUrl = {'https://www.ali213.net/images/yxlogo.png'}
					/>;
				} ) }
			</div>
		</div>
	</>;
} );

export const SBTSearchArea=()=>{
	return<>
		<SBTsSearchInput />
		<SBTSelectChain />
		<SBTSelectType /></>
}
export const SBTSelectType = () => {
	return <>
		<Select
			suffixIcon = { <SVGSelectSuffix /> }
			className = { less.SBTSelectType }
			dropdownClassName = { less.dropDownMenu }
			dropdownStyle = { {
				border : "2px solid #e6e8ec" ,
				borderRadius : "12px" ,
				padding : "8px" ,
			} }
			placeholder = { i18n( "All Type" ) }
		>
			<Select.Option value = "type1">type1</Select.Option>
			<Select.Option value = "type2">type2</Select.Option>
		</Select>
	</>;
};
export const SBTSelectChain = () => {
	return <>
		<Select
			suffixIcon = { <SVGSelectSuffix /> }
			className = { less.SBTSelectType }
			dropdownClassName = { less.dropDownMenu }
			dropdownStyle = { {
				border : "2px solid #e6e8ec" ,
				borderRadius : "12px" ,
				padding : "8px" ,
			} }
			placeholder = { i18n( "All Chain" ) }
		>
			<Select.Option value = "type1">type1</Select.Option>
			<Select.Option value = "type2">type2</Select.Option>
		</Select>
	</>;
};
export const SBTsSearchInput = () => {
	return <>
		<Input
			suffix = { <SVGSearch /> }
			placeholder = { i18n( 'Search SBTs' ) }
			className = { less.SBTsSearchInput }
		/>
	</>;
};

export const SBTDisplayCard = ComponentWrapper((props:{
	SBT_name : string ;
	type : string;
	chainID : string;
	picUrl : string;
}) => {
	const {chains} = reaxel_wallet();
	console.log( chains );
	const chain = chains.find(({id}) => props.chainID);
	return <>
		<div className = { less.SBTDisplayCard }>
			{/*<div className = { less.SBTShowSection }></div>*/}
			<Img src={props.picUrl} className = { less.SBTShowSection }/>
			<div className = { less.SBTInfoSection }>
				<p className = { less.SBTCardName }>{props.SBT_name}</p>
				{/*todo @Ferry*/}
				<span>{props.type}</span>
				<div className = { less.divider }></div>
				<div className = { less.cardFooter }>
					<Img src = {`${chain.icon}`}/>
					<span>{chain.label}</span>
				</div>
			</div>
		</div>
	</>;
});

export const SBTCreateNewBtn = () => {
	return <>
		<XButton
			type = "primary"
			className = { less.createNewBtn }
		>
			Create new SBT
		</XButton>
	</>;
};




