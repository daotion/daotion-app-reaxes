export const Login = reaxper(() => {
	return (
		<div
			className = { less.loginWrapper }
			style = { {
				backgroundImage : `url(${ img_login_background })` ,
			} }
		>
			<div className = { less.loginContent }>
				<div className = { less.loginTitle }>
					<LoginLogo />
				</div>
				<SignInForm />
			</div>
		</div>
	);
});

export const SignInForm = reaxper(() => {
	// const {
	// 	navigate,
	// } = toolkits.useRouter();
	const { Input , Button } = antd;
	const { loginAction , store , setFields } = reaxel_user_login();
	const { input_username , input_password } = store;
	return (
		<div className = { less.signInFormWrapper }>
			<h2 className = { less.formTitle }>Login to your acount</h2>
			<div className = { less.inputSection }>
				<div className = { less.accountInput }>
					<p className = { less.accountInputTitle }>账号</p>
					<Input
						value = { input_username }
						onChange = { (e) => {
							setFields({ input_username : e.target.value });
						} }
					/>
				</div>
				<div className = { less.passwordInput }>
					<p className = { less.passwordInputTitle }>密码</p>
					<Input
						type = { 'password' }
						value = { input_password }
						onChange = { (e) => {
							setFields({ input_password : e.target.value });
						} }
					/>
				</div>
			</div>
			<Button
				type = "primary"
				onClick = { () => {
					loginAction(() => {
						// navigate('/home')
						console.log('Login success and navigate');
					});
				} }
			>
				登录
			</Button>
		</div>
	);
});

import less from './index.module.less';
import { LoginLogo } from '@@SVGcomponents';
import img_login_background from '@@public/statics/login-background.png';
import { reaxel_user_login } from '@@reaxels';
