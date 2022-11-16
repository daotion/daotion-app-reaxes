
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
	
	return <Routes>
		<Route path = "*">
			<Route
				index
				element = { <Navigate to = { '/overview' } /> }
			/>
			<Route
				path = "overview"
			>
				<Route
					index
					element = { toolkits.withOutlet(<Overview />) }
				/>
				<Route
					path = "fin-detail"
					element = { toolkits.withOutlet(<FinancialDetails />) }
				/>
				<Route
					path = "account-fin-detail"
					element = { toolkits.withOutlet(<FinancialDetails />) }
				/>
				<Route
					path = "service-fin-detail"
					element = { toolkits.withOutlet(<FinancialDetails />) }
				/>
				<Route
					path = "withdraw"
					element = { toolkits.withOutlet(<OverviewWithdraw />) }
				/>
				<Route
					path = "deposit"
					element = { toolkits.withOutlet(<OverviewDeposit />) }
				/>
			</Route>
			{/*商户管理*/}
			<Route
				path="mch-mgnt"
			>
				<Route
					index
					element = { toolkits.withOutlet(< MerchantMgntList/>) }
				/>
				<Route
					path = "detail"
					element = { toolkits.withOutlet(<MerchantMgntDetail />) }
				/>
				<Route
					path = "edit"
					element = { toolkits.withOutlet(<MerchantMgntEdit />) }
				/>
			</Route>
			{/*目前代收订单为多态组件, 已将代付和提现订单功能抽象 */}
			<Route
				path = "payment-order"
				element = { toolkits.withOutlet(<PaymentOrder />) }
			/>
			<Route
				path = "withdrawal-order"
				element = { toolkits.withOutlet(<WithdrawalOrder />) }
			/>
			<Route
				path = "deposit-order"
				element = { toolkits.withOutlet(<DepositOrder />) }
			/>
			<Route
				path = "ops-record"
				element = { toolkits.withOutlet(<OpsRecord />) }
			/>
		</Route>
	</Routes>;
});


import { reaxel_user_auth } from '@@reaxels';
import { Login } from '@@pages/Auth';
import { Overview} from '@@pages/Overview';
import { FinancialDetails } from '@@pages/Fin-Detail'
import { OverviewWithdraw } from '@@pages/Withdraw-Apply'
import { OverviewDeposit } from '@@pages/Deposit-Apply'
import { MerchantMgntList } from '@@pages/Merchant-Mgnt-List';
import { MerchantMgntDetail } from '@@pages/Merchant-Mgnt-Detail';
import { MerchantMgntEdit } from '@@pages/Merchant-Mgnt-Edit';
import { PaymentOrder } from '@@pages/Payment-Order';
import { WithdrawalOrder } from '@@pages/Withdrawal-Order';
import { DepositOrder } from '@@pages/Deposit-Order';
import { OpsRecord } from '@@pages/Ops-Record';
import { Layout } from './Layout';
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
