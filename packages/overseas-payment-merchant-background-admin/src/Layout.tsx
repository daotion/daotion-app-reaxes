const menuItem = [
	{
		key : 'home' ,
		label : '主页' ,
		icon : <MenuHomeIcon/>,
	},
	{
		key : 'order ' ,
		label : '订单数据' ,
		icon: <MenuOrderIcon/>
	},
	{
		key : 'payout ' ,
		label : '代付管理' ,
		icon: <MenuPayoutIcon/>
	},
	{
		key : ' userInfo' ,
		label : '商户信息' ,
		icon: <MenuUserIcon/>
	},
	{
		key : 'api ' ,
		label : 'API文档' ,
		icon : <MenuApiIcon/>
	},
];

export const Layout = reaxper(() => {
	const { Layout, Menu, Breadcrumb, Space }  = antd;
	const { Header, Sider, Content }  = Layout
	const { location } = toolkits.useRouter();
	const {  pathname } = location;
	const routeName = {
		'profile': '用户信息',
		'edit': '编辑信息'
	};
	const breadcrumb = () => {
		const pathArr = pathname.split('/').slice(1);
		return pathArr.map((i) => {
			return {
				key: i,
				name: routeName[i]
			}
		})
	}
	const breadcrumbArr = breadcrumb()
	return <>
		<Layout>
				<LayoutHeader/>
		</Layout>
		<Layout>
			<Sider
				style={{
					backgroundColor : '#ffffff',
					
				}}
			>
				<Menu
					style={{
						height : '100%',
						borderRight: '0'
					}}
					items={menuItem}
				/>
			</Sider>
			<Content
				style={{
					backgroundColor : '#C2C2C2',
					height : 'calc(100vh - 48px)',
					overflowY : 'hidden',
				}}
			>
				<Space
					direction="vertical"
					style={{
						width : '100%',
						height : '98px',
						backgroundColor : '#fff',
						padding : '16px 32px',
					}}
				>
					<Breadcrumb>
						{breadcrumbArr.map((i) =>(
							<Breadcrumb.Item key ={i.key }>
								{i.name}
							</Breadcrumb.Item>
						))}
					
					</Breadcrumb>
					<h2>{breadcrumbArr[breadcrumbArr.length - 1].name}</h2>
				</Space>
				
				<MainContentRouting/>
			</Content>
		</Layout>
		
	</>;
} );


import {
	MainContentRouting ,
} from './Routing';
import {
	LayoutHeader ,
} from './pages/--Components--/Layout-Header';
import less from './styles/main.module.less';
import {
	MenuApiIcon ,
	MenuHomeIcon ,
	MenuOrderIcon ,
	MenuPayoutIcon ,
	MenuUserIcon,
} from '@@SVGcomponents';