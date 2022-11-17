export const MerchantMgntEdit = reaxper(() => {
	const { Form, Input, Select, Space, Row, Col, Button, Switch } = antd;
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
					<Input size = "large" />
				</Form.Item>
				<Form.Item label = "登录密码">
					<Input size = "large" />
				</Form.Item>
				<Form.Item>
					<div style={{display: 'flex', justifyContent: 'space-between'}}>
						<Form.Item label = "联系人" style={{marginBottom: '0'}}>
							<Input size = "large" />
						</Form.Item>
						<Form.Item label = "Telegram" style={{marginBottom: '0'}}>
							<Input size = "large" />
						</Form.Item>
					</div>
				</Form.Item>
				<Form.Item label = "商务">
					<Select size = "large"></Select>
				</Form.Item>
				<Form.Item label='代收手续费设置'>
					<div className={less.changeSet}>
						<span>基本设置</span>
						<Button>
							<SVGChargeSetExchange/>
						</Button>
					</div>
					{/*<ChargeBaseSet/>*/}
					<ChargeSeniorSet/>
				</Form.Item>
				<Form.Item label='代付款手续费设置'>
					<div className={less.changeSet}>
						<span>基本设置</span>
						<Button>
							<SVGChargeSetExchange/>
						</Button>
					</div>
					{/*<ChargeBaseSet/>*/}
					<ChargeSeniorSet/>
				</Form.Item>
				<Form.List
					name = { 'whiteList' }
					initialValue = { [
						'1' , '2' , '3',
					] }
				>
					{ (fields , { add , remove }) => (
						<>
							{ fields.map((field , index) => (
								<Form.Item
									label = { index === 0 ? '配置IP白名单' : '' }
								>
									<div style = { { display : 'flex' } }>
										<Input />
										<Button style = { { display : 'inline', marginLeft: '8px' } }><MinusOutlined /></Button>
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
					<Button type="primary" htmlType="submit" size="large" style={{width: '100%'}}>提交</Button>
				</Form.Item>
			</Form>
		</div>
	);
});

export const ChargeBaseSet = reaxper(() => {
	const { Input } = antd;
	return (
		<div style={{ display : 'flex', justifyContent: 'space-between', gap: '16px'}}>
			<Input placeholder={'固定手续费R$'} />
			<Input placeholder={'手续费率'} suffix='%' />
		</div>
	)
})

export const ChargeSeniorSet = reaxper(() => {
	const { Input } = antd;
	return (
		<div className={less.chargeSeniorSet}>
			<div className={less.setSide}>
				<Input placeholder={'固定手续费R$'} />
				<Input placeholder={'手续费率'} suffix='%' />
			</div>
			<div >
				<Input className={less.feeInput} placeholder={'金额R$'} prefix='<' suffix='≤' />
			</div>
			<div className={less.setSide}>
				<Input placeholder={'固定手续费R$'} />
				<Input placeholder={'手续费率'} suffix='%' />
			</div>
		</div>
	)
})

import less from './index.module.less'
import {PlusOutlined,  MinusOutlined} from '@ant-design/icons'
import { SVGChargeSetExchange, SVGChargeSetBack } from '@@SVGcomponents'