
export const Layout = reaxper(() => {
	const { isLoggedIn } = reaxel_user_auth();
	const { navigate , location } = toolkits.useRouter();
	
	if(!isLoggedIn){
		return <Navigate to = "/login" />;
	}
	
	const routeName = {
		'profile' : '用户信息' ,
		'edit': '编辑信息',
		'order': '订单数据'
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
	const { pathname } = location;
	const breadcrumbArr = breadcrumb();
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
					onSelect = { ({key}) => {
						// console.log(e.key);
						navigate(`${key}`);
					} }
				/>
			</Sider>
			<Content
				className={less.contentWrap}
			>
				{ !(
					pathname === '/home' || pathname === '/profile'
				) &&
					<Space
					direction = "vertical"
						className={less.contentSpace}
						
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
				<div className={less.contentGrayBg}>
					<div className={less.contentComponents}>
						<MainContentRouting />
					</div>
				
				</div>
			</Content>
		</Layout>
	
	</>;
});


import { Navigate } from 'react-router-dom';
import { reaxel_user_auth } from '@@reaxels';
import { MainContentRouting  } from './Routing';
import { LayoutHeader  } from './pages/--Components--/Layout-Header';
import less from './styles/layout.module.less';
import {
	MenuApiIcon ,
	MenuHomeIcon ,
	MenuOrderIcon ,
	MenuPayoutIcon ,
	MenuUserIcon ,
} from '@@SVGcomponents';
const menuItem = [
	{
		key : 'home' ,
		label : '主页' ,
		icon : <MenuHomeIcon /> ,
	} ,
	{
		key : 'order' ,
		label : '订单数据' ,
		icon : <MenuOrderIcon />,
	} ,
	{
		key : 'payout' ,
		label : '代付管理' ,
		icon : <MenuPayoutIcon />,
	} ,
	{
		key : 'profile' ,
		label : '商户信息' ,
		icon : <MenuUserIcon />,
	} ,
	{
		key : 'api' ,
		label : 'API文档' ,
		icon : <MenuApiIcon />,
	} ,
];
