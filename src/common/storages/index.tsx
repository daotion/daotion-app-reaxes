/**
 * 提供统一的持久化存储接口
 * todo 支持过期时间
 */

type ORZLocalstorage = {
	get : (<ret>(key:string|symbol) => ret) & (() => Storage) ,
	set( key : string | symbol , value , expiration?:number|BigInt):void ,
	remove(key : string | symbol):void;
} & symbols;
type symbols = {
	account_storage_symbol : symbol;
	[P:string] : symbol;
};
export const account_storage_symbol = Symbol( 'account' );

export const orzLocalstroage:ORZLocalstorage = (new class {
	
	constructor() {
		Object.assign( this , {
			account_storage_symbol ,
		});
	}
	
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
	}
	
	set( key : string | symbol , value , expiration:number|BigInt = null) {
		console.log( typeof key === "string" );
		if ( typeof key === "string" ) {
			localStorage.setItem( key , value );
		} else {
			localStorage.setItem( getMap( key ) , value );
		}
		
	}
	
	remove (key : string | symbol){
		const _key = typeof key === "string" ? key : getMap(key);
		window.localStorage.removeItem( _key );
	}
}) as ORZLocalstorage;


const getMap = ( symbol ) => (
	{
		[ account_storage_symbol ] : "__internal_storage_wallet_account__" ,
	}[ symbol ]
);
