/**
 * 拖拽上传
 * reaxel_DDF({
 *    onUpload(file):拖拽或点击上传后的回调; 
 *    preventClickUpload:是否阻止点击上传
 * })入参
 *
 * containerEventHandler : input@type=file的外层容器事件处理器,建议是DIV
 * inputFileEventHandler : input@type=file事件处理器,必须放在input@type=file元素上
 *
 */
export const reaxel_DDF = function(){
	let ret;
	const {
		store ,
		setState,
	} = orzMobx( {
		dragging : false ,
		imgPreviewUrl : null ,
		file : null ,
	} );
	return ret = ( {
		onUpload ,
		preventClickUpload = false ,
	} : args = {} ) => {
		
		return {
			get imgPreviewUrl() {
				return store.imgPreviewUrl;
			} ,
			get dragging() {
				return store.dragging;
			} ,
			get file() {
				return store.file;
			} ,
			clearFile : () => {
				setState( {
					file : null ,
					imgPreviewUrl : null ,
				} );
			},
			containerEventHandler : {
				onDrop : () => {
					setState( { dragging : false } );
				} ,
				onDragEnter : () => {
					setState( { dragging : true } );
				} ,
				onDragLeave : () => {
					setState( { dragging : false } );
				} ,
			} as React.HTMLAttributes<any> ,
			inputFileEventHandler : {
				onClick : ( e ) => {
					if ( preventClickUpload ) {
						e.preventDefault();
					}
				} ,
				onChange : (e) => {
					const file = e.target.files[0];
					if(!file) return ;
					const objectURL = window.URL.createObjectURL( file );
					setState( {
						imgPreviewUrl : objectURL ,
						file ,
					} );
					onUpload?.(file);
				},
				onDrop : ( e ) => {
					const [ file ] = e.dataTransfer.files;
					const objectURL = window.URL.createObjectURL( file );
					setState( {
						imgPreviewUrl : objectURL ,
						file ,
					} );
					onUpload?.(store.file);
					console.log( objectURL.replace( 'blob:' , '' ) );
				} ,
			} as React.InputHTMLAttributes<any> ,
		};
	};
	type args = {
		onUpload? : (file : File,) => void ,
		preventClickUpload? : boolean;
	};
}();
