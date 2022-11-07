export const OrderInfoListRow = (props) => {
	return (
		<div className = { less.orderInfoRow }>
			<span className = { less.rowLeft }>
				{ props.orderType }
			</span>
			<div className = { less.rowRight }>
				<span className = { less.rowRightAmount }>
					{ props.amount }
				</span>
				<span className = { less.rowRightOrderAmount }>
					{ props.orderAmount }
				</span>
			</div>
		</div>
	);
};

import less from "../index.module.less";
