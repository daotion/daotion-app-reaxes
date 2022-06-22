import { reaxel_sign_via_wallet } from '@@common/reaxes/authurize';



export const request_signature_string = ( address : string ) =>
	request.post<{ signatureNonce : string }>( '/user/signature-string' , {
		body : { address } ,
	} ).
	then((data) => data.signatureNonce).
	catch( () : void => {
		crayon.yellow( '/user/signature-string failed' );
	} );


export const request_sign_in = async ( address : string , signatureNonce : string ) => {
	const { sign } = reaxel_sign_via_wallet();
	return request.post<void , { address : string, signatureStr : string }>( '/user/sign-in' , {
		body : {
			address ,
			signatureStr : await sign( signatureNonce ) ,
		} ,
	} ).
	then( () => {
		crayon.green( 'sign in successfully' );
	} );
};

export const request_regression_sign = ( address ) =>
	request_signature_string( address ).
	then( ( signatureNonce ) => {
		return request_sign_in( address , signatureNonce as string );
	} ).then(() => {
		crayon.green('request_regression_sign success!');
	}).catch(() => {
		crayon.red('request_regression_sign failed!');
		return Promise.reject();
	});
