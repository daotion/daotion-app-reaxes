export const PayinOverview = reaxper(() => {
	const { overviewInfo } = reaxel_overview();
	const {
		totalMoney = 0 ,
		statusCount = [] ,
	} = overviewInfo.payInCount || {};
	const typeCheck = {
		0 : '待支付' ,
		1 : '已取消' ,
		2 : '支付失败' ,
		3 : '已支付' ,
	};
	return (
		<div className = { less.payinOverview }>
			<span className = { less.orderTypeTitle }>
				代收
			</span>
			<div className = { less.totalAmount }>
				<HomePagePayinlogo />
				<div className = { less.totalAmountContent }>
					<span className = { less.totalAmountTitle }>
						代收总金额 (R$)
					</span>
					<span>
						{ totalMoney }
					</span>
				</div>
			</div>
			<div className = { less.orderInfo }>
				<span className = { less.dataTitle }>
					代收订单数据
				</span>
				
				<div className = { less.orderInfoList }>
					{ statusCount.map((i , index) => {
						return (
							<OrderInfoListRow
								key = { typeCheck[index] }
								orderType = { typeCheck[index] }
								amount = { i.orderMoney }
								orderAmount = { i.orderNum + '笔' }
							/>
						);
					}) }
				</div>
			</div>
		</div>
	);
});
import { reaxel_overview } from "@@reaxels";
import less from "@@pages/Overview/index.module.less";
import { HomePagePayinlogo } from "@@SVGcomponents";
import { OrderInfoListRow } from "../components";