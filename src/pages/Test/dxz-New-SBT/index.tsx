export const DxzCreateSBT = ComponentWrapper(() => {
	return <>
		<div className = { less.createSBTContainer }>
			{/*createSBTContainer分为左右两部分, 左边包括 h1标题 三个信息框 以及底部Create SBT框*/ }
			<div className = { less.createSBT_left }>
				<h1 className = { less.mainTitle }>New SBT</h1>
				<p className = { less.someIntro }>
					SBT is based on the ERC721 standardized protocol.
				</p>
				{/*左边的三个create SBT info box,样式相同, 应用一个类名*/ }
				<div className = { less.createSBTInfoBox }>
					<SubTitleWithItem title = "Upload files">
						<UploadFileBox />
					</SubTitleWithItem>
					<SubTitleWithItem title = "Type">
						<NewSBTSelectType />
					</SubTitleWithItem>
					<SubTitleWithItem title = "Name">
						<PrimaryInput type = "primary" />
					</SubTitleWithItem>
					<SubTitleWithItem title = "Description">
						<PrimaryTextArea type = "primary" />
					</SubTitleWithItem>
				</div>
				
				
				<div className = { less.createSBTInfoBox }>
					<SubTitleWithItem title = "SBT access">
						<NewSBTSelectType />
					</SubTitleWithItem>
					<SubTitleWithItem title = "Hold the upper limit of each user">
						<PrimaryInput type = "primary" />
					</SubTitleWithItem>
					<SubTitleWithItem title = "Issue quantity">
						<SubTitleWithItem
							title = { <span>infinite </span> }
							icon = { <SpaceSwitch type = "primary" /> }
						>
							<PrimaryInput type = "primary" />
						</SubTitleWithItem>
					</SubTitleWithItem>
					<SubTitleWithItem title = "Network">
						<NewSBTSelectNetType />
					</SubTitleWithItem>
				</div>
				<div className = { less.createSBTInfoBox }>
					<SubTitleWithItem title = "Destruction of rules">
						<CreateSBTCheckBox />
					</SubTitleWithItem>
					<SubTitleWithItem title = "Features">
						{/*<PrimaryInput
							type = "primary"
							placeholder = { i18n( 'Add features...' ) }
						/>*/}
						
						<MultipleSelect
							type="primary"
							mode="tags"
							allowClear={false}
							showArrow={false}
						/>
					</SubTitleWithItem>
				</div>
				<div className = { less.createSBTFooterBox }>
					<PrimaryBtn type = "primary">Create SBT</PrimaryBtn>
				</div>
			</div>
			{/*右边的preview部分 :*/ }
			<div className = { less.createSBT_right }>
				<span className = { less.createSBTPreviewTitle }>Preview</span>
				<p className = { less.createSBTPreviewContent }>Upload file and choose collection to preview your brand new NFT</p>
			</div>
		</div>
	</>;
});

import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File';


import less from './index.module.less';
import {
	PrimaryInput ,
	PrimaryTextArea ,
} from "@@pages/Test/dxz-input";
import {
	SpaceSwitch,
} from "@@pages/Test/dxz-switch";
import {
	PrimaryBtn,
} from "@@pages/Test/dxz-button";
import {
	MultipleSelect,
} from '@@pages/Test/dxz-select';
import {
	Checkbox ,
	Select ,
	Button,
} from 'antd';
import {
	SVGSelectArrowIcon ,
	SVGAddNewFeature ,
	SVGCreateSBTPreview ,
	SVGNetEthereum ,
	SVGUploadFileIcon,
} from '@@pages/_SvgComponents/all-SBT-SVG';


export const CreateSBTCheckBox = ( props ) => {
	return <>
		<div className = { less.createSBTCheckBox }>
			<Checkbox>Destruction by issuer</Checkbox>
			<Checkbox>Holder destruction</Checkbox>
			<Checkbox>Destruction of holder's authorization contract</Checkbox>
		</div>
	</>;
};
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


