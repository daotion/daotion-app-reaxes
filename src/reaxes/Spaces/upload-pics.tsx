/**
 * 上传profile/space-avatar头像等
 */
import { reaxel_user } from '@@reaxes/authurize/user';
import { reaxel_wallet } from '@@reaxes/wallet/wallet';
import { reaxel_space_detail } from '@@reaxes/Spaces/space-detail';
import {
	request_server_timestamp ,
	request_upload_space_banner ,
	request_upload_space_avatar,
} from '@@requests';


export const reaxel_upload_pics = function () {
	let ret;
	
	/*递归对象转换成data[subKey][subsubkey]的formdata*/
	const formater = ( source , formdata = null , parentKey : string = null ) => {
		return Reflect.ownKeys( source ).
		reduce( ( formdata , key : string ) => {
			const value = source[ key ];
			if ( _.isObject( value ) && Object.getPrototypeOf( value ) !== File.prototype ) {
				formater( value , formdata , parentKey ? `${ parentKey }[${ key }]` : key );
			} else {
				formdata.append( parentKey ? `${ parentKey }[${ key }]` : key , value );
			}
			return formdata;
		} , formdata ?? new FormData );
	};
	const uploader = ( inputOpts : {} , onChange : ( files : FileList ) => void ) => {
		const input = document.createElement( 'input' );
		input.type = "file";
		input.onchange = ( { target } ) => {
			onChange( (
				target as HTMLInputElement
			).files );
		};
		return input;
	};
	
	return () => {
		return ret = {
			/*上传space banner*/
			space_info_banner( spaceID : number ) {
				const reax_user = reaxel_user();
				const reax_wallet = reaxel_wallet();
				const reax_space_detail = reaxel_space_detail();
				
				
				const fetch_upload = async ( file : File ) => {
					const createPayload = async () => {
						const { address } = reax_wallet.account;
						const data = {
							spaceID ,
							iconType : 2 ,
							address ,
							timestamp : await request_server_timestamp() ,
						};
						const signature = await reax_user.signByFakeWallet( data );
						
						return formater( {
							address ,
							data ,
							signature ,
							file ,
						} );
					};
					
					try {
						const response = await request_upload_space_banner( createPayload);
						reax_space_detail.setSpaceBanner( response.url );
						antd.Modal.success( { title : "upload successful!" } );
					} catch ( e ) {
						antd.Modal.error( { title : e.toString() } );
					}
				};
				const input = uploader( {} , ( [ file ] ) => {
					fetch_upload( file );
				} );
				input.click();
			} ,
			/*上传space头像*/
			space_settings_avatar : ( spaceID : number ):Promise<any> => {
				const reax_user = reaxel_user();
				const reax_wallet = reaxel_wallet();
				const reax_space_detail = reaxel_space_detail();
				const fetch_upload = async ( file : File ) => {
					
					const createPayload = async () => {
						const { address } = reax_wallet.account;
						const data = {
							spaceID ,
							iconType : 1 ,
							address ,
							timestamp : await request_server_timestamp() ,
						};
						const signature = await reax_user.signByFakeWallet( data );
						return formater( {
							address ,
							data ,
							signature ,
							file ,
						} );
					};
					
					try {
						const response = await request_upload_space_avatar( createPayload);
						reax_space_detail.setSpaceAvatar( response.url );
						antd.Modal.success( { title : "upload successful!" } );
						return response.url;
					} catch ( e ) {
						antd.Modal.error( { title : e.toString() } );
					}
				};
				const asyncUpload = orzPromise();
				const input = uploader( {} , ( [ file ] ) => {
					asyncUpload.resolve(fetch_upload( file ));
				} );
				input.click();
				return asyncUpload;
			} ,
		};
	};
}();
