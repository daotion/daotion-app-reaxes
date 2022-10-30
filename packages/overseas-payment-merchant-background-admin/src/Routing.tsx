

export const Routing = reaxper((props) => {
	
	return <BrowserRouter>
		<Routes>
			<Route
				path = "login"
				element = { <Login/> }
			/>
			{/*fixme 找到办法匹配到login时阻止渲染Layout*/}
			<Route
				path="*"
				element={<Layout/>}
			/>
		</Routes>
	</BrowserRouter>;
});


export const MainContentRouting = reaxper(() => {
	
	const { navigate } = toolkits.useRouter();
	const {isLoggedIn,} = reaxel_user_auth();
	if(!isLoggedIn){
		return <Navigate to = "/login" />;
	}
	return <Routes>
		<Route path = "*">
			<Route
				index
				element = { <Navigate to = { '/home' } /> }
			/>
			<Route
				path = "order"
				element = { toolkits.withOutlet(<OrderInfo />) }
			/>
			<Route
				path = "home"
				element = { toolkits.withOutlet(<HomePage />) }
			/>
			<Route
				path = "profile"
				element = { toolkits.withOutlet(<UserInfo />) }
			/>
			<Route
				path = "payout"
				element = { toolkits.withOutlet(<PayoutManagement />) }
			/>
		</Route>
	</Routes>;
});


import { reaxel_user_auth } from '@@reaxels';
import { Login } from '@@pages/Login';
import { UserInfo } from '@@pages/User-Info';
import { HomePage } from '@@pages/Home';
import { OrderInfo } from '@@pages/Order-Info';
import { PayoutManagement } from '@@pages/Payout';
import { Layout } from './Layout';
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
