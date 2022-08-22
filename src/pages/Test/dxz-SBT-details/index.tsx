export const DxzSBTDetails=()=>{
	return<>
	<div className={less.SBTDetailsContainer}>
		{/*SBT详情页信息分主要信息部分以及下方Activity列表 ,
			主要信息又分为左右两栏 : */}
		<div className={less.SBTDetailsMainfield}>
			<div className = { less.SBTDetailsLeft }>
				<img
					className = { less.SBTImg }
					src = ""
					alt = ""
				/>
				<SBTInfoBox title = "Details">
					<SBTDetailList />
				</SBTInfoBox>
				<SBTInfoBox title = "Destruction of rules">
					<SBTRulesCheckbox />
				</SBTInfoBox>
			</div>
			<div className = { less.SBTDetailsRight }>
				<div className={less.SBTCertificateTop}>
					<span className = { less.certificateTag }>Design Certificate</span>
					<ShareBtn />
					<SBTMoreInfoPop/>
				</div>
				<p className = { less.SBTName }>SBT Name</p>
				
				<p className = { less.someIntro }>
					Amet minim mollit non deserunt ullamco
					est sit aliqua dolor do amet sint. Velit
					officia consequat duis enim velit mollit.
					Exercitation veniam consequat sunt nostrud amet.
				</p>
				
				<SBTAddressInfo/>
				<SBTInfoBox>
					{/*SBT-claim条件包括符合(conforming) & 不符合(nonconforming) 两种*/}
					<div className = { less.SBTNonconformingCondition }>
						<SVGNonconformingCondition/>
						<span>
							Airdrop
						</span>
					</div>
					<div className = { less.SBTConformingCondition }>
						<SVGConformingCondition/>
						<span>
							Whitelist
						</span>
					</div>
					<p className={less.SBTClaimState}>
						Clamed <span className={less.amount}>X</span>  
							Available <span className={less.amount}>Y</span>
					</p>
					{/*三种状态的Button : */}
					<XButton
						disabled
						className = { less.notEligibleBtn }
						type = "primary"
						style = { { width : '100%' } }>You are not eligible</XButton>
					
					<XButton
					type='primary'
					style = { { width : '100%' } }>Claim</XButton>
					
					<XButton
						className={less.SBTClaimedBtn}
						type = "primary">Claimed</XButton>
				</SBTInfoBox>
			</div>
		</div>
		
		{/*Activity列表:*/}
		<SBTInfoBox title = "Activi0ty">
			<div className = { less.activityListNameBox }>
				<span>User</span>
				<span>Mint time</span>
				<span>TokenID</span>
				<span>Amount</span>
				<span>Last state</span>
			</div>
			
			{ new Array( 6 ).fill( '' ).
			map( ( a , i ) => {
				return <SBTActivityItem
					key = { Math.random() }
				/>;
			} ) }
		</SBTInfoBox>
	</div>
	</>
}

import less from './index.module.less';
import { XPopover } from '@@common/Xcomponents';
import{XButton}from'@@pages/Test/dxz-button'
import {
	SVGNetEthereum ,
	SVGCopySBT ,
	SVGConformingCondition ,
	SVGNonconformingCondition,
	SVGMoreInfo ,
	SVGFreezeList,
	SVGAddWhitelist,
	SVGSettings,
	SVGRevocation,
} from '@@pages/_SvgComponents/all-SBT-SVG';
import { Checkbox,Col ,Button} from 'antd';
import { ShareBtn } from '@@pages/Space-Info/index';

// 每一个灰色边框盒子:
export const SBTInfoBox=ComponentWrapper((props)=>{
	return<>
	<div className={less.SBTInfoBox}>
		<p className={less.boxSubtitle}>{props.title}</p>
		{props.children}
	</div>
	</>
})
export const SBTMoreInfoPop=ComponentWrapper(()=>{
	return<>
	<XPopover
		trigger = "click"
		placement = { "bottomRight" }
		content = { <SBTPopList/> }
	>
		<Button className = { less.moreInfoBtn }>
			<SVGMoreInfo />
		</Button>
	</XPopover>
	</>
})
export const SBTPopList=ComponentWrapper(()=>{
	return<>
		<div className={less.SBTPopList}>
			<SBTPopItem
				icon = { <SVGAddWhitelist /> }
				text = { 'Add Whitelist' }
			/>
			<SBTPopItem
				icon = { <SVGRevocation /> }
				text = { 'Revocation' }
			/>
			<SBTPopItem
				icon = { <SVGFreezeList /> }
				text = { 'Freeze list' }
			/>
			<SBTPopItem
				icon = { <SVGSettings /> }
				text = { 'Settings' }
			/>
		</div>
	</>
})
export const SBTPopItem=ComponentWrapper((props)=>{
	return<>
		<div className={less.SBTPopItem}>
			{props.icon}{props.text}
		</div>
	</>
})
export const SBTAddressInfo=ComponentWrapper(()=>{
	// SBT详情页address-info包括space-address 和 contact-address
	return<>
		<div className = { less.SBTAddressInfo }>
		<SBTInfoItem title = "Creator">
			<div className = { less.creatorBox }>
				<img
					className = { less.spaceAvatar }
					src = ""
					alt = ""
				/>
				<div className = { less.creatorInfo }>
					<span className = { less.spaceName }>spaceName</span>
					<span className = { less.spaceAddressBox }>
						{/*space地址:*/}
						<span className = { less.spaceAddress }>0x7b.....72f7</span>
						<SVGCopySBT />
					</span>
				</div>
			</div>
		</SBTInfoItem>
		<SBTInfoItem title = "Contract address">
			<span className = { less.contractAddressBox }>
				{/*合约地址:*/ }
				<span className = { less.contractAddress }>0x7b.....72f7</span>
				<SVGCopySBT />
			</span>
		</SBTInfoItem>
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
			<Checkbox
				checked = { true }
				className={less.SBTRulesCheckbox}>
				Destruction by issuer</Checkbox>
		</Col>
		<Col>
			<Checkbox className={less.SBTRulesCheckbox}>Holder destruction</Checkbox>
		</Col>
		<Col>
			<Checkbox className={less.SBTRulesCheckbox}>Destruction of holder's authorization contract</Checkbox>
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

export const SBTActivityItem=ComponentWrapper(()=>{
	return<>
	<div className={less.SBTActivityItem}>
		<div className={less.SBTHolderInfo}>
			<img
				// 持有者头像
				className = { less.SBTHolderAvatar }
				src = ""
				alt = ""
			/>
			<span className={less.SBTHolderName}>0x4183...4f6d</span>
		</div>
		<span className={less.MintTime}>4 minutes ago</span>
		<span className={less.TokenID}>#245123</span>
		<span className={less.SBTAmount}>3</span>
		<span className={less.SBTLastState}>No claim</span>
		
	</div>
	</>
})
