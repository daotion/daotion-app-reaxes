export const MerchantMgntList = reaxper(() => {
	
	const { closFetchMchList , cleanDps , setPending } = reaxel_mch_mgnt_list();
	closFetchMchList();
	useEffect(() => cleanDps , []);
	
	return <>
		<SearchBar />
		<TableList />
	</>;
});

const SearchBar = reaxper(() => {
	const { setFields , state$mchMgnt } = reaxel_mch_mgnt_list();
	const { Input , Button , Form , Col } = antd;
	return (
		<div className = { less.searchContainer }>
			<Form
				layout = "inline"
				style = { { width : '100%' } }
			>
				<Col flex = { 1 }>
					<Form.Item>
						<Input
							value = { state$mchMgnt.searchText }
							onChange = { (e) => {
								setFields({ searchText : e.target.value });
							} }
							placeholder = { '搜索' }
						/>
					</Form.Item>
				</Col>
				<Col>
					<Form.Item style = { { marginRight : 0 } }>
						<Button
							onClick = { () => setFields({ searchText : '' }) }
							type = "default"
						>
							重置
						</Button>
					</Form.Item>
				</Col>
			</Form>
		</div>
	);
});

const TableList = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const { mch_list } = reaxel_mch_mgnt_list();
	const { Button , Table , Switch } = antd;
	
	
	const columns : ColumnsType<DataType> = [
		{
			title : '商户号' ,
			dataIndex : 'mchNo' ,
			fixed : 'left' ,
		} ,
		{
			title : '商户名' ,
			dataIndex : 'name' ,
			fixed : 'left' ,
			render : (value , record , index) => (
				<Button
					className = { less.blueLink }
					type = "link"
					onClick = { () => {navigate(`mch-detail?id=${ record.mchNo }`);} }
				>{ value }</Button>
			) ,
		} ,
		{
			title : 'Telegram' ,
			dataIndex : 'phone' ,
		} ,
		{
			title : '商务' ,
			dataIndex : 'seller' ,
		} ,
		{
			title : '代收' ,
			dataIndex : 'payInStatus' ,
			render : (payInStatus) => <Switch checked = { payInStatus === 1 ? true : false } /> ,
		} ,
		{
			title : '代付' ,
			dataIndex : 'payOutStatus' ,
			render : (payOutStatus) => <Switch checked = { payOutStatus === 1 ? true : false } /> ,
		} ,
		{
			title : '操作' ,
			dataIndex : 'action' ,
			render : (value , record , index) => (
				<Button
					type = "link"
					className = { less.blueLink }
					onClick = { () => {navigate(`edit-cfg?mchNo=${ record.mchNo }`);} }
				>
					编辑
				</Button>
			) ,
		} ,
		{
			title : '状态' ,
			dataIndex : 'status' ,
			render : (status) => <Switch checked = { status === 1 ? true : false } /> ,
		} ,
	];
	
	
	return (
		<div className = { less.tableContainer }>
			<div className = { less.tableTitleBar }>
				<span className = { less.tableTitle }>商户列表</span>
				<Button
					icon = { <SVGAddBtn /> }
					type = "primary"
					onClick = { () => {
						navigate('open-account');
					} }
				>
					新增成员
				</Button>
			</div>
			<Table
				rowKey = { Math.random }
				columns = { columns }
				dataSource = { mch_list }
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
		mchNo : string,
		name : string,
		phone : string,
		seller : string,
		payInStatus : 0 | 1,
		payOutStatus : 0 | 1,
		status : 0 | 1,
	}
});

import { reaxel_mch_mgnt_list } from './reaxel--mch-mgnt-list';
import { SVGAddBtn } from '@@root/src/SVGcomponents';
import { ColumnsType } from 'antd/lib/table';
import less from './index.module.less';
