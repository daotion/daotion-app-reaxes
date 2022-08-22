import { reaxel_wallet } from "@@reaxels";

const reaxel_SBT_list = function () {
	let firstTimestamp = 0;
	const {
		store ,
		setState ,
	} = orzMobx( {
		SBT_list : [] ,
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


export const DxzSBTPadList = () => {
	const { params } = utils.useRouter();
	const spaceID = parseInt( params.spaceID ) || 2;
	
	const {
		fetchSBTList ,
		SBT_Pad_Store ,
	} = reaxel_SBT_list();
	
	fetchSBTList( { spaceID } );
	
	return <>
		<div className = { less.allSBTsContainer }>
			{/*分为顶部的若干个SBT索引框和下面展示的SBT card list*/ }
			<div className = { less.SBTsDisplayTopBox }>
				<span className = { less.SBTsTitle }>SBTs</span>
				<div className = { less.SBTsIndexingWithBtn }>
					<SBTsSearchInput />
					<SBTSelectChain />
					<SBTSelectType />
					<SBTCreateNewBtn />
				</div>
			</div>
			
			<div className = { less.SBTsDisplayCardList }>
				{ new Array( 6 ).fill( '' ).map( ( a , i ) => {
					return <SBTDisplayCard
						key = { Math.random() }
					/>;
				} ) }
			</div>
		</div>
	</>;
};

import { request__SBT_list } from './requests';


import {
	Input ,
	Select ,
} from 'antd';
import less from './index.module.less';
import { XButton } from '@@pages/Test/dxz-button';
import {} from '@@pages/Test/dxz-select';
import {
	SVGSearch ,
	SVGSelectSuffix ,
	SVGSBTCardPolygon ,
	SVGSBTCardInfoLogo ,
} from '@@pages/_SvgComponents/all-SBT-SVG';

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

export const SBTDisplayCard = () => {
	return <>
		<div className = { less.SBTDisplayCard }>
			<div className = { less.SBTShowSection }></div>
			<div className = { less.SBTInfoSection }>
				<p className = { less.SBTCardName }>Amazing digital art</p>
				<SVGSBTCardInfoLogo />
				<div className = { less.divider }></div>
				<div className = { less.cardFooter }>
					<SVGSBTCardPolygon />
					<span>Polygon</span>
				</div>
			</div>
		</div>
	</>;
};

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
