export const MerchantMgntList = reaxper(() => {
	return <>
		<SearchBar />
		<TableList />
	</>;
});

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
	
	const {Button, Table, Switch} = antd
	
	interface DataType{
		MchID: string,
		MchName: string,
		Telegram: string,
		seller: string,
		payInStatus: number,
		payOutStatus: number,
		status: number,
	}
	
	const columns: ColumnsType<DataType> = [
		{
			title: '商户ID',
			dataIndex: 'MchID',
			fixed: 'left',
		},
		{
			title: '商户名',
			dataIndex : 'MchName',
			fixed : 'left',
			render: () => <Button type="link">李政</Button>,
		},
		{
			title : 'Telegram',
			dataIndex : 'Telegram',
		},
		{
			title : '商务',
			dataIndex : 'seller'
		},
		{
			title : '代收',
			dataIndex : 'payInStatus',
			render: () => <Switch/>,
		},
		{
			title : '代收',
			dataIndex : 'payOutStatus',
			render: () => <Switch/>,
		},
		{
			title : '操作',
			dataIndex : 'action',
			render: () => <Button type="link">编辑</Button>,
		},
		{
			title : '状态',
			dataIndex : 'status',
			render: () => <Switch/>,
		}
	]
	
	const data = [
		{
			MchID: '12321312',
			Telegram: '1212213',
			seller: '强子',
		},
		{
			MchID: '12321312',
			Telegram: '1212213',
			seller: '强子',
		},
		{
			MchID: '12321312',
			Telegram: '1212213',
			seller: '强子',
		},
	]
	
	return (
		<div className={less.tableContainer}>
			 <div className={less.tableTitleBar}>
				 <span className={less.tableTitle}>商户列表</span>
				 <Button 
					 icon={<SVGAddBtn/>}
					 type="primary">
					 新增成员
				 </Button>
			 </div>
			<Table
				rowKey={Math.random}
				columns={columns}
				dataSource={data}
				size="small"
				pagination={{
					pageSize: 10,
				}}
				scroll={{
					x: 1000
				}}
			/>
		</div>
	);
});

import { ColumnsType } from 'antd/lib/table';
import { SVGAddBtn } from '@@root/src/SVGcomponents';
import less from './index.module.less';
