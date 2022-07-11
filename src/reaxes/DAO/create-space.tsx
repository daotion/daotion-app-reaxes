import {
	Reaxes ,
	Reaxper ,
	orzMobx ,
	Reaxlass,
} from 'reaxes';
import {
	reaxel_wallet,
} from '@@reaxes';

export const reaxel_create_space = function(){
	const {} = orzMobx({
		modal_showing : false,
		input_name: '', 
		select_type : null ,
		select_network : null,
		
	})
	
	
	return () => {
		
		return {
			
			
		}
	}
}();
