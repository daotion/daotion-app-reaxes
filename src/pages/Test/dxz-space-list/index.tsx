import less from './index.module.less';
import {reaxel_joined_DAO_list} from '@@reaxes';

export const DxzSpaceList = () => {
	
	const [ current , setCurrent ] = useState( 0 );
	
	return <>
		<div
			style = { {
				display : "flex" ,
				flexFlow : "row wrap" ,
				backgroundColor : "#f4f4f4" ,
				height : "100%",
			} }
		>
			<div
				style = { {
					backgroundColor : "#f4f4f4" ,
					height : "100%" ,
					display : "flex" ,
					flexFlow : "column wrap" ,
					padding : "16px 8px 16px 8px" ,
					background : "#ffffff" ,
					borderRadius : "12px" ,
					justifyContent : "space-between" ,
					position : "relative" ,
					marginLeft : "4px" ,
				} }
			>
				
				<div
					className = "Space-list"
					style = { {} }
				>
					<img
						src = "https://s1.ax1x.com/2022/07/12/jg9ss0.png"
						alt = "Space"
						width = "40px"
						height = "40px"
						style = { {
							borderRadius : "12px" ,
							margin : "8px 0px 12px 0px" ,
						} }
					/>
					<div
						style = { {
							background : " #e6e8ec" ,
							width : '40px' ,
							height : '1px' ,
						} }
					></div>
					
					<div
						style = { {
							display : "flex" ,
							flexDirection : "column" ,
						} }
					>
						{ new Array( 8 ).fill( '' ).
						map( ( _ , i ) => {
							return <Space
								key = { i }
								// onClick = { () => {
								// 	setCurrent( i );
								// } }
							/>;
						} ) }
					</div>
				
				</div>
				<div
					style = { {
						height : "54px",
					} }
				>
					<div
						style = { {
							height : "2px" ,
							width : "40px" ,
							background : "#e6e8ec" ,
							marginBottom : "12px" ,
						} }
					></div>
					<svg
						width = "40px"
						height = "40px"
						viewBox = "0 0 40 40"
						fill = "none"
						xmlns = "http://www.w3.org/2000/svg"
					>
						<circle
							opacity = "0.1"
							cx = "20"
							cy = "20"
							r = "20"
							fill = "#276DF0"
						/>
						<path
							d = "M26.5208 21.5625C27.1076 21.5625 27.5833 21.0868 27.5833 20.5C27.5833 19.9132 27.1076 19.4375 26.5208 19.4375L21.5625 19.4375L21.5625 14.4791C21.5625 13.8923 21.0868 13.4166 20.5 13.4166C19.9132 13.4166 19.4375 13.8923 19.4375 14.4791L19.4375 19.4375L14.4791 19.4375C13.8923 19.4375 13.4166 19.9132 13.4166 20.5C13.4166 21.0868 13.8923 21.5625 14.4791 21.5625L19.4375 21.5625V26.5208C19.4375 27.1076 19.9132 27.5833 20.5 27.5833C21.0868 27.5833 21.5625 27.1076 21.5625 26.5208V21.5625L26.5208 21.5625Z"
							fill = "#3772FF"
						/>
					</svg>
				</div>
			</div>
		</div>
	</>;
};
const dxz=document.getElementById('dxz');
function hh(  ) {
	const blue = document.getElementById( 'blue' );
	blue.style.display = 'block';
}


const Space = ( props ) =>
	<div
		id = "dxz"
		onClick={hh}
		// onClick = { props.onClick }
		className = { less.spaceItem }
		style = { {
			position : "relative" ,
		} }
	>
		<img
			style = { {
				borderRadius : "12px" ,
			} }
			src = "https://s1.ax1x.com/2022/07/12/jg9ss0.png"
			alt = "Space"
			width = "40px"
			height = "40px"
		/>
		<div
			className = { less.seletedBlock }
			style={{display:"none"}}
			id="blue"
		/>
		<div
			className = { less.hoverBlock }
			style = { {
				background : "#3772ff" ,
				borderRadius : ' 0px 4px 4px 0px' ,
				width : "4px" ,
				height : "20px" ,
				position : "absolute" ,
				left : "-8px" ,
				right : "44px" ,
				top : "10px" ,
			} }
		></div>
	</div>;


