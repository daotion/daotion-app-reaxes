export const PayoutManagement = reaxper(() => {
	return(
		<PayoutRequestTable/>
	)
})

export const PayoutRequestHeader = reaxper(() =>{
	
	const {Button} = antd
	
	return(
		<div className={less.headerContainer}>
			<span className={less.headerTitle}>
				代付申请列表
			</span>
			<Button type="primary">
				<AddIcon/>
				新增代付
			</Button>
		</div>
	)
})


export const PayoutRequestTable = reaxper(() => {
	
		const {Table, Button} = antd

		interface DataType {
			key: number;
			serialNumber: string;
			orderNumber: string;
			userId: string;
			userNameAndContact: string;
			tags: string,
			payOutAmount: number;
			bankAccount: string;
		}
	
	const columns: ColumnsType<DataType> = [
		{
			title: '序号',
			dataIndex: 'serialNumber',
			key: 'serialNumber',
		},
		{
			title: '订单号',
			dataIndex: 'orderNumber',
			key: 'orderNumber',
		},
		{
			title: '用户ID/用户名',
			dataIndex: 'userId',
			key: 'userId',
		},
		{
			title: '用户名/Telegram',
			dataIndex: 'userNameAndContact',
			key: 'userNameAndContact',
		},
		{
			title: '代付金额',
			dataIndex: 'payOutAmount',
			key: 'payOutAmount',
		},
		{
			title: '申请入账银行卡号',
			dataIndex: 'bankAccount',
			key: 'bankAccount',
		},
		{
			title: '操作',
			key: 'action',
			fixed: 'right',
			render: () => (
				<div className={less.tableAction}>
					<Button type="text">
						同意
					</Button>
					<Button type="text">
						拒绝
					</Button>
				</div>
			)
		},
	]
	
	
	const data: DataType[] = [
			{
				key: Math.random(),
				serialNumber: '1',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '待支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '2',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '支付失败',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '3',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '4',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已取消',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '5',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '6',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '7',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '1',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '待支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '2',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '支付失败',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '3',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '4',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已取消',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '5',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '6',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '7',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '1',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '待支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '2',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '支付失败',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '3',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '4',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已取消',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '5',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '6',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '7',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '1',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '待支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '2',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '支付失败',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '3',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '4',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已取消',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '5',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '6',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
			{
				key: Math.random(),
				serialNumber: '7',
				orderNumber: '3014447778',
				userId: '32834515',
				userNameAndContact: '郑文英 13052746754',
				tags: '已支付',
				payOutAmount: 446.31,
				bankAccount: '6225886221086049443',
			},
		]

	
	
	return(
		<div className={less.tableContainer}>
			<PayoutRequestHeader/>
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


import { ColumnsType } from "antd/lib/table";
import less from './index.module.less'
import {AddIcon} from '@@SVGcomponents'
