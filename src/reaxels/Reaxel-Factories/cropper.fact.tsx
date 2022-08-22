export const reaxel_fact__Cropper = function(){
	
	let cropperInstance:Cropper|null = null;
	const XCropper = ComponentWrapper( ( props : ReactCropperProps ) => {
		return <Cropper
			onInitialized = { ( instance ) => {
				cropperInstance = instance;
			} }
			aspectRatio = { 1 }
			dragMode = "move"
			guides = { false }
			cropBoxMovable = { false }
			cropBoxResizable = { false }
			autoCropArea = { 1 }
			viewMode = { 1 }
			{...props}
		/>;
	} );
	
	
	return () => {
		
		return {
			XCropper ,
			async crop () {
				if(!cropperInstance) throw 'cropperInstance has not initilized yet!';
				const promise = orzPromise<Blob>();
				cropperInstance.getCroppedCanvas().toBlob((blob) => {
					promise.resolve( blob );
				});
				return promise;
			},
		};
	};
};

import Cropper , { ReactCropperProps } from 'react-cropper';
import "cropperjs/dist/cropper.css";
