import {
	reaxel_joined_Space_list ,
	reaxel_user_join_or_leave_space,
} from '@@reaxes';
import {ButtonProps} from 'antd';

import less from '@@RootPath/src/styles/reaxels.module.less';
/*返回join or leave button但是如果用户是controller则变为设置按钮*/
export const BtnSpaceJoinedSetting = ComponentWrapper( ( props : JoinedBtnProps ) => {
	const { Button } = antd;
	const { joined_space_list } = reaxel_joined_Space_list();
	const {navigate} = utils.useRouter();
	
	const joinedSpaceInfo = joined_space_list.find( ( item ) => item.spaceID == props.spaceID );
	const ButtonProps : ButtonProps  = {
		
	};
	
	if(!joinedSpaceInfo){
		Object.assign<ButtonProps , ButtonProps>( ButtonProps , {
			children : "Join",
			onClick : ( e ) => {
				e.stopPropagation();
				reaxel_user_join_or_leave_space().
				join_space( props.spaceID ).
				then( () => {
					if ( __EXPERIMENTAL__ ) {
						antd.message.success( `joined Space successfuly id:${ props.spaceID }` );
					}
				} );
			}
		} );
	}else {
		if(joinedSpaceInfo.role === 3){
			Object.assign<ButtonProps,ButtonProps>( ButtonProps , {
				children : "Settings",
				onClick : () => {
					navigate( `../settings` );
				},
			} );
		} else {
			Object.assign<ButtonProps,ButtonProps>( ButtonProps , {
				className : less.joinedBtn ,
				children : <span/>,
				onClick : ( e ) => {
					e.stopPropagation();
					reaxel_user_join_or_leave_space().
					leave_space( props.spaceID ).
					then( () => {
						if ( __EXPERIMENTAL__ ) {
							antd.message.success( `user leaved Space id:${ props.spaceID }` );
						}
					} );
				},
			} );
		}
	}
	if ( joinedSpaceInfo ) {
		
		
		/*return <Button
			className = { less.joinedBtn }
			style = { props.style }
			onClick = { ( e ) => {
				e.stopPropagation();
				reaxel_user_join_or_leave_space().
				leave_space( props.spaceID ).
				then( () => {
					if ( __EXPERIMENTAL__ ) {
						antd.message.success( `user leaved Space id:${ props.spaceID }` );
					}
				} );
			} }
		>
			<span />
		</Button>;*/
	} else {
		
		/*return <Button
			style = { props.style }
			onClick = { ( e ) => {
				e.stopPropagation();
				reaxel_user_join_or_leave_space().
				join_space( props.spaceID ).
				then( () => {
					if ( __EXPERIMENTAL__ ) {
						antd.message.success( `joined Space successfuly id:${ props.spaceID }` );
					}
				} );
			} }
		>Join</Button>;*/
	}
	
	return <Button { ...ButtonProps } style={props.style} />;
} );

type JoinedBtnProps = {
	spaceID : number;
	style : React.CSSProperties;
};
