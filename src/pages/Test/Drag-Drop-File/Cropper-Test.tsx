export const CropperTest = ComponentWrapper( () => {
	const {
		dragging ,
		file ,
		imgPreviewUrl,
		
	} = reaxel_DDF();
	
	const CropperInstance = useRef<Cropper>();
	const [result,setResult] = useState(null);
	
	return <div
		style = { {
			width : 200 ,
			height : 200 ,
			border : "2px solid #eee",
			
		} }
	>
		<Cropper
			onInitialized = {(instance) => {
				CropperInstance.current = instance;
			}}
			src = {imgPreviewUrl}
			aspectRatio = {1}
			dragMode="move"
			guides={false}
			cropBoxMovable={false}
			cropBoxResizable={false}
			width={120}
			height={120}
			viewMode={1}
		/>
		<antd.Button
			onClick={() => {
				console.log( CropperInstance.current.getCroppedCanvas()?.toDataURL() );
			}}
		>Cut</antd.Button>
		<div
			style = {{
				width: 300,
				height: 300,
				backgroundColor : "#eeaabb",
				backgroundImage : `url(${result})`,
				
			}}
		>
			
		</div>
	</div>;
} );



import { reaxel_DDF } from '@@pages/Test/Drag-Drop-File';
import Cropper from 'react-cropper';
import "cropperjs/dist/cropper.css";

