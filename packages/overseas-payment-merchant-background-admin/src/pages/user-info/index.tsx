export const UserInfo = reaxper(() =>{
	return(
		<div className={less.userSetting}>
			<Menu/>
			<div className={less.userSettingContent}>
				<ResetPassword/>
			</div>
		</div>
	)
})

export const Menu = reaxper(() =>{
	
	const {Menu} = antd
	
	type MenuItem = Required<MenuProps>['items'][number]
	
	function getItem(
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
	): MenuItem {
		return {
			key ,
			icon ,
			children ,
			label ,
		} as unknown as MenuItem;
	}
	
	const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
	
	const items: MenuItem[] = [
		getItem('基本信息', '1'),
		getItem('修改密码', '2'),
		getItem('API对接', '3'),
	] 
	
	return(
		<Menu
			style={{width: 208}}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['1']}
			mode={mode}
			items={items}
		/>
	)
})

export const ResetPassword = reaxper(() =>{
	
	const {Input, Button} = antd
	
	return(
		<div className={less.resetPasswordContainer}>
			<div className={less.resetTitle}>
				<span className={less.title}>
					修改密码
				</span>
				<span className={less.hint}>
					密码修改成功后需重新登录
				</span>
			</div>
			
			<div className={less.formContainer}>
				<span className={less.formTitle}>
					旧密码
				</span>
				<Input/>
			</div>
			
			<div className={less.formContainer}>
				<span className={less.formTitle}>
					新密码
				</span>
				
				<Input/>
			</div>
			
			<div className={less.formContainer}>
				<span className={less.formTitle}>
					再次输入密码
				</span>
				<Input/>
			</div>
			
			<Button type="primary">
				修改密码
			</Button>
		</div>
		
	)
})





// export const XTable = reaxper(() =>{
//	

// 	return(
// 		<div className={less.tableContainer}>
//			
//			
// 			<div className={less.searchContainer}>
// 				<QueryFilter  
// 					span={8}
// 					>
// 					<ProFormText placeholder={'搜索'}/>
// 					<ProFormDatePicker placeholder={'订单创建时间/*时间区间'} />
// 					<ProFormDatePicker placeholder={'订单更新时间/*时间区间/'}/>
// 					<ProFormSelect placeholder={'订单类型'}/>
// 					<ProFormSelect placeholder={'订单状态'}/>
// 				</QueryFilter>
// 			</div>
//			
// 			<Table 
// 				columns={columns} 
// 				dataSource={data}
// 				size="small"
// 				pagination={{
// 					pageSize: 10
// 				}}
// 				scroll={{ 
// 					x:1000
// 				}}
// 			/>
// 		</div>
// 	)
// })
 

import MenuItem from "antd/es/menu/MenuItem";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import less from './index.module.less'
import { render } from "react-dom";
import { MenuProps } from "antd";
