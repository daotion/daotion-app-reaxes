import { Space__all_spaces } from '@@RootPath/src/reaxels/Spaces/types';
import {
	reaxel_joined_Space_list ,
	reaxel_user_join_or_leave_space ,
	reaxel_i18n ,
} from '@@RootPath/src/reaxels';
import chainIconMap from '@@Public/chain-icon-map.json';
import { message } from 'antd';

export const Space_List_Item = ComponentWrapper( class extends ReactComponentClass<{
	info : ArrayElement<Space__all_spaces.response['infos']>
}> {
	
	reax_joined_spaces_list = reaxel_joined_Space_list();
	
	reax_user_join_or_leave_space = reaxel_user_join_or_leave_space();
	
	reax_i18n = reaxel_i18n();
	
	JSX = {
		
		Join_or_leave : ComponentWrapper(() => {
			const [ mouseEntered , setMouseEntered ] = useState( false );
			const { spaceID } = this.props.info;
			const { I18n } = this.reax_i18n;
			const role = this.reax_joined_spaces_list.joined_space_list.find((item) => item.spaceID === spaceID)?.role;
			return this.reax_joined_spaces_list.joined_space_list.some( ( item ) => item.spaceID === this.props.info.spaceID ) ? <div
				className = { less.spaceListItemBtnJoined }
				onMouseEnter = { () => {
					if(role === 3){
						return;
					}
					setMouseEntered( true );
				} }
				onMouseLeave = { () => setMouseEntered( false ) }
				onClick = { ( e ) => {
					e.stopPropagation();
					if(role === 3){
						return;
					}
					this.reax_user_join_or_leave_space.leave_space( spaceID ).
					then( () => {
						if ( __EXPERIMENTAL__ ) {
							message.success( `user leaved Space id:${ spaceID }` );
						}
					} );
				} }
			>
				<I18n>{ mouseEntered ? "leave" : "Joined" }</I18n>
			</div> : <div
				onClick = { ( e ) => {
					e.stopPropagation();
					this.reax_user_join_or_leave_space.join_space( spaceID ).
					then( () => {
						if ( __EXPERIMENTAL__ ) {
							message.success( `joined Space successfuly id:${ spaceID }` );
						}
					} );
				} }
				className = { less.spaceListItemBtnLeaved }
			>
				<I18n>
					Join
				</I18n>
			</div>;
		}) ,
	};
	render() {
		const {Join_or_leave} = this.JSX;
		const { info } = this.props;
		const { navigate } = utils.useRouter();
		return <>
			<div
				className = { less.spaceListCard }
				onClick = { () => {
					navigate( `/space${ info.spaceID }/info` );
				} }
			>
				<div>
					
					<Space_Item_Name_Icon src = { `url('${ info.iconUrl }')` } />
					<div
						style = { {
							display : "flex" ,
							justifyContent : "center" ,
							alignItems : "center" ,
							marginTop : "24px" ,
							width : "100%" ,
						} }
					>
						<span
							style = { {
								fontSize : "16px" ,
								fontWeight : "bold" ,
								display : "block" ,
								textAlign : "center" ,
								whiteSpace : "nowrap" ,
								overflow : "hidden" ,
								textOverflow : "ellipsis" ,
								width : "180px" ,
							} }
						>{ info.name }</span>
					
					</div>
					
					<div
						className = { less.spaceListItemTagContainer }
					>
						{ info.tags.map( text => <Space_Item_Tag
							key = { text }
							text = { text }
						/> ) }
					</div>
					
					<Join_or_leave/>
				</div>
			</div>
		</>;
	}
} );


/**
 * @example
 * <Space_Item_Name_Icon src="url('data:image/svg...')"/>
 * <Space_Item_Name_Icon src="url('https://xxx.png')"/>
 *
 */
export const Space_Item_Name_Icon = ( props : { src : string } ) => {
	
	return <>
		<span
			style = { {
				display : "inline-flex" ,
				width : "76px" ,
				height : "76px" ,
				backgroundImage : props.src ,
				borderRadius : "50%" ,
				backgroundColor : "#f4f5f6" ,
				flex : "0 0 auto" ,
				backgroundSize : "cover" ,
				objectPosition : "50% 50%" ,
			} }
		/>
	</>;
};

/**
 * @example
 * <Space_Item_Name_Chain_Icon src="url('data:image/svg...')"/>
 * <Space_Item_Name_Chain_Icon src="url('https://xxx.png')"/>
 *
 */
export const Space_Item_Name_Chain_Icon = ( props : { src : string } ) => {
	
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


export const Space_Item_Tag = ( props : { text : string } ) => {
	
	return <span
		style = { {
			display : "flex" ,
			padding : "0px 4px" ,
			backgroundColor : "#e6e8ec" ,
			color : "#777e91" ,
			fontSize : "12px" ,
			margin : "2px 2px 2px 2px" ,
			borderRadius : "4px" ,
			flex : "0 0 auto" ,
			height : "16px" ,
			lineHeight : "normal" ,
			width : "fit-content" ,
			alignItems : "center" ,
		} }
	>{ props.text }</span>;
};

import less from './style.module.less';
