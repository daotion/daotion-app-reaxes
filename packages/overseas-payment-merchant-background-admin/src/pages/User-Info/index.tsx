
export const UserInfo = reaxper(() =>{
	const { currentTab } = reaxel_user_info()
	
	return(
		<div className={less.userSetting}>
			<Menu/>
			<div className={less.userSettingContent}>
				{currentTab === 'modifyPassword' && <ResetPassword/>}
				{currentTab === 'userInfo' && <UserBaseInfo/> }
			</div>
		</div>
	)
})

export const Menu = reaxper(() =>{
	const { Menu } = antd;
	type MenuItem = Required<MenuProps>['items'][number];
	const { currentTab , changeTab } = reaxel_user_info();
	function getItem(
		label: React.ReactNode,
		key?: React.Key | null,
	): MenuItem {
		return {
			key ,
			label ,
		} as unknown as MenuItem;
	}
	const items: MenuItem[] = [
		getItem('基本信息', 'userInfo'),
		getItem('修改密码', 'modifyPassword'),
		getItem('API对接', 'api'),
	] 
	
	return(
		<Menu
			style={{width: 208}}
			defaultSelectedKeys={[currentTab]}
			selectedKeys={[currentTab]}
			onSelect={(e) => {
				changeTab(e.key)
			}}
			items={items}
		/>
	)
})

export const ResetPassword = reaxper(() =>{
	const { navigate } = toolkits.useRouter();
	const { Input , Button } = antd;
	const { modifyPassword , onModifyInput , inputSet } = reaxel_edit_info();
	const inputs = [
		{
			key : 'oldPassword' ,
			name : '旧密码' ,
			
		},
		{
			key : 'newPassword' ,
			name : '新密码' ,
			
		},
		{
			key : 'checkPassword' ,
			name : '再次输入密码' ,
			
		},
	];
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
			
			{inputs.map((i) => {
				const { key, name } = i
				return (
					<div className={less.formContainer} key={key}>
						<span className={less.formTitle}>
							{name}
						</span>
						<Input
							value={inputSet[key].value}
							status={inputSet[key].check}
							onChange={(e) => {
								onModifyInput(key, e.target.value)
							}}
							type='password'
						/>
					</div>
				)
			})}
			<Button
				type="primary"
				onClick={() => {
					modifyPassword(() => {
						navigate('/login')
					})
				}}
			>
				修改密码
			</Button>
		</div>
	)
})

export const UserBaseInfo = reaxper(() => {
	const { userInfo , showBaseInfo } = reaxel_user_info();
	const { Space, Col, Row } = antd;
	return (
		<div className={less.baseInfo}>
			{showBaseInfo.map((i) => (
				<Row key={i.key} gutter={[12, 24]}>
					<Col span={3}>{i.label}：</Col>
					<Col>{i.value}</Col>
				</Row>
			))}
		
		</div>
	)
})





import less from './index.module.less'
import {  reaxel_user_info, reaxel_edit_info } from '@@reaxels'
import { MenuProps } from "antd";
