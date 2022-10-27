export const OrderInfo = reaxper(() =>{
	return(
		<div className={less.orderInfoWrapper}>
			<OrderInfoSearch/>
			<OrderInfoTable/>
		</div>
	)
})

export const OrderInfoSearch = reaxper(() =>{
	return(
		<div className={less.searchContainer}>
			<QueryFilter span={8}>
				<ProFormText placeholder={'搜索'}/>
				<ProFormDatePicker placeholder={'订单创建时间/*时间区间'} />
				<ProFormDatePicker placeholder={'订单更新时间/*时间区间/'}/>
				<ProFormSelect 
					options={[
						{
							type: 'payout',
							label: '代付'
						},
						{
							type: 'payin',
							label: '代收'
						},
						{
							type: 'withdraw',
							label: '提现'
						},
					]}
					placeholder={'订单类型'}/>
				<ProFormSelect 
					options={[
						{
							type: 'topayout', 
							label: '待支付'
						},
						{
							type: 'canceled',
							label: '已取消'
						},
						{
							type: 'failed',
							label: '支付失败'
						},
						{
							type: 'paid',
							label: '已支付'
						},
						{
							type: 'rejected',
							label: '已拒绝'
						},
						{
							type: 'withdrawed',
							label: '已提现'
						},
						{
							type: 'toCheck',
							label: '待审核'
						},
					]}
					placeholder={'订单状态'}/>
			</QueryFilter>
		</div>
	)
})

export const OrderInfoTable = reaxper(() =>{
	
	const {Table, Button, Tag, Input, DatePicker} = antd
	
	interface DataType {
		key: number;
		orderNumber: string;
		merchantId: string;
		orderType: string;
		orderAmount: string;
		orderStatus: string;
		userId: string;
		charge: number;
		orderCreateTime: string;
		statusUpdateTime: string;
	}
	
	const columns: ColumnsType<DataType> = [
		{
			title: '订单号',
			dataIndex: 'orderNumber',
			key: 'orderNumber',
			render: (_, {orderNumber}) => {
				return(
					<a>{orderNumber}</a>
				)
			}
		},
		{
			title: '商户/ID',
			dataIndex: 'merchantId',
			key: 'merchantId',
		},
		{
			title: '订单类型',
			dataIndex: 'orderType',
			key: 'orderType',
			render: (_, {orderType}) =>{
				let log
				if(orderType === '代付'){
					log = <PayOut/>
				}else if(orderType === '代收'){
					log = <PayIn/>
				}else {
					log = <WithDraw/>
				}
				return(
					<div className={less.orderTypeContainer}>
						{log}{orderType}
					</div>
				)
			}
		},
		{
			title: '订单金额',
			dataIndex: 'orderAmount',
			key: 'orderAmount',
		},
		{
			title: '订单状态',
			dataIndex: 'orderStatus',
			key: 'orderStatus',
			render: (_, {orderStatus}) => {
				let color
				if(orderStatus === '待支付')
				{
					color = 'blue'
				}else if(orderStatus === '支付失败' || orderStatus === '已拒绝'){
					color = 'red'
				}else if(orderStatus === '已支付' || orderStatus === '已提现'){
					color = 'green'
				}else if(orderStatus === '待审核'){
					color = 'purple'
				}else {
					color = 'gainsboro'
				}
				
				return <>
					<Tag color={color}>
						{orderStatus}
					</Tag>
				</>
			}
		},
		{
			title: '用户ID/用户名',
			dataIndex: 'userId',
			key: 'userId',
		},
		{
			title: '手续费',
			dataIndex: 'charge',
			key: 'charge',
		},
		{
			title: '订单创建时间',
			dataIndex: 'orderCreateTime',
			key: 'orderCreateTime',
		},
		{
			title: '订单更新时间',
			dataIndex: 'statusUpdateTime',
			key: 'statusUpdateTime',
		},
	]
	
	
	const data: DataType[] = [
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代付',
			orderAmount: '3,249.77',
			orderStatus: '支付失败',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代收',
			orderAmount: '3,249.77',
			orderStatus: '待支付',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代付',
			orderAmount: '3,249.77',
			orderStatus: '已支付',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代付',
			orderAmount: '3,249.77',
			orderStatus: '待支付',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代收',
			orderAmount: '3,249.77',
			orderStatus: '已取消',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代付',
			orderAmount: '3,249.77',
			orderStatus: '已提现',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '代付',
			orderAmount: '3,249.77',
			orderStatus: '待审核',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
		{
			key: Math.random(),
			orderNumber: '276318283',
			merchantId: '李嘉诚',
			orderType: '提现',
			orderAmount: '3,249.77',
			orderStatus: '已拒绝',
			userId: '3073966155',
			charge: 90.82,
			orderCreateTime: '2022-10-19 22:26:26',
			statusUpdateTime: '2022-10-18 23:32:25',
		},
	]
	

	return(
		<div className={less.tableContainer}>
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



import less from "./index.module.less";
import {
	ProFormDatePicker ,
	ProFormSelect ,
	ProFormText ,
	QueryFilter ,
} from "@ant-design/pro-components";
import React from "react";
import { ColumnsType } from "antd/es/table";
import {
	PayOut, 
	PayIn, 
	WithDraw,
} from '@@SVGcomponents'
