
import {useNavigate , Navigate} from 'react-router-dom';
export const Layout = reaxper(() => {
	const { isLoggedIn } = reaxel_user_auth();
	const { navigate , location } = toolkits.useRouter();
	
	if(!isLoggedIn){
		return <Navigate to = "/login" />;
	}
	
	const routeName = {
		'profile' : '用户信息' ,
		'edit' : '编辑信息',
	};
	const breadcrumb = () => {
		const pathArr = pathname.split('/').slice(1);
		return pathArr.map((i) => {
			return {
				key : i ,
				name : routeName[i],
			};
		});
	};
	const breadcrumbArr = breadcrumb();
	const { pathname } = location;
	const { Layout , Menu , Breadcrumb , Space } = antd;
	const { Header , Sider , Content } = Layout;
	return <>
		<Layout>
			<LayoutHeader />
		</Layout>
		<Layout>
			<Sider
				style = { {
					backgroundColor : '#ffffff' ,
					
				} }
			>
				<Menu
					style = { {
						height : '100%' ,
					} }
					items = { menuItem }
					onSelect = { (e) => {
						navigate(e.key);
						
					} }
				/>
			</Sider>
			<Content
				style = { {
					backgroundColor : '#c2c2c2' ,
					height : 'calc(100vh - 48px)' ,
					overflowY : 'hidden' ,
				} }
			>
				{ !(
					pathname === '/home' || pathname === '/profile'
				) && <Space
					direction = "vertical"
					style = { {
						width : '100%' ,
						height : '98px' ,
						backgroundColor : '#ffffff' ,
						padding : '16px 32px' ,
					} }
				>
					<Breadcrumb>
						{ breadcrumbArr.map((i) => (
							<Breadcrumb.Item key = { i.key }>
								{ i.name }
							</Breadcrumb.Item>
						)) }
					
					</Breadcrumb>
					<h2>{ breadcrumbArr[breadcrumbArr.length - 1].name }</h2>
				</Space> }
				<div
					style = { {
						width : '100%' ,
						padding : '24px' ,
					} }
				>
					<div
						style = { {
							width : '100%' ,
							height : 'fit-content' ,
							backgroundColor : '#ffffff' ,
							borderRadius : '8px' ,
							overflow : 'hidden' ,
							
						} }
					>
						
						<MainContentRouting />
					
					</div>
				
				</div>
			</Content>
		</Layout>
	
	</>;
});
const menuItem = [
	{
		key : 'home' ,
		label : '主页' ,
		icon : <MenuHomeIcon /> ,
	} ,
	{
		key : 'order ' ,
		label : '订单数据' ,
		icon : <MenuOrderIcon />,
	} ,
	{
		key : 'payout ' ,
		label : '代付管理' ,
		icon : <MenuPayoutIcon />,
	} ,
	{
		key : 'profile' ,
		label : '商户信息' ,
		icon : <MenuUserIcon />,
	} ,
	{
		key : 'api ' ,
		label : 'API文档' ,
		icon : <MenuApiIcon />,
	} ,
];

import {reaxel_user_auth} from '@@reaxels';
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
	MenuUserIcon ,
} from '@@SVGcomponents';
