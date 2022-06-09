import React from 'react';
import less from './style.module.less';
import {
	Input ,
	Select ,
	Space ,
	Empty ,
	
} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { SearchOutlined } from '@ant-design/icons';
import chainIconMap from '@@Public/chain-icon-map.json';
import { SelectArrowIconSvgComponent } from './components';
import { fetch_DAO_list } from '@@common/actions/DAO-list';
import type { dao__all_dao } from '@@common/actions/DAO-list/types';
import { signViaWallet } from '@@common/actions/sign-message';
import DAO_tags from '@@Public/DAO-tags.json';

const { Option } = Select;

export const MainContent = ComponentWrapper( class extends ReactComponentClass {
	
	componentDidRender( stage : "mount" | "update" , prevProps? : Readonly<any> , prevState? : Readonly<any> , snapshot? : any ) : any {
		
	}
	
	render() {
		return <>
			<div
				style = { {
					display : "flex" ,
					height : "calc(100% - 80px)" ,
					position : "static" ,
					transform : "translateX(0)" ,
					// backgroundColor : "beige",
					width : "100%" ,
					boxSizing : "border-box" ,
					overflow : "auto" ,
					padding : "32px" ,
					paddingBottom : "0" ,
					justifyContent : "center" ,
					flexFlow : "row nowrap" ,
					
				} }
				ref = { scrollParentRef }
			>
				<DAO_list />
			</div>
		</>;
	}
} );
const scrollParentRef = React.createRef<HTMLDivElement>();
export const DAO_list = ComponentWrapper( class extends ReactComponentClass {
	
	signMsg = signViaWallet( this.lifecycle );
	
	JSX = {
		InfiniteDAOlist : () => {
			if(this.dao_list_acion.store.infos.length === 0){
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
				hasMore = { this.dao_list_acion.store.hasMore }
				loadMore = { () => {
					this.dao_list_acion.fetchMore( 40 );
				} }
				getScrollParent = { () => scrollParentRef.current }
				useWindow = { false }
				threshold = { 500 }
			>
				{ this.dao_list_acion.store.infos.map( ( item ) => <DAO_list_item
					key = { item.id }
					info = { item }
				/> ) }
			</InfiniteScroll>
		},
	}
	
	actions = {
		onInputSearch : utils.debounce( ( e : React.SyntheticEvent ) => {
			fetch_DAO_list( {
				indexStart : 0 ,
				firstTimestamp : 0 ,
				count : 50 ,
			} ).
			then( ( data ) => {
				console.log( data );
			} );
		} , 1200 , true ) ,
		
	};
	
	dao_list_acion = action_DAO_list( this.lifecycle );
	
	render() {
		
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
						>DAO list
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
									value = {this.dao_list_acion.store.searchText}
									placeholder = "Search"
									onInput = { (e) => {
										const text = e.target.value;
										this.dao_list_acion.setSearchingText(text);
										this.dao_list_acion.debouncedInputingSearch(text);
									}}
								/>
								<Select
									value = "1"
									suffixIcon = { <SelectArrowIconSvgComponent /> }
									style = { {
										width : "129px" ,
										
									} }
								>
									<Select.Option
										key = "1"
									>
										Network
									</Select.Option>
								</Select>
								<Select
									value = {this.dao_list_acion.store.searchTagSelection}
									placeholder="All Types"
									suffixIcon = { <SelectArrowIconSvgComponent /> }
									onSelect={(text) => {
										this.dao_list_acion.setSearchingTagSelection(text === "__empty__" ? null : text);
									}}
									style = { {
										width : "129px" ,
									} }
								>
									<Select.Option key = "__empty__" value = "__empty__" >
										<b>
											all types
										</b></Select.Option>
									{DAO_tags.map((tag) => <Select.Option key = {tag} value = {tag}>{tag}</Select.Option>)}
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
						{this.JSX.InfiniteDAOlist()}
					</div>
				</div>
			</div>
		</>;
	}
} );

export const DAO_list_item = ComponentWrapper( class extends ReactComponentClass<{
	info : ArrayElement<dao__all_dao.response['infos']>
}> {
	
	render() {
		const { info } = this.props;
		return <>
			<div
				className = { less.daoListCard }
			>
				<div>
					
					<DAO_item_name_icon src = { `url('${ info.iconUrl }')` } />
					<div
						style = { {
							display : "flex" ,
							justifyContent : "center" ,
							alignItems : "center" ,
							marginTop : "16px" ,
						} }
					>
						<span
							style = { {
								fontSize : "16px" ,
								fontWeight : "bold" ,
							} }
						>{ info.name }</span>
						<span
							style = { {
								display : "flex" ,
								justifyContent : "space-evenly" ,
								
							} }
						>
							{ chainIconMap.filter( item => info.chainIDs.includes( item.ChainID ) ).
							map( ( {
								icon ,
								ChainID,
							} ) =>
								<DAO_item_name_chain_icon
									key = { ChainID }
									src = { `url('${ icon }')` }
								/> )
							}
						</span>
					
					</div>
					<span
						style = { {
							color : "#999999" ,
							textAlign : "center" ,
							fontSize : "14px" ,
							marginTop : "11px" ,
							lineHeight : "normal" ,
							
						} }
					>
						{ info.userCount } Members
					</span>
					
					<div
						className = { less.daoListItemTagContainer }
					>
						{ info.tags.map( text => <DAO_item_tag
							key = { text }
							text = { text }
						/> ) }
					</div>
					
					<div
						className = { less.DAOListItemBtn }
					>
						Join
					</div>
				</div>
			</div>
		</>;
	}
} );


/**
 * @example
 * <DAO_name_icon src="url('data:image/svg...')"/>
 * <DAO_name_icon src="url('https://xxx.png')"/>
 *
 */
export const DAO_item_name_icon = ( props : { src : string } ) => {
	
	return <>
		<span
			style = { {
				display : "inline-flex" ,
				width : "72px" ,
				height : "72px" ,
				backgroundImage : props.src ,
				borderRadius : "50%" ,
				backgroundColor : "#f4f5f6" ,
				flex : "0 0 auto",
			} }
		/>
	</>;
};

/**
 * @example
 * <DAO_name_chain_icon src="url('data:image/svg...')"/>
 * <DAO_name_chian_icon src="url('https://xxx.png')"/>
 *
 */
export const DAO_item_name_chain_icon = ( props : { src : string } ) => {
	
	return <>
		<span
			style = { {
				display : "inline-flex" ,
				width : "16px" ,
				height : "16px" ,
				backgroundImage : props.src ,
				borderRadius : "50%" ,
				backgroundColor : "#f4f5f6" ,
				marginLeft : "4px" ,
			} }
		/>
	</>;
};


export const DAO_item_tag = ( props : { text : string } ) => {
	
	return <span
		style = { {
			display : "inline-flex" ,
			padding : "0px 4px" ,
			backgroundColor : "#f0f0f0" ,
			color : "#7d7d7d" ,
			fontSize : "12px" ,
			borderRadius : "4px" ,
			flex : "0 0 auto" ,
			height : "fit-content" ,
			lineHeight : "normal" ,
			
		} }
	>{ props.text }</span>;
};


const action_counter = ( lifecycle : LifeCycle ) => {
	const {
		store ,
		setState,
	} = orzMobx( { count : 0 } );
	lifecycle.rendered( () => {
		crayon.blue( `action_counter : ` , store.count );
	} );
	return {
		get count() {
			return store.count;
		} ,
		setCount() {
			setState( { count : store.count + 1 } );
		},
	};
};

const action_DAO_list = ( lifecycle : LifeCycle ) => {
	
	const act = action_counter( lifecycle );
	let prevSearchText = '';
	
	const {
		store ,
		setState,
	} = orzMobx( {
		infos : [] ,
		indexStart : 0 ,
		firstTimestamp : 0 ,
		searchText : '' ,
		searchTagSelection : null ,
		searchTag : null ,
		searchChainId : null ,
		hasMore : true ,
	} );
	
	lifecycle.mounted( () => {
		fetch_DAO_list( {
			indexStart : store.indexStart ,
			firstTimestamp : store.firstTimestamp ,
			count : 20 ,
		} ).
		then( ( data ) => {
			setState( {
				infos : data.infos ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
			} );
		} );
	} );
	
	const id = lifecycle.updated(() => {
		if(act.count > 3){
			lifecycle.unregister(id);
		}
	});
	
	
	const debouncedInputingSearch = utils.debounce( ( text:string ) => {
		fetch_DAO_list( {
			indexStart : 0 ,
			firstTimestamp : 0 ,
			count : 30 ,
			nameSearch : text ,
			
		} ).
		then( ( data ) => {
			prevSearchText = text;
			setState( {
				infos : data.infos ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
			} );
		} );
	} , 600 , false );
	
	const fetchMore = ( count : number = 20 ) => {
		
		fetch_DAO_list( {
			indexStart : store.indexStart ,
			firstTimestamp : store.firstTimestamp ,
			count : count ,
			nameSearch : prevSearchText,
			tag : store.searchTag ,
			chainId : store.searchChainId ,
		} ).
		then( ( data ) => {
			act.setCount();
			setState( {
				infos : [
					...store.infos ,
					...data.infos,
				] ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
				hasMore : data.count < count ? false : true ,
			} );
		} );
	}
	
	const searchBySelectTag = (text) => {
		fetch_DAO_list( {
			indexStart : 0 ,
			firstTimestamp : 0 ,
			count : 30 ,
			nameSearch : store.searchText ,
			tag : store.searchTagSelection,
			chainId : store.searchChainId,
		} ).
		then( ( data ) => {
			prevSearchText = text;
			setState( {
				infos : data.infos ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
			} );
		} );
	};
	
	return {
		store,
		setSearchingText (text){
			setState( {
				searchText : text ,
			} );
		},
		setSearchingTagSelection (text:string){
			setState( {
				searchTagSelection : text ,
			} );
			searchBySelectTag(text);
		},
		setCount : act.setCount ,
		fetchMore ,
		debouncedInputingSearch ,
	};
};


console.log(__NODE_ENV__);
