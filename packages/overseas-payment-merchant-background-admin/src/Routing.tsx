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
				path = "home"
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
			
			<Route
				path = "profile/*"
				element = { toolkits.withOutlet(<Profile />) }
			/>
			<Route
				path = "payInOrder"
				element = { toolkits.withOutlet(<CollectionOrder />) }
			/>
			<Route
				path = "payOutOrder"
				element = { toolkits.withOutlet(<CollectionOrder />) }
			/>
			<Route
				path = "withDrawOrder"
				element = { toolkits.withOutlet(<CollectionOrder />) }
			/>
			<Route
				path= "payout"
			>
				<Route
					index
					element = { toolkits.withOutlet(<PayoutManagement />) }
				/>
				<Route
					path = "addPayout"
					element = { toolkits.withOutlet(<AddPayout />) }
				/>
			</Route>
		</Route>
	</Routes>;
});

export const ProfileRouting = reaxper(() => {
	
	return <Routes>
		<Route
			path="*"
		>
			<Route index element={<Navigate to="base-info"/>}/>
			<Route path="base-info" element={<ProfileInfo/>}/>
			<Route path="reset-pwd" element={<ResetPwd/>}/>
			<Route path="API" element={<ProfileApi/>}/>
		</Route>
	</Routes>
})

import { reaxel_user_auth } from '@@reaxels';
import {
	ProfileInfo ,
	ResetPwd,
	ProfileApi ,
} from '@@pages/Profile';
import { Login } from '@@pages/Login';
import { Profile } from '@@pages/Profile';
import { HomePage} from '@@pages/Home';
import { FinancialDetails } from '@@pages/Home/financial-details'
import { CollectionOrder } from '@@pages/Collection-Order';
import { PayoutManagement } from '@@pages/Payout';
import { Layout } from './Layout';
import { AddPayout } from "@@pages/Payout/add-payout";
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
