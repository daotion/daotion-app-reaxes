   import less from './index.module.less';
export const DxzSBTSettings=()=>{
	return<>
		<div className={less.SBTSettingsContainer}>
				<h1 className={less.mainTitle}>Settings</h1>
				<p className={less.someIntro}>
					SBT is based on the ERC721 standardized protocol.
				</p>
				<div className={less.SBTSettingsInfo}>
					<div className={less.currentSBTPreview}>
						<p className={less.SBTPreviewSubtitle}>
							Current SBT
						</p>
						<div className={less.SBTPreviewImg}></div>
						<div className={less.SBTName}>SBT Name</div>
						<div className = { less.SBTAddress }>
							<span>
								0xab51...9260
							</span>
							<SVGCopySBT />
						</div>
					</div>
					<div className={less.editSBTSettings}>
						<div className={less.SBTSettingsMainBox}>
							<p className={less.SBTSettingsSubtitle}>
								Settings
							</p>
							<SubTitleWithItem title = "Upload files">
								<UploadFileBox />
							</SubTitleWithItem>
							<SubTitleWithItem title = "Type">
								<NewSBTSelectType />
							</SubTitleWithItem>
							<SubTitleWithItem title = "Description">
								<PrimaryTextArea type = "primary" />
							</SubTitleWithItem>
							<SubTitleWithItem title = "Key Features">
								<PrimaryInput
									type = "primary"
									style = { {
										width : "396px" ,
										marginRight : "12px" ,
									} }
									placeholder = { i18n( 'Value' ) }
								/>
								<PrimaryInput
									type = "primary"
									style = { { width : "396px" } }
									placeholder = { i18n( 'Value' ) }
								/>
								<Button className = { less.addNewSBTFeatureBtn }><SVGAddNewFeature /></Button>
							</SubTitleWithItem>
						</div>
						<div className={less.SBTSettingsFooterBox}>
							<PrimaryBtn type="primary">Save settings</PrimaryBtn>
						</div>
					</div>
				</div>
			
		</div>
	</>
}
   import {
	   PrimaryInput ,
	   PrimaryTextArea,
   } from "@@pages/Test/dxz-input";
   import {
	   PrimaryBtn
   } from "@@pages/Test/dxz-button";
   import {
	   Select,
	   Button
   } from 'antd';
   import {
	   SVGSelectArrowIcon ,
	   SVGAddNewFeature ,
	   SVGNetEthereum,
	   SVGUploadFileIcon,
	   SVGCopySBT,
   } from '@@pages/_SvgComponents/all-SBT-SVG';

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
	

 
