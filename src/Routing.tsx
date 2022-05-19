import React , {} from "react" ;
import {
	Button ,
} from 'antd';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {
	BrowserRouter ,
	Route ,
	Routes ,
	Outlet ,
	Link ,
} from 'react-router-dom';
import { Test } from '@@pages/Test';
import { DemoLayout } from '@@pages/DemoLayout';
import { ReactTemplate } from '../Public/react-template';
import { DesignComponents } from '@@pages/DesignComponents';
import {Wallet} from '@@pages/Wallet-logic';
import {WalletTest} from '@@pages/Test/wallet-test';
export const Routing = (
	( props ) => {
		
		
		return <BrowserRouter>
			<Routes>
				<Route
					path = "/*"
				>
					<Route
						index
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
						path = "demo"
						element = { <DemoLayout /> }
					/>
					<Route
						path = "DesignComponents/*"
						element = { withOutlet( () => <DesignComponents />) }
					/>
					
					<Route
						path = "test"
						element = { withOutlet( () => <Test /> ) }
					/>
					
					<Route
						path = "wallet"
					>
						<Route
							index
							element = { <Wallet /> }
						></Route>
						<Route
							path="test"
							element={<WalletTest/>}
						/>
					</Route>
					
					<Route
						path = "react-template"
						element = { withOutlet( () => <ReactTemplate /> ) }
					/>
				</Route>
			</Routes>
		
		</BrowserRouter>;
	}
);


export const withOutlet = ( _Component ) => {
	return <>
		<_Component />
		<Outlet />
	</>;
};
