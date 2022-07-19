import { request_user_joined_space_list } from '@@requests/Spaces';
import { Space__user_joined_Space_list } from '@@requests/Spaces/types';
import { reaxel_wallet } from '@@reaxes/wallet/wallet';
import { reaxel_user_join_or_leave_space } from '@@reaxes/Spaces/user-join-or-leave-space';


export const reaxel_joined_Space_list = function () {
	
	
	let ret;
	const {
		store ,
		setState ,
	} = orzMobx<{
		joined_space_list : Space__user_joined_Space_list.response['infos'];
		loading : boolean;
	}>( {
		joined_space_list : [] ,
		loading : true ,
	} );
	
	
	const { address_memoed_reaction } = reaxel_wallet();
	
	address_memoed_reaction( ( address ) => {
		if ( typeof address === "string" && address ) {
			ret?.request_joined_space_list( address );
		} else {
			ret?.empty_joined_space_list?.();
		}
	} );
	
	return () => {
		
		
		const fetch_joined_space_list = ( address : string ) => {
			return request_user_joined_space_list( address ).
			then( ( data ) => setState( {
				joined_space_list : data.infos ,
			} ) ).
			catch( ( e ) => {
				console.error( e );
				throw e;
			} );
		};
		const empty_joined_space_list = () => {
			setState( {
				joined_space_list : [] ,
			} );
		};
		
		return ret = {
			get joined_space_list() : Space__user_joined_Space_list.response["infos"] {
				return store.joined_space_list;
			} ,
			request_joined_space_list : fetch_joined_space_list ,
			set_joined_space_list( joined_space_list ) {
				setState( {
					joined_space_list : joined_space_list ,
				} );
			} ,
			empty_joined_space_list : empty_joined_space_list ,
			/*返回join or leave button*/
			JoinedBtn : ComponentWrapper( ( props : JoinedBtnProps ) => {
				const {Button} = antd;
				
				if(store.joined_space_list.find((item) => item.spaceID == props.spaceID)){
					return <Button
						className = {less.joinedBtn}
						style={props.style}
						onClick = { (e) => {
							e.stopPropagation();
							reaxel_user_join_or_leave_space().leave_space( props.spaceID ).then(() => {
								if(__EXPERIMENTAL__){
									antd.message.success( `user leaved Space id:${ props.spaceID }` );
								}
							});
						} }
					><span/></Button>
				}else {
					return <Button
						style={props.style}
						onClick={(e) => {
							e.stopPropagation();
							reaxel_user_join_or_leave_space().join_space( props.spaceID ).
							then( () => {
								if ( __EXPERIMENTAL__ ) {
									antd.message.success( `joined Space successfuly id:${ props.spaceID }` );
								}
							} );
						}}
					>Join</Button>
				}
			} ) ,
		};
	};
}();

import less from '@@RootPath/src/styles/reaxels.module.less';
type JoinedBtnProps = {
	spaceID : number;
	style : React.CSSProperties;
};
