
export const Routing = reaxper((props) => {
	
	return <BrowserRouter>
		<Routes>
			<Route
				path = "login"
				element = { <Login/> }
			/>
			<Route
				path = 'test'
				element={<TestRender/>}
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
			
			<Route
				path = "profile/*"
				element = { toolkits.withOutlet(<Profile />) }
			/>
			<Route
				path = "collection-order"
				element = { toolkits.withOutlet(<CollectionOrder />) }
			/>
			{/*商户提现申请*/}
			<Route
				path = "mch-withdraw-rqst"
				element = { toolkits.withOutlet(<Mch_Withdraw_Rqst />) }
			/>
			{/*商户充值申请*/}
			<Route
				path = "mch-deposit-rqst"
				element = { toolkits.withOutlet(<Mch_Desposit_Rqst />) }
			/>
			<Route
				path="mch-mgnt"
			>
				<Route
					index
					element = { toolkits.withOutlet(< MerchantMgntList/>) }
				/>
				<Route
					path = "mech-mgnt-detail"
					element = { toolkits.withOutlet(<MerchantMgntDetail />) }
				/>
				<Route
					path = "mech-mgnt-edit"
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
			<Route
				path= "payment-mgnt/*"
			>
				<Route
					index
					element = { toolkits.withOutlet(<PayoutManagement />) }
				/>
				<Route
					path = "new-payment"
					element = { toolkits.withOutlet(<NewPayment />) }
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
	ResetPwd ,
	ProfileInfo ,
	ProfileApi,
} from '@@pages/Profile/components';
import { Login } from '@@pages/Auth';
import { Profile } from '@@pages/Profile';
import { Overview} from '@@pages/Overview';
import { FinancialDetails } from '@@pages/Fin-Detail';
import { OverviewWithdraw } from '@@pages/Withdraw-Apply';
import { OverviewDeposit } from '@@pages/Deposit-Apply';
import { CollectionOrder } from '@@pages/Collection-Order';
import { MerchantMgntList } from '@@pages/Merchant-Mgnt-List';
import { MerchantMgntDetail } from '@@pages/Merchant-Mgnt-Detail';
import { MerchantMgntEdit } from '@@pages/Merchant-Mgnt-Edit';
import { Mch_Desposit_Rqst } from '@@pages/Merchant-Deposit-Rqst';
import { Mch_Withdraw_Rqst } from '@@pages/Merchant-Withdraw-Rqst';
import { PaymentOrder } from '@@pages/Payment-Order';
import { WithdrawalOrder } from '@@pages/Withdrawal-Order';
import { DepositOrder } from '@@pages/Deposit-Order';
import { OpsRecord } from '@@pages/Ops-Record';
import { PayoutManagement } from '@@pages/Payment-Mgnt';
import { Layout } from './Layout';
import { NewPayment } from "@@pages/--Components--/New-Payment";
import { TestRender } from '@@pages/test';
import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';

