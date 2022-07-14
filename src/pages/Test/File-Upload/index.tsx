import {
	reaxel_wallet ,
	reaxel_sign,
	reaxel_user_sign_login,
} from "@@reaxes";

export const FileUpload = ComponentWrapper( () => {
	const {store,upload} = reaxel_upload();
	
	return <>
		<input type="file"
			onChange={(e) => {
				const file = e.target.files[0];
				upload(file);
				// const fileReader = new FileReader();
				// fileReader.onload = (e) => {
				// 	const result = e.target.result;
				// 	console.log(typeof result);
				// 	upload(result);
				// }
				// // fileReader.readAsDataURL( file );
				// fileReader.readAsDataURL( file ,);
			}}
			
		/>
		<img src = {store.file}/>
	</>
} );



const reaxel_upload = function(){
	const {
		store,
		setState
	} = orzMobx({
		file :null ,
		
	})
	
	
	return () => {
		
		return {
			get store(){
				return store;
			},
			upload (file:File){
				const reax_sign = reaxel_sign();
				const formater = (source,formdata = null,parentKey:string = null) => {
					return Reflect.ownKeys(source).reduce((formdata,key:string) => {
						const value = source[key];
						if(_.isObject(value) && Object.getPrototypeOf(value) !== File.prototype){
							formater(value,formdata,parentKey ? `${parentKey}[${key}]` : key);
						}else {
							formdata.append(parentKey ? `${parentKey}[${key}]` :  key,value);
						}
						return formdata;
					},formdata??new FormData);
				};
				
				// const test = formater( {
				// 	address : '21323' ,
				// 	data : {
				// 		spaceID : 30 ,
				// 		iconType : 1 ,
				// 		address : "0x46DE5Eb1ecd41A974b86B85C6c53e1a04606dA59" ,
				// 		timestamp : Date.now() ,
				// 		file,
				// 	} ,
				// 	signature : "sads" ,
				// } );
				//
				// console.log( test );
				// for(const i of test.keys()){
				// 	console.log(i,test.get(i));
				// }
				const data = {
					spaceID : 30 ,
					iconType : 1 ,
					address : "0x46DE5Eb1ecd41A974b86B85C6c53e1a04606dA59" ,
					timestamp : Date.now() ,
				};
				reax_sign.signByFakeWallet( data ).then((signature) => {
					
					return request.post( `https://192.168.0.4:8199/space/space-upload-icon` , {
						method : "post" ,
						body : formater( {
							address : reaxel_wallet().account.address ,
							data ,
							signature ,
							file : file ,
						} ) ,
						mode : "cors" ,
					} );
				});
			}
		}
	}
}();
