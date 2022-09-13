export const PluginSBTSettings = ComponentWrapper(class extends ReactComponentClass{
	
	
	
	render(){
		
		const {Tabs,Table,Segmented , Button,} = antd;
		const { TabPane } = Tabs;
		
		return <div className = { less.detailContainer }>
			<UserInfo />
			<div className = { less.content }>
				<div className = { less.navTab }>
					<Tabs
						defaultActiveKey = "1"
					>
						<TabPane
							tab = "Eligible"
							key = "1"
						>
							<Eligible />
						</TabPane>
						<TabPane
							tab = "Metadata"
							key = "2"
						>
							<Metadata />
						</TabPane>
					</Tabs>
				</div>
			</div>
		</div>;
	}
});





const Eligible = ComponentWrapper(() => {
	const {Tabs,Table,Segmented , Button,} = antd;
	const { TabPane } = Tabs;
	
	const [ count , setCount ] = useState(0);
	return <>
		<Segmented options = { [ 'Whitelist' , 'Blacklist' , 'Revocationlist' , 'TabName' ] } />
		<div className = { less.subContent }>
			<h1 className = { less.contentTitle }>Whitelist</h1>
			<SearchBar
				setCount = { setCount }
				count = { count }
			/>
			<SearchBarActived />
			<AlertSection icon = { <div className = { less.rotating }>
				<SVGSBTUploading />
			</div> }>
				<span className = { less.uploading }>Uploading...</span>
			</AlertSection>
			<AlertSection icon = { <SVGSBTCheck /> }></AlertSection>
			<AlertSection icon = { <SVGSBTWarning /> }>
				<span className = { less.alertInfo }>Some addresses or amount are invalid</span>
				<Button
					type = "text"
				>
					View details
				</Button>
			</AlertSection>
			<DetailTable columns = { columns }></DetailTable>
			<ActionBar count = { count }></ActionBar>
			<DetailPanel />
		</div>
	</>
});

const Metadata = ComponentWrapper(() => {
	return<>
		<div className={less.metaContainer}>
			<h2 className={less.metaTitle}>Metadata</h2>
			<div className={less.metaContent}>
				<MetaDataLeft/>
				<MetaDataRight/>
			</div>
			<MetaActionBar/>
		</div>
	</>
});


