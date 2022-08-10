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
					<p className={less.accessSomeIntro}>
						每满足一次所有条件将可以领取一个数量SBT,领取不会使这些
						条件的SBT消失，但这些SBT token id将无法再次作为领取条件。
					</p>
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
				<SubTitleWithItem title='Key features'>
					<AddNewSBTFeature/>
				</SubTitleWithItem>
			</div>
			
			<div className={less.createSBTFooterBox}>
				<PrimaryBtn type="primary">Create SBT</PrimaryBtn>  
			</div>
			{/*右边的preview部分*/}
		</div>
		<div className={less.createSBT_right}>
			<div className={less.createSBTPreviewTitle}>
				<span>Preview</span>
				<SVGCreateSBTPreview/>
			</div>
			<div className={less.createSBTPreviewContent}>
				<p>Upload file and choose collection to preview your brand new NFT</p>
			</div>
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
	PrimaryBtn
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
export const SVGUploadFileIcon=()=>{
	return<>
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.7072 9.29099C18.0977 9.68151 18.0977 10.3147 17.7072 10.7052C17.3167 11.0957 16.6835 11.0957 16.293 10.7052L13.502 7.91426V15.0005C13.502 15.5528 13.0543 16.0005 12.502 16.0005C11.9498 16.0005 11.502 15.5528 11.502 15.0005V7.91417L8.70906 10.7072C8.31854 11.0977 7.68537 11.0977 7.29485 10.7072C6.90432 10.3166 6.90432 9.68347 7.29485 9.29294L11.7949 4.79289C11.9824 4.60536 12.2368 4.5 12.502 4.5C12.7672 4.5 13.0216 4.60536 13.2091 4.79289L17.7072 9.29099Z" fill="#1A1D1F"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M4.5 14C5.05228 14 5.5 14.4477 5.5 15V17C5.5 17.5523 5.94772 18 6.5 18H18.5C19.0523 18 19.5 17.5523 19.5 17V15C19.5 14.4477 19.9477 14 20.5 14C21.0523 14 21.5 14.4477 21.5 15V17C21.5 18.6569 20.1569 20 18.5 20H6.5C4.84315 20 3.5 18.6569 3.5 17V15C3.5 14.4477 3.94772 14 4.5 14Z" fill="#1A1D1F"/>
		</svg>
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
export const AddNewSBTFeature=(props)=>{
	return<>
		<div>
			<PrimaryInput type = "primary" style={{width:"306px",marginRight:"12px"}} placeholder={i18n('Value')}/>
			<PrimaryInput type = "primary" style={{width:"306px"}} placeholder={i18n('Value')}/>
			<Button className={less.addNewSBTFeatureBtn}><SVGAddNewFeature/></Button>
		</div>
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

