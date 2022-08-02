import { orzLocalstroage , i18n_language_symbol } from '@@common/storages';
/*为reaxel-i18n勾入storage能力*/
export const reaxel_i18n_storage = function(){
	let ret = {
		writeToStorage(lang:string){
			orzLocalstroage.set(i18n_language_symbol.description , lang)
		},
		readFromStorage(callback){
			callback(orzLocalstroage.get(i18n_language_symbol.description));
			
		},
		clearI18nStorage(){
			orzLocalstroage.remove( i18n_language_symbol.description );
		},
	};
	
	return (changLang) => {
		ret.readFromStorage( ( lang : string ) => {
			if ( lang ) {
				changLang( lang );
			}
			
		} );
		
		return ret;
	}
}();
