export const Profile = reaxper(() => {
	
	return (
		<div className = { less.profile }>
			<Menu />
			<div className = { less.profileContent }>
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
	const reax_edit_info = reaxel_edit_info();
	const {
		setStatePwd ,
		resetPwdStore ,
		modifyPwd,
	} = reax_edit_info;
	const { message } = antd;
	const submitPwd = () => {
		if (resetPwdStore.oldPassword === '' || resetPwdStore.newPassword === '' || resetPwdStore.checkPassword === '') {
			message.error('输入不能为空')
		} else if (resetPwdStore.newPassword !== resetPwdStore.checkPassword) {
			message.error('确认密码不一致')
		} else {
			modifyPwd()
		}
	}
	return(
		<div className={less.resetPasswordContainer}>
			<div className={less.resetTitle}>
				<span className={less.title}>
					修改密码
				</span>
				<span>
					密码修改成功后需重新登录
				</span>
			</div>
			<div className={less.formContainer}>
				<span className={less.formTitle}>
					旧密码
				</span>
				<Input
					value={resetPwdStore.oldPassword}
					onChange={(e) => {
						setStatePwd({
							oldPassword: e.target.value
						})
					}}
					type='password'
				/>
			</div>
			<div className={less.formContainer}>
				<span className={less.formTitle}>
					新密码
				</span>
				<Input
					value={resetPwdStore.newPassword}
					onChange={(e) => {
						setStatePwd({
							newPassword: e.target.value
						})
					}}
					type='password'
				/>
			</div>
			<div className={less.formContainer}>
				<span className={less.formTitle}>
					再次输入密码
				</span>
				<Input
					value={resetPwdStore.checkPassword}
					onChange={(e) => {
						setStatePwd({
							checkPassword: e.target.value
						})
					}}
					type='password'
				/>
			</div>
			<Button
				type="primary"
				loading={resetPwdStore.pending}
				onClick={() => {
					submitPwd()
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
			<div className={less.baseInfoTitle}>
				基本信息
			</div>
			<div className={less.infoItem} style={{marginTop: 0}}>
				<Col span={3}>商户ID</Col>
				<Col>{mchNo}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>商户名称</Col>
				<Col>{name}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>联系人</Col>
				<Col>{contactPerson}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>Telegram</Col>
				<Col>{contactPhone}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代收手续费率</Col>
				<Col>{payInFeeRate}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代收单笔固定手续费</Col>
				<Col>{payInFeeFix}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代付手续费率</Col>
				<Col>{payOutFeeRate}</Col>
			</div>
			<div className={less.infoItem}>
				<Col span={3}>代付单笔固定手续费</Col>
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
	const reax_edit_info = reaxel_edit_info();
	const {
		mchKey = '' ,
		platformIPS = '' ,
		payInCallback = '' ,
		payOutCallback = '' ,
		payOutWhitelist = [] ,
		address = '' ,
	} = apiConfig;

	return (
		<>
			<div className = { less.baseInfo }>
				<div className={less.baseInfoTitle}>
					API对接
				</div>
				<div
					className = { less.infoItem }
					style = { { marginTop : 0 } }
				>
					<Col span = { 6 }>商户Key：</Col>
					<Col style={{
						display: 'flex',
						alignItems: 'center'
					}}>{ mchKey }<CopyBtn/></Col>
				</div>
				<div className = { less.infoItem }>
					<Col span = { 6 }>平台IP</Col>
					<Col>{ platformIPS }</Col>
				</div>
				<div className = { less.infoItem }>
					<Col span = { 6 }>代收回调url</Col>
					<Col span = { 6 }>{ payInCallback }</Col>
					<Col>
						<Button type="link" onClick={() => {reax_edit_info.showModal('payInCallback')}}>设置</Button>
					</Col>
				</div>
				<div className = { less.infoItem }>
					<Col span = { 6 }>代付回调url</Col>
					<Col span = { 6 }>{ payOutCallback }</Col>
					<Col>
						<Button type="link" onClick={() => {reax_edit_info.showModal('payOutCallback')}}>设置</Button>
					</Col>
				</div>
				<div className = { less.infoItem }>
					<Col span = { 6 }>
						<p>代付白名单IP</p>
						<p className={less.declare}>如果有设置，平台只接收来自白名单ip地址的代付请求。</p>
					</Col>
					<Col span = { 6 }>{ payOutWhitelist.map((i) => <span key = { i }>{ i};</span>) }</Col>
					<Col>
						<Button type="link" onClick={() => {reax_edit_info.showModal('payOutWhitelist')}}>设置</Button>
					</Col>
				</div>
				<div className = { less.infoItem }>
					<Col span = { 6 }>提现地址(TRC-20)</Col>
					<Col span = { 6 }>{ address }</Col>
					<Col>
						<Button type="link" onClick={() => {reax_edit_info.showModal('address')}}>设置</Button>
					</Col>
				</div>
			</div>
			<SetApiModal/>
		</>
	);
});

const SetApiModal = reaxper(() => {
	const { Modal, Input, Button } = antd;
	const reax_edit_info = reaxel_edit_info();
	const { setApiStore } = reax_edit_info;
	const {
		apiSetModalKey = '',
	} = setApiStore;
	const modalContent = {
		'payInCallback' : {
			title : '设置代收回调url' ,
			subTitle : '代收回调 url' ,
			value : setApiStore.payInCallback,
			
		},
		'payOutCallback' : {
			title : '设置代付回调url' ,
			subTitle : '代付回调url' ,
			value : setApiStore.payOutCallback,
		},
		'payOutWhitelist' : {
			title : '设置代付白名单 ' ,
			subTitle : '代付白名单IP ' ,
			memo : '如多个IP,每个IP之间用英文;隔开。如果有设置，平台只接收来自白名单中的IP地址的代付请求。' ,
			value : setApiStore.payOutWhitelist,
		},
		'address' : {
			title : '设置提现地址' ,
			subTitle : 'TRC-20地址' ,
			memo : '请确保输入正确的地址',
			value : setApiStore.address,
		},
		
	}
	return (
		<Modal
			className={less.setApiModal}
			visible = { setApiStore.apiSetModalShow }
			title = { modalContent[apiSetModalKey].title }
			footer = { null }
			closable={false}
			width={380}
		>
			<div className={less.setApiModalContainer}>
				<div className={less.inputForm}>
					<span>{ modalContent[apiSetModalKey].subTitle }</span>
					<Input
						value = {modalContent[apiSetModalKey].value}
						onChange={(e) => {
							reax_edit_info.setStateApi({
								[apiSetModalKey]: e.target.value
							})
						}}
					/>
					<span className={less.desc}>
						{ modalContent[apiSetModalKey].memo }
					</span>
				</div>
				<div className={less.btnSection}>
					<Button type = "primary" onClick={() => {
						reax_edit_info.setApiConfig()
					}}>提交</Button>
					<Button onClick={() => {
						reax_edit_info.setStateApi({
							apiSetModalShow: false
						})
					}}>取消</Button>
				</div>
			</div>
		</Modal>
	);
})



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
import {CopyBtn} from '@@SVGcomponents'
