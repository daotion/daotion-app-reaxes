import {SelectArrowIconSvgComponent} from '@@pages/_SvgComponents';
import PluginSideBar from '@@Public/Plugin-List.component.svg'
import PluginCenterBtn from '@@Public/Plugin-Center-Btn.component.svg';
import {DxzPluginNewview} from '@@pages/Test/dxz-plugin-newview';
import {DxzPluginList} from '@@pages/Test/dxz-plugin-list';


export const Sider_Space_Plugin_List = ComponentWrapper( class extends ReactComponentClass {
	
	
	render() {
		
		const { navigate } = utils.useRouter();
		return <>
			<DxzPluginList/>
		</>;
	}
} );


