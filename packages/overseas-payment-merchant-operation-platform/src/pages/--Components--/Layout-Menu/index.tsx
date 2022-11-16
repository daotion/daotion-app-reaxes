export const LayoutMenu = reaxper(() => {
	const { navigate , params } = toolkits.useRouter();
	
	const openKeys = recursive(menulist , params['*'].split('/').pop());
	
	const { Menu } = antd;
	return (
		<div className = { less.siderMenuContainer }>
			<Menu
				style = { {
					height : '100%' ,
				} }
				selectedKeys = { params['*'].split('/') }
				items = { menulist }
				defaultOpenKeys = { openKeys }
				onSelect = { (e) => {
					navigate(e.key);
				} }
				mode = "inline"
			/>
		</div>
	);
});

const recursive = (list,subKey) => {
	for(const item of list){
		if(item.children){
			if(item.children.find(({key}) => subKey)){
				return [item.key];
			}
		}
	}
	return [];
};

const menulist:ItemType[] = [
	{
		label:"主页",
		key : "overview",
		icon : <SVGMenuOverviewIcon />,
	},
	{
		label:"订单数据",
		key : "order",
		icon : <SVGMenuOrderIcon />,
		children : [
			{
				label:"代收订单",
				key : 'collection-order',
			},
			{
				label:"代付订单",
				key : 'payment-order',
			},
			{
				label:"提现订单",
				key : 'withdrawal-order',
			},
			{
				label:"充值订单",
				key : 'deposit-order',
			},
		],
	},
	{
		label:"商户提现申请",
		key : "mch-withdraw-rqst",
		icon : <SVGMenuIconWithdrawalApply />,
	},
	{
		label:"商户充值申请",
		key : "mch-deposit-rqst",
		icon : <SVGMenuIconDepositApply />,
	},
	{
		label:"商户管理",
		key : "mch-mgnt",
		icon : <SVGMenuIconMerchantMgnt />,
	},
	{
		label:"成员管理",
		key : "user-mgnt",
		icon : <SVGMenuIconUserMgnt />,
	},
	{
		label:"系统设置",
		key : "setting",
		icon : <SVGMenuIconSetting />,
	},
];

import {
	SVGMenuIconSetting ,
	SVGMenuOrderIcon ,
	SVGMenuOverviewIcon ,
	SVGMenuIconDepositApply ,
	SVGMenuIconMerchantMgnt ,
	SVGMenuIconWithdrawalApply ,
	SVGMenuIconUserMgnt
} from '@@SVGcomponents';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import less from '@@root/src/styles/layout.module.less';
