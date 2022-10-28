import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
import { Login } from '@@pages/Login';
import { UserInfo } from '@@pages/User-Info';
import { HomePage } from '@@pages/Home';
import { OrderInfo } from '@@pages/Order-Info';
import { PayoutManagement } from '@@pages/Payout';
import { Layout } from './Layout';


export const Routing = (props) => {
	return <BrowserRouter>
		<Routes>
			<Route
				path = "login"
				element = { toolkits.withOutlet(<Login />) }
			/>
			<Route
				path = "*"
				element = { toolkits.withOutlet(<Layout />) }
			/>

		</Routes>
	</BrowserRouter>;
};


export const MainContentRouting = reaxper(() => {
	return (
		<Routes>
			<Route path = "*">
				
				<Route
					index
					element={<Navigate to={'/home'}/>}
				/>
				<Route
					path="home"
					element={toolkits.withOutlet(<HomePage/>)}
				/>
				<Route
					path="profile"
					element={toolkits.withOutlet(<UserInfo/>)}
				/>
				<Route
					path="order"
					element={toolkits.withOutlet(<OrderInfo/>)}
				/>
				<Route
					path="payout"
					element={toolkits.withOutlet(<PayoutManagement/>)}
				/>
			</Route>
		</Routes>

	);
})



