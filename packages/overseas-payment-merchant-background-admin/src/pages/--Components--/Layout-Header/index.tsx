export const LayoutHeader = reaxper(() => {
	const { userInfo : { name } } = reaxel_user_info();
	const { Select } = antd;
	const { Option } = Select;
	return (
		<div className = { less.layoutHeader }>
			<HeaderLogo />
			<div className = { less.layoutHeaderRight }>
				<div className = { less.headerTime }>
					<TimeLogo />
					<span>巴西时区(UTC-3:00）</span>
				</div>
				<div className = { less.userSelect }>
					<ProfilePhoto />
					<Select
						defaultValue = { name }
						bordered = { false }
						className={less.selector}
						placement = "bottomRight"
						dropdownMatchSelectWidth={118}
					>
						<Option className={less.selectOption}>
							<UserSelectModifyPwd />
							<span>修改密码</span>
						</Option>
						<Option className={less.selectOption}>
							<UserSelectLogout />
							<span>退出登录</span>
						</Option>
					</Select>
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
import { reaxel_user_info } from '@@reaxels'