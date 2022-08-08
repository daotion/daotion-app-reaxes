import less from './index.module.less';


export const DxzPluginList = () => {
	return <>
		<aside className={less.pluginAsideContainer}>
			<div className={less.pluginAsideTop}>
				<SVGPluginSpaceIcon/>
				<span className={less.pluginAsideSpaceName}>SpaceName</span>
				<SVGPluginDropDownIcon/>
			</div>
			<div className={less.pluginAsideList}>
				<PluginAsideItem text = "Overview" icon={<SVGPluginOverviewIcon/>}></PluginAsideItem>
				<PluginAsideItem text = "NFT" icon={<SVGPluginNFTIcon/>}></PluginAsideItem>
				<PluginAsideItem text = "SRM" icon={<SVGPluginSRMIcon/>}></PluginAsideItem>
				<PluginAsideItem text = "Voting" icon={<SVGPluginVotingIcon/>}></PluginAsideItem>
			</div>
			{/*<div className={less.pluginAsideBottom}>*/}
			{/*	<Button className = {less.pluginCenterBtn}>*/}
			{/*			<I18n>Plugin Center</I18n>*/}
			{/*	</Button>*/}
			{/*</div>*/}
		</aside>
	</>;
};

const { Button } = antd;
const PluginAsideItem = ( props ) => {
	return <>
		<div className = { less.pluginAsideItem }>
			{ props.icon }
			<p>
				{ props.text }
			</p>
		</div>
	</>;
};
import {
	SVGPluginVotingIcon ,
	SVGPluginSRMIcon ,
	SVGPluginSpaceIcon ,
	SVGPluginOverviewIcon ,
	SVGPluginNFTIcon ,
	SVGPluginDropDownIcon,
} from '@@pages/_SvgComponents/left-plugin-list';
