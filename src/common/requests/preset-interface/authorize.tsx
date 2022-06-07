export const request_signature_string = ( address : string ) =>
	request.post<{ signatureNonce : string }>( '/user/signature-string' , {
		body : { address } ,
	} ).
	then((data) => data.signatureNonce).
	catch( () : void => {
		crayon.yellow( '/user/signature-string failed' );
	} );


export const request_sign_in = ( address : string , signatureNonce : string ) =>
	request.post<void , { address : string, signatureNonce : string }>( '/user/sign_in' , {
		body : {
			address ,
			signatureNonce ,
		},
	} ).then(() => {
		crayon.green( 'sign in successfully' );
	});

export const request_regression_sign = ( address ) =>
	request_signature_string( address ).
	then( ( signatureNonce ) => {
		return request_sign_in( address , signatureNonce as string );
	} );
