import { reaxel_wallet } from "@@reaxels";


export const NewSBT = ComponentWrapper(() => {
	
	const spaceID = parseInt(utils.useRouter().params.spaceID);
	const reax_newSBT = reaxel_newSBT();
	const {
		file ,
		imgPreviewUrl ,
	} = reaxel_DDF();
	const {
		createSBT ,
		validate ,
		setFields ,
		newSBT_store ,
		validations ,
		enum__SBT_type ,
		enum_chains ,
		enum__SBT_eligible ,
	} = reax_newSBT;
	Reaxes.collectDeps(newSBT_store);
	
	return <>
		<div className = { less.createSBTContainer }>
			
			<Header_GoBack />
			<div>
				<h1 className = { less.mainTitle }>Create SBT</h1>
				<div className = { less.createSBTInfo }>
					{/*createSBTInfo分为左右两部分, 左边包括 三个信息框 以及底部Create SBT框*/ }
					<div className = { less.createSBT_left }>
						{/*左边的三个create SBT info box,样式相同, 应用一个类名*/ }
						<div className = { less.createSBTInfoBox }>
							{/*表单区域*/ }
							<SubTitleWithItem
								title = { `* ${ i18n("SBT Type") }` }
								icon = { <SVGSubtract /> }
							>
								<Select
									value = { newSBT_store.select__SBT_type }
									onChange = { (value) => {
										reax_newSBT.setFields({
											select__SBT_type : value ,
										});
									} }
									status = { convert(validations.select__SBT_type) }
									suffixIcon = { <SVGSelectArrowIcon /> }
									className = { less.newSBTSelectType }
									dropdownClassName = { less.dropDownMenu }
									dropdownStyle = { {
										border : "2px solid #e6e8ec" ,
										borderRadius : "12px" ,
										padding : "8px" ,
									} }
									placeholder = { i18n("Select") }
								>
									{ enum__SBT_type.map((text) => {
										return <Select.Option
											value = { text }
											key = { text }
										>
											{ text }
										</Select.Option>;
									}) }
								</Select>
							</SubTitleWithItem>
							
							<SubTitleWithItem
								title = { `* ${ i18n("SBT Name") }` }
							>
								<XInput
									type = "primary"
									placeholder = { i18n('Enter the SBT name') }
									status = { convert(validations.input__SBT_name) }
									value = { newSBT_store.input__SBT_name }
									onChange = { (e) => {
										setFields({ input__SBT_name : e.target.value });
									} }
								/>
								{ validations.input__SBT_name === false && <p>this filed is requested</p> }
							</SubTitleWithItem>
							
							<SubTitleWithItem title = "Description">
								<XTextArea
									type = "primary"
									value = { newSBT_store.textarea__description }
									onChange = { (e) => {
										setFields({ textarea__description : e.target.value });
									} }
									maxLength = { 160 }
								/>
							</SubTitleWithItem>
						</div>
						
						
						<div className = { less.createSBTInfoBox }>
							<SubTitleWithItem
								title = { `* ${ i18n('Eligible (Data Condition)') }` }
								icon = { <SVGSubtract /> }
							>
								<Select
									value = { newSBT_store.select__SBT_eligible }
									onChange = { (value , option) => {
										setFields({ select__SBT_eligible : value });
									} }
									
									suffixIcon = { <SVGSelectArrowIcon /> }
									className = { less.newSBTSelectType }
									dropdownClassName = { less.dropDownMenu }
									dropdownStyle = { {
										border : "2px solid #e6e8ec" ,
										borderRadius : "12px" ,
										padding : "8px" ,
									} }
									placeholder = { i18n("Select") }
								>
									{ enum__SBT_eligible.map(({ access_ID , desc }) => {
										
										return <Select.Option
											value = { access_ID }
											key = { access_ID }
										>{ desc }</Select.Option>;
									}) }
								</Select>
							</SubTitleWithItem>
							
							<SubTitleWithItem
								title = { `* ${ i18n('Limit of Each Address') }` }
							>
								<p className = { less.someIntro }>
									If the number is 1, the ERC721 standard is enabled.
									If the number is greater than 1, the ERC1155 standard is enabled.
								</p>
								<XInput
									type = "primary"
									placeholder = "e.g. 1"
									value = { newSBT_store.input_number__litmit_of_each_address }
									onChange = { (e) => {
										setFields({
											input_number__litmit_of_each_address : e.target.value.replaceAll(/[^0-9]*/g , '') ,
										});
									} }
								/>
							</SubTitleWithItem>
							
							<SubTitleWithItem
								title = { <p className = { less.subtitleWithSwitch }>
									<span>
										* Maximun of SBT
									</span>
									<span>
										<span className = { less.infinite }>
											infinite
											<SVGSubtract />
										</span>
										
										<XSwitch
											type = "primary"
											onChange = { (checked) => {
												reax_newSBT.setFields({
													switch__issuance_quantity_infinity : checked ,
												});
											} }
										/>
									</span>
								</p> }
							>
								<div className = { less.divider }></div>
								{ !newSBT_store.switch__issuance_quantity_infinity && <XInput
									type = "primary"
									onChange = { (e) => {
										setFields({ input__issuance_quantity_number : e.target.value });
									} }
								/> }
							</SubTitleWithItem>
							
							<SubTitleWithItem
								title = { <p className = { less.subtitleWithSwitch }>
									* Revoke by Issuer
									<XSwitch
										checked = { newSBT_store.switch__revoke_by_issuer }
										onChange = { (checked) => {
											setFields({ switch__revoke_by_issuer : checked });
										} }
										type = "primary"
									/>
								</p> }
							/>
							
							<SubTitleWithItem
								title = { <p className = { less.subtitleWithSwitch }>
									* Burned by Holder
									<XSwitch
										checked = { newSBT_store.switch__burned_by_holder }
										onChange = { (checked) => {
											setFields({ switch__burned_by_holder : checked });
										} }
										type = "primary"
									/>
								</p> }
							/>
						
						</div>
						<div className = { less.createSBTInfoBox }>
							
							<SubTitleWithItem
								title = { i18n('Properties') }
								icon = { <SVGSubtract /> }
							>
								{ newSBT_store.input_pair__properties.map(({ key , value , react_key }) => {
									
									return <div
										key = { react_key }
										className = { less.inputSection }
									>
										<XInput
											value = {key}
											onChange = {(e) => {
												setFields({
													input_pair__properties : newSBT_store.input_pair__properties.map((property) => {
														if( react_key === property.react_key ) {
															return {
																...property ,
																key : e.target.value ,
															};
														} else {
															return property;
														}
													}) ,
												});
											}}
											type = "primary"
											placeholder = "Enter Subject..."
										/>
										
										<XInput
											value = {value}
											onChange = {(e) => {
												setFields({
													input_pair__properties : newSBT_store.input_pair__properties.map((property) => {
														if( react_key === property.react_key ) {
															return {
																...property ,
																value : e.target.value ,
															};
														} else {
															return property;
														}
													}) ,
												});
											}}
											type = "primary"
											placeholder = "Enter Content..."
										/>
										
										{ newSBT_store.input_pair__properties.length > 1 && <button
											onClick = {() => {
												setFields({
													input_pair__properties : newSBT_store.input_pair__properties.filter((property) => property.react_key !== react_key) ,
												});
											}}
											className = { less.closeBtn }
										>
											<SVGCloseIcon />
										</button> }
									</div>;
								}) }
								
								<button 
									onClick = {() => {
										setFields({
											input_pair__properties : newSBT_store.input_pair__properties.concat({
												key : '',
												value : '',
												react_key : Math.random(),
											}) ,
										});
									}}
									className = { less.addBtn }
								> <SVGSBTAdd/> </button>
							
							</SubTitleWithItem>
							
							{/* 上传图片*/ }
							<SubTitleWithItem
								title = { `* ${ i18n('SBT Image') }` }
								icon = { <SVGSubtract /> }
							>
								<UploadFileBox />
							</SubTitleWithItem>
							
							<SubTitleWithItem
								title = { `* ${ i18n('Network') }` }
								icon = { <SVGSubtract /> }
							>
								<Select
									status = { convert(validations.select__network_chainID) }
									onChange = { (value) => {
										setFields({ select__network_chainID : value });
									} }
									suffixIcon = { <SVGSelectArrowIcon /> }
									className = { less.newSBTSelectType }
									dropdownClassName = { less.dropDownMenu }
									dropdownStyle = { {
										border : "2px solid #e6e8ec" ,
										borderRadius : "12px" ,
										padding : "8px" ,
									} }
									placeholder = { i18n("Please select") }
									optionLabelProp = "label"
								>
									{ enum_chains.map(({ id , label }) => {
										return <Select.Option
											label = { label }
											key = { id }
										>
											<OptionNetEthereum label = { label } />
										</Select.Option>;
									}) }
								</Select>
							</SubTitleWithItem>
						</div>
						<div className = { less.createSBTFooterBox }>
							<XButton
								type = "primary"
								onClick = { async () => {
									await validate();
									await createSBT(spaceID);
									
								} }
							>Create SBT</XButton>
						</div>
					</div>
					{/*右边的recommentd SBT names部分 :*/ }
					<RecommentdSBTNameBlock />
				</div>
			</div>
		
		</div>
	</>;
});

