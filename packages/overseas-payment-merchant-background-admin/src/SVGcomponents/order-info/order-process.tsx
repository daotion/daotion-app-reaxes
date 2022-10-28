import React from "react";

export const Dot = reaxper(() => {
	return(
		<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.5" width="7" height="7" rx="3.5" fill="#0070F3" stroke="#0070F3"/>
		</svg>
	)
})

export const Line = reaxper(() => {
	return(
		<svg width="2" height="34" viewBox="0 0 2 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0V34" stroke="#0070F3"/>
		</svg>
	)
})
