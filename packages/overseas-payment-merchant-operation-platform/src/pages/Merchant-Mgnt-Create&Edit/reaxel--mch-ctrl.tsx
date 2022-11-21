export const reaxel_ctrl = function(){
	let ret;
	const initialState = {
		name : '',
		oldPwd : '',
		password : '',
		contactPerson : '',
		contactPhone : '',
		sellerID : null ,
		payIn : {
			mode : "basic" as "basic"|"advanced",
			amount : null,
			left : {
				fix : null,
				rate : null,
			},
			right : {
				fix : null,
				rate : null,
			},
		},
		payOut : {
			mode : "basic" as "basic"|"advanced",
			amount : null,
			left : {
				fix : null,
				rate : null,
			},
			right : {
				fix : null,
				rate : null,
			},
		},
		whiteList : [""],
		status : 1 ,
		payInStatus : 1,
		payOutStatus : 1,
	};
	const { store , setState } = orzMobx(initialState);
	const {store:state$sallers,setState:setState$sallers} = orzMobx({sallers : null as mch_saller_list.response['list']});
	
	const [closFetchSellerList] = Reaxes.closuredMemo(() => {
		return request_mch_saller_list().then(({ list }) => {
			setState$sallers({ sallers : list });
		});
	} , () => []);
	
	return () => {
		return ret = {
			setFields : setState ,
			state$mchCNE : store ,
			get sallers(){
				return state$sallers.sallers;
			},
			closFetchSellerList,
			reset(){
				setState(initialState);
			},
		};
	};
}();


import { request_mch_saller_list } from '@@requests';
import { mch_saller_list } from '@@requests/mch-mgnt/types';
