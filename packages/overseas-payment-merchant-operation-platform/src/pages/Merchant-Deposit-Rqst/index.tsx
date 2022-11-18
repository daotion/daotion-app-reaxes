export const Mch_Desposit_Rqst = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const {} = reaxel_mch_dpst_rqst({ navigate });
	
	return <div>
		<TestRender />
		<CheckModal />
	</div>;
});


import { reaxel_mch_dpst_rqst } from './reaxel--mch-dpst-rqst';
import { TestRender } from '@@pages/test';
import { SVGModalBtnBack, SVGModalIconInfo} from '@@SVGcomponents';
import less from './inde.module.less';

export const DespositModal = reaxper(() => {
	const { Modal , Button , Input } = antd;
	
	const ModalTitle = reaxper(() => {
		return (
			<div>
				<p className = { less.title }>确认充值信息</p>
				<p>请确认充值地址和金额</p>
			</div>
		);
	});
	
	return (
		<Modal
			title = { <ModalTitle /> }
			visible
			closable = { false }
			footer = { null }
			width = { 380 }
			className = { less.depositModal }
		>
			<div className = { less.contentContainer }>
				<span className = { less.depositAmount }>商户充值USDT数量</span>
				<span className = { less.number }>
					500
					<span className = { less.unit }>USTD</span>
				</span>
				<span className = { less.addAmount }>增加账户余额</span>
				<Input placeholder = { 'R$' } />
				<Button type = "primary">继续</Button>
				<Button type = "default">取消</Button>
			</div>
		</Modal>
	);
});

export const CheckModal = reaxper(() =>{
	const { Modal , Button, Divider } = antd;
	
	const ModalTitle = reaxper(() =>{
		return(
			<div className={`${less.title} ${less.flex}`}>
				<SVGModalBtnBack/>
				检查
			</div>
		)
	});
	
	return(
		<Modal
			title={<ModalTitle/>}
			visible
			closable={false}
			footer={null}
			width={380}
			className={less.depositModal}
		>
			<div className = { less.contentContainer }>
				<span className = { less.addAmount } style={{fontSize: 16}}>
					确认之后，法币金额将充值到商户的余额
				</span>
				<span style={{fontSize: 16, marginTop: 16}}>R$ 50,000</span>
				<Divider/>
				<div className={less.checkAmount}>
					<span className={less.colorGrey}>商户充值(手动填写)</span>
					<span>500 USDT</span>
				</div>
				<div className={less.checkAmount} style={{marginTop: 12}}>
					<span className={less.colorGrey}>增加账户余额</span>
					<span>R$50,000</span>
				</div>
				<div className={less.alertBox}>
					<SVGModalIconInfo/>
					<span>请确认所有交易信息正确</span>
				</div>
				<Button type = "primary">确认</Button>
				<Button type = "default">取消</Button>
			</div>
		</Modal>
	)
});
