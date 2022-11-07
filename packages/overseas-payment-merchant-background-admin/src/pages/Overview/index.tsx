export const HomePage = reaxper(() => {
	const { message } = antd;
	const reax_overview = reaxel_overview_info();
	const { current : badge } = useRef(Math.random());
	reax_overview.fetchOverviewInfo(badge).catch((e) => {
		message.error(e)
	});
	const { fetchOrderCountClosure } = reaxel_overview_order_info();
	
	useEffect(() => {
		fetchOrderCountClosure('payoutOrder' , 0);
		fetchOrderCountClosure('collectionOrder' , 0);
		fetchOrderCountClosure('withdrawOrder' , 0);
		fetchOrderCountClosure('depositOrder' , 0);
	} , []);
	
	
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
import { reaxel_overview_info, reaxel_overview_order_info } from '@@reaxels'
import { OverviewInfo, CollectionOverview, PayoutOverview, WithdrawOverview } from './components'
