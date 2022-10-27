export const PayoutManagement = reaxper(() => {
	
	const {Button} = antd
	
	return(
		<div>
			<div>
				<span>
					代付申请列表
				</span>
				<Button>
					新增代付
				</Button>
			</div>
			<PayoutRequestTable/>
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

		const columns: ColumnsType<DataType> = [
			{
				title: '序号',
				dataIndex: 'serialNumber',
				key: '序号',
			},
			{
				title: '订单号',
				dataIndex: 'orderNumber',
				key: '订单号',
			},
			{
				title: '用户ID/用户名',
				dataIndex: 'userId',
				key: '用户ID/用户名',
			},
			{
				title: '用户名/联系方式',
				dataIndex: 'userNameAndContact',
				key: '用户名/联系方式',
			},
			{
				title: '代付金额',
				dataIndex: 'payOutAmount',
				key: '代付金额',
			},
			{
				title: '申请入账银行卡号',
				dataIndex: 'bankAccount',
				key: '申请入账银行卡号',
			},
			{
				title: '操作',
				key: '操作',
				fixed: 'right',
				render: () => (
					<div>
						<Button>
							同意
						</Button>
						<Button>
							拒绝
						</Button>
					</div>
				)
			},
		]

	
	return(
		<div>
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
