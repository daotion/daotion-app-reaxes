export const reaxel_home = function(){
	let ret;
	const initialState = {
		withdrawModalShow: false
	};
	const { store , setState } = orzMobx(initialState);
	return () => {
		return ret = {
			get withdrawModalShow(){
				return store.withdrawModalShow;
			},
			changeModalShow(status : boolean){
				setState({
					withdrawModalShow : status ,
				});
			},
			
		}
	}
}();