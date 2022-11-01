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
				// element = { toolkits.withOutlet(<HomePage />) }
			>
				<Route
					index
					element = { toolkits.withOutlet(<HomePage />) }
				/>
				<Route
					path = "fin-detail"
					element = { toolkits.withOutlet(<FinancialDetails />) }
				/>
			</Route>
			
			<Route
				path = "profile/*"
				element = { toolkits.withOutlet(<Profile />) }
			/>
			<Route
				path = "collection-order"
				element = { toolkits.withOutlet(<CollectionOrder />) }
			/>
			{/*目前代收订单为多态组件, 已将代付和提现订单功能抽象 */}
			<Route
				path = "payment-order"
				element = { toolkits.withOutlet(<PaymentOrder />) }
			/>
			<Route
				path = "withdrawal-order"
				element = { toolkits.withOutlet(<WithDrawalOrder />) }
			/>
			<Route
				path = "payment-mgnt"
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
import { WithDrawalOrder } from '@@pages/Withdrawal-Order';
import { PaymentOrder } from '@@pages/Payment-Order';
import { PayoutManagement } from '@@pages/Payment-Mgnt';
import { Layout } from './Layout';
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
