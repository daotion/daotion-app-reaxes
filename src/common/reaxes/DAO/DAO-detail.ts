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
		
		lifecycle.mounted( () => {
			console.log( 'updated' );
			renderedPromise.then( ( DAOID ) => fetch( DAOID ) );
		} );
		
		return ret = {
			get store (){
				return store;
			},
			/*必须在render里每次渲染时执行*/
			resolveDAOID (DAOID:string){
				renderedPromise = Promise.resolve( DAOID );
			},
		};
	};
}();
