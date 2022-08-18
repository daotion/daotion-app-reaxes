export const DxzCreateSBT = () => {
	return <>
	<div className={less.createSBTContainer}>
		{/*createSBTContainer分为左右两部分, 左边包括 h1标题 三个信息框 以及底部Create SBT框*/}
		<div className={less.createSBT_left}>
			<h1 className={less.mainTitle}>New SBT</h1>
			<p className={less.someIntro}>
				SBT is based on the ERC721 standardized protocol.
			</p>
			{/*左边的三个create SBT info box,样式相同, 应用一个类名*/}
			<div className={less.createSBTInfoBox}>
				<SubTitleWithItem title='Upload files'>
					<UploadFileBox/>
				</SubTitleWithItem>
				<SubTitleWithItem title='Type'>
					<NewSBTSelectType/>
				</SubTitleWithItem>
				<SubTitleWithItem title='Name'>
					<PrimaryInput type = "primary"/>
				</SubTitleWithItem>
				<SubTitleWithItem title='Description'>
					<PrimaryTextArea type = "primary"/>
				</SubTitleWithItem>
			</div>
			
			
			<div className={less.createSBTInfoBox}>
				<SubTitleWithItem title='SBT access'>
					<NewSBTSelectType/>
				</SubTitleWithItem>
				<SubTitleWithItem title='Hold the upper limit of each user'>
					<PrimaryInput type = "primary"/>
				</SubTitleWithItem>
				<SubTitleWithItem title='Issue quantity'>
					<SubTitleWithItem title={<span>infinite </span>}
						icon={<SpaceSwitch type='primary'/>}>
						<PrimaryInput type = "primary"/>
					</SubTitleWithItem>
				</SubTitleWithItem>
				<SubTitleWithItem title='Network'>
					<NewSBTSelectNetType/>
				</SubTitleWithItem>
			</div>
			<div className={less.createSBTInfoBox}>
				<SubTitleWithItem title='Destruction of rules'>
					<CreateSBTCheckBox/>
				</SubTitleWithItem>
				<SubTitleWithItem title='Features'>
					<PrimaryInput type = "primary"  placeholder={i18n('Add features...')}/>
				</SubTitleWithItem>
			</div>
			<div className={less.createSBTFooterBox}>
				<XButton type="primary">Create SBT</XButton>  
			</div>
		</div>
		{/*右边的preview部分 :*/}
		<div className={less.createSBT_right}>
			<span className = { less.createSBTPreviewTitle }>Preview</span>
			<p className = { less.createSBTPreviewContent }>Upload file and choose collection to preview your brand new NFT</p>
		</div>
	</div>
	</>;
};
import less from './index.module.less';
import {
	PrimaryInput ,
	PrimaryTextArea,
} from "@@pages/Test/dxz-input";
import {
	SpaceSwitch
} from "@@pages/Test/dxz-switch";
import {
	XButton
} from "@@pages/Test/dxz-button";
import {
	Checkbox ,
	Select,
	Button
} from 'antd';
import {
	SVGSelectArrowIcon ,
	SVGAddNewFeature ,
	SVGCreateSBTPreview ,
	SVGNetEthereum,
	SVGUploadFileIcon
} from '@@pages/_SvgComponents/all-SBT-SVG';

export const CreateSBTCheckBox=(props)=>{
	return<>
		<div className={less.createSBTCheckBox}>
			<Checkbox>Destruction by issuer</Checkbox>
			<Checkbox>Holder destruction</Checkbox>
			<Checkbox>Destruction of holder's authorization contract</Checkbox>
		</div>
	</>
}
export const SubTitleWithItem=(props)=>{
	return<>
	<div className={less.subTitleWithItem}>
		<span className={less.subTitle}>
			{props.title}
			{props.icon}
		</span>
		{props.children}
	</div>
	</>
}
export const UploadFileBox=()=>{
	return<>
		<div className={less.uploadFileBox}>
			<div className={less.uploadFile}>
				<SVGUploadFileIcon/>
				<span>Click or drop image</span>
			</div>
		</div>
	</>
}

export const NewSBTSelectType=()=>{
	return<>
		<Select
			suffixIcon = { <SVGSelectArrowIcon /> }
			className = { less.newSBTSelectType }
			dropdownClassName={less.dropDownMenu}
			dropdownStyle={{
				border:"2px solid #e6e8ec",
				borderRadius:"12px",
				padding:"8px",
			}}
			placeholder = { i18n( "Please select" ) }>
			<Select.Option value = "type1">type1</Select.Option>
			<Select.Option value = "type2">type2</Select.Option>
		</Select>
		
	</>
}

export const NewSBTSelectNetType=()=>{
	return<>
		<Select
			suffixIcon = { <SVGSelectArrowIcon /> }
			className = { less.newSBTSelectType }
			dropdownClassName={less.dropDownMenu}
			dropdownStyle={{
				border:"2px solid #e6e8ec",
				borderRadius:"12px",
				padding:"8px",
			}}
			placeholder = { i18n( "Please select" ) }>
			<Select.Option value = "Ethereum"><OptionNetEthereum/></Select.Option>
		</Select>
	</>
}
export const OptionNetEthereum = ComponentWrapper( () => {
	return <>
		<span className={less.netEthereum}>
			<SVGNetEthereum/>
			Ethereum
		</span>
	</>;
} );

