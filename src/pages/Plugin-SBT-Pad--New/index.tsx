export const NewSBT = ComponentWrapper( () => {
	
	const reax_newSBT = reaxel_newSBT();
	const {
		file ,
		imgPreviewUrl ,
	} = reaxel_DDF();
	const {
		createSBT ,
		enum__SBT_type ,
		newSBT_store ,
		validations,
		setFields ,
		validate,
		enum_chains ,
	} = reax_newSBT;
	Reaxes.collectDeps( newSBT_store );
	
	return <>
		<div className = { less.createSBTContainer }>
			<h1 className = { less.mainTitle }>New SBT</h1>
			<p className = { less.someIntro }>
				SBT is based on the ERC721 standardized protocol.
			</p>
			<div className = { less.createSBTInfo }>
				{/*createSBTInfo分为左右两部分, 左边包括 三个信息框 以及底部Create SBT框*/ }
				<div className = { less.createSBT_left }>
					{/*左边的三个create SBT info box,样式相同, 应用一个类名*/ }
					<div className = { less.createSBTInfoBox }>
						{/*上传图片*/ }
						<SubTitleWithItem title = "Upload files">
							<UploadFileBox />
						</SubTitleWithItem>
						
						
						{/*表单区域*/ }
						<SubTitleWithItem
							title = { i18n( "Type" ) }
						>
							<Select
								value = { newSBT_store.select__SBT_type }
								onChange = { ( value ) => {
									reax_newSBT.setFields( {
										select__SBT_type : value ,
									} );
								} }
								status={validations.select__SBT_type ? "" : "error"}
								suffixIcon = { <SVGSelectArrowIcon /> }
								className = { less.newSBTSelectType }
								dropdownClassName = { less.dropDownMenu }
								dropdownStyle = { {
									border : "2px solid #e6e8ec" ,
									borderRadius : "12px" ,
									padding : "8px" ,
								} }
								placeholder = { i18n( "Please select" ) }
							>
								{ enum__SBT_type.map( ( text ) => {
									return <Select.Option
										value = { text }
										key = { text }
									>
										{ text }
									</Select.Option>;
								} ) }
							</Select>
						</SubTitleWithItem>
						
						<SubTitleWithItem
							title = "Name"
						>
							<PrimaryInput
								type = "primary"
								value = { newSBT_store.input__SBT_name }
								onChange = { ( e ) => {
									setFields( {
										input__SBT_name : e.target.value ,
									} );
								} }
							/>
						</SubTitleWithItem>
						<SubTitleWithItem title = "Description">
							<PrimaryTextArea type = "primary" />
						</SubTitleWithItem>
					</div>
					
					
					<div className = { less.createSBTInfoBox }>
						<SubTitleWithItem title = "SBT access">
							<Select
								suffixIcon = { <SVGSelectArrowIcon /> }
								className = { less.newSBTSelectType }
								dropdownClassName = { less.dropDownMenu }
								dropdownStyle = { {
									border : "2px solid #e6e8ec" ,
									borderRadius : "12px" ,
									padding : "8px" ,
								} }
								placeholder = { i18n( "Please select" ) }
							>
								<Select.Option value = "type1">type1</Select.Option>
								<Select.Option value = "type2">type2</Select.Option>
							</Select>
						</SubTitleWithItem>
						<SubTitleWithItem title = { i18n( 'Hold the upper limit of each user' ) }>
							<PrimaryInput
								type = "primary"
								value = { newSBT_store.input_number__hold_limit_number }
								onChange = { ( e ) => {
									setFields( {
										input_number__hold_limit_number : e.target.value.replaceAll( /[^0-9]*/g , '' ) ,
									} );
								} }
							/>
							<p className = { less.someIntro }>
								If the number is 1, the ERC721 standard is enabled.
								If the number is greater than 1, the ERC1155 standard is enabled.
							</p>
						</SubTitleWithItem>
						<SubTitleWithItem
							title = { <p className = { less.subtitleWithSwitch }>
								<span>
									Issue quantity
								</span>
								<span>
									infinite
									<SpaceSwitch 
										type = "secondary"
										onChange={(checked) => {
											reax_newSBT.setFields({
												input_issuance_quantity : checked ? "infinite" : "",
											})
										}}
									/>
								</span>
							</p> }
						>
							<div className = { less.divider }></div>
							<PrimaryInput 
								type = "primary"
							/>
						</SubTitleWithItem>
						<SubTitleWithItem title = { i18n( 'Network' ) }>
							<Select
								suffixIcon = { <SVGSelectArrowIcon /> }
								className = { less.newSBTSelectType }
								dropdownClassName = { less.dropDownMenu }
								dropdownStyle = { {
									border : "2px solid #e6e8ec" ,
									borderRadius : "12px" ,
									padding : "8px" ,
								} }
								placeholder = { i18n( "Please select" ) }
								optionLabelProp = "label"
							>
								<Select.Option
									label = "Ethereum"
								>
									<OptionNetEthereum />
								</Select.Option>
							</Select>
						</SubTitleWithItem>
					</div>
					<div className = { less.createSBTInfoBox }>
						<SubTitleWithItem
							title = { <p className = { less.subtitleWithSwitch }>
								Revocation by issuer
								<SpaceSwitch type = "secondary" />
							</p> }
						>
							prompt text
						</SubTitleWithItem>
						<SubTitleWithItem title = { i18n( 'Features' ) }>
							<TagsSelect placeholder = { i18n( 'Add Features...' ) } />
						</SubTitleWithItem>
					</div>
					<div className = { less.createSBTFooterBox }>
						<PrimaryBtn
							type = "primary"
							onClick = {() => {
								
							}}
						>Create SBT</PrimaryBtn>
					</div>
				</div>
				{/*右边的preview部分 :*/ }
				<NewSBTPreview/>
			</div>
		</div>
	</>;
} );

