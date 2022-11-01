import { Col } from "antd";

export const CollectionOrder = reaxper(() => {
	const badge = useRef(Math.random());
	
	return <>
		<OrderInfoSearch />
		<OrderInfoTable />
		<OrderProcess/>
	</>
});


export const OrderInfoSearch = reaxper(() => {
	
	const { Input , Form , DatePicker , Select , Button } = antd;
	const { RangePicker } = DatePicker;
	const [form] = Form.useForm();
	
	const onReset = () =>{
		form.resetFields();
	}
	
	return (
		<div className = { less.searchContainer }>			
			<Form
				form={form}
				layout="inline"
				style={{
					width: '100%'
				}}
			>
				<Col flex={1}>
					<Form.Item name={'search'}>
						<Input
							placeholder={'搜索'}/>
					</Form.Item>
				</Col>
			  <Col span={11}>
				  <Form.Item name={'orderStatus'}>
					  <Select
						  placeholder={'订单状态'}
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
			  </Col>
				<Col>
					<Form.Item style={{marginRight: 0}}>
						<Button
							onClick={() =>{
								onReset()
							}}
						>
							重置
						</Button>
						<Button 
							style={{marginLeft: 16}}
							type = "primary">
							查询
						</Button>
					</Form.Item>
				</Col>
			</Form>
		</div>

	);
});

export const OrderInfoTable = reaxper(() => {
	
	const { Table , Button , Tag , Input , DatePicker } = antd;
	
	const reax_Collection_Order = reaxel_collection_order();
	
	interface DataType {
		key : number;
		orderNumber : string;
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
					<a 
						onClick={() => {
							reax_Collection_Order.changeModalShow(true)
						}}
					>
						{ orderNumber }
					</a>
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
	
	const { Steps, Modal } = antd;
	
	const { Step } = Steps;
	
	const reax_Collection_Order = reaxel_collection_order();
	
	return (
		<Modal
			className={less.processingModal}
			visible={reax_Collection_Order.processModalShow}
			closable={false}
			footer={false}>
			<div className = { less.orderProcessTitle }>
				<span>
					订单进度
				</span>
				<div
					className={less.closeBtn}
					onClick={() => {
						reax_Collection_Order.changeModalShow(false)
					}}
				>
					<CloseBtn/>
				</div>
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
				{/*<Step*/}
				{/*	title = { '支付失败' }*/}
				{/*	description = { '2022-10-18 15:27' }*/}
				{/*/>*/}
			</Steps>
		</Modal>
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
import {reaxel_collection_order} from '@@reaxels/Collection-Order/Collection-Order'
