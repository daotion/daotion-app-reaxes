import React from "react";

export const FinancialDetails = reaxper(() =>{
	return(
			<FinancialDetailsTable/>
	)
})


export const FinancialDetailsTable = reaxper(() => {
	const {fetchFinDetail, fin_detail_list} = reaxel_overview();
	const badge = useRef(Math.random());
	fetchFinDetail(badge);
	const { Table , Button } = antd;
	const columns = [
		{
			title: '时间',
			dataIndex: 'timestamp',
		},
		{
			title: '订单号',
			dataIndex: 'orderID',
		},
		{
			title: '交易金额',
			dataIndex: 'money',
			render: (money) => {
				if(money > 0){
					return(
						<span style={{color: '#009D44'}}>
							{money}
						</span>
					)
				}else {
					return(
						<span style={{color: 'black'}}>
							{money}
						</span>
					)
				}
				
			}
		},
		{
			title: '手续费',
			dataIndex: 'tax',
		},
		{
			title: '余额',
			dataIndex: 'balance',
		},
	]
	
	
	return (
		<div className = { less.tableContainer }>
			<div className = { less.tableHeader }>
				资金明细
			</div>
			<Table
				columns = { columns }
				dataSource = { fin_detail_list }
				rowKey = "orderID"
				size = "small"
				pagination = { {
					pageSize : 10 ,
				} }
				scroll = { {
					x : 1000 ,
				} }
			/>
		</div>
	);
})

import less from '../index.module.less'
import { reaxel_overview } from '@@reaxels'
