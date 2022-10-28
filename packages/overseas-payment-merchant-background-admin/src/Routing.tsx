

export const Routing = reaxper((props) => {
	return <BrowserRouter>
		<Routes>
			<Route
				path = "login"
				element = { <Login /> }
			/>
			<Route
				path = "*"
				element = { <Layout /> }
			/>

		</Routes>
	</BrowserRouter>;
});


export const MainContentRouting = reaxper(() => {
	
	const { navigate } = toolkits.useRouter();
	const {isLoggedIn,} = reaxel_user_auth();
	if(!isLoggedIn){
		navigate('/login');
		return null;
	}
	return <Routes>
		<Route path = "*">
			
			<Route
				index
				element = { <Navigate to = { '/home' } /> }
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
				path = "order"
				element = { toolkits.withOutlet(<OrderInfo />) }
			/>
			<Route
				path = "payout"
				element = { toolkits.withOutlet(<PayoutManagement />) }
			/>
		</Route>
	</Routes>;
});


import { reaxel_user_auth } from '@@reaxels';
import { Login } from '@@pages/login';
import { UserInfo } from '@@pages/User-Info';
import { HomePage } from '@@pages/home-page';
import { OrderInfo } from '@@pages/order-info';
import { PayoutManagement } from '@@pages/payout-management';
import { Layout } from './Layout';
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
