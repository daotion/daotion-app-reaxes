export const WithdrawOverview = reaxper(() => {
	const { overviewInfo } = reaxel_overview();
	const {
		totalMoney = 0 ,
		statusCount = [] ,
	} = overviewInfo.withdrawCount || {};
	const typeCheck = {
		0 : '待审核' ,
		1 : '已拒绝' ,
		2 : '已提现' ,
	};
	return (
		<div className = { less.withdrawOverview }>
			<span className = { less.orderTypeTitle }>
				提现
			</span>
			<div className = { less.totalAmount }>
				<HomePageWithdrawLogo />
				<div className = { less.totalAmountContent }>
					<span className = { less.totalAmountTitle }>
						提现总金额 (R$)
					</span>
					<span>
						{ totalMoney }
					</span>
				</div>
			</div>
			<div className = { less.orderInfo }>
				<span className = { less.dataTitle }>
					提现订单数据
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
import { HomePageWithdrawLogo } from "@@SVGcomponents";
import { OrderInfoListRow } from "../components";

