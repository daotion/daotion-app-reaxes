import React , { Component } from 'react';
import {
	BrowserRouter ,
	Route ,
	Routes ,
	Link ,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import { DemoLayout } from '@@pages/DemoLayout';
import "./styles/main.less";

class _App extends Component<any , any> {
	
	render() {
		
		return <>
			<BrowserRouter>
				<Routes>
					<Route
						path = "/"
						exact
						element = { React.createElement( () => {
							return <>
								
								<Button>
									<Link
										to = "/demo"
									>
										Demo
									</Link>
								</Button>
							
							</>;
						} ) }
					/>
					<Route
						path = "/demo"
						exact
						element = { <DemoLayout /> }
					>
					
					</Route>
				</Routes>
			</BrowserRouter>
		</>;
	}
	
}

export const App = ComponentWrapper( _App );

