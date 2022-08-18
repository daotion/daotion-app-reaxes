export const DxzSBTDetails=()=>{
	return<>
	<div className={less.SBTDetailsContainer}>
		{/*SBT详情页信息分左右两部分 : */}
		<div className={less.SBTDetailsLeft}>
			<img
				className = { less.SBTImg }
				src = ""
				alt = ""
			/>
			<SBTInfoBox title='Details'></SBTInfoBox>
			<SBTInfoBox title='Destruction of rules'></SBTInfoBox>
			<SBTInfoBox title='Holders'></SBTInfoBox>
		</div>
		<div className={less.SBTDetailsRight}></div>
	</div>
	</>
}
import less from './index.module.less';
// 每一个灰色边框盒子:
export const SBTInfoBox=ComponentWrapper((props)=>{
	return<>
	<div className={less.SBTInfoBox}>
		<p className={less.boxSubtitle}>{props.title}</p>
		{props.children}
	</div>
	</>
})
// 灰色subtitle和黑色content
export const SBTInfoItem=ComponentWrapper((props)=>{
	return<>
		<div className={less.SBTInfoItem}>
			<p className={less.ItemSubtitle}>{props.title}</p>
			{props.children}
		</div>
	</>
})
