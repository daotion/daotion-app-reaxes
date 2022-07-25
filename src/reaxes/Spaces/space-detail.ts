import { request_space_detail } from '@@requests';
import { Space___get_space_detail } from '@@requests/Spaces/types';

export const reaxel_space_detail = function (){
	
	const {
		store ,
		setState,
	} = orzMobx( {
		spaceInfo : null as Space___get_space_detail.response ,
		loading : true ,
	} );
	
	const fetchUpdate_space_detail = ( spaceID:number ) => {
		
		return request_space_detail( async() => ({spaceID}) ).
		catch((e):never => {
			setState( {
				loading : false ,
			} );
			throw e;
		}).
		then( ( data ) => {
			setState( {
				spaceInfo : data ,
				loading : false ,
			} );
		} );
	}
	
	return () => {
		let ret;
		
		/**
		 * 初始化一个依据deps变化来执行的闭包.每次调用时memedFetchSpaceinfo(*这里传入函数返回新的依赖列表*)此时会自动比对是否和上一次有差异,
		 * 如果没差异则不会执行,此方法用于防止无限请求&渲染.
		 */
		const closuredFetchSpaceInfo = Reaxes.closuredMemo( ( spaceID:number ) => {
			setTimeout( () => setState( { spaceInfo : null } ) );
			fetchUpdate_space_detail( spaceID );
		} , () => [] );
		
		return ret = {
			get store (){
				return store;
			},
			setSpaceBanner(url:string){
				setState( {
					spaceInfo : {
						...store.spaceInfo ,
						bgUrl : url ,
					} ,
				} );
			},
			setSpaceAvatar(url:string){
				setState( {
					spaceInfo : {
						...store.spaceInfo ,
						iconUrl : url ,
					} ,
				} );
			},
			getSpaceDetailMemoed( spaceID : number ) {
				return closuredFetchSpaceInfo( ( prevDeps ) => [ spaceID ] )( spaceID );
			},
		};
	};
}();
