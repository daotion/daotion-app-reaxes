import { request_space_detail } from '@@requests/Spaces/space-detail';

export const reaxel_space_detail = function (){
	
	const {
		store ,
		setState,
	} = orzMobx( {
		spaceInfo : null ,
		loading : true ,
	} );
	
	const fetch_space_detail = ( spaceID:number ) => request_space_detail( spaceID ).
	then( ( data ) => {
		setState( {
			spaceInfo : data ,
			loading : false ,
		} );
	} ).catch((e) => {
		setState( {
			loading : false ,
		} );
	});
	
	return (lifecycle:Lifecycle) => {
		let ret;
		
		/**
		 * 初始化一个依据deps变化来执行的闭包.每次调用时memedFetchSpaceinfo(*这里传入函数返回新的依赖列表*)此时会自动比对是否和上一次有差异,
		 * 如果没差异则不会执行,此方法用于防止无限请求&渲染.
		 */
		const memoFetchSpaceInfo = Reaxes.closuredMemo( ( spaceID:number ) => {
			fetch_space_detail( spaceID );
		} , () => [] );
		
		return ret = {
			get store (){
				return store;
			},
			getSpaceDetailMemo( spaceID : number ) {
				return memoFetchSpaceInfo( ( prevDeps ) => [ spaceID ] )( spaceID );
			},
		};
	};
}();
