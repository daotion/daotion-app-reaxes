export const Profile = reaxper(() => {
	
	return (
		<div className = { less.userSetting }>
			<Menu />
			<div className = { less.userSettingContent }>
				<ProfileRouting />
			</div>
		</div>
	);
});

const Menu = reaxper(() => {
	
	const { navigate , params } = toolkits.useRouter();
	
	const { Menu } = antd;
	return (
		<Menu
			style = { { width : 208 } }
			selectedKeys = {[params["*"]]}
			onSelect = { (e) => {
				navigate(e.key);
			} }
			items = { [
				{
					label : "基本信息" ,
					key : "base-info" ,
				},
				{
					label : "修改密码" ,
					key : "reset-pwd" ,
				},
				{
					label : "API对接" ,
					key : "API" ,
				},
			] }
		/>
	);
	type MenuItem = Required<MenuProps>['items'][number];
});

export const ResetPwd = reaxper(() =>{
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
						navigate('/Login')
					})
				}}
			>
				修改密码
			</Button>
		</div>
	)
})

export const ProfileInfo = reaxper(() => {
	const reax_user_info = reaxel_user_info();
	const {
		mchNo = '' ,
		name = '' ,
		contactPerson = '' ,
		contactPhone = '' ,
		payInFeeRate = 0 ,
		payInFeeFix = 0 ,
		payOutFeeRate = 0 ,
		payOutFeeFix = 0 ,
	} = reax_user_info.userInfo || {};
	const { Space, Col, Row } = antd;
	return (
		<div className={less.baseInfo}>
			<div className={less.infoItem} style={{marginTop: 0}}>
				<Col span={3}>商户ID：</Col>
				<Col>{mchNo}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>商户名称：</Col>
				<Col>{name}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>联系人：</Col>
				<Col>{contactPerson}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>Telegram：</Col>
				<Col>{contactPhone}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代收手续费率：</Col>
				<Col>{payInFeeRate}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代收单笔固定手续费：</Col>
				<Col>{payInFeeFix}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代付手续费率：</Col>
				<Col>{payOutFeeRate}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代付单笔固定手续费：</Col>
				<Col>{payOutFeeFix}</Col>
			</div>
		</div>
	)
})

export const ProfileApi = reaxper(() => {
	const badge = useRef(Math.random())
	const { Space, Col, Row, Button } = antd;
	const {closuredFetchApiConfig,apiConfig} = reaxel_user_info();
	
	closuredFetchApiConfig(badge.current);
	
	const {
		mchKey = '' ,
		platformIPS = '' ,
		payInCallback = '' ,
		payOutCallback = '' ,
		payOutWhitelist = [] ,
		withdrawAdd = '' ,
	} = apiConfig;
	return (
		<div className = { less.baseInfo }>
			<div
				className = { less.infoItem }
				style = { { marginTop : 0 } }
			>
				<Col span = { 6 }>商户Key：</Col>
				<Col>{ mchKey }</Col>
			</div>
			<div className = { less.infoItem }>
				<Col span = { 6 }>平台IP：</Col>
				<Col>{ platformIPS }</Col>
			</div>
			<div className = { less.infoItem }>
				<Col span = { 6 }>代收回调url：</Col>
				<Col span = { 6 }>{ payInCallback }</Col>
				<Col>
					<Button type="link">设置</Button>
				</Col>
			</div>
			<div className = { less.infoItem }>
				<Col span = { 6 }>代付回调url：</Col>
				<Col span = { 6 }>{ payOutCallback }</Col>
				<Col>
					<Button type="link">设置</Button>
				</Col>
			</div>
			<div className = { less.infoItem }>
				<Col span = { 6 }>
					<p>代付白名单IP：</p>
					<p className={less.declare}>如果有设置，平台只接收来自白名单ip地址的代付请求。</p>
				</Col>
				<Col span = { 6 }>{ payOutWhitelist.map((i) => <span key = { i }>{ i};</span>) }</Col>
				<Col>
					<Button type="link">设置</Button>
				</Col>
			</div>
			<div className = { less.infoItem }>
				<Col span = { 6 }>提现地址(TRC-20)：</Col>
				<Col span = { 6 }>{ withdrawAdd }</Col>
				<Col>
					<Button type="link">设置</Button>
				</Col>
			</div>
		</div>
	);
});


import {
	reaxel_user_info ,
	reaxel_edit_info,
} from '@@reaxels';
import { time_localize_Brazil } from '#toolkits/overseas-payment';
import { ProfileRouting } from '@@pages/../Routing';
import {
	Button ,
	MenuProps,
} from "antd";
import less from './index.module.less';
