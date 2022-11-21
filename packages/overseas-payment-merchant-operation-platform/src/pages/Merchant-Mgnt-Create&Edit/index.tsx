
export const MerchantMgntEdit = reaxper(() => {
	const { params } = toolkits.useRouter();
	console.log(params);
	/*@ts-ignore*/
	const { submit } = reaxel_mch_COE(params)();
	const { setFields , state$mchCNE , reset , closFetchSellerList, sallers} = reaxel_ctrl();
	
	
	
	useEffect(() => reset , []);
	
	if(!sallers){
		closFetchSellerList(() => [NaN])();
		/*todo: prefer me! */
		return <span>loading...</span>;
	}
	
	const { Form , Input , Select , Space , Row , Col , Button , Switch,Spin } = antd;
	const { Option } = Select;
	return (
		<div className = { less.editContainer }>
			<Form
				layout = "vertical"
				labelCol = { {
					offset : 8 ,
				} }
				wrapperCol = { {
					span : 8 ,
					offset : 8 ,
				} }
			>
				<Form.Item label = "商户名">
					<Input
						value = { state$mchCNE.name }
						onChange = { (e) => {
							setFields({
								name : e.target.value ,
							});
						} }
						size = "large"
					/>
				</Form.Item>
				<Form.Item label = "登录密码">
					<Input
						size = "large"
						value = { state$mchCNE.password }
						onChange = { (e) => {
							setFields({
								password : e.target.value ,
							});
						} }
					/>
				</Form.Item>
				<Form.Item>
					<div style = { { display : 'flex' , justifyContent : 'space-between' } }>
						<Form.Item
							label = "联系人"
							style = { { marginBottom : '0' } }
						>
							<Input
								value = { state$mchCNE.contactPerson }
								onChange = { (e) => {
									setFields({
										contactPerson : e.target.value ,
									});
								} }
								size = "large"
							/>
						</Form.Item>
						<Form.Item
							label = "Telegram"
							style = { { marginBottom : '0' } }
						>
							<Input
								value = { state$mchCNE.contactPhone }
								size = "large"
								onChange = { (e) => {
									setFields({
										contactPhone : e.target.value ,
									});
								} }
							/>
						</Form.Item>
					</div>
				</Form.Item>
				<Form.Item label = "商务">
					<Select
						value = { state$mchCNE.sellerID }
						onChange = { (value, option) => {
							setFields({
								sellerID : value ,
							});
						} }
						size = "large"
					>
						{sallers.map(({name,id,phone}) =>{
							return <Option
								key = {id}
							>{name}</Option>;
						})}
					</Select>
				</Form.Item>
				<Form.Item label = "代收手续费设置">
					<div className = { less.changeSet }>
						<span>基本设置</span>
						<Button
							
						>
							<SVGChargeSetExchange />
						</Button>
					</div>
					<MchCharge_payIn/>
				</Form.Item>
				<Form.Item label = "代付款手续费设置">
					<div className = { less.changeSet }>
						<span>基本设置</span>
						<Button>
							<SVGChargeSetExchange />
						</Button>
					</div>
					{/*<ChargeBaseSet/>*/ }
					<ChargeSeniorSet />
				</Form.Item>
				<Form.List
					name = { 'whiteList' }
					initialValue = { [ '1' , '2' , '3' ] }
				>
					{ (fields , { add , remove }) => (
						<>
							{ fields.map((field , index) => (
								<Form.Item
									label = { index === 0 ? '配置IP白名单' : '' }
									key = { Math.random() }
								>
									<div style = { { display : 'flex' } }>
										<Input />
										<Button style = { { display : 'inline' , marginLeft : '8px' } }>
											<MinusOutlined />
										</Button>
									</div>
								</Form.Item>
							)) }
						</>
					) }
				</Form.List>
				<Form.Item>
					<Button
						type = "dashed"
						onClick = { () => {} }
						block
						icon = { <PlusOutlined /> }
					>
						添加IP地址
					</Button>
				</Form.Item>
				<Form.Item>
					<div className = { less.mchSwitch }>
						<span>商户状态</span>
						<Switch />
					</div>
				</Form.Item>
				<Form.Item>
					<div className = { less.mchSwitch }>
						<span>商户代收状态</span>
						<Switch />
					</div>
				</Form.Item>
				<Form.Item>
					<div className = { less.mchSwitch }>
						<span>商户代付状态</span>
						<Switch />
					</div>
				</Form.Item>
				<Form.Item>
					<Button
						onClick = { () => {
							submit();
						} }
						type = "primary"
						size = "large"
						style = { { width : '100%' } }
					>
						提交
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
});

export const ChargeBaseSet = reaxper(() => {
	const { Input } = antd;
	return (
		<div style = { { display : 'flex' , justifyContent : 'space-between' , gap : '16px' } }>
			<Input placeholder = { '固定手续费R$' } />
			<Input
				placeholder = { '手续费率' }
				suffix = "%"
			/>
		</div>
	);
});

export const ChargeSeniorSet = reaxper(() => {
	const { Input } = antd;
	return (
		<div className = { less.chargeSeniorSet }>
			<div className = { less.setSide }>
				<Input placeholder = { '固定手续费R$' } />
				<Input
					placeholder = { '手续费率' }
					suffix = "%"
				/>
			</div>
			<div>
				<Input
					className = { less.feeInput }
					placeholder = { '金额R$' }
					prefix = "<"
					suffix = "≤"
				/>
			</div>
			<div className = { less.setSide }>
				<Input placeholder = { '固定手续费R$' } />
				<Input
					placeholder = { '手续费率' }
					suffix = "%"
				/>
			</div>
		</div>
	);
});

const MchCharge_payIn = reaxper(() => {
	const { state$mchCNE : { payIn } , setFields } = reaxel_ctrl();
	
	const { Input } = antd;
	if(payIn.mode === "basic"){
		return <div style = { { display : 'flex' , justifyContent : 'space-between' , gap : '16px' } }>
			<Input placeholder = { '固定手续费R$' } />
			<Input
				placeholder = { '手续费率' }
				suffix = "%"
			/>
		</div>;
	}else if(payIn.mode === "advanced") {
		return <div className = { less.chargeSeniorSet }>
			<div className = { less.setSide }>
				<Input placeholder = { '固定手续费R$' } />
				<Input
					placeholder = { '手续费率' }
					suffix = "%"
				/>
			</div>
			<div>
				<Input
					className = { less.feeInput }
					placeholder = { '金额R$' }
					prefix = "<"
					suffix = "≤"
				/>
			</div>
			<div className = { less.setSide }>
				<Input placeholder = { '固定手续费R$' } />
				<Input
					placeholder = { '手续费率' }
					suffix = "%"
				/>
			</div>
		</div>;
	}
});


const reaxel_mch_COE = function(){
	return (param) => {
		param = param['*'].split('/').pop();
		if(param === "open-account"){
			return reaxel_mch_open_account
		}else if(param === "edit-cfg"){
			return reaxel_edit_mch_cfg
		}
	}
}();
import { reaxel_ctrl } from './reaxel--mch-ctrl';
import { reaxel_edit_mch_cfg } from './reaxel--edit-mch-cfg';
import { reaxel_mch_open_account } from './reaxel--mch-open-account';
import {
	PlusOutlined ,
	MinusOutlined,
} from '@ant-design/icons';
import {
	SVGChargeSetExchange ,
	SVGChargeSetBack,
} from '@@SVGcomponents';
import less from './index.module.less';
