export const reaxel_edit_mch_cfg = function(){
	
	let ret;
	const initialState = {
		
	};
	const { state$mchCNE , setFields , reset } = reaxel_ctrl();
	const { store , setState } = orzMobx(initialState);
	
	const fetchMchCfg = () => {
		return 
	};
	
	const closFetchMchCfg = Reaxes.closuredMemo(() => {
		return fetchMchCfg().then(() => {
			
		})
	} , () => []);
	
	return () => {
		return ret = {
			state:store,
			setState,
			reaxel_ctrl,
			submit(){
				
			},
		};
	};
}();

import { reaxel_ctrl } from './reaxel--mch-ctrl';
