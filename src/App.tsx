import React , { Component } from 'react';
import {hot} from 'react-hot-loader/root';

class _App extends Component<any , any>{
	
	state = { input : 1 };
	
	render() {
		return <>
			<input
				value = { this.state.input }
				onInput = { ( e ) => {
					this.setState( {
						input : e.target.value ,
					} );
				} }
			/>
			<span>123213</span>
		</>;
	}
}

export const App = hot( _App );

