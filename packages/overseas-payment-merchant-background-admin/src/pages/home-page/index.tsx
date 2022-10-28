export const HomePage = reaxper(() =>{
	return(
		<div className={less.homePageWrapper}>
			<Overview/>
			<OrderTypeOverview/>
			<WithdrawWindow/>
		</div>
	)
})

export const Overview = reaxper(() =>{
	
	const {Button} = antd
	
	return(
		<div className={less.overviewContainer}>
			<span className={less.overviewTitle}>
				资金总览
			</span>
			<div className={less.overviewContent}>
				<div className={less.balanceContainer}>
					<div className={less.balanceContent}>
						<span className={less.overviewSubTitle}>
							账户余额（R$）
						</span>
						<span className={less.balanceAmount}>
							4,691,849,234.69
						</span>
					</div>
					<span className={less.checkDetail}>
						查看明细
					</span>
				</div>
				<div className={less.withdrawContent}>
					<span className={less.overviewSubTitle}>
						提现处理中
					</span>
					<span className={less.withdrawingAmount}>
						849,234.69
					</span>
				</div>
			</div>
			<Button type="primary">
				提现
			</Button>
		</div>
	)
})

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
	return(
		<div className={less.payinOverview}>
			<span>
				代收
			</span>
			<div className={less.totalAmount}>
				<HomePagePayinlogo/>
				<div className={less.totalAmountContent}>
					<span>
						代收总金额 (R$)
					</span>
					<span>
						7,406,706.32
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span>
					代收订单数据
				</span>
				<div className={less.orderInfoList}>
					<OrderInfoListRow
						orderType={'待支付'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'已取消'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'支付失败'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'已支付'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
				</div>
			</div>
		</div>
	)
})

export const PayoutOverview = reaxper(() => {
	return(
		<div className={less.payoutOverview}>
			<span>
				代付
			</span>
			<div className={less.totalAmount}>
				<HomePagePayoutLogo/>
				<div className={less.totalAmountContent}>
					<span>
						代付总金额 (R$)
					</span>
					<span>
						7,406,706.32
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span>
					代付订单数据
				</span>
				<div className={less.orderInfoList}>
					<OrderInfoListRow
						orderType={'待支付'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'待审核'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'已拒绝'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'支付失败'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'已支付'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
				</div>
			</div>
		</div>
	)
})

export const WithdrawOverview = reaxper(() => {
	return(
		<div className={less.withdrawOverview}>
			<span>
				提现
			</span>
			<div className={less.totalAmount}>
				<HomePageWithdrawLogo/>
				<div className={less.totalAmountContent}>
					<span>
						提现总金额 (R$)
					</span>
					<span>
						7,406,706.32
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span>
					提现订单数据
				</span>
				<div className={less.orderInfoList}>
					<OrderInfoListRow
						orderType={'待审核'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'已拒绝'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
					<OrderInfoListRow
						orderType={'已提现'}
						amount={'1,201.16'}
						orderAmount={'7,579笔'}
					/>
				</div>
			</div>
		</div>
	)
})

export const OrderInfoListRow = reaxper((props) => {
	return(
		<div className={less.orderInfoRow}>
			<span>
				{props.orderType}
			</span>
			<div className={less.rowLeft}>
				<span>
					{props.amount}
				</span>
				<span>
					{props.orderAmount}
				</span>
			</div>
		</div>
	)
})

export const WithdrawWindow = reaxper(() =>{
	
	const {Button, Input} = antd
	
	return(
		<div className={less.withdrawWindow}>
			<span>
				提现
			</span>
			<div className={less.windowContent}>
				<div className={less.withdrawAmount}>
					<span>
						提取金额
					</span>
					<Input/>
					<span>
						最大可提现余额：R$372,654,004.76
						<Button type="text">
							全部提现
						</Button>
					</span>
				</div>
				<div className={less.address}>
					<span>
						接收USDT地址(TRC-20)
					</span>
					<span>
						TF46jFVY4nuxTEdk9t7K4qzC3RA5ZQ49u6
					</span>
				</div>
				<div className={less.btn}>
					<Button type="primary">
						提交
					</Button>
					<Button>
						取消
					</Button>
				</div>
			</div>
		</div>
	)
})

import less from './index.module.less'
import {
	HomePagePayinlogo,
	HomePagePayoutLogo, 
	HomePageWithdrawLogo,
} from '@@SVGcomponents'
