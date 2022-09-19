import { InputNumber } from "antd";

export const Eligible = ComponentWrapper(class extends ReactComponentClass {
	
	reax_settings_whitelist = reaxel__SBT_settings();
	
	render(){
		
		const [,{spaceID , SBTID}] = utils.makePair(utils.useRouter().params , ({spaceID,SBTID}) => {
			return {
				spaceID : parseInt(spaceID),
				SBTID : parseInt(SBTID),
			};
		});
		console.log(spaceID , SBTID);
		
		const {
			whitelist ,
			fetch_white_list ,
			SBT_settings_store,
			setFields ,
			make_row_editable,
			reset_changes ,
			
		} = this.reax_settings_whitelist;
		
		fetch_white_list(() => [spaceID,SBTID])({SBTID,spaceID,count:15});
		
		const { Tabs , Table , Segmented , Button } = antd;
		const { TabPane } = Tabs;
		
		const [ count , setCount ] = useState(0);
		return <>
			<Segmented options = { [ 'Whitelist' , 'Blacklist' , 'Revocationlist' , 'TabName' ] } />
			<div className = { less.subContent }>
				<h1 className = { less.contentTitle }>Whitelist</h1>
				<SearchBar/>
				<AlertSection
					icon = { <div className = { less.rotating }>
						<SVGSBTUploading />
					</div> }
				>
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
				<DetailTable/>
				{/*<ActionBar count = { count }></ActionBar>*/ }
				<TestNotification />
			</div>
		</>;
	}
});

const columns = [
	{
		title : 'ADDRESS' ,
		dataIndex : 'address' ,
	} ,
	{
		title : 'AMOUNT' ,
		dataIndex : 'amount' ,
	} ,
	{
		title : 'REMAINDER' ,
		dataIndex : 'remaider' ,
		render : (text , record , index) => {
			const { Button } = antd;
			if( record.editing ) {
				return (
					<div>
						<div className = { less.amountSection }>
							<InputNumber
								value = {1}
								controls={{upIcon:<SVGSBTCountUp/>,downIcon:<SVGSBTCountDown/>}}/>
							<TableActionBtnTwo text = 'Done'/>
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
			const { Button } = antd;
			return (
				<div className = { less.actionSection }>
					<TableActionBtn text = 'Edit'/>
					<TableActionBtn text = 'Remove'/>
					{ record.editing ? <div><TableActionBtnTwo text = 'Reset'/></div> : '' }
				</div>
			);
		} ,
	} ,
];


const TableActionBtn = (props) => {
	return <span className={less.tableActionBtn}>{props.text}</span>
};

const TableActionBtnTwo = (props) => {
	return <span className={less.tableActionBtnTwo}>{props.text}</span>
}



export const DetailTable = ComponentWrapper((props) => {
	const { whitelist } = reaxel__SBT_settings();
	console.log(logProxy(whitelist));
	
	const { Table } = antd;
	return <>
		<div className = { less.table }>
			<Table
				rowClassName = { (record) => {
					if( record.amount === 0 ) {
						return less.redCover;
					} else if( record.editing ) {
						return less.blueCover;
					}
				} }
				rowKey="address"
				columns = { columns }
				dataSource = { whitelist }
				pagination = { false }
			>
			</Table>
		</div>
	</>;
});

export const SearchBar = ComponentWrapper(() => {
	const { SBT_settings_store , setFields , address_insertable } = reaxel__SBT_settings();
	
	const { Button } = antd;
	return <>
		<div className = { less.searchBarActived }>
			<XInput
				value = {SBT_settings_store.input_search_address}
				onChange = {(e) => {
					setFields({ input_search_address : e.target.value });
				}}
				allowClear
				maxLength = {42}
				type = "primary"
				placeholder = "Enter address to search or add"
				suffix = { address_insertable ? <Button type = "text">
					Add to Whitelist
				</Button> : <></> }
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
// export const SearchBar = ComponentWrapper((props) => {
// 	const { Button } = antd;
// 	return <>
// 		<div className = { less.searchBar }>
// 			<XInput
// 				type = "primary"
// 				placeholder = "Enter address to search or add"
// 			/>
// 			<Button
// 				onClick = { () => {
// 					props.setCount(props.count + 1);
// 				} }
// 				type = "primary"
// 				ghost
// 				icon = { <SVGSBTUpload /> }
// 			>
// 				Upload CSV
// 			</Button>
// 		</div>
// 	</>;
// });
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


import { reaxel__SBT_settings } from '../reaxel--SBT-settings';
import { XInput } from "@@pages/Test/dxz-input";
import { TestNotification } from '@@pages/Test/Notification';
import {
	SVGSBTCheck ,
	SVGSBTClose ,
	SVGSBTCountDown ,
	SVGSBTCountUp ,
	SVGSBTUpload ,
	SVGSBTUploading ,
	SVGSBTWarning ,
} from "@@pages/_SvgComponents";
import less from '../index.module.less';
