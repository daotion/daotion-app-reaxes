export const reaxel_cashier = function(){
	let tradeID;
	const { store , setState } = orzMobx({
		tradeID : null ,
		mchName : null ,
		subject : null ,
		status : null ,
		amount : null ,
		currency : null ,
		pixCode : null ,
		base64 : null ,
		deadline : null ,
	});
	const fetchCashier = (tradeID) => {
		
		return request_cashier(() => {
			return {
				getTradeID : tradeID,
			}
		}).then((data) => {
			console.log(data);
			
		});
	}
	
	const [getTradeID] = Reaxes.closuredMemo(() => {
		return qs.parse(location.search.slice(1)).tradeID as string;
	}, () => []);
	
	return () => {
		return {
			get state(){
				return store;
			},
			/*copy to clipboard*/
			ctc(text){
				if(ctc(text)){
					antm.Toast.show({
						icon:"success",
						content : "copied success" ,
					});
				}else {
					antm.Toast.show({
						icon:"fail",
						content : "failed to copy" ,
					});
				};
			},
			fetchCashier,
			getTradeID(){
				return getTradeID(() => [location.search])();
			},
		};
	};
}();


import ctc from 'copy-to-clipboard';
import { request_cashier } from '@@requests';
import qs from 'qs';
