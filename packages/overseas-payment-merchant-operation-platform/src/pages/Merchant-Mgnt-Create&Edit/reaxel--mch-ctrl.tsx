export const reaxel_ctrl = function(){
	let ret;
	const initialState = {
		name : '' ,
		password : '' ,
		contactPerson : '' ,
		contactPhone : '' ,
		sellerID : '' ,
		payIn : {
			start : '' ,
			fix : '' ,
			rate : '' ,
		} ,
		payOut : {
			start : '' ,
			fix : '' ,
			rate : '' ,
		} ,
		whiteList : [] ,
		status : 1 ,
		payInStatus : 1 ,
		payOutStatus : 1 ,
	};
	const { store , setState } = orzMobx(initialState);
	
	return () => {
		return ret = {
			setFields : setState ,
			state$mchCNE : store ,
			reset(){
				setState(initialState);
			},
		};
	};
}();
