export const reaxel_fact_localstorage = function(symbolMaps?:symbolMaps){
	
	return () => {
		return {
			get<ret extends any = any>( ...key:[string|symbol]|[] ):ret|Storage {
				if ( key.length !== 0 ) {
					const _key = typeof key[0] === "string" ? key[0] : getMap(key[0]);
					try {
						return JSON.parse(window.localStorage.getItem( _key ));
					}catch ( e ) {
						return window.localStorage.getItem( key[ 0 ] as string ) as ret;
					}
				} else {
					return window.localStorage;
				}
			},
			
			set( key : string | symbol , value , expiration:number|BigInt = null) {
				if ( typeof key === "string" ) {
					localStorage.setItem( key , value );
				} else {
					localStorage.setItem( getMap( key ) , value );
				}
				
			},
			
			remove (key : string | symbol){
				const _key = typeof key === "string" ? key : getMap(key);
				window.localStorage.removeItem( _key );
			}
		};
	};
};


type symbolMaps = {
	[p :string] : symbol;
}

/**********************************************/
const reaxel_local = reaxel_fact_localstorage({
	account_storage_symbol : Symbol('__internal_storage_wallet_account__'),
});