export const UserInfo = ComponentWrapper((props) => {
	return <>
		<div className = { less.userInfo }>
			<button className = { less.backBtn }><SVGSBTBack /></button>
			<Img
				className = { less.userAvatar }
				src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAiAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMBAAAQQBAgQGAgEDBQAAAAAAAQACAxEEEiEFMUFREyIyYXGRBoEUocHhFUNScrH/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAAeEQACAgIDAQEAAAAAAAAAAAAAAQIRAyEEEjEiQf/aAAwDAQACEQMRAD8A7hJ1Hc8z1TBPc/aZHmPykuqjmhv3P2nZ7n7QhSEFnuftO3dz9oQgAs9z9pWe5+06RSBCJPc/aN+5+06RSAI2e5+0We5+06QQmBGz3P2i3dz9p0hAESXdz9pWe5+1KrSIQArPc/aEUhAFjvUfkoQ71H5QoWSBCEJ2FDQkhMVEkKKaABCEIChIQUkCoaSSLQAEpWlaEAPqhK0JgWO9R+Skm71H5KSqJghCExgmki07ENFpIRYqGhJCLGNJK0rTsBlJJBRYUJJNWwYuRkavAhfIG7nSLSckhdWUITkY+N2mRjmO7OBBQmnYNUXu9R+SkpO9R+SoqqyYkbplJFhQkWkShOxDtFqKrlyIYHRtmlbG6T0NJ3f8Dr+kNpejSbKc/iMWH6i0EAFznu0sZdgWaO5o0ACTR22KmMmYRRTPxJ5YZmCSKfDiknikab5ODBRFbggFel/GMHGPDZP9SxzLLkuZkFk+P5GAjyNbqG5A59bcfYLr5OZhBmmeVkTbbGzxCGtJcQGge9kABY3yZdteGtcePXZ4E58Q2kZkRvPpZLjyMc89mgi3H4tSZlMdN4L2Swy8wyaNzC4dxY3HwvU5OM2Jxp3XkF4UcL4zixcUk4lkNmxY43ZEEjpS4tkabaW3u3awR7q5ZmVPEjr2mu1+McOjyfEycmPUxvlY1wsE9/1/dbJOB40eSJC0mOyTHvXLld8r3RLkQUuoRwScbOPw3hWTxDzxMb4TXU5zzX6Xt4YY4oWxxNDWNbQA7LlN4g2CERxQtY1mwZ0AW3E4hDPFqbqa7q091kzTnPf4acUYQVfpy/yDE8SEnSCQLHsUK/ic0b2gEm+qFfinJRoqyQTlZ5Vx8x+VFSf6j8qBWgzDSKR2StIZCWTww0Br3ve4MjjYLc9x5ABWfxOJeKGCHEkJj8URxZOp5bdXenTz29S0xcI4hMMXiOGS0wSFwAeGPe0gtcGlwIB35n3G12t34pgyxy5eZxLIzTmSEh2NJGY4IGk2GxtBLTXcE/1s5cmdxejTjwJraOBLOcZwGdBPiAmg6aOmX21C2/1XpPw/ElZw/Fz4HQluYPFyC5hMhB1UA4HYDyAD2ceZtdh7NQc2tTSKcO4XNwDlcAjOO3CkyeGeIXQ/xhqfjA7ljmE25t3RbdAgVtaoy5nONF2PEoOzz3GOLy5PF4uIY+dn4vDojokbH/ugPrWGFtaSLt2q6ogd+1xl/wDFg1Mj8WZzwyGL/nIT5R9730AJWLF4Nl5XDmYkHE5hwijF4UmK+OUxDbwyJACO2rax05Fb/wAjgifiMyciNskWLK2WSN+4Me7ZPpjnH9JLIkqJuDOJLxTKbms4dJxbDGeZXxOgmxi0NcORHm9LulmzYPsqOLZJy+HtjkaYZosyKPIx72dqcAN+rTYcP+tHqF3uF/jHCuE5EuVBGcjJmldKcnIp77cSdjW3P5PVbHcDw8/NjzMiN2uKiNLiA+nBwsdaIsfvuprMkQeNs1fjmqPhrIpAPKTRHUWSt0r2m2ghUyy+GKZssMsro2uc4+Y8lTXeTkWP4jRDLhcQ4iqWKElmpgvmtLpy5h3XPmkN7Gvhao2Z5Fkr3nZxtNZHSmtzuhWorbM7/UflQVrx5j8qsq4oIlRU0qCQz2vC5XZPD4JH1qLdzSvLACFzvx6AwcOD3F2qY6tLug9l0C48lxsmpujq49xTZnfK5jnNFUeqrbK7VZcR2UpmkG+6oINqapoXhubLrG5VMrATuLBHXkVSy9Qs0Fe55IAqwFXVPRO7RTiwRwxRYsDdEUbQxjb9LRyH0ugPK3YcuyrhaAL6lVzy1tySb7OkNKtlGVIXX5aXGnlk10t+RkF3lJA3q1il0iz1K2YlS2ZsmyLJCYzqO6zvPO03b8ioBjiVetFLKnE2haXwMYeuw3tCkmRcSh48x+SqyFa/1H5KgQrSgrIWjh+K3MzGQPfoa7mevwPdUlAc5jg9hpzSCCOhUZW1olH3Z7hjQyNkY5NAATIVGHkDKxY5w3TrHK7pXriStOmdiNVoqkZapMW60v2VZIpOMhNGdzaKviA0AqBI6ptftSk3aElTFP3b0XPyZZboDZdJ1ELNK0dlLG6YpqzkTB552q3EkURsF0pdPUBYJOq1xdmaSoi0Nq6THf6VFm1bKQA0KwgRnlL3D2FISMQPJ9hCkmkRaZB48x+SqyFe8bn5UCFbZnKSFEhXEIjjfK7REwvdV00WUWNGvgeU+HLbGSSx+2m+q9PrFWuBwzAlhmblTXH4btmEbu6H/wBXYkf0qlzOT1lk0dHj2ofRaXgqtyp1UrNg3cqjrRfdkHuAUdSUjh0VWvdTUSFmrVsqXuSDrUXkBpJTS2DZkyTusb91ql3WdzVqgZ5lTQLsqMnmIPZTd2UdKsRWyUbqIB5XyQoH2QnVism4Gz8lRLShCuM5DSV3+EQtZgNka3zvu3def+EkLLy3UDTxVcy6aIt3vbonG0v5u2HMoQsfZ9bNtfRPSBvpFdFle4GXTZLuZQhOGwnorne1jau39gqRLXNCFclopb2PxuyhJLaEKSiiLkyBdard7IQpoi2Q090iPZCFNECBG6EIUyB//9k="
			/>
			<div className = { less.info }>
				<h2>SBT Name</h2>
				<div className = { less.userAddress }>
					<span className = { less.address }>0xab51...9260</span>
					<SVGCopySBT />
				</div>
			</div>
		</div>
	</>;
});

