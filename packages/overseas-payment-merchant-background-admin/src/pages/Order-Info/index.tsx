
export const OrderInfo = reaxper(() => {
	return (
		<>
			<OrderInfoSearch />
			<OrderInfoTable />
			{/*<OrderProcess/>*/ }
		
		</>
	);
});

export const OrderInfoSearch = reaxper(() => {
	
	const { Input , Form , DatePicker , Select , Button } = antd;
	const { RangePicker } = DatePicker;
	return (
		<div className = { less.searchContainer }>
			<Form
				layout = "inline"
			>
				<Form.Item
					
					label = { '搜索订单' }
				>
					<Input
						placeholder = { '搜索' }
					/>
				</Form.Item>
				<Form.Item
					label = { '订单创建时间' }
				>
				</Form.Item>
				<Form.Item
					label = { '订单更新时间' }
				>
				</Form.Item>
				<Form.Item
					label = { '订单状态' }
				>
					<Select
						placeholder = { '选择状态' }
					>
						<Select.Option value = { '待支付' }>
							待支付
						</Select.Option>
						<Select.Option value = { '已取消' }>
							已取消
						</Select.Option>
						<Select.Option value = { '支付失败' }>
							支付失败
						</Select.Option>
						<Select.Option value = { '已支付' }>
							已支付
						</Select.Option>
						<Select.Option value = { '待审核' }>
							待审核
						</Select.Option>
						<Select.Option value = { '已拒绝' }>
							已拒绝
						</Select.Option>
						<Select.Option value = { '已提现' }>
							已提现
						</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item
					label = { '订单类型' }
				>
					<Select placeholder = { '选择类型' }>
						<Select.Option value = { '代收' }>
							代收
						</Select.Option>
						<Select.Option value = { '代付' }>
							代付
						</Select.Option>
						<Select.Option value = { '提现' }>
							提现
						</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item>
					<div className = { less.formBtn }>
						<Button>
							重置
						</Button>
						<Button type = "primary">
							查询
						</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
});

export const OrderInfoTable = reaxper(() => {
	
	const { Table , Button , Tag , Input , DatePicker } = antd;
	
	interface DataType {
		key : number;
		orderNumber : string;
		merchantId : string;
		orderType : string;
		orderAmount : string;
		orderStatus : string;
		userId : string;
		charge : number;
		orderCreateTime : string;
		statusUpdateTime : string;
	}
	
	const columns : ColumnsType<DataType> = [
		{
			title : '订单号' ,
			dataIndex : 'orderNumber' ,
			key : 'orderNumber' ,
			fixed : 'left' ,
			render : (_ , { orderNumber }) => {
				return (
					<a>{ orderNumber }</a>
				);
			} ,
		} ,
		{
			title : '商户/ID' ,
			dataIndex : 'merchantId' ,
			key : 'merchantId' ,
		} ,
		{
			title : '订单类型' ,
			dataIndex : 'orderType' ,
			key : 'orderType' ,
			render : (_ , { orderType }) => {
				let log;
				if( orderType === '代付' ) {
					log = <PayOut />;
				} else if( orderType === '代收' ) {
					log = <PayIn />;
				} else {
					log = <WithDraw />;
				}
				return (
					<div className = { less.orderTypeContainer }>
						{ log }{ orderType }
					</div>
				);
			} ,
		} ,
		{
			title : '订单金额' ,
			dataIndex : 'orderAmount' ,
			key : 'orderAmount' ,
		} ,
		{
			title : '订单状态' ,
			dataIndex : 'orderStatus' ,
			key : 'orderStatus' ,
			render : (_ , { orderStatus }) => {
				let color;
				if( orderStatus === '待支付' ) {
					color = 'blue';
				} else if( orderStatus === '支付失败' || orderStatus === '已拒绝' ) {
					color = 'red';
				} else if( orderStatus === '已支付' || orderStatus === '已提现' ) {
					color = 'green';
				} else if( orderStatus === '待审核' ) {
					color = 'purple';
				} else {
					color = 'gainsboro';
				}
				
				return <>
					<Tag color = { color }>
						{ orderStatus }
					</Tag>
				</>;
			} ,
		} ,
		{
			title : '用户ID/用户名' ,
			dataIndex : 'userId' ,
			key : 'userId' ,
		} ,
		{
			title : '手续费' ,
			dataIndex : 'charge' ,
			key : 'charge' ,
		} ,
		{
			title : '订单创建时间' ,
			dataIndex : 'orderCreateTime' ,
			key : 'orderCreateTime' ,
		} ,
		{
			title : '订单更新时间' ,
			dataIndex : 'statusUpdateTime' ,
			key : 'statusUpdateTime' ,
		} ,
	];
	
	
	const data : DataType[] = [
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '支付失败' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代收' ,
			orderAmount : '3,249.77' ,
			orderStatus : '待支付' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已支付' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '待支付' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代收' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已取消' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已提现' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '待审核' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '提现' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已拒绝' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '待支付' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代收' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已取消' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已提现' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '代付' ,
			orderAmount : '3,249.77' ,
			orderStatus : '待审核' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
		{
			key : Math.random() ,
			orderNumber : '276318283' ,
			merchantId : '李嘉诚' ,
			orderType : '提现' ,
			orderAmount : '3,249.77' ,
			orderStatus : '已拒绝' ,
			userId : '3073966155' ,
			charge : 90.82 ,
			orderCreateTime : '2022-10-19 22:26:26' ,
			statusUpdateTime : '2022-10-18 23:32:25' ,
		} ,
	];
	
	
	return (
		<div className = { less.tableContainer }>
			<div className = { less.tableHeader }>
				数据明细
			</div>
			<Table
				columns = { columns }
				dataSource = { data }
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
});

export const OrderProcess = reaxper(() => {
	
	const { Steps } = antd;
	
	const { Step } = Steps;
	
	return (
		<div className = { less.orderProcessContainer }>
			<div className = { less.orderProcessTitle }>
				<span>
					订单进度
				</span>
				<CloseBtn />
			</div>
			<Steps
				progressDot = { true }
				current = { 1 }
				direction = "vertical"
			>
				<Step
					title = { '待支付' }
					description = { '2022-10-17 22:59' }
				/>
				<Step
					title = { '已支付' }
					description = { '2022-10-18 15:27' }
				/>
			</Steps>
		
		</div>
	);
});


import less from "./index.module.less";
import React from "react";
import { ColumnsType } from "antd/es/table";
import {
	PayOut ,
	PayIn ,
	WithDraw ,
	CloseBtn ,
	Dot ,
	Line ,
} from '@@SVGcomponents';
