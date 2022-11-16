export const MerchantMgntList = reaxper(() => {
	return <>
		<SearchBar />
		<TableList />
	</>;
});

const data = [
	{
		mchID : '12321312' ,
		mchName : '李政' ,
		telegram : '1212213' ,
		seller : '强子' ,
		payInStatus : 0 ,
		payOutStatus : 0 ,
		mchStatus : 1 ,
	} ,
	{
		mchID : '12321312' ,
		mchName : '吴敏' ,
		telegram : '1212213' ,
		seller : '强子' ,
		payInStatus : 0 ,
		payOutStatus : 1 ,
		mchStatus : 0 ,
	} ,
	{
		mchID : '12321312' ,
		mchName : '王佳琪' ,
		telegram : '1212213' ,
		seller : '强子' ,
		payInStatus : 1 ,
		payOutStatus : 1 ,
		mchStatus : 0 ,
	} ,
];

const SearchBar = reaxper(() => {
	
	const { Input , Button , Form , Col } = antd;
	return (
		<div className = { less.searchContainer }>
			<Form
				layout = "inline"
				style = { { width : '100%' } }
			>
				<Col flex = { 1 }>
					<Form.Item>
						<Input placeholder = { '搜索' } />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item style = { { marginRight : 0 } }>
						<Button type = "default">
							重置
						</Button>
					</Form.Item>
				</Col>
			</Form>
		</div>
	);
});

const TableList = reaxper(() => {
	const { navigate } = toolkits.useRouter()
	
	const { Button , Table , Switch } = antd;
	
	interface DataType {
		mchID : string,
		mchName : string,
		telegram : string,
		seller : string,
		payInStatus : number,
		payOutStatus : number,
		mchStatus : number,
	}
	
	const columns : ColumnsType<DataType> = [
		{
			title : '商户ID' ,
			dataIndex : 'mchID' ,
			fixed : 'left' ,
		} ,
		{
			title : '商户名' ,
			dataIndex : 'mchName' ,
			fixed : 'left' ,
			render : (value, record, index) => (
				<Button
					className={less.blueLink}
					type = "link"
					onClick={() => {navigate(`detail?id=${record.mchID}`)}}
				>{ value }</Button>
			) ,
		} ,
		{
			title : 'Telegram' ,
			dataIndex : 'telegram' ,
		} ,
		{
			title : '商务' ,
			dataIndex : 'seller' ,
		} ,
		{
			title : '代收' ,
			dataIndex : 'payInStatus' ,
			render : (payInStatus) => <Switch checked = { payInStatus } /> ,
		} ,
		{
			title : '代收' ,
			dataIndex : 'payOutStatus' ,
			render : (payOutStatus) => <Switch checked = { payOutStatus } /> ,
		} ,
		{
			title : '操作' ,
			dataIndex : 'action' ,
			render : () => <Button type = "link" className={less.blueLink}>编辑</Button> ,
		} ,
		{
			title : '状态' ,
			dataIndex : 'mchStatus' ,
			render : (status) => <Switch checked = { status } /> ,
		} ,
	];
	

	
	return (
		<div className = { less.tableContainer }>
			<div className = { less.tableTitleBar }>
				<span className = { less.tableTitle }>商户列表</span>
				<Button
					icon = { <SVGAddBtn /> }
					type = "primary"
					onClick={() =>{
						navigate('edit')
					}}
				>
					新增成员
				</Button>
			</div>
			<Table
				rowKey = { Math.random }
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

import { ColumnsType } from 'antd/lib/table';
import { SVGAddBtn } from '@@root/src/SVGcomponents';
import less from './index.module.less';