export const AlertSection = ComponentWrapper((props) => {
	return <>
		<div className = { less.processAlert }>
			<div className = { less.alertLeft }>
				{ props.icon }
				<span className = { less.alertTitle }>CSVFileName.csv</span>
			</div>
			<div className = { less.alertRight }>
				{ props.children }
				<button className = { less.alertClose }><SVGSBTClose /></button>
			</div>
		</div>
	</>;
});

export const DetailTable = ComponentWrapper((props) => {
	const { Table } = antd;
	return <>
		<div className = { less.table }>
			<Table
				rowClassName = { (record) => {
					if( record.amount === 0 ) {
						return less.redCover;
					} else if( record.status === 'edited' ) {
						return less.blueCover;
					}
				} }
				columns = { props.columns }
				dataSource = { data }
			>
			</Table>
		</div>
	</>;
});

export const ActionBar = ComponentWrapper((props) => {
	const {Button} = antd;
	return <>
		<div className = { props.count % 2 === 0 ? less.actionIn : less.actionOut }>
			<span className = { less.actionInfo }>Unsaved changes!</span>
			<div className = { less.actionBtn }>
				<Button type = "text">Reset all</Button>
				<Button type = "primary">confirm</Button>
			</div>
		</div>
	</>;
});

export const MetaActionBar = ComponentWrapper((props) => {
	const {Button} = antd;
	return <>
		<div className={less.metaActionBar}>
			<span className = { less.actionInfo }>Unsaved changes!</span>
			<div className = { less.actionBtn }>
				<Button type = "text">Reset all</Button>
				<Button type = "primary">confirm</Button>
			</div>
		</div>
	</>;
});

export const DetailPanel = ComponentWrapper(() => {
	return <>
		<div className = { less.detailPanel }>
			<div className = { less.detailTitle }>
				<span>Details</span>
				<button
					className = { less.detailClose }
				>
					<SVGCloseIcon />
				</button>
			</div>
			<div className = { less.detailList }>
				<ul>
					<li>Line 1: is a invalid <span>wrong amount</span></li>
					<li>Line 2: is a invalid <span>wallet address</span></li>
					<li>Line 3: is a invalid <span>wallet address</span></li>
					<li>Line 4: is a invalid <span>wallet address</span></li>
					<li>Line 5: is a invalid <span>wallet address</span></li>
				</ul>
			</div>
		</div>
	</>;
});

export const SearchBar = ComponentWrapper((props) => {
	const {Button} = antd;
	return <>
		<div className = { less.searchBar }>
			<XInput
				type = "primary"
				placeholder = "Enter address to search or add"
			/>
			<Button
				onClick = { () => {
					props.setCount(props.count + 1);
				} }
				type = "primary"
				ghost
				icon = { <SVGSBTUpload /> }
			>
				Upload CSV
			</Button>
		</div>
	</>;
});

export const SearchBarActived = ComponentWrapper(() => {
	const {Button} = antd;
	return <>
		<div className = { less.searchBarActived }>
			<XInput
				type = "primary"
				placeholder = "Enter address to search or add"
				// value = 'sadasffasas'
				suffix = {
					<Button type = "text">
						Add to Whitelist\Blacklist\Revocationlist
					</Button> }
			/>
			<Button
				type = "primary"
				ghost
				icon = { <SVGSBTUpload /> }
			>
				Upload CSV
			</Button>
		</div>
	</>;
});

export const SubTitleWithItem = (props) => {
	return <>
		<div className = { less.subTitleWithItem }>
			<span className = { less.subTitle }>
				{ props.title }
				{ props.icon }
			</span>
			{ props.children }
		</div>
	</>;
};

export const PropertyInput = ComponentWrapper(()=>{
	
	const {Button} = antd;
	return<>
		<div className={less.propertyInput}>
			<XInput type = "primary" placeholder = "Enter Subject..."/>
			<XInput type = "primary" placeholder = "Enter Content..."/>
			<Button className={less.propertyInputDeleteBtn}><SVGCloseIcon/></Button>
		</div>
	</>
})


