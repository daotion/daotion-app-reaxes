import {
	Button ,
} from 'antd';
import {
	BrowserRouter ,
	Route ,
	Routes ,
	Outlet ,
	Link ,
	useParams,
	matchPath,
	matchRoutes,
	UNSAFE_RouteContext as RouteContext ,
} from 'react-router-dom';
import { Test } from '@@pages/Test';
import { Navigation} from '@@utils';
import { ReactTemplate } from '../Public/react-template';
import { DesignComponents } from '@@pages/DesignComponents';
import {Wallet} from '@@pages/Wallet-logic';
import { Home } from '@@pages/Home';
import { DaoInfo } from '@@pages/DAO-Info';
import { Layout } from './Layout';
import { Sider_DAO_Plugin_List } from '@@pages/Sider-DAO-Plugin_List';

export const Routing = ( props ) => {
	
	
	return <BrowserRouter>
		<Routes>
			<Route
				path = "/*"
				element = { utils.withOutlet(<Layout/>) }
			/>
			<Route
				path = "DesignComponents/*"
				element = { utils.withOutlet( <DesignComponents /> ) }
			/>
			
			<Route
				path = "test"
				element = { utils.withOutlet( <Test /> ) }
			/>
			
			<Route
				path = "react-template"
				element = { utils.withOutlet( <ReactTemplate /> ) }
			/>
		</Routes>
		<Navigation />
	</BrowserRouter>;
}

export const SiderPluginListRouting = () => <Routes>
	<Route
		path = "DAO:DAOID"
		element = { utils.withOutlet( <Sider_DAO_Plugin_List /> ) }
	/>
</Routes>;

export const MainContentRouting = () => <Routes>
	<Route path = "/*">
		<Route
			index
			element = { React.createElement(() => utils.navigateTo('/home')) }
		/>
		<Route
			path="home"
			element = { utils.withOutlet( <Home /> ) }
		/>
		<Route
			path="DAO:DAOID"
		>
			<Route 
				index
				element={utils.withRouter((params) => {
					
					utils.navigateTo(`/DAO${params.DAOID}/info`);
					return null;
				})}
			/>
			<Route 
				path="info"
				element={utils.withRouter((params) => <>/DAO:{params.DAOID}/info</>)}
			/>
		</Route>
		<Route
			path = "plugin-overview-launch"
			element = { utils.withOutlet( <div onClick = { () => utils.navigateTo( '/home/plugin-overview' ) }>
				<PluginTokenOverviewLaunch />
			</div> ) }
		/>
		<Route
			path = "plugin-overview"
			element = { utils.withOutlet( <PluginTokenOverview /> ) }
		/>
		<Route
			path = "plugin-center"
			element = { utils.withOutlet( <PluginCenter /> ) }
		/>
		<Route
			path = "nft-minting"
			element = { utils.withOutlet( <NFTMinting /> ) }
		/>
	</Route>

</Routes>;

	
	
import PluginTokenOverviewLaunch from '@@Public/Plugin-Token-Overview-Launch.component.svg';
import PluginTokenOverview from '@@Public/Plugin-Token-Overview.component.svg';
import PluginCenter from '@@Public/Plugin-Center.component.svg';
import NFTMinting from '@@Public/NFT-Mininting.component.svg';
// import {PluginTokenOverviewLaunch} from '@@pages/_SvgComponents';
