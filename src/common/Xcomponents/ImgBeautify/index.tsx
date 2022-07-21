
/*原生<img/>在无法加载图片时会显示丑陋的图标和文字 */
export const Img = ( props : props ) => {
	const [src,setSrc] = useState(props.src);
	
	useEffect( () => {
		setSrc( props.src );
	} , [ props.src ] );
	
	if(!src){
		return <img src="" {...props} style={{
			...(props.style??{}),
			visibility : "hidden"
		}}/>
	}
	return <img
		src = { src }
		onError={(e) => {
			setSrc( null );
		}}
		{...props}
	/>;
};

type props = {} & React.ImgHTMLAttributes<any>;