export const MetaDataLeft = ComponentWrapper(() =>{
	
	const { Button } = antd;
	
	return<>
		<div className={less.metaLeft}>
			<SubTitleWithItem
				title = "SBT Image"
				icon = {<SVGSubtract/>}>
				<UploadFileBox />
			</SubTitleWithItem>
			<SubTitleWithItem title = "Description">
				<XTextArea type = "primary" />
			</SubTitleWithItem>
			<SubTitleWithItem
				title = "Properties"
				icon = {<SVGSubtract/>}>
				<PropertyInput/>
				<PropertyInput/>
				<Button className = { less.addNewSBTFeatureBtn }><SVGSBTAdd/></Button>
			</SubTitleWithItem>
		</div>
	</>
})

export const MetaDataRight = ComponentWrapper((props) => {
	return <>
		<div className = { less.metaRight}>
			<p className = { less.previewTitle}>
				Preview
			</p>
			<div className={less.previewContent}>
				<Img
					className={less.previewImg}
					src = "data:image/jpeg;base64,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"/>
				<div className={less.previewUserInfo}>
					<div className = { less.SBTName }>SBT Name</div>
					<div className = { less.SBTAddress }>
						<span>
							0xab51...9260
						</span>
						<SVGCopySBT />
					</div>
				</div>
			</div>
		</div>
	</>;
});



const columns = [
	{
		title : 'ADDRESS' ,
		dataIndex : 'address' ,
	} ,
	{
		title : 'AMOUNT' ,
		dataIndex : 'amount' ,
		render : (text , record , index) => {
			const { Button } = antd;
			if( record.editing ) {
				return (
					<div>
						<div className = { less.amountSection }>
							<XInput
								value = { 1 }
								suffix = { <div className = { less.amountAction }><SVGSBTCountUp /><SVGSBTCountDown /></div> }
							>
							</XInput>
							<Button type = "link">Done</Button>
						</div>
					</div>
				);
			} else {
				return (
					<span>{ record.amount }</span>
				);
			}
		} ,
	} ,
	{
		title : 'ACTION' ,
		dataIndex : 'action' ,
		render : (text , record , index) => {
			const {Button} = antd;
			return (
				<div className = { less.actionSection }>
					<Button
						type = "link"
						className = { less.editBtn }
					>Edit</Button>
					<Button
						type = "link"
						className={less.removeBtn}>
						Remove
					</Button>
					{ record.editing ? <div><Button type = "link">Reset</Button></div> : '' }
				</div>
			);
		} ,
	} ,
];

import { UploadFileBox  } from '@@pages/Plugin-SBT-Pad--New/Upload-Box';
import { SVGCloseIcon } from '@@pages/_SvgComponents/SVG-close-icon';
import {
	XInput ,
	XTextArea,
} from "@@pages/Test/dxz-input";
import {
	SVGCopySBT ,
	SVGSBTAdd ,
	SVGSBTBack ,
	SVGSBTCheck ,
	SVGSBTClose ,
	SVGSBTCountDown ,
	SVGSBTCountUp ,
	SVGSBTUpload ,
	SVGSBTUploading ,
	SVGSBTWarning ,
	SVGSubtract ,
	SVGAddNewFeature,
} from "@@pages/_SvgComponents";
import { Img  } from "@@common/Xcomponents";
import less from './index.module.less';
import { ComponentWrapper } from "@@common/ReactComponentWrapper";


const data = [
	{
		key : 1 ,
		address : '0x4183...4f6d' ,
		amount : 1 ,
		editing : true ,
		status : 'unedited' ,
		action : '' ,
	} ,
	{
		key : 2 ,
		address : '0x4183...4f6d' ,
		amount : 2 ,
		editing : false ,
		status : 'edited' ,
		action : '' ,
	} ,
	{
		key : 3 ,
		address : '0x4183...4f6d' ,
		amount : 0 ,
		editing : false ,
		status : 'unedited' ,
		action : '' ,
	} ,
	{
		key : 4 ,
		address : '0x4183...4f6d' ,
		amount : 1 ,
		editing : false ,
		status : 'unedited' ,
		action : '' ,
	} ,
	{
		key : 5 ,
		address : '0x4183...4f6d' ,
		amount : 0 ,
		editing : false ,
		status : 'unedited' ,
		action : '' ,
	} ,

];
