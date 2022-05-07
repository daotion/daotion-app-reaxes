import React,{} from 'react';

import SVGexpand from './chevron_up.component.svg';



export const Expand = (props) => {
	const { rotate = 0 } = props;
	
	return <div 
		key = { rotate }
		style={{
			transform : `rotate(${ rotate }deg)`,
			transition : "transform 0.3s ease"
		}}
	>
		<SVGexpand/>
	</div>;
};
