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
export const SVGNetEthereum = ComponentWrapper( () => {
	return <>
		<svg
			style={{marginRight:"8px"}}
			width = "24"
			height = "24"
			viewBox = "0 0 16 16"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<g clipPath = "url(#clip0_2540_29067)">
				<path
					d = "M0 8C0 3.5816 3.58166 0 8.00014 0C12.4186 0 16.0003 3.5816 16.0003 8C16.0003 12.4184 12.4186 16 8.00014 16C3.58166 16 0 12.4184 0 8Z"
					fill = "#627EEA"
				/>
				<path
					d = "M4 7.7243L8 9.99967V1.33301L4 7.7243Z"
					fill = "white"
				/>
				<path
					opacity = "0.8"
					d = "M8.00041 1.33301L8 9.99967L12 7.75276L8.00041 1.33301Z"
					fill = "#C0CBF6"
				/>
				<path
					d = "M4 8.86426L7.92927 14.4003V11.1859L4 8.86466V8.86426Z"
					fill = "white"
				/>
				<path
					opacity = "0.8"
					d = "M7.92969 11.1859V14.4003L11.8606 8.86426L7.92969 11.1859Z"
					fill = "#C0CBF6"
				/>
				<path
					opacity = "0.6"
					d = "M8.00061 6L4 7.73966L8.00061 10L12 7.73966L8.00061 6Z"
					fill = "#8197EE"
				/>
			</g>
			<defs>
				<clipPath id = "clip0_2540_29067">
					<rect
						width = "16.0003"
						height = "16"
						fill = "white"
					/>
				</clipPath>
			</defs>
		</svg>
	</>;
} );
export const SVGSelectArrowIcon = () => {
	return <>
		<svg
			width = "24"
			height = "24"
			viewBox = "0 0 24 24"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				d = "M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L6.70711 8.29289ZM12 15L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L12 15ZM18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L18.7071 9.70711ZM5.29289 9.70711L11.2929 15.7071L12.7071 14.2929L6.70711 8.29289L5.29289 9.70711ZM12.7071 15.7071L18.7071 9.70711L17.2929 8.29289L11.2929 14.2929L12.7071 15.7071Z"
				fill = "#6F767E"
			/>
		</svg>
	</>;
};
export const SVGCreateSBTPreview=(props)=>{
	return<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V5Z" fill="#6F767E"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M2 19C2 20.6569 3.34315 22 5 22H7C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V19Z" fill="#6F767E"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M22 19C22 20.6569 20.6569 22 19 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V19Z" fill="#6F767E"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M22 5C22 3.34315 20.6569 2 19 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V5Z" fill="#6F767E"/>
		</svg>
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
export const SVGAddNewFeature=(props)=>{
	return<>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.66602 3.33268C8.66602 2.96449 8.36754 2.66602 7.99935 2.66602C7.63116 2.66602 7.33268 2.96449 7.33268 3.33268V7.33268H3.33268C2.96449 7.33268 2.66602 7.63116 2.66602 7.99935C2.66602 8.36754 2.96449 8.66602 3.33268 8.66602H7.33268V12.666C7.33268 13.0342 7.63116 13.3327 7.99935 13.3327C8.36754 13.3327 8.66601 13.0342 8.66601 12.666V8.66602H12.666C13.0342 8.66602 13.3327 8.36754 13.3327 7.99935C13.3327 7.63116 13.0342 7.33268 12.666 7.33268H8.66602V3.33268Z" fill="#9A9FA5"/>
		</svg>
	</>
}
