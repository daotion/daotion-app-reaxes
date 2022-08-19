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
			<SBTInfoBox title='Details'>
				<SBTDetailList/>
			</SBTInfoBox>
			<SBTInfoBox title='Destruction of rules'>
				<SBTRulesCheckbox/>
			</SBTInfoBox>
			<SBTInfoBox title='Holders'>
				{new Array(20).fill('').
				map((a,i)=>{
					return<SBTHolderItem
					key={Math.random()}
					/>
				})}
			</SBTInfoBox>
		</div>
		<div className={less.SBTDetailsRight}>
			<span className={less.certificateTag}>Design Certificate</span>
			<p className={less.SBTName}>SBT Name</p>
			<p className={less.someIntro}>Amet minim mollit non deserunt ullamco 
			     est sit aliqua dolor do amet sint. Velit 
			     officia consequat duis enim velit mollit. 
			     Exercitation veniam consequat sunt nostrud amet.</p>
			<div className={less.SBTKeyInfo}>
				<SBTInfoItem title='Creator'>
					<div className={less.creatorBox}>
						<img
							className = { less.spaceAvatar }
							src = ""
							alt = ""
						/>
						<div className={less.creatorInfo}>
							<span className = { less.spaceName }>spaceName</span>
							<span className={less.spaceAddressBox}>
								<span className = { less.spaceAddress }>0x7b.....72f7</span>
								<SVGCopySBT />
							</span>
						</div>
					</div>
				</SBTInfoItem>
				<SBTInfoItem title='Contract address'>
					<span className={less.contractAddressBox}>
						<span className = { less.contractAddress }>0x7b.....72f7</span>
						<SVGCopySBT />
					</span>
				</SBTInfoItem>
			</div>
			<SBTInfoBox>
				<div className={less.SBTClaimCondition}>
					
					<span>
						Airdrop
					</span>
				</div>
				<XButton 
					disabled
					className={less.SBTClaimBtn}
					type="primary"
					style={{width:'100%'}}
					>You are not eligible</XButton>   
			</SBTInfoBox>
		</div>
	</div>
	</>
}
import{XButton}from'@@pages/Test/dxz-button'
import less from './index.module.less';
import { SVGNetEthereum ,SVGCopySBT} from '@@pages/_SvgComponents/all-SBT-SVG';
import { Checkbox,Col } from 'antd';
// 每一个灰色边框盒子:
export const SBTInfoBox=ComponentWrapper((props)=>{
	return<>
	<div className={less.SBTInfoBox}>
		<p className={less.boxSubtitle}>{props.title}</p>
		{props.children}
	</div>
	</>
})

export const SBTDetailList=ComponentWrapper(()=>{
	return<>
		<div className={less.SBTDetailList}>
			<SBTInfoItem title = "Minted">
			<span className={less.mintedContent}>1,674 / ∞</span>
			</SBTInfoItem>
			<SBTInfoItem title = "Network">
				<span><SVGNetEthereum/>
					<span  className={less.itemContent}>
						Ethereum
					</span></span>
			</SBTInfoItem>
			<SBTInfoItem title = "Token Standard">
				<span className={less.itemContent}>ERC-721</span>
			</SBTInfoItem>
			<SBTInfoItem title = "Features">
				<div>
					<span className = { less.featureItem }>Feature 1</span>
					<span className = { less.featureItem }>Feature 2</span>
				</div>
			</SBTInfoItem>
		</div>
	</>
})
export const SBTRulesCheckbox=ComponentWrapper(()=>{
	return<>
		<Col style={{marginTop:"24px"}}>
			<Checkbox>Destruction by issuer</Checkbox>
		</Col>
		<Col>
			<Checkbox>Holder destruction</Checkbox>
		</Col>
		<Col>
			<Checkbox>Destruction of holder's authorization contract</Checkbox>
		</Col>
	</>
})
// 灰色subtitle和黑色content组成的item :
export const SBTInfoItem=ComponentWrapper((props)=>{
	return<>
		<div className={less.SBTInfoItem}>
			<span className={less.itemSubtitle}>{props.title}</span>
			{props.children}
		</div>
	</>
})
export const SBTHolderItem=ComponentWrapper(()=>{
	return<>
	<div className={less.SBTHolderItem}>
		<div className={less.SBTHolderInfo}>
			<img
				// 持有者头像
				className = { less.SBTHolderAvatar }
				src = ""
				alt = ""
			/>
			<span className={less.SBTHolderName}>0x4183...4f6d</span>
		</div>
		<span className={less.holdSBTTime}>Feb 22, 2019 19:28</span>
		<span className={less.holdSBTName}>SBTname#1234</span>
	</div>
	</>
})