import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File/reaxel-DDF';
import { UploadFileBox } from './Upload-Box';
import { reaxel_newSBT } from './reaxel--new-SBT';

import { Img } from '@@common/Xcomponents';
import less from './index.module.less';
import {
	PrimaryInput ,
	PrimaryTextArea ,
} from "@@pages/Test/dxz-input";
import { TagsSelect } from '@@pages/Test/dxz-select';
import { SpaceSwitch } from "@@pages/Test/dxz-switch";
import { PrimaryBtn } from "@@pages/Test/dxz-button";
import {
	Checkbox ,
	Select ,
} from 'antd';
import {
	SVGNetEthereum ,
	SVGSelectArrowIcon ,
} from '@@pages/_SvgComponents/all-SBT-SVG';

export const NewSBTPreview = ComponentWrapper( () => {
	const reax_newSBT = reaxel_newSBT();
	const {
		file ,
		imgPreviewUrl,
	} = reaxel_DDF();
	const {
		createSBT ,
		enum__SBT_type ,
		newSBT_store ,
		setFields ,
	} = reax_newSBT;
	return <>
		<div className = { less.createSBT_right }>
			<span className = { less.createSBTPreviewTitle }>
				<I18n>Preview</I18n>
			</span>
			
			{ file ? <div>
				<Img
					className = { less.SBTPreviewImg }
					src = { imgPreviewUrl }
				/>
				<div className = { less.SBTPreviewName }>
					<I18n>{ newSBT_store.input__SBT_name }</I18n>
				</div>
				<div className = { less.SBTPreviewSpace }>
					<Img
						className = { less.previewSpaceAvatar }
						src = "@@pages/Plugin-SBT-Pad--New/index"
					/>
					<span>SpaceName</span>
				</div>
			</div> : <p className = { less.createSBTPreviewContent }>
				Upload file and choose collection to preview your brand new NFT
			</p> }
		</div>
	</>;
} );
export const SubTitleWithItem = ( props ) => {
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


export const OptionNetEthereum = ComponentWrapper( () => {
	return <>
		<span className = { less.netEthereum }>
			<SVGNetEthereum />
			Ethereum
		</span>
	</>;
} );



export const CreateSBTCheckBox = ( props ) => {
	return <>
		<div className = { less.createSBTCheckBox }>
			<Checkbox>Destruction by issuer</Checkbox>
			<Checkbox>Holder destruction</Checkbox>
			<Checkbox>Destruction of holder's authorization contract</Checkbox>
		</div>
	</>;
};





































