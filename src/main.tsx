import React , { Component } from 'react';
import ReactDOM , { render } from 'react-dom';
import { App } from './App';

render( 
	<App /> , 
	document.getElementById( 'react-app-root' ) 
);

module?.hot?.accept(() => {
	console.error('pppppppppppp');
})
