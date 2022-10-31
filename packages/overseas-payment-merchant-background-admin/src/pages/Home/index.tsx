export const HomePage = reaxper(() =>{
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
	const reax_home = reaxel_home()
	
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
							4,691,849,234.69
						</span>
					</div>
					<Button
						className = { less.checkDetail }
						type = "link"
						onClick = { () => {
							navigate('financialDetail');
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
						849,234.69
					</span>
				</div>
			</div>
			<Button
				type = "primary"
				onClick = { () => {
					reax_home.changeModalShow(true);
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
						7,406,706.32
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span className={less.dataTitle}>
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
			<span className={less.orderTypeTitle}>
				代付
			</span>
			<div className={less.totalAmount}>
				<HomePagePayoutLogo/>
				<div className={less.totalAmountContent}>
					<span className={less.totalAmountTitle}>
						代付总金额 (R$)
					</span>
					<span>
						7,406,706.32
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span className={less.dataTitle}>
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
			<span className={less.orderTypeTitle}>
				提现
			</span>
			<div className={less.totalAmount}>
				<HomePageWithdrawLogo/>
				<div className={less.totalAmountContent}>
					<span className={less.totalAmountTitle}>
						提现总金额 (R$)
					</span>
					<span>
						7,406,706.32
					</span>
				</div>
			</div>
			<div className={less.orderInfo}>
				<span className={less.dataTitle}>
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
	const reax_home = reaxel_home();
	const { Button , Input , Modal } = antd;
	
	return (
		<Modal
			visible = { reax_home.withdrawModalShow }
			footer = { null }
			className = { less.withdrawWindow }
			closable = { false }
			width={380}
			title='提现'
		>
			<div className = { less.windowContent }>
				<div className = { less.withdrawAmount }>
					<span>
						提取金额
					</span>
					<Input />
					<span>
						最大可提现余额：R$372,654,004.76
						<Button type = "text">
							全部提现
						</Button>
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
							reax_home.changeModalShow(false)
						}}
					>
						提交
					</Button>
					<Button
						onClick={() => {
							reax_home.changeModalShow(false)
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
import { reaxel_home } from '@@reaxels/home/home'
import {
	HomePagePayinlogo,
	HomePagePayoutLogo, 
	HomePageWithdrawLogo,
} from '@@SVGcomponents'
