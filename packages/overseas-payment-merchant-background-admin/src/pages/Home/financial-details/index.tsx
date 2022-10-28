import React from "react";

export const FinancialDetails = reaxper(() =>{
	return(
		<div className={less.financialDetailsWrapper}>
			<FinancialDetailsTable/>
		</div>
	)
})


export const FinancialDetailsTable = reaxper(() => {
	
	const {Table, Button} = antd
	
	interface DataType {
		key: number;
		orderTime: string;
		orderNumber: string;
		transactionAmount: string;
		charge: string;
		balance: string;
	}
	
	const columns: ColumnsType<DataType> = [
		{
			title: '时间',
			dataIndex: 'orderTime',
			key: 'orderTime',
		},
		{
			title: '订单号',
			dataIndex: 'orderNumber',
			key: 'orderNumber',
		},
		{
			title: '交易金额',
			dataIndex: 'transactionAmount',
			key: 'transactionAmount',
			render: (transactionAmount) => {
				if(transactionAmount.includes('+')){
					return(
						<span style={{color: '#009D44'}}>
							{transactionAmount}
						</span>
					)
				}else {
					return(
						<span style={{color: 'black'}}>
							{transactionAmount}
						</span>
					)
				}
				
			}
		},
		{
			title: '手续费',
			dataIndex: 'charge',
			key: 'charge',
		},
		{
			title: '余额',
			dataIndex: 'balance',
			key: 'balance',
		},
	]
	
	
	const data: DataType[] = [
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-3,234.77',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+3,234.77',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-3,234.77',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+3,234.77',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-3,234.77',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+3,234.77',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-51,005.39',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+65,047.35',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-51,005.39',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+65,047.35',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-51,005.39',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+65,047.35',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '-51,005.39',
			charge: '-13.85',
			balance: '3,249.77',
		},
		{
			key: Math.random(),
			orderTime: '2022-10-19 22:26:26',
			orderNumber: '3014447778',
			transactionAmount: '+65,047.35',
			charge: '-13.85',
			balance: '3,249.77',
		},
	]
	
	
	
	return(
		<div className={less.tableContainer}>
			<div className={less.tableHeader}>
				资金明细
			</div>
			<Table
				columns={columns}
				dataSource={data}
				size="small"
				pagination={{
					pageSize: 10
				}}
				scroll={{
					x:1000
				}}
			/>
		</div>
	)
})

import less from './index.module.less'
import { PayoutRequestHeader } from "../../Payout";
import { ColumnsType } from "antd/lib/table";
