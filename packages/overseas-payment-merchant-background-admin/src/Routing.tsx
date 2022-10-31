

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
				// element = { toolkits.withOutlet(<HomePage />) }
			>
				<Route
					index
					element = { toolkits.withOutlet(<HomePage />) }
				/>
				<Route
					path = "financialDetail"
					element = { toolkits.withOutlet(<FinancialDetails />) }
				/>
			</Route>
			
			{/*<Route*/}
			{/*	path = "home/*"*/}
			{/*>*/}
			{/*	*/}
			{/*</Route>*/}
			<Route
				path = "profile"
				element = { toolkits.withOutlet(<Profile />) }
			/>
			<Route
				path = "payInOrder"
				element = { toolkits.withOutlet(<OrderInfo />) }
			/>
			<Route
				path = "payOutOrder"
				element = { toolkits.withOutlet(<OrderInfo />) }
			/>
			<Route
				path = "payout"
				element = { toolkits.withOutlet(<PayoutManagement />) }
			/>
		</Route>
	</Routes>;
});

export const ProfileRouting = reaxper(() => {
	
	return <Routes>
		<Route
			path="*"
		>
			<Route index element={<Navigate to="base-info"/>}/>
			<Route path="base-info"/>
			<Route path="reset-pwd"/>
			<Route path="API"/>
		</Route>
	</Routes>
})

import { reaxel_user_auth } from '@@reaxels';
import { Login } from '@@pages/Login';
import { Profile } from '@@pages/Profile';
import { HomePage} from '@@pages/Home';
import { FinancialDetails } from '@@pages/Home/financial-details'
import { OrderInfo } from '@@pages/Order-Info';
import { PayoutManagement } from '@@pages/Payout';
import { Layout } from './Layout';
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
