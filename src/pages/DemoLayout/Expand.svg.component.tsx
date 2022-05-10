import React , { useState, useEffect } from 'react';

import SVGexpand from './chevron_up.component.svg';
import less from './style.module.less';


export const Expand = ( props ) => {
	useEffect(
		() => {
			return () => {
				console.log( `<Expand/> unmounted` );
			};
		} ,
		[],
	);
	
	return <div
		className={less.SVGexpand}
		style = { {
			transition : "transform 0.3s ease",
		} }
	>
		<SVGexpand />
	</div>;
};
