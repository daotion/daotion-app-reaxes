import less from './index.module.less';
import {
	Switch ,
	Input ,
} from 'antd';
import {
	SVGSpaceProfileSetting ,
	SVGLeaveSpace,
} from '@@pages/_SvgComponents/Space-dropdown-pop-svg';

export const DxzDAODropdownPop = () => {
	return <>
		<div
			className = { less.container }
		>
			<PopupLi text = "Space Profile">
				<SVGSpaceProfileSetting />
			</PopupLi>
			<PopupLi text = "Mute Notification">
				<Switch className={less.popSwitch}/>
			</PopupLi>
			<div className={less.divider}></div>
			<PopupLi text = "Leave Space">
				<SVGLeaveSpace />
			</PopupLi>
		</div>
	</>;
};
const PopupLi = ( props ) => {
	return <>
		<div
			className = { less.popList }
		>
			<p>{ props.text }
			</p>
			{ props.children }
		</div>
	</>;
};
