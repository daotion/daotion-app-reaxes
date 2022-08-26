

export const DxzCreateSBTModal = () => {
	return <>
		<Modal
			visible = { true }
			className = { less.createSBTModal }
			centered
			maskClosable
			closeIcon = { <SVGCloseIcon /> }
			mask = { true }
			width = "448px"
			footer = { null }
			maskStyle = { {
				background: 'rgba(244, 244, 244, 0.8)',
				backdropFilter: "blur(50px)",
			} }
		>
			<h1 className = { less.mainTitle }>
				<I18n>Create SBT</I18n>
			</h1>
			<SBTCreateTemplate 
				icon={<img src={imgBlack} width='40px' height='40px'/>}
				text='Blank template'/>
			
			<h5 className={less.subTitle}>Start from a template</h5>
			<SBTCreateTemplate
				icon={<img src={imgTitle} width='36px' height='36px'/>}
				text='Title template'/>
			
			<SBTCreateTemplate
				icon={<img src={imgWork} width='36px' height='36px'/>}
				text='Work certificate template'/>
			
			<SBTCreateTemplate
				icon={<img src={imgHonor} width='36px' height='36px'/>}
				text='Honorary certificate template'/>
			
			<SBTCreateTemplate
				icon={<img src={imgBussiness} width='36px' height='36px'/>}
				text='Business cooperation template'/>
			
			<SBTCreateTemplate
				icon={<img src={imgEvent} width='36px' height='36px'/>}
				text='Event ticket template'/>
			
			<SBTCreateTemplate
				icon={<img src={imgMember} width='36px' height='36px'/>}
				text='Membership card template'/>
			
		</Modal>
	</>;
};
import less from './index.module.less';
import {Modal ,} from 'antd';
import {SVGCloseIcon,SVGArrowTip} from '@@pages/_SvgComponents';
import { Img } from '@@common/Xcomponents';
import imgBlack from '@@Public/statics/create-new-SBT-template-icon/black-template.png';
import imgTitle from '@@Public/statics/create-new-SBT-template-icon/title-template.png';
import imgWork from '@@Public/statics/create-new-SBT-template-icon/work-template.png';
import imgHonor from '@@Public/statics/create-new-SBT-template-icon/honorary-template.png';
import imgBussiness from '@@Public/statics/create-new-SBT-template-icon/bussiness-template.png';
import imgEvent from '@@Public/statics/create-new-SBT-template-icon/event-template.png';
import imgMember from '@@Public/statics/create-new-SBT-template-icon/member-template.png';

export const SBTCreateTemplate=ComponentWrapper((props)=>{
	return<>
		<div className={less.SBTCreateTemplate}>
			{props.icon}
			<span className={less.SBTTemplateText}>
				{ props.text }
			</span>
			<SVGArrowTip/>
		</div>
	</>
})

