
export const OverviewWithdraw = reaxper(() => {
	const {withdrawStore, overviewInfo, withdrawApply, withdrawSetState  } = reaxel_overview_info();
	const { balance } = overviewInfo;
	const { withdrawApplyMoney} = withdrawStore;
	const { navigate } = toolkits.useRouter()
	const { message, Input, Button } = antd;
	return (
		<div className={less.withdrawContainer}>
			<div className = { less.windowContent }>
				<span className={less.title}>
					提现
				</span>
				<div className = { less.withdrawAmount }>
					<span>提现金额</span>
					<Input
						value={withdrawApplyMoney}
						onChange={(e) => {
							withdrawSetState({
								withdrawApplyMoney: e.target.value
							})
						}}
					/>
					<span className={less.maxWithdrawAmount}>
						最大可到账金额：R${balance}
						<span
							className = { less.withdrawBtn }
							onClick={() => {
								withdrawSetState({
									withdrawApplyMoney: balance
								})
							}}
						>
							全部提现
						</span>
					</span>
				</div>
				<div className = { less.address }>
					<span>接收USDT地址(TRC-20)</span>
					<span
						className={(overviewInfo.address === '') ? less.setBtn : ''}
						onClick={() => {
							if (overviewInfo.address) return
							navigate('/profile/API')
						}}
					>
						{ overviewInfo.address === '' ? '前往设置' : overviewInfo.address}
					</span>
				</div>
				<div className = { less.btn }>
					<Button
						type = "primary"
						onClick = { () => {
							if (withdrawApplyMoney === '') {
								message.error('提现金额不能为空');
							} else if(!overviewInfo.address ) {
								message.error('请先设置地址');
								
							} else {
								withdrawApply().then((res) => {
									if (res.result === 0) {
										message.success('申请成功');
										withdrawSetState({
											withdrawApplyMoney: ''
										})
									} else {
										message.error('余额不足');
									}
									
								}).catch((e) => {
									message.error('申请失败' + e)
								})
							}
						} }
					>
						提交
					</Button>
					<Button
						onClick = { () => {
							navigate('/overview')
						}}
					>
						取消
					</Button>
				</div>
			</div>
			
		</div>
	)
});
import less from "./index.module.less";
import { reaxel_overview_info } from "@@reaxels";

