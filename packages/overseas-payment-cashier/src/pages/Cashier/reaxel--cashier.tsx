export const reaxel_cashier = function(){
	
	return () => {
		return {
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
		};
	};
}();


import ctc from 'copy-to-clipboard';
