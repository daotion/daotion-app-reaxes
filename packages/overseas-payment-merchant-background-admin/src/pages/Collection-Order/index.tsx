export const CollectionOrder = reaxper(() => {
	const badge = useRef(Math.random());
	const {params} = toolkits.useRouter();
	const {
		reset ,
		state$search ,
		state$list,
		setFields ,
		fetchCollectionOrderList ,
		get_enum_order_list_map ,
	} = reaxel_collection_order();
	
	/*切换路由时重置搜索条件*/
	useLayoutEffect(() => {
		reset();
	} , [ params['*'] ]);
	
	fetchCollectionOrderList(params['*']);
	
	
	/*切换路由时重置搜索条件*/
	useLayoutEffect(() => {
		reset();
	} , [ params['*'] ]);
	
	fetchCollectionOrderList(params['*']);
	
	
	return <>
		<OrderInfoSearch />
		<OrderInfoTable />
		<OrderProcess/>
	</>
});


export const OrderInfoSearch = reaxper(() => {
	const {params} = toolkits.useRouter();
	const {
		reset ,
		state$search ,
		state$list,
		setFields ,
		get_enum_order_list_map ,
	} = reaxel_collection_order();
	
	const enum_order_status = get_enum_order_list_map(params['*']);
	
	const { Input , Form , Select , Button , Col} = antd;
	const { RangePicker } = DatePicker;
	return (
		<ConfigProvider
		>
			<div className = { less.searchContainer }>
				<Form
					layout = "inline"
					style={{
						width: '100%'
					}}
				>
					<Col flex={1}>
						<Form.Item
							label = { '搜索订单' }
						>
							<Input
								value = { state$search.input_search_orderID }
								onChange = { (e) => {
									setFields({ input_search_orderID : e.target.value });
								} }
								placeholder = { '订单ID' }
							/>
						</Form.Item>
					</Col>
					{ __EXPERIMENTAL__ && <Form.Item
						label = { '订单创建时间' }
					>
						{/*@ts-ignore*/ }
						<RangePicker 
							showTime
							onChange = { ([ start , end ]) => {
								setFields({
									range_picker_order_created_date : [
										dayjs(start).tz('America/Sao_Paulo') ,
										dayjs(end).tz('America/Sao_Paulo') ,
									] ,
								});
							} }
							value = { function(){
								if( !state$search.range_picker_order_created_date.length ) return [] as any;
								const [ start , end ] = state$search.range_picker_order_created_date;
								return [ start.tz('America/Sao_Paulo') , start.tz('America/Sao_Paulo') ];
							}() }
						/>
					</Form.Item> }
					{ __EXPERIMENTAL__ && <Form.Item
						label = { '订单更新时间' }
					>
						{/*@ts-ignore*/ }
						<RangePicker value = { [ null , null ] } />
					</Form.Item> }
					<Col flex={1}>
						<Form.Item
							label = { '订单状态' }
						>
							<Select
								placeholder = { '选择状态' }
								onChange = { (value, option) => {
									setFields({select_order_status : value})
								} }
								style = { { minWidth : "120px" } }
								value = { state$search.select_order_status }
							>
								{ enum_order_status.map(({ label , status }) => {
									return <Select.Option
										key = { status }
										value = { status }
									>
										{ label }
									</Select.Option>;
								}) }
							</Select>
						</Form.Item>
					</Col>
					
					<Col>
						<Form.Item style={{
							marginRight: 0
						}}>
							<Button onClick = { reset }>
								重置
							</Button>
						</Form.Item>
					</Col>
				</Form>
			</div>
		</ConfigProvider>
	);
});

export const OrderInfoTable = reaxper(() => {
	const { params } = toolkits.useRouter();
	const {state$list,get_enum_order_list_map} = reaxel_collection_order();
	const enum_order_status = get_enum_order_list_map(params['*']);
	
	
	const columns : ColumnsType<DataType> = [
		{
			title : '订单号' ,
			dataIndex : 'orderID' ,
			fixed : 'left' ,
			render : (_ , { orderID }) => {
				return (
					<a>{ orderID }</a>
				);
			} ,
		} ,
		{
			title : '订单金额' ,
			dataIndex : 'money' ,
		} ,
		{
			title : '订单状态' ,
			dataIndex : 'state' ,
			render : (_ , { state }) => {
				const colorMap = {
					1 : "blue" ,
					2 : "gainsboro" ,
					3 : "red" ,
					4 : "green" ,
				};
				
				return <>
					<Tag color = { colorMap[state] }>
						{ enum_order_status.find(({status}) => {
							return status === state;
						}).label }
					</Tag>
				</>;
			} ,
		} ,
		{
			title : '用户名' ,
			dataIndex : 'userName' ,
		} ,
		{
			title : '手续费' ,
			dataIndex : 'tax' ,
		} ,
		{
			title : '订单创建时间' ,
			dataIndex : 'createTimestamp' ,
			render(record){
				return time_localize_Brazil(record.createTimestamp);
			} ,
		} ,
		{
			title : '订单更新时间' ,
			dataIndex : 'updateTimestamp' ,
			render(record){
				return time_localize_Brazil(record.updateTimestamp);
			} ,
		} ,
	];
	const { Table , Tag } = antd;
	
	return (
		<div className = { less.tableContainer }>
			<div className = { less.tableHeader }>
				数据明细
			</div>
			<Table
				rowKey="orderID"
				columns = { columns }
				dataSource = { state$list.collection_order_list }
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
	interface DataType {
		// key : number;
		orderID : string;
		money : number;
		state : number;
		userName : string;
		tax : number;
		createTimestamp : number;
		updateTimestamp : number;
	}
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



import { reaxel_collection_order } from './reaxel--collection-order';
import { DatePicker } from '@@Xcomponents';
import { time_localize_Brazil } from '#toolkits/overseas-payment';

import dayjs from 'dayjs';
import {ConfigProvider} from 'antd';
import { ColumnsType } from "antd/es/table";
import {
	PayOut ,
	PayIn ,
	WithDraw ,
	CloseBtn ,
	Dot ,
	Line ,
} from '@@SVGcomponents';
import less from "./index.module.less";
