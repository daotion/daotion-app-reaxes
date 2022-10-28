export const Login = reaxper(() =>{
	return(
		<div className={less.loginWrapper} style={{
			backgroundImage: `url(${login_backgound_image})`
		}}>
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
	// const {
	// 	navigate,
	// } = toolkits.useRouter();
	const { Input, Button } = antd;
	const { loginAction, store, loginInput } = reaxel_user_login()
	const { loginData: {userName = '', password = ''} } = store;
	return (
		<div className = { less.signInFormWrapper }>
			<h2 className = { less.formTitle }>
				Login to your acount
			</h2>
			<div className = { less.inputSection }>
				<div className = { less.accountInput }>
					<span className = { less.accountInputTitle }>
						账号
					</span>
					<Input
						value = { userName }
						onChange = { (e) => {
							loginInput('userName' , e.target.value);
						} }
					/>
				</div>
				<div className = { less.passwordInput }>
					<span className = { less.passwordInputTitle }>
						密码
					</span>
					<Input
						type = { 'password' }
						value = { password }
						onChange={(e) => {
							loginInput('password' , e.target.value);
						}}
					/>
				</div>
			</div>
			<Button
				type = "primary"
				onClick={() => {
					loginAction(() => {
						// navigate('/home')
						console.log('login success and navigate');
					})
				}}
			>
				登录
			</Button>
		</div>
	);
})

import less from './index.module.less'
import {
	LoginLogo,
} from '@@SVGcomponents';
import { reaxel_user_login } from '@@reaxels';
import login_backgound_image from '@@public/statics/login-background.png'
