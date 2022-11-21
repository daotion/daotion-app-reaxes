export const reaxel_mch_open_account = function(){
	let ret;
	const { state$mchCNE , setFields , reset } = reaxel_ctrl();
	const { setPending , pendingState } = toolkits.orzPending();
	
	return () => {
		return ret = {
			submit(){
				
			},
		};
	};
}();
import { reaxel_ctrl } from './reaxel--mch-ctrl';
