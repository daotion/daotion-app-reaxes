export const PayoutOverview = reaxper(() => {
	const { overviewInfo } = reaxel_overview();
	const {
		totalMoney = 0 ,
		statusCount = [] ,
	} = overviewInfo.payOutCount || {};
	const typeCheck = {
		0 : '待审核' ,
		1 : '已拒绝' ,
		2 : '待支付' ,
		3 : '支付失败' ,
		4 : '已支付' ,
	};
	return (
		<div className = { less.payoutOverview }>
			<span className = { less.orderTypeTitle }>
				代付
			</span>
			<div className = { less.totalAmount }>
				<SVGOverviewPayoutIcon />
				<div className = { less.totalAmountContent }>
					<span className = { less.totalAmountTitle }>
						代付总金额 (R$)
					</span>
					<span>
						{ totalMoney }
					</span>
				</div>
			</div>
			<div className = { less.orderInfo }>
				<span className = { less.dataTitle }>
					代付订单数据
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
import { SVGOverviewPayoutIcon } from "@@SVGcomponents";
import { OrderInfoListRow } from "../components";