import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File/reaxel-DDF';
import { UploadFileBox } from './Upload-Box';
import { reaxel_newSBT } from './reaxel--create-SBT';

import { Img } from '@@common/Xcomponents';
import less from './index.module.less';
import { Header_GoBack } from '@@pages/DesignComponents/Button-GoBack';
import {
	XInput ,
	XTextArea ,
} from "@@pages/Test/dxz-input";
import { TagsSelect } from '@@pages/Test/dxz-select';
import { XSwitch } from "@@pages/Test/dxz-switch";
import { XButton } from "@@pages/Test/dxz-button";
import {
	Button ,
	Checkbox ,
	Select ,
} from 'antd';
import {
	SVGNetEthereum ,
	SVGSBTAdd ,
	SVGSelectArrowIcon ,
	SVGSubtract ,
} from '@@pages/_SvgComponents/all-SBT-SVG';
import { SVGCloseIcon } from "../_SvgComponents/space-setting-svg";
import { SVGAddNewIcon } from "../_SvgComponents/space-info-svg";

export const SubTitleWithItem = (props) => {
	return <>
		<div className = { less.subTitleWithItem }>
			<span className = { less.subTitle }>
				{ props.title }
				{ props.icon }
			</span>
			{ props.children }
		</div>
	</>;
};

