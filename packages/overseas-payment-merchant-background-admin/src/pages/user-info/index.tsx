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
		getItem('API接口', '3'),
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
				<span>
					修改密码
				</span>
				<span>
					密码修改成功后需重新登录
				</span>
			</div>
			
			<div className={less.formContainer}>
				<span>
					旧密码
				</span>
				<Input/>
			</div>
			
			<div className={less.formContainer}>
				<span>
					新密码
				</span>
				<Input/>
			</div>
			
			<div className={less.formContainer}>
				<span>
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


// export const XInput = reaxper((props) =>{
//	
// 	const {Input} = antd
//	
// 	return(
// 		<div>
// 			<span>
// 				{props.title}
// 			</span>
// 			<Input/> 
// 		</div>
// 	)
// })


import MenuItem from "antd/es/menu/MenuItem";
import less from './index.module.less'
