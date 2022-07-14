import {
	Empty ,
	Input ,
	Select ,
	Space ,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Space_List_Item } from '@@pages/_BussinessComponents';

import { SelectArrowIconSvgComponent } from '@@pages/_SvgComponents';
import spaceTags from '@@Public/space-tags.json';
import {
	reaxel_space_list ,
	reaxel_scrollParentRef ,
	reaxel_wallet ,
} from '@@reaxes';
import InfiniteScroll from 'react-infinite-scroller';

const { Option } = Select;

export const All_Spaces_List_Container = ComponentWrapper( class extends ReactComponentClass {
	
	scrollParentRef = reaxel_scrollParentRef();
	// signMsg = reaxel_sign_via_wallet( this.lifecycle );
	reax_spaces_list = reaxel_space_list( this.lifecycle );
	
	JSX = {
		InfiniteSpacesList : () => {
			if(this.reax_spaces_list.store.infos.length === 0){
				return <>
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						style = {{ display : "block"}}
					/>
				</>;
			}
			return <InfiniteScroll
				style = { {
					display : "flex" ,
					flexFlow : "row wrap" ,
					justifyContent : "center" ,
					
				} }
				pageStart = { 0 }
				hasMore = { this.reax_spaces_list.store.hasMore }
				loadMore = { () => {
					this.reax_spaces_list.fetchMore( 40 );
				} }
				getScrollParent = { () => this.scrollParentRef.current }
				useWindow = { false }
				threshold = { 500 }
			>
				{ this.reax_spaces_list.store.infos.map( ( item ) => <Space_List_Item
					key = { item.id }
					info = { item }
				/> ) }
			</InfiniteScroll>
		},
	}
	
	reax_wallet = reaxel_wallet();
	
	render() {
		const reax_wallet = this.reax_wallet;
		return <>
			<div
				style = { {
					flexGrow : "1" ,
					display : "flex" ,
					flexFlow : "column nowrap" ,
					userSelect : "none" ,
					minWidth : "810px" ,
					
				} }
			>
				<h1
					style = { {
						color : "#000000" ,
						fontSize : "48px" ,
						fontWeight : "bold" ,
					} }
				>Explore
				</h1>
				
				<div
					style = { {
						backgroundColor : "#ffffff" ,
						borderRadius : "16px" ,
						display : "flex" ,
						flexFlow : "column nowrap" ,
						padding : "32px" ,
						flex : "1",
					} }
				>
					<div
						style = { {
							display : "flex" ,
							justifyContent : "space-between" ,
							alignItems : "center" ,
							
						} }
					>
						<div
							style = { {
								color : "#1a1d1f" ,
								fontSize : "20px" ,
								fontWeight : "bold" ,
								
							} }
						>Spaces
						</div>
						<div>
							<Space
							
							>
								<Input
									prefix = { <SearchOutlined /> }
									style = { {
										width : "256px" ,
										height : "40px" ,
										
									} }
									value = {this.reax_spaces_list.store.searchText}
									placeholder = "Search"
									onInput = { (e) => {
										const text = e.target.value;
										this.reax_spaces_list.setSearchingText(text);
										this.reax_spaces_list.debouncedInputingSearch(text);
									}}
								/>
								<Select
									value = {this.reax_spaces_list.store.searchTagSelection}
									placeholder="All Types"
									suffixIcon = { <SelectArrowIconSvgComponent /> }
									onSelect={(text) => {
										if(text === "null") text = null;
										this.reax_spaces_list.setSearchingTagSelection( text );
									}}
									style = { {
										width : "170px" ,
									} }
								>
									<Select.Option key = {null} >
										all types
									</Select.Option>
									{spaceTags.map((tag) => <Select.Option key = {tag}>{tag}</Select.Option>)}
								</Select>
							</Space>
						</div>
					</div>
					
					<div
						style = { {
							display : "flex" ,
							marginTop : "20px" ,
							justifyContent : "center" ,
							paddingRight : "-16px" ,
							flexFlow : "row wrap" ,
							minHeight : "576px",
							
						} }
					>
						{this.JSX.InfiniteSpacesList()}
					</div>
				</div>
			</div>
		</>;
	}
} );
