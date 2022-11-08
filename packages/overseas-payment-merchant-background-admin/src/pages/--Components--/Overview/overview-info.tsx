

export const OverviewInfo = reaxper(() => {
	
	const { Button } = antd;
	const { navigate } = toolkits.useRouter();
	const { overviewInfo , setstateOverview, fetchOverviewInfo } = reaxel_overview_info();
	const {
		balance = 0 ,
		withdrawingMoney = 0,
	} = overviewInfo;
	const { current : badge } = useRef(Math.random());
	fetchOverviewInfo(badge);
	return (
		<div className = { less.overviewContainer }>
			<span className = { less.overviewTitle }>
				资金总览
			</span>
			<div className = { less.overviewContent }>
				<div className = { less.balanceContainer }>
					<div className = { less.balanceContent }>
						<span className = { less.overviewSubTitle }>
							账户余额（R$）
						</span>
						<span className = { less.balanceAmount }>
							{balance}
						</span>
					</div>
					<Button
						className = { less.checkDetail }
						type = "link"
						onClick = { () => {
							navigate('fin-detail');
						} }
					>
						查看明细
					</Button>
				</div>
				<div className = { less.withdrawContent }>
					<span className = { less.overviewSubTitle }>
						提现处理中
					</span>
					<span className = { less.withdrawingAmount }>
						{withdrawingMoney}
					</span>
				</div>
			</div>
			<div className={less.overviewBtns}>
				<Button
					type="primary">
					充值
				</Button>
				<Button
					type = "primary"
					onClick = { () => {
						setstateOverview({
							withdrawModalShow: true
						})
					} }
				>
					提现
				</Button>
			</div>
			<WithdrawModal/>
		</div>
	);
});

import { reaxel_overview_info } from "@@reaxels";
import { WithdrawModal } from './withdraw-modal'
import less from "@@pages/Overview/index.module.less";
