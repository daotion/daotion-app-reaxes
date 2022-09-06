/**
 * SBT主页
 */

export const reaxel__SBT_info = function () {
	let ret;
	const {
		store ,
		setState,
	} = orzMobx( {
		pending : false,
		SBT_info : null as SBT_info.response ,
	} );
	
	const closuredFetchSBTInfo = Reaxes.closuredMemo( (SBTID:number) => {
		if(!Number.isNaN(SBTID)){
			request__SBT_info( async () => ({ SBTID }) ).then( (res) => {
				crayon.blue( res );
				setState( { SBT_info : res } );
			} );
		}
	} , () => [] );
	
	return () => {
		
		return ret = {
			get pending() {
				return store.pending;
			} ,
			get SBT_info() {
				return store.SBT_info;
			} ,
			get closuredFetchSBTInfo(){
				return closuredFetchSBTInfo;
			},
		};
	};
}();

import { request__SBT_info , SBT_info } from '@@requests';