export const UploadFileBox = ComponentWrapper(() => {
	const fileRef = useRef<HTMLInputElement>();
	const onUpload = async (file) => {
		console.log( file );
	};
	const {
		containerEventHandler ,
		dragging ,
		imgPreviewUrl ,
		inputFileEventHandler ,
		file ,
		clearFile,
	} = reaxel_DDF( {
		onUpload ,
		// preventClickUpload : true,
	} );
	
	const fillingContent = <>
		<SVGClose
			onClick = { ( e ) => {
				clearFile();
			} }
			style = { {
				position : 'absolute' ,
				right : '7px' ,
				top : '7px' ,
				zIndex : 1 ,
			} }
		/>
		
		
		<div
			className = { less.uploadFileFilling }
			onClick = { () => {
				fileRef.current.click();
			} }
			style = { {
				justifyContent : "center" ,
				alignItems : "center" ,
				backgroundImage : `url(${ imgPreviewUrl })` ,
			} }
		>
			<div
				style = { {
					position : "absolute" ,
					width : "calc(100% - 48px)" ,
					height : "calc(100% - 48px)" ,
					left : "24px" ,
					top : "24px" ,
					backgroundSize: '100%',
					backdropFilter : "blur(20px)",
					background : "rgba(255, 255, 255, 0.2)",
					display : "flex",
					justifyContent : "center",
					alignItems : "center",
				} }
			>
				<div
					className = { less.uploadFileFillingButton }
					style = { {
						display : "flex" ,
						justifyContent : "center" ,
						alignItems : "center" ,
						zIndex : '0' ,
						fontWeight : '700' ,
						fontSize : '15px' ,
						flexDirection : 'row' ,
						padding : '12px 20px' ,
						width : 'fit-content' ,
						height : '48px' ,
						background : '#fcfcfc' ,
						border : '2px solid #efefef' ,
						boxShadow : '0px 0px 36px 2px rgba(0, 0, 0, 0.04)' ,
						borderRadius : '12px' ,
					} }
				>
					<SVGUploadFileIcon />
					<span>Click or drop image</span>
				</div>
			</div>
		
		</div>
	
	</>;
	
	const emptyContent = <>
		{dragging ? null : <div
			className = { less.uploadFile }
			onClick={() => {
				fileRef.current.click();
			}}
		>
			<SVGUploadFileIcon />
			<span>Click or drop image</span>
		</div>}
	</>;
	
	return <>
		<div
			className = { file ? less.uploadFileContainerFilling : less.uploadFileContainerEmpty }
			style = { {
				transform : 'translateX(0)' ,
				padding : "24px" ,
			} }
			{ ...containerEventHandler }
		>
			<div
				style = { {
					width : 'calc(100% - 48px)' ,
					height : 'calc(100% - 48px)' ,
					left : "24px" ,
					top : "24px" ,
					position : "absolute" ,
					backgroundImage : `url('${ imgPreviewUrl }')` ,
					backgroundPosition : "center" ,
					backgroundRepeat : "no-repeat" ,
					backgroundSize : "100%" ,
				} }
			/>
			<input
				ref = { fileRef }
				type = "file"
				title = ""
				style = { {
					width : '100%' ,
					height : '100%' ,
					opacity : '0' ,
					position : "absolute" ,
					zIndex : 1 ,
				} }
				{ ...inputFileEventHandler }
			/>
			{ file ? fillingContent : emptyContent }
		</div>
	</>;
});

export const NewSBTSelectType = () => {
	return <>
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
	
	</>;
};

export const NewSBTSelectNetType = () => {
	return <>
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
			<Select.Option value = "Ethereum">
				<OptionNetEthereum />
			</Select.Option>
		</Select>
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



export const SVGClose = (props:{
	style?:React.CSSProperties,
	onClick? : React.MouseEventHandler<SVGElement>
}) => {
	
	return <>
		<svg
			onClick = { props.onClick }
			style = { props.style }
			width = "40"
			height = "40"
			viewBox = "0 0 40 40"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<rect
				x = "1"
				y = "1"
				width = "38"
				height = "38"
				rx = "19"
				fill = "white"
			/>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z"
				fill = "#23262F"
			/>
			<rect
				x = "1"
				y = "1"
				width = "38"
				height = "38"
				rx = "19"
				stroke = "#E6E8EC"
				strokeWidth = "2"
			/>
		</svg>
	</>;
};
