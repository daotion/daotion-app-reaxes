export const reaxel_edit_mch_cfg = function(){
	
	let ret;
	const {} = orzMobx();
	
	const fetchMchCfg = () => {
		return 
	};
	
	const closFetchMchCfg = Reaxes.closuredMemo(() => {
		return fetchMchCfg().then(() => {
			
		})
	} , () => []);
	
	return () => {
		return ret = {
			submit(){
				
			},
		};
	};
}();
