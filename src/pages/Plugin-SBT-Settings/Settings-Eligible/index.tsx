import { InputNumber } from "antd";

export const Eligible = ComponentWrapper(class extends ReactComponentClass {
	
	reax_settings_whitelist = reaxel__SBT_settings();
	
	render(){
		
		const [ , { spaceID , SBTID } ] = utils.makePair(utils.useRouter().params , ({ spaceID , SBTID }) => {
			return {
				spaceID : parseInt(spaceID) ,
				SBTID : parseInt(SBTID) ,
			};
		});
		// console.log(spaceID , SBTID);
		
		const {
			whitelist ,
			fetch_white_list ,
			SBT_settings_store ,
			setFields ,
			switch_row_editable ,
			reset_changes ,
			fields_modified ,
		} = this.reax_settings_whitelist;
		
		fetch_white_list(([ page , pageSize ]) => [ page , pageSize , spaceID , SBTID ])({ SBTID , spaceID , count : SBT_settings_store.pageSize });
		
		const { Tabs , Table , Segmented , Button } = antd;
		const { TabPane } = Tabs;
		
		return <>
			<Segmented options = { [ 'Whitelist' , 'Blacklist' , 'Revocationlist' , 'TabName' ] } />
			<div className = { less.subContent }>
				<h1 className = { less.contentTitle }>Whitelist</h1>
				<SearchBar />
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
				<DetailTable />
				<Notification
					visible = { fields_modified }
					config = { {
						duration : null ,
						key : "123" ,
						message : <OpertaionBtnGroup /> ,
						bottom : 24 ,
						placement : "bottom" ,
					} }
				/>
			</div>
		</>;
	}
});


export const DetailTable = ComponentWrapper((props) => {
	const { fetch_white_list , setFields , SBT_settings_store , whitelist , switch_row_editable , offset_row_value , reset_row } = reaxel__SBT_settings();
	const [ , { spaceID , SBTID } ] = utils.makePair(utils.useRouter().params , ({ spaceID , SBTID }) => {
		return {
			spaceID : parseInt(spaceID) ,
			SBTID : parseInt(SBTID) ,
		};
	});
	
	const { Table } = antd;
	
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
				const done = () => {
					if( record.modifiedOffset + record.remainder < 0 ) {
						offset_row_value(record.address , - record.remainder);
					}
					switch_row_editable(false , record.address);
				};
				if( record.editing ) {
					return <div>
						<div className = { less.amountSection }>
							<InputNumber
								onPressEnter = { done }
								onChange = { (value) => {
									let offset = value - record.remainder;
									offset_row_value(record.address , offset);
								} }
								value = { record.modifiedOffset + record.remainder }
								controls = { { upIcon : <SVGSBTCountUp /> , downIcon : <SVGSBTCountDown /> } }
							/>
							<TableActionBtn
								onClick = { done }
								text = "Done"
								type="link"
							/>
						</div>
					</div>;
				} else {
					return (
						<span>{ record.modifiedOffset + record.remainder }</span>
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
						<TableActionBtn
							onClick = { () => switch_row_editable(true , record.address) }
							text = "Edit"
							type="link"
						/>
						<TableActionBtn
							text = "Remove"
							type="link"
							onClick = { () => offset_row_value(record.address , - record.remainder) }
						/>
						{ record.modifiedOffset !== 0 && <div>
							<TableActionBtn
								text = "Reset"
								type="primary"
								onClick = { () => reset_row(record.address) }
							/>
						</div> }
					</div>
				);
			} ,
		} ,
	];
	
	console.log([ ...whitelist ]);
	return <>
		<div className = { less.table }>
			<Table
				rowClassName = { (record , index) => {
					if( !record ) return null;
					if( record.modifiedOffset + record.remainder === 0 ) {
						return less.redCover;
					} else if( record.modifiedOffset !== 0 ) {
						return less.blueCover;
					}
				} }
				rowKey = "address"
				columns = { columns }
				dataSource = { SBT_settings_store.pending ? [] : whitelist }
				pagination = { {
					current : SBT_settings_store.currentPage ,
					pageSize : SBT_settings_store.pageSize ,
					total : SBT_settings_store.total ,
					onChange : (page , pageSize) => {
						setFields({
							currentPage : page ,
							pageSize ,
						});
						fetch_white_list(([]) => [ page , pageSize , spaceID , SBTID ])({ SBTID , spaceID , count : SBT_settings_store.pageSize , paging : page });
						
					} ,
				} }
			
			>
			</Table>
		</div>
	</>;
});

const OpertaionBtnGroup = () => {
	const { reset_changes } = reaxel__SBT_settings();
	return <div className = { less.wrapper }>
		<span className = { less.title }>Unsaved changes!</span>
		<div className = { less.btn }>
			<XButton
				onClick = { reset_changes }
				type = "text"
			>
				Reset all
			</XButton>
			<XButton
				type = "primary"
			>
				Confirm
			</XButton>
		</div>
	</div>;
};

export const SearchBar = ComponentWrapper(() => {
	const { SBT_settings_store , setFields , address_insertable } = reaxel__SBT_settings();
	
	const { Button } = antd;
	return <>
		<div className = { less.searchBarActived }>
			<XInput
				value = { SBT_settings_store.input_search_address }
				onChange = { (e) => {
					setFields({ input_search_address : e.target.value });
				} }
				allowClear
				maxLength = { 42 }
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


const TableActionBtn = (props:{
	type : "link" | "primary";
	onClick : React.MouseEventHandler<HTMLSpanElement>;
	text : string;
}) => {
	return <span
		className = { {
			"link" : less.tableActionBtn ,
			"primary" : less.tableActionBtnTwo ,
		}[props.type] }
		onClick = { props.onClick }
	>
		{ props.text }
	</span>;
};


import { reaxel__SBT_settings } from '../reaxel--SBT-settings';
import { XInput } from "@@pages/Test/dxz-input";
import { XButton } from '@@common/Xcomponents';
import { Notification } from '@@pages/Test/Notification';
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
