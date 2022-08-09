export const DxzCreateSBT = () => {
	return <>
	<div className={less.createSBTContainer}>
		<div className={less.createSBT_left}>
			<h1 className={less.mainTitle}>New SBT</h1>
			<p className={less.someIntro}>SBT is based on the ERC721 standardized protocol.</p>
			<div className="create-SBT-info-box-first"></div>
		</div>
		<div className={less.createSBT_right}></div>
		
	</div>
	</>;
};
import less from './index.module.less';
import {
	PrimaryInput ,
	PrimaryTextArea,
} from "@@pages/Test/dxz-input";
import { Checkbox ,Select} from 'antd';
const SVGSelectArrowIcon = () => {
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
