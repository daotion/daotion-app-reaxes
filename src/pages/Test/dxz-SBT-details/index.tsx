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
				<SBTInfoBox title = {i18n("Details")}>
					<SBTDetailList />
				</SBTInfoBox>
				<SBTInfoBox title = {i18n("Cancelling Rules")}>
					{/*<SBTRulesCheckbox />*/}
					<div className={less.desc}>
						<SVGSBTChecked/>
						<span><I18n>Destruction by issuer</I18n></span>
					</div>
				</SBTInfoBox>
			</div>
			<div className = { less.SBTDetailsRight }>
				<div className={less.SBTCertificateTop}>
					<span className = { less.certificateTag }><I18n>Design Certificate</I18n></span>
					<ShareBtn />
					{/*<SBTMoreInfoPop/>*/}
				</div>
				<p className = { less.SBTName }><I18n>SBT Nameeeeeeee</I18n></p>
				
				<p className = { less.someIntro }>
					<I18n>					
						Amet minim mollit non deserunt ullamco
					   est sit aliqua dolor do amet sint. Velit
					   officia consequat duis enim velit mollit.
					   Exercitation veniam consequat sunt nostrud amet.
					</I18n>
				</p>
				
				<SBTAddressInfo/>
				<SBTInfoBox>
					{/*SBT-claim条件包括符合(conforming) & 不符合(nonconforming) 两种*/}
					<h3 className={less.conditionTitle}><I18n>Limit of Each Address：1 SBT</I18n></h3>
					<div className = { less.conditionPanel }>
						<span className={less.conditionSubtitle}><I18n>Meet all the following conditions：get 1 SBT</I18n></span>
						<div className={less.conditionContent}>
							<SVGNonconformingCondition/>
							<span>
								<I18n>Whitelist</I18n>
							</span>
						</div>
						<div className={less.conditionContent}>
							<SVGNonconformingCondition/>
							<span>
								<I18n>3</I18n>
							</span>
						</div>
						<div className={less.conditionContent}>
							<SVGNonconformingCondition/>
							<span>
								<I18n>Quest</I18n>
							</span>
						</div>
					</div>
					<div className = { less.conditionPanel }>
						<span className={less.conditionSubtitle}><I18n>Meet any the following conditions：get 1 SBT</I18n></span>
						<div className={less.conditionContent}>
							<SVGConformingCondition/>
							<span>
								<I18n>Whitelist</I18n>
							</span>
						</div>
						<div className={less.conditionContent}>
							<SVGConformingCondition/>
							<span>
								<I18n>Proof</I18n>
							</span>
						</div>
					</div>
					<div className = { less.conditionPanel }>
						<span className={less.conditionSubtitle}><I18n>Meet any the following conditions：get 1 SBT</I18n></span>
						<div className={less.conditionContent}>
							<SVGConformingCondition/>
							<span>
								<I18n>Whitelist</I18n>
							</span>
						</div>
						<div className={less.conditionContent}>
							<SVGNonconformingCondition/>
							<span>
								<I18n>Proof</I18n>
							</span>
						</div>
					</div>
					<div className = { less.singleCondition }>
						<SVGConformingCondition/>
						<span>
							<I18n>Whitelist</I18n>
						</span>
					</div>
					<p className={less.SBTClaimState}>
						<I18n>Clamed</I18n> <span className={less.amount}>X </span>  
							<I18n>Available</I18n> <span className={less.amount}>Y</span>
					</p>
					{/*三种状态的Button : */}
					<XButton
						disabled
						className = { less.notEligibleBtn }
						type = "primary"
						style = { { width : '100%' } }><I18n>You are not eligible</I18n></XButton>
					
					<XButton
					type='primary'
					style = { { width : '100%' } }><I18n>Claim</I18n></XButton>
					
					<XButton
						className={less.SBTClaimedBtn}
						type = "primary"><I18n>Claimed</I18n></XButton>
				</SBTInfoBox>
			</div>
		</div>
		
		{/*Activity表格:*/}
		<SBTInfoBox title = {i18n("Activity")}>
			<Table
				className={less.SBTActivityTable}
				columns = { columns }
				dataSource = { data }
				footer = { null }
				bordered={false}
			/>
		</SBTInfoBox>
	</div>
	</>
}

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
			<BtnGeneralMenuSvg />
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
		<SBTInfoItem title = {i18n("Creator")}>
			<div className = { less.creatorBox }>
				<img
					className = { less.spaceAvatar }
					src = ""
					alt = ""
				/>
				<div className = { less.creatorInfo }>
					<span className = { less.spaceName }><I18n>spaceName</I18n></span>
					<span className = { less.spaceAddressBox }>
						{/*space地址:*/}
						<span className = { less.spaceAddress }>0x7b.....72f7</span>
						<SVGCopySBT />
					</span>
				</div>
			</div>
		</SBTInfoItem>
		<SBTInfoItem title = {i18n("Contract address")}>
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
			<SBTInfoItem title = {i18n("Minted")}>
			<span className={less.mintedContent}>1,674 / ∞</span>
			</SBTInfoItem>
			<SBTInfoItem title = {i18n("Network")}>
				<span><SVGNetEthereum/>
					<span  className={less.itemContent}>
						<I18n>Ethereum</I18n>
					</span>
				</span>
			</SBTInfoItem>
			<SBTInfoItem title = {i18n("Token Standard")}>
				<span className={less.itemContent}>ERC-721</span>
			</SBTInfoItem>
			<SBTInfoItem title = {i18n("Properties")}>
				{/*<div>*/}
				{/*	<span className = { less.featureItem }>Feature 1</span>*/}
				{/*	<span className = { less.featureItem }>Feature 2</span>*/}
				{/*</div>*/}
				
				<div className={less.propList}>
					<div className={less.keyVal}>
						<span className={less.key}><I18n>key</I18n></span>
						<span className={less.val}><I18n>value</I18n></span>
					</div>
					<div className={less.keyVal}>
						<span className={less.key}><I18n>key</I18n></span>
						<span className={less.val}><I18n>value</I18n></span>
					</div>
					<div className={less.keyVal}>
						<span className={less.key}><I18n>key</I18n></span>
						<span className={less.val}><I18n>value</I18n></span>
					</div>
					<div className={less.keyVal}>
						<span className={less.key}><I18n>key</I18n></span>
						<span className={less.val}><I18n>value</I18n></span>
					</div>
					<div className={less.keyVal}>
						<span className={less.key}><I18n>key</I18n></span>
						<span className={less.val}><I18n>value</I18n></span>
					</div>
					<div className={less.keyVal}>
						<span className={less.key}><I18n>key</I18n></span>
						<span className={less.val}><I18n>value</I18n></span>
					</div>
				</div>
			</SBTInfoItem>
		</div>
	</>
})
export const SBTRulesCheckbox=ComponentWrapper(()=>{
	return<>
		<Col style={{marginTop:"24px"}}>
			<Checkbox
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



import {Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
	key: React.Key;
	user: React.ReactNode;
	amount: number;
	time: string;
	id:string;
	lastState: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'User',
		dataIndex: 'user',
	},
	{
		title: 'Mint time',
		dataIndex: 'time',
	},
	{
		title:'TokenID',
		dataIndex: 'id',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
	},
	{
		title: 'Last state',
		dataIndex: 'lastState',
	},

];

const data: DataType[] = [];
for (let i = 0; i < 6; i++) {
	data.push({
		key : Math.random() ,
		user:<span className={less.userInfo}><div className={less.avatarContainer}></div>0x4183...4f6d </span>,
		amount : 2 ,
		time : '4 minutes ago' ,
		id : '#23451' ,
		lastState: 'Claimed' ,
	});
}





import less from './index.module.less';
import {BtnGeneralMenuSvg} from "@@pages/_SvgComponents/Btn-general-menu-svg";
import { SVGLink } from '@@pages/_SvgComponents/space-setting-svg';
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
	SVGSBTChecked,
} from '@@pages/_SvgComponents/all-SBT-SVG';
import { Checkbox,Col ,Button} from 'antd';
import { ShareBtn } from '@@pages/Space-Info/index';
