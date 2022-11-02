export const HomePage = reaxper(() =>{
	const reax_overview = reaxel_overview()
	const badge = useRef(Math.random());
	reax_overview.fetchOverviewInfo(badge)
	return(
		<>
			<Overview/>
			<OrderTypeOverview/>
			<WithdrawWindow/>
		</>
		
	)
})

export const Overview = reaxper(() => {
	
	const { Button } = antd;
	const { navigate } = toolkits.useRouter();
	const { overviewInfo , setstateOverview } = reaxel_overview();
	const {
		balance = 0 ,
		withdrawingMoney = 0,
	} = overviewInfo;

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
	);
});

export const OrderTypeOverview = reaxper(() =>{
	return(
		<div className={less.orderTypeOverview}>
			<PayinOverview/>
			<PayoutOverview/>
			<WithdrawOverview/>
		</div>
	)
})

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
	return(
		<div className={less.payinOverview}>
			<span className={less.orderTypeTitle}>
				代收
			</span>
			<div className={less.totalAmount}>
				<HomePagePayinlogo/>
				<div className={less.totalAmountContent}>
					<span className={less.totalAmountTitle}>
						代收总金额 (R$)
					</span>
					<span>
						{totalMoney}
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span className={less.dataTitle}>
					代收订单数据
				</span>
			
				<div className={less.orderInfoList}>
					{statusCount.map((i, index) => {
						return (
							<OrderInfoListRow
								key = { typeCheck[index] }
								orderType = { typeCheck[index] }
								amount = { i.orderMoney }
								orderAmount = { i.orderNum + '笔' }
							/>
						);
					})}
				</div>
			</div>
		</div>
	)
})

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
		4 : '已支付',
	};
	return (
		<div className = { less.payoutOverview }>
			<span className = { less.orderTypeTitle }>
				代付
			</span>
			<div className = { less.totalAmount }>
				<HomePagePayoutLogo />
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
})

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
})

export const OrderInfoListRow = reaxper((props) => {
	return(
		<div className={less.orderInfoRow}>
			<span className={less.rowLeft}>
				{props.orderType}
			</span>
			<div className={less.rowRight}>
				<span className={less.rowRightAmount}>
					{props.amount}
				</span>
				<span className={less.rowRightOrderAmount}>
					{props.orderAmount}
				</span>
			</div>
		</div>
	)
})

export const WithdrawWindow = reaxper(() =>{
	const {setstateOverview, overviewInfo, withdrawModalShow} = reaxel_overview();
	const { Button , Input , Modal } = antd;
	
	return (
		<Modal
			visible = { withdrawModalShow }
			footer = { null }
			className = { less.withdrawWindow }
			closable = { false }
			width={380}
			title='提现'
		>
			<div className = { less.windowContent }>
				<div className = { less.withdrawAmount }>
					<span>
						提取到账金额
					</span>
					<Input />
					<span>
						最大可到账金额：R$372,654,004.76
						<span className={less.withdrawBtn}>
							全部提现
						</span>
					</span>
				</div>
				<div className = { less.address }>
					<span>
						接收USDT地址(TRC-20)
					</span>
					<span>
						TF46jFVY4nuxTEdk9t7K4qzC3RA5ZQ49u6
					</span>
				</div>
				<div className = { less.btn }>
					<Button
						type = "primary"
						onClick={() => {
						
						}}
					>
						提交
					</Button>
					<Button
						onClick={() => {
							setstateOverview({
								withdrawModalShow: false
							})
						}}
					>
						取消
					</Button>
				</div>
			</div>
		</Modal>
	
	);
})

import less from './index.module.less'
import { reaxel_overview } from '@@reaxels'
import {
	HomePagePayinlogo,
	HomePagePayoutLogo, 
	HomePageWithdrawLogo,
} from '@@SVGcomponents'
