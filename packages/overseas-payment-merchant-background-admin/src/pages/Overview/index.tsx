export const HomePage = reaxper(() =>{
	const reax_overview = reaxel_overview()
	const { current : badge } = useRef(Math.random());
	reax_overview.fetchOverviewInfo(badge)
	return(
		<>
			<OverviewInfo/>
			<OrderTypeOverview/>
		</>
		
	)
})
export const OrderTypeOverview = reaxper(() =>{
	return(
		<div className={less.orderTypeOverview}>
			<PayinOverview/>
			<PayoutOverview/>
			<WithdrawOverview/>
		</div>
	)
})
import less from './index.module.less'
import { reaxel_overview } from '@@reaxels'
import { OverviewInfo, PayinOverview, PayoutOverview, WithdrawOverview } from './components'
