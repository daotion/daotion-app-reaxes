export const WithdrawModal = reaxper(() =>{
	const {
		setstateOverview ,
		overviewInfo ,
		withdrawModalShow ,
		withdrawApplyMoney,
		withdrawApply
	} = reaxel_overview_info();
	const { balance } = overviewInfo;
	const { Button , Input , Modal, message } = antd;
	const { navigate } = toolkits.useRouter();
	return (
		<Modal
			visible = { withdrawModalShow }
			footer = { null }
			closable = { false }
			width = { 380 }
			title = "提现"
		>
			<div className = { less.windowContent }>
				<div className = { less.withdrawAmount }>
					<span>提取到账金额</span>
					<Input
						value={withdrawApplyMoney}
						onChange={(e) => {
							const money = +e.target.value;
							if (money > balance) {
								message.error('余额不足')
							} else {
								setstateOverview({
									withdrawApplyMoney: money
								})
							}
						}}
					/>
					<span>
						最大可到账金额：R${balance}
						<span
							className = { less.withdrawBtn }
							onClick={() => {
								setstateOverview({
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
							if (withdrawApplyMoney < 1) {
								message.error('提现金额不能为空');
							} else if(!overviewInfo.address ) {
								message.error('请先设置地址');
								
							} else {
								withdrawApply()
							}
						} }
					>
						提交
					</Button>
					<Button
						onClick = { () => {
							setstateOverview({
								withdrawModalShow : false,
							});
						} }
					>
						取消
					</Button>
				</div>
			</div>
		</Modal>
	
	);
})

import { reaxel_overview_info } from "@@reaxels";
import less from "@@pages/Overview/index.module.less";
