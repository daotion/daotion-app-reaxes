export const HomePage = reaxper(() => {
	const { message } = antd;

	
	
	return (
		<>
			<OverviewInfo />
			<OrderTypeOverview />
		</>
	
	);
});
export const OrderTypeOverview = reaxper(() =>{
	return(
		<div className={less.orderTypeOverview}>
			<CollectionOverview/>
			<PayoutOverview/>
			<WithdrawOverview/>
		</div>
	)
})
import less from './index.module.less'
import { OverviewInfo, CollectionOverview, PayoutOverview, WithdrawOverview } from '@@pages/--Components--/Overview'
