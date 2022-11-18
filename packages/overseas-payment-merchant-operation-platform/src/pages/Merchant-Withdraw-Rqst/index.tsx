export const Mch_Withdraw_Rqst = reaxper(() => {
	return <div>
		<WithdrawModal/>
	
	</div>;
});

export const WithdrawModal = reaxper(() => {
	
	const { Modal , Button , Input } = antd;
	
	return (
		<Modal
			title = { '确认提现信息' }
			visible
			closable = { false }
			footer = { null }
			width = { 380 }
			className = { less.withdrawModal }
		>
			<div className = { less.contentContainer }>
				<span className = { less.withdrawAmount }>商户提现金额</span>
				<span className = { less.number }>
					<span className = { less.unit }>R$</span>
					500,000
				</span>
				<span className = { less.formInput }>转出USDT（TRC-20）</span>
				<Input />
				<Button type = "primary">提交</Button>
				<Button type = "default">取消</Button>
			</div>
		</Modal>
	);
});

import less from './index.module.less';
