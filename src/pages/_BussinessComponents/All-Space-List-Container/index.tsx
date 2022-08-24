export const All_Spaces_List_Container = ComponentWrapper( class extends ReactComponentClass {
	
	scrollParentRef = reaxel_scrollParentRef();
	// signMsg = reaxel_sign_via_wallet( this.lifecycle );
	reax_spaces_list = reaxel_space_list( this.lifecycle );
	
	JSX = {
		InfiniteSpacesList : () => {
			const { Empty } = antd;
			if ( this.reax_spaces_list.store.infos.length === 0 ) {
				return <>
					<Empty
						image = { Empty.PRESENTED_IMAGE_SIMPLE }
						style = { { display : "block" } }
					/>
				</>;
			}
			return <InfiniteScroll
				style = { {
					display : "flex" ,
					flexFlow : "row wrap" ,
					justifyContent : "flex-start" ,
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
			</InfiniteScroll>;
		} ,
	};
	
	reax_wallet = reaxel_wallet();
	
	render() {
		const {
			Empty ,
			Input ,
			Select ,
			Space ,
		} = antd , { Option } = Select;
		const reax_wallet = this.reax_wallet;
		return <>
			<div
				style = { {
					flexGrow : "1" ,
					display : "flex" ,
					flexFlow : "column nowrap" ,
					userSelect : "none" ,
					minWidth : "810px" ,
					alignItems:"center"
				} }
			>
				
				<div
					style = { {
						borderRadius : "16px" ,
						display : "flex" ,
						flexFlow : "column nowrap" ,
						padding : "32px" ,
						flex : "1 1 auto" ,
						minWidth:"1216px"
					} }
				>
					<div
						style = { {
							display : "flex" ,
							justifyContent : "space-between" ,
							alignItems : "center" ,
							width:"1200px"
						} }
					>
						<div
							style = { {
								color : "#1a1d1f" ,
								fontSize : "20px" ,
								fontWeight : "bold" ,
								display : "flex" ,
							} }
						>Spaces
						</div>
						<div className={less.iptSelectBox}
						>
							<Space
							>
								<Input
									suffix = { <SearchOutlined /> }
									style = { {
										width : "256px" ,
										height : "40px" ,
										display : "flex" ,
										borderRadius:"8px",
										border:"2px solid #e6e8ec",
										marginRight:"16px",
									} }
									value = { this.reax_spaces_list.store.searchText }
									placeholder = {i18n("Search")}
									onInput = { ( e ) => {
										const text = e.target.value;
										this.reax_spaces_list.setSearchingText( text );
										this.reax_spaces_list.debouncedInputingSearch( text );
									} }
								/>
								<Select
									value = { this.reax_spaces_list.store.searchTagSelection }
									placeholder = {i18n("Type")}
									suffixIcon = { <SelectArrowIconSvgComponent /> }
									onSelect = { ( text ) => {
										if ( text === "null" ) text = null;
										this.reax_spaces_list.setSearchingTagSelection( text );
									} }
								>
									<Select.Option key = { null }>
										all types
									</Select.Option>
									{ spaceTags.map( ( tag ) => <Select.Option key = { tag }>{ tag }</Select.Option> ) }
								</Select>
							</Space>
						</div>
					</div>
					
					<div
						style = { {
							display : "flex" ,
							marginTop : "24px" ,
							justifyContent : "flex-start" ,
							paddingRight : "-16px" ,
							flexFlow : "row wrap" ,
							maxHeight : "fit-content" ,
							width:"1216px",
						} }
					>
						{ this.JSX.InfiniteSpacesList() }
					</div>
				</div>
			</div>
		</>;
	}
} );


import {
	reaxel_scrollParentRef ,
	reaxel_space_list ,
	reaxel_wallet ,
} from '@@reaxels';
import { Space_List_Item } from '@@pages/_BussinessComponents';
import { SearchOutlined } from '@ant-design/icons';
import spaceTags from '@@Public/space-tags.json';
import InfiniteScroll from 'react-infinite-scroller';
import { SelectArrowIconSvgComponent } from '@@pages/_SvgComponents';
import less from './index.module.less';