const RecommentdSBTNameBlock = ComponentWrapper(() => {
	const { Button } = antd;
	const { setFields } = reaxel_newSBT();
	
	return <div className = { less.createSBT_right }>
		<span className = { less.recommendSBTNameTitle }>
			<I18n>Recommend SBT name</I18n>
		</span>
		
		<div className = { less.createSBTRightBtnArea }>
			{[
				"Proposal Builder Medal",
				"Quarterly service medal",
				"Outstanding students",
				"Brand Promotion Medal",
				"Community Contribution Medal",
			].map((word) => {
				return <Button
					key = { word }
					onClick = { () => setFields( { input__SBT_name : word } ) }
				>
					{ word }
				</Button>;
			})}
		</div>
	</div>;
});


export const OptionNetEthereum = ComponentWrapper((props : {
	label : string;
}) => {
	return <>
		<span className = { less.netEthereum }>
			<SVGNetEthereum />
			{ props.label }
		</span>
	</>;
});


export const CreateSBTCheckBox = (props) => {
	return <>
		<div className = { less.createSBTCheckBox }>
			<Checkbox>Destruction by issuer</Checkbox>
			<Checkbox>Holder destruction</Checkbox>
			<Checkbox>Destruction of holder's authorization contract</Checkbox>
		</div>
	</>;
};


const convert = (validateResult : null | true | false) => {
	switch( validateResult ) {
		case null :
		case true : {
			return '';
		}
			;
		case false : {
			return 'error';
		}
	}
};
























