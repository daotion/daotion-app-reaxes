export const reaxel_collection_order = function(){
	let ret;
	const initialState = {
		processModalShow: false
	};
	const {store, setState} = orzMobx(initialState);
	
	return () => {
		return ret = {
			get processModalShow(){
				return store.processModalShow;
			},
			changeModalShow(status: boolean){
				setState({
					processModalShow: status,
				})
			}
		}
	}
	
}();
