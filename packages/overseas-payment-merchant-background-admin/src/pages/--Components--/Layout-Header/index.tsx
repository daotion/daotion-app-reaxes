export const LayoutHeader = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const reax_user_info = reaxel_user_info();
	
	const { logout } = reaxel_user_auth();
	const { Select , Dropdown ,Menu} = antd;
	
	return (
		<div className = { less.layoutHeader }>
			<HeaderLogo />
			<div className = { less.layoutHeaderRight }>
				<div className = { less.headerTime }>
					<TimeLogo />
					<span>巴西时区(UTC-3:00）</span>
				</div>
				<div className = { less.userSelect }>
					
					
					<Dropdown 
						overlay={<Menu
							items={[
								{
									label : <span 
										className={less.resetPwd}
										onClick = { () => {
										navigate('/profile/reset-pwd');
									} }>
										<UserSelectModifyPwd />
										<span>修改密码</span>
									</span>,
									key : "change-pwd",
								},
								{
									label : <span 
										className={less.logout}
										onClick = { () => {
										logout();
									} }>
										<UserSelectLogout />
										<span>退出登录</span>
									</span>,
									key : "logout",
								},
							]}
						/>
					}
						
					><a 
						className={less.userInfo}
						onClick={e => e.preventDefault()}>
						<ProfilePhoto />
						{reax_user_info?.userInfo?.name || 'mozi'}
						<DownOutlined />
					</a></Dropdown>
				</div>
			</div>
		</div>
	);
})

import less from './index.module.less'
import {
	HeaderLogo ,
	TimeLogo ,
	ProfilePhoto,
	UserSelectModifyPwd,
	UserSelectLogout
} from '@@SVGcomponents';
import {
	reaxel_user_info ,
	reaxel_user_auth,
} from '@@reaxels';
import {DownOutlined} from '@ant-design/icons'
