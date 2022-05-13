import React , { Component } from 'react';
import ReactDOM , { render } from 'react-dom';
import { App } from './App';






// module.hot.accept( "./App.tsx" );


module.hot.accept(
	"./main.tsx" ,
	( ...args ) => {
		
		return render(
			<App /> ,
			document.getElementById( 'react-app-root' ) ,
		);
	} ,
	( ...args ) => {
		console.error( ...args );
		debugger;
	} ,
);












render(
	<App /> ,
	document.getElementById( 'react-app-root' ) ,
);






