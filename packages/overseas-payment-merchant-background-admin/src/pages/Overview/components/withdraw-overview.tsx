export const WithdrawOverview = reaxper(() => {
	const {
		fetchOrderCount ,
		get_enum_order_list_map,
		get_overview_duration_type,
		withdrawOrder
	} = reaxel_overview_order_info();
	const {
		info : {
			totalMoney = 0 ,
			statusCount = [],
		},
		duration = 0
	} = withdrawOrder || {};
	const orderType = get_enum_order_list_map('withdrawal-order');
	const durationBtnArr = get_overview_duration_type().map(i => (
		{
			label: i.label,
			value: i.duration
		}
	));
	const { Radio } = antd;
	return (
		<div className = { less.withdrawOverview }>
			<div className = { less.orderTypeTitle }>
				<span>代收</span>
				<Radio.Group
					options={durationBtnArr}
					onChange={(e) => {
						fetchOrderCount('withdrawOrder', e.target.value)
					}}
					value={duration}
					optionType="button"
				/>
			</div>
			<div className = { less.totalAmount }>
				<SVGOverviewWithdrawIcon />
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
								key = { orderType[index].status }
								orderType = { orderType[index].label }
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

import {
	reaxel_overview_info ,
	reaxel_overview_order_info,
} from "@@reaxels";
import less from "@@pages/Overview/index.module.less";
import { SVGOverviewWithdrawIcon } from "@@SVGcomponents";
import { OrderInfoListRow } from "../components";

