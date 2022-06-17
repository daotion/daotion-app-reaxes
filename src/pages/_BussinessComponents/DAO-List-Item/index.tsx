import { dao__all_dao } from '@@reaxes/DAO/types';
import chainIconMap from '@@Public/chain-icon-map.json';

export const DAO_List_Item = ComponentWrapper( class extends ReactComponentClass<{
	info : ArrayElement<dao__all_dao.response['infos']>
}> {
	
	render() {
		const { info } = this.props;
		return <>
			<div
				className = { less.daoListCard }
			>
				<div>
					
					<DAO_Item_Name_Icon src = { `url('${ info.iconUrl }')` } />
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
								<DAO_Item_Name_Chain_Icon
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
						{ info.tags.map( text => <DAO_Item_Tag
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
export const DAO_Item_Name_Icon = ( props : { src : string } ) => {
	
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
export const DAO_Item_Name_Chain_Icon = ( props : { src : string } ) => {
	
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


export const DAO_Item_Tag = ( props : { text : string } ) => {
	
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

import less from './style.module.less';
