

export const OverviewInfo = reaxper(() => {
	
	const { Button } = antd;
	const { navigate } = toolkits.useRouter();
	const { overviewInfo , fetchOverviewInfo, overviewInfoPending } = reaxel_overview_info();
	const {
		balance = 0 ,
		withdrawingMoney = 0,
	} = overviewInfo;
	const { current : badge } = useRef(Math.random());
	useEffect(() => {
		fetchOverviewInfo()
	},[])
	return (
		<div
			style={{
				padding: '24px',
				width: '100%',
				backgroundColor: '#FFFFFF',
				marginBottom: '20px',
				borderRadius: '8px',
			}}
		>
			{overviewInfoPending && <OverviewInfoSkeleton/>}
			{!overviewInfoPending && <div className = { less.overviewContainer }>
				<span className = { less.overviewTitle }>
					资金总览
				</span>
				<div className = { less.overviewContent }>
					<div className = { less.balanceContainer }>
						<div className = { less.balanceContent }>
							<span className = { less.overviewSubTitle }>
								账户余额（R$）
							</span>
							<span className = { less.balanceAmount }>
								{ balance }
							</span>
						</div>
						<Button
							className = { less.checkDetail }
							type = "link"
							onClick = { () => {
								navigate('fin-detail');
							} }
						>
							查看明细
						</Button>
					</div>
					<div className = { less.withdrawContent }>
						<span className = { less.overviewSubTitle }>
							提现处理中
						</span>
						<span className = { less.withdrawingAmount }>
							{ withdrawingMoney }
						</span>
					</div>
				</div>
				<div style = { { display : 'flex' , gap : '16px' } }>
					<Button
						type = "primary"
						onClick = { () => {
							navigate('deposit');
						} }
					>
						充值
					</Button>
					<Button
						type = "primary"
						onClick = { () => {
							navigate('withdraw');
						} }
					>
						提现
					</Button>
				</div>
			</div> }
		
		</div>
	);
});


export const OverviewInfoSkeleton = reaxper(() => {
	const {Skeleton} = antd;
	return(
		<div style={{
			display: "flex",
			flexDirection: "column",
		}}>
			<Skeleton.Button style={{width: 100, marginBottom: 24}} active/>
			<Skeleton.Button style={{width: 150, marginBottom: 6}} active/>
			<Skeleton.Button style={{width: 250, height: 60, marginBottom: 24}} active/>
			<Skeleton.Button style={{width: 150, marginBottom: 6}} active/>
			<Skeleton.Button style={{width: 250, marginBottom: 24}} active/>
			<div style={{ display : 'flex', gap: '16px'}}>
			<Skeleton.Button style={{width: 100}} active/>
			<Skeleton.Button style={{width: 100}} active/>
			</div>
		</div>
	)
})

import { reaxel_overview_info } from "@@reaxels";
import less from "@@pages/Overview/index.module.less";
