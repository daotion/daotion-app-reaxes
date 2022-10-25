export const Login = reaxper(() =>{
	return(
		<div className={less.loginWrapper}>
			<div className={less.loginContent}>
				<div className={less.loginTitle}>
					<LoginLogo/>
				</div>
				<SignInForm/>
			</div>
		</div>
	)
})


export const SignInForm = reaxper(() =>{
	return(
		<div className={less.signInFormWrapper}>
			<h2 className={less.formTitle}>
				Login to your acount
			</h2>
			<div className={less.inputSection}>
				<div className={less.accountInput}>
					<p className={less.accountInputTitle}>
						账号
					</p>
					<Input/>
				</div>
				<div className={less.passwordInput}>
					<p className={less.passwordInputTitle}>
						密码
					</p>
					<Input/>
				</div>
			</div>
			<Button type="primary">
				登录
			</Button>
		</div>
	)
})

import React from 'react'
import less from './index.module.less'
import {
	LoginLogo,
} from '@@SVGcomponents';
import {
	Input,
	Button,
} from 'antd'
