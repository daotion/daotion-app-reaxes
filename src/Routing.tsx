import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
import { Test } from '@@pages/Test';
import { Home } from '@@pages/Home';
import { Sider_Space_Plugin_List } from '@@pages/Sider-Space-Plugin_List';
import { SpaceInfo } from '@@pages/Space-Info';
import { SpaceSettings } from '@@pages/Space-Settings';
import { Profile } from '@@pages/Profile';
import { NewSBT } from '@@pages/Plugin-SBT-Pad--New';
import { EditProfile } from "@@pages/Edit-Profile";
import { PluginSBTPadList } from '@@pages/Plugin-SBT-Pad-List';
import { ReactTemplate } from '@@RootPath/Public/react-template';
import {
	DesignComponents ,
	SvgOverview,
} from '@@pages/DesignComponents';

import { Layout } from '@@RootPath/src/Layout';

export const Routing = (props) => {
	return <BrowserRouter>
		<Routes>
			<Route
				path = "/*"
				element = { utils.withOutlet(<Layout />) }
			/>
			<Route
				path = "design/*"
				element = { utils.withOutlet(<DesignComponentsRouting />) }
			/>
			
			{ __NODE_ENV__ === 'development' && <Route
				path = "test/*"
				element = { utils.withOutlet(<Test />) }
			/> }
			
			<Route
				path = "react-template"
				element = { utils.withOutlet(<ReactTemplate />) }
			/>
		</Routes>
	</BrowserRouter>;
};

export const SiderPluginListRouting = () => <Routes>
	<Route
		path = "space:spaceID/*"
		element = { utils.withOutlet(<Sider_Space_Plugin_List />) }
	/>
</Routes>;

export const MainContentRouting = (props) => <Routes>
	<Route path = "/*">
		<Route
			index
			element = { <Navigate
				to = "/home"
				replace
			/> }
		/>
		<Route
			path = "home"
			element = { utils.withOutlet(<Home />) }
		/>
		<Route
			path = "profile"
		>
			<Route
				index
				element = { utils.withOutlet(<Profile />) }
			/>
			<Route
				path = "edit"
				element = { utils.withOutlet(<EditProfile />) }
			/>
			<Route
				path = ":address"
				element = { utils.withOutlet(<Profile />) }
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
				path = "sbt-pad"
			>
				<Route
					index
					element = { <>
						<PluginSBTPadList />
					</> }
				/>
				<Route
					path = "new"
					element = { <NewSBT /> }
				/>
			</Route>
			<Route
				path = "sbt-fusion"
				element = { <>SBT Fusion</> }
			/>
			<Route
				path = "settings"
				element = { <SpaceSettings /> }
			/>
		</Route>
	</Route>
</Routes>;

export const DesignComponentsRouting = () => <Routes>
	<Route
		index
		element={<DesignComponents/>}
	/>
	<Route
		path='svg-overview'
		element={<SvgOverview/>}
	/>
	<Route
		path='reaxes-template'
		element={<ReactTemplate/>}
	/>
</Routes>;
