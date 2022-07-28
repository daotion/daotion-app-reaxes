import {
	// BrowserRouter ,
	Route ,
	Routes ,
	BrowserRouter ,
	Navigate ,
} from 'react-router-dom';
import { Test } from '@@pages/Test';

import { DesignComponents } from '@@pages/DesignComponents';
import { Home } from '@@pages/Home';

import { Sider_Space_Plugin_List } from '@@pages/Sider-Space-Plugin_List';
import {SpaceInfo} from '@@pages/Space-Info';
import { SpaceSettings } from '@@pages/Space-Settings';
import { Profile } from '@@pages/Profile';
import {createBrowserHistory} from 'history';
import EditProfile from "@@pages/EditProfile";

import { ReactTemplate } from '../Public/react-template';

import { Layout } from './Layout';


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

			{ __NODE_ENV__ === 'development' &&  <Route
				path = "test/*"
				element = { utils.withOutlet( <Test /> ) }
			/> }

			<Route
				path = "react-template"
				element = { utils.withOutlet( <ReactTemplate /> ) }
			/>
		</Routes>
	</BrowserRouter>;
}

export const SiderPluginListRouting = () => <Routes>
	<Route
		path = "space:spaceID/*"
		element = { utils.withOutlet( <Sider_Space_Plugin_List /> ) }
	/>
</Routes>;

export const MainContentRouting = ( props ) => <Routes>
	<Route path = "/*">
		<Route
			index
			element = { <Navigate to = "/home" replace /> }
		/>
		<Route
			path = "home"
			element = { utils.withOutlet( <Home /> ) }
		/>
		<Route
			path = "profile"
			element = { utils.withOutlet( <Profile /> ) }
		>
			<Route
				path = "edit"
				element = { utils.withOutlet( <EditProfile /> ) }
			/>
		</Route>
		<Route
			path = "space:spaceID/*"
		>
			<Route
				index
				element = { <Navigate
					to = { './info' }
					replace
				/> }
			/>
			<Route
				path = "info"
				element = { <SpaceInfo /> }
			/>
			<Route
				path = "settings"
				element = { <SpaceSettings /> }
			/>
		</Route>
		<Route
			path = "plugin-overview-launch"

			element = { utils.withOutlet( <div onClick = { () => props.routerProps.navigate( '/home/plugin-overview' ) }>
				<>plugin-overview-launch</>
			</div> ) }
		/>
		<Route
			path = "plugin-overview"
			element = { utils.withOutlet( <>PluginTokenOverview</> ) }
		/>
		<Route
			path = "plugin-center"
			element = { utils.withOutlet( <>PluginCenter</> ) }
		/>
		<Route
			path = "nft-minting"
			element = { utils.withOutlet( <>NFTMinting</> ) }
		/>
		<Route
			path = "edit-profile"
			element = { <EditProfile /> }
		/>
	</Route>

</Routes>;


export const ProfileEditRouting = () => <Routes>
	<Route
		path = "/profile/edit"
		element = { utils.withOutlet( <Sider_Space_Plugin_List /> ) }
	/>
</Routes>;

// import {PluginTokenOverviewLaunch} from '@@pages/_SvgComponents';
