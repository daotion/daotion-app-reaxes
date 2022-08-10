


export const DxzSBTDisplayCardList = () => {
	return <>
		<div className = { less.allSBTsContainer }>
			{/*分为顶部的若干个SBT索引框和下面展示的SBT card list*/ }
			<div className = { less.SBTsDisplayTopBox }>
				<span className = { less.SBTsTitle }>SBTs</span>
				<div className = { less.SBTsIndexingWithBtn }>
					<SBTsSearchInput />
					<SBTSelectChain/>
					<SBTSelectType/>
					<SBTDisplayCreateBtn />
				</div>
			</div>
			
			<div className = { less.SBTsDisplayCardList }>
				{ new Array( 6 ).fill( '' ).
				map( ( a , i ) => {
					return <SBTDisplayCard
						key = { Math.random() }
					/>;
				} ) }
			</div>
		</div>
	</>;
};
import {
	Input ,
	Select }from 'antd';
import less from './index.module.less';
import { PrimaryBtn } from '@@pages/Test/dxz-button';
import {} from '@@pages/Test/dxz-select';
import {
	SVGSearch ,
	SVGSelectSuffix ,
	SVGSBTCardPolygon ,
	SVGSBTCardInfoLogo,
} from '@@pages/_SvgComponents/all-SBT-SVG';

export const SBTSelectType = () => {
	return <>
		<Select
			suffixIcon={<SVGSelectSuffix/>}
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
			suffixIcon={<SVGSelectSuffix/>}
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

export const SBTDisplayCreateBtn = () => {
	return <>
		<PrimaryBtn
			type = "primary"
			className = { less.createNewBtn }
		>
			Create new SBT
		</PrimaryBtn>
	</>;
};
