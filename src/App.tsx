import React , { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@mui/material/Button';

class _App extends Component<any , any> {
	
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
			<Button
				variant="contained"
			>
				hello world 
			</Button>
		</>;
	}
}

export const App = hot( _App );

