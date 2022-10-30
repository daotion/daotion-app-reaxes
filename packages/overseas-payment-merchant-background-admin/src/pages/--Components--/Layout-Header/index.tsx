export const LayoutHeader = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const { userInfo : { name } } = reaxel_user_info();
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
									label : <span onClick = { () => {
										navigate('/profile/reset-pwd');
									} }>
										<UserSelectModifyPwd />
										<span>修改密码</span>
									</span>,
									key : "change-pwd",
								},
								{
									label : <span onClick = { () => {
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
						
					><a onClick={e => e.preventDefault()}>
						<ProfilePhoto />
						Mozi
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
