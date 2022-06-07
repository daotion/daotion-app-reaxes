import {viaMobx} from '@@mobxState';

import { Chain } from '@web3-onboard/common';
import { web3onboard } from '@@common/actions';
import {
	dao__all_dao ,
} from './types';

const onerror = ( msg ) => {
	crayon.error( msg );
};

const defineGetter = ( object , key , callback ) => {
	for ( const i in object ) {
		const val = object[ i ];
		Object.assign( val , {
			get [ key ]() {
				return callback( val );
			} ,
		} );
	}
	return object;
};




const env = defineGetter({
	yang : {
		host : "http://192.168.1.126:8199" ,
		prefix : "/server_yang" ,
	},
},"baseUrl",(source) => {
	return `${ source.host }${ source.prefix }/`;
});

const _fetch = (path:string,) => {
	
	const {host,prefix} = env.yang;
	return fetch(`${env.yang.host}${prefix}/${path}`,{
		
	});
};



export const fetch_DAO_list = (payload:dao__all_dao.payload) => {
	
	return request.post<dao__all_dao.response,dao__all_dao.payload>('/dao/all-dao',{
		body : payload,
		env : "server_yang" ,
	}).then((data) => {
		crayon.purple( 'fetch_DAO_list' , data );
		return {
			...data,
			infos : data.infos.map((item) => (
				{ ...item , id : Math.random().toString()  }))
		};
	}).catch((e) => {
		console.error( e );
		return null as dao__all_dao.response;
	})
};
