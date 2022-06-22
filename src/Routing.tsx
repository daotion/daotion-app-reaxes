import {
	// BrowserRouter ,
	Route ,
	Routes ,
	BrowserRouter ,
	Navigate ,
} from 'react-router-dom';
import { Test } from '@@pages/Test';
import { ReactTemplate } from '../Public/react-template';
import { DesignComponents } from '@@pages/DesignComponents';
import { Home } from '@@pages/Home';
import { Layout } from './Layout';
import { Sider_DAO_Plugin_List } from '@@pages/Sider-DAO-Plugin_List';
import PluginTokenOverviewLaunch from '@@Public/Plugin-Token-Overview-Launch.component.svg';
import PluginTokenOverview from '@@Public/Plugin-Token-Overview.component.svg';
import PluginCenter from '@@Public/Plugin-Center.component.svg';
import NFTMinting from '@@Public/NFT-Mininting.component.svg';
import {DAOInfo} from '@@pages/DAO-Info';
import {createBrowserHistory} from 'history';


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
				path = "test/*"
				element = { utils.withOutlet( <Test /> ) }
			/>
			
			<Route
				path = "react-template"
				element = { utils.withOutlet( <ReactTemplate /> ) }
			/>
		</Routes>
	</BrowserRouter>;
}

export const SiderPluginListRouting = () => <Routes>
	<Route
		path = "DAO:DAOID/*"
		element = { utils.withOutlet( <Sider_DAO_Plugin_List /> ) }
	/>
</Routes>;

export const MainContentRouting = (props) => <Routes>
	<Route path = "/*">
		<Route
			index
			element = { <Navigate to='/home'/> }
		/>
		<Route
			path="home"
			element = { utils.withOutlet( <Home /> ) }
		/>
		<Route
			path="DAO:DAOID/*"
		>
			<Route 
				index
				element={<Navigate to={'./info'} replace/>}
			/>
			<Route 
				path="info"
				element={<DAOInfo/>}
			/>
		</Route>
		<Route
			path = "plugin-overview-launch"
			
			element = { utils.withOutlet( <div onClick = { () => props.routerProps.navigate('/home/plugin-overview' ) }>
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


// import {PluginTokenOverviewLaunch} from '@@pages/_SvgComponents';
