import { fetch_DAO_detail } from '@@requester/preset-interface/DAO/DAO-detail';

export const reaxel_DAO_detail = function (){
	
	const {
		store ,
		setState,
	} = orzMobx( {
		DAOinfo : null ,
		loading : true ,
	} );
	
	/*当执行到react的render函数时才会通过react-router知道DAOID,所以异步等待一下*/
	let renderedPromise:Promise<string>;
	// /*防止每次rendered之后setstate死循环的标记位 , 每次render之后仅运行一次请求函数*/
	// let flag = true;
	
	const fetch = ( DAOID ) => fetch_DAO_detail( parseInt(DAOID) ).
	then( ( data ) => {
		setState( {
			DAOinfo : data ,
			loading : false ,
		} );
	} ).catch((e) => {
		setState( {
			loading : false ,
		} );
	});
	
	return (lifecycle:Lifecycle) => {
		let ret;
		
		// lifecycle.mounted( () => {
		// 	console.log( 'updated' );
		// 	renderedPromise.then( ( DAOID ) => fetch( DAOID ) );
		// } );
		// lifecycle.updated( () => {
		// 	console.log( 'updated' );
		// 	renderedPromise.then( ( DAOID ) => fetch( DAOID ) );
		// } );
		/**
		 * 初始化一个依据deps变化来执行的闭包.每次调用时memedFetchDAOinfo(*这里传入函数返回新的依赖列表*)此时会自动比对是否和上一次有差异,
		 * 如果没差异则不会执行,此方法用于防止无限请求&渲染.
		 */
		const memedFetchDAOinfo = Reaxes.closuredMemo( ( DAOID:string ) => {
			fetch( DAOID );
		} , () => [] );
		
		return ret = {
			get store (){
				return store;
			},
			/*必须在render里每次渲染时执行*/
			DEPRECATED_resolveDAOID (DAOID:string){
				renderedPromise = Promise.resolve( DAOID );
			},
			getDAOdetailMemed (DAOID:string){
				return memedFetchDAOinfo((prevDeps) => [DAOID])(DAOID);
				// Reaxes.memory(() => {
				// 	fetch( DAOID );
				// },() => [DAOID]);
			}
		};
	};
}();


export const reaxel_preventInfinitLoop = function(){
	/*标记位.奇数可渲染,偶数跳过渲染*/
	let flag = 0;
	
	return (closureFn) => {
		
		return () => {
			
		}
	}
}();
