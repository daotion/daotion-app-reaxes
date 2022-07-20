import React from 'react';
import _ from 'lodash';

interface Props {
	color?: string,
	style? : React.CSSProperties,
};
export const SelectArrowIconSvgComponent = ( props?: Props ) => {
	
	const { color } = Object.assign(
		{
			color : "#222528" ,
		} ,
		props ,
	);
	
	return <svg
		width = "16"
		height = "16"
		viewBox = "0 0 16 16"
		fill = "none"
		xmlns = "http://www.w3.org/2000/svg"
		{..._.omit(props,"color")}
	>
		<path
			d = "M4.70711 5.29289C4.31658 4.90237 3.68342 4.90237 3.29289 5.29289C2.90237 5.68342 2.90237 6.31658 3.29289 6.70711L4.70711 5.29289ZM8 10L7.29289 10.7071C7.68342 11.0976 8.31658 11.0976 8.70711 10.7071L8 10ZM12.7071 6.70711C13.0976 6.31658 13.0976 5.68342 12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L12.7071 6.70711ZM3.29289 6.70711L7.29289 10.7071L8.70711 9.29289L4.70711 5.29289L3.29289 6.70711ZM8.70711 10.7071L12.7071 6.70711L11.2929 5.29289L7.29289 9.29289L8.70711 10.7071Z"
			fill = {color}
		/>
	</svg>
		;
};
