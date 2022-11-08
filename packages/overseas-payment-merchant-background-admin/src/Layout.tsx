export const Layout = reaxper(() => {

	const { isLoggedIn } = reaxel_user_auth();
	const { navigate , location , params } = toolkits.useRouter();
	
	


	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}
	
	const { Layout, Menu, Breadcrumb, Space } = antd;
	const { Header, Sider, Content } = Layout;
	
	
	return (
		<>
			<Layout>
				<LayoutHeader />
			</Layout>
			<Layout>
				<Sider
					style={{
						backgroundColor: '#ffffff',
					}}
				>
					<LayoutMenu />
				</Sider>
				<Content className={less.contentWrap}>
					<LayoutBreadCrumb/>
					<div className={less.contentGrayBg}>
						<div className={less.contentComponents}>
							<MainContentRouting />
						</div>
					</div>
				</Content>
			</Layout>
		</>
	);
});

export const LayoutMenu = reaxper(() => {
	const { navigate } = toolkits.useRouter();

	const { Menu } = antd;
	return (
		<div className={less.siderMenuContainer}>
			<Menu
				style={{
					height: '100%',
				}}
				items={items}
				onSelect={(e) => {
					navigate(e.key);
				}}
				mode="inline"
			/>
		</div>
	);
});

export const LayoutBreadCrumb = reaxper(() => {
	const { Space, Breadcrumb } = antd;
	const { navigate , params,  } = toolkits.useRouter();
	const path = params['*'].split('/');
	const pathName = params['*'];
	const routeName = {
		'profile' : '用户信息' ,
		'edit-profile': '编辑信息',
		'collection-order' : '代收订单',
		'payment-order' : '代付订单',
		'withdrawal-order' : '提现订单',
		'payment-mgnt' : '代付管理',
		'ops-record' : '操作日志',
		'overview' : '主页',
		'fin-detail' : '资金明细',
		'new-payment' : '新增代付',
	};
	if (!(pathName === 'overview' || pathName.includes('profile'))) {
		return (
			<Space direction="vertical" className={less.contentSpace}>
				<Breadcrumb>
					{path.length > 1 && path.map((item , index) => (
						<Breadcrumb.Item
							className={index !== path.length - 1 ? less.homeBreadCrumb : less.blueBreadCrumbItem}
							key={item}
							onClick={() => {
								navigate(`/${path.slice(0,index+1).join('/')}`)
							}}
						>{routeName[item]}</Breadcrumb.Item>
					))}
				</Breadcrumb>
				<div style={{display: 'flex', alignItems: 'center'}}>
					{path.length > 1 &&
						<div
							className={less.breadCrumbTitle}
							style={{display: 'flex'}}
							onClick={() => {
								const newPath = path
								newPath.pop()
								navigate(`/${newPath.join('/')}`)
							}}
						>
							<SvgLayoutHeaderBack/>
						</div>
					}
					<h2 style={{margin: 0}}>{routeName[path[path.length - 1]]}</h2>
				</div>
			</Space>
		)
		
	} else {
		return <></>
	}
})

import { reaxel_user_auth } from '@@reaxels';
import { MainContentRouting } from './Routing';
import { LayoutHeader } from './pages/--Components--/Layout-Header';
import {
	SVGMenuApiIcon ,
	SVGMenuOrderIcon ,
	SVGMenuOverviewIcon ,
	SVGMenuPayoutIcon ,
	SVGMenuProfileIcon ,
	SvgLayoutHeaderBack ,
	SvgMenuIconLogs ,
} from '@@SVGcomponents';
import { MenuProps } from 'antd';
import { Navigate } from 'react-router-dom';
import less from './styles/layout.module.less';

const getItem = (
	label: React.ReactNode,
	key: React.Key | null,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem => ({
	key,
	label,
	icon,
	children,
});
const items: MenuItem[] = [
	getItem('主页', 'overview', <SVGMenuOverviewIcon />),
	getItem('订单数据', 'order', <SVGMenuOrderIcon />, [
		getItem('代收订单', 'collection-order'),
		getItem('代付订单', 'payment-order'),
		getItem('提现订单', 'withdrawal-order'),
		getItem('充值订单', 'deposit-order'),
	]),
	getItem('代付管理', 'payment-mgnt', <SVGMenuPayoutIcon />),
	getItem('操作日志', 'ops-record', <SvgMenuIconLogs />),
	getItem('商户信息', 'profile', <SVGMenuProfileIcon />),
	getItem('API文档', 'api', <SVGMenuApiIcon />),
];
type MenuItem = Required<MenuProps>['items'][number];
