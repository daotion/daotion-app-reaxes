import {
	Button ,
} from 'antd';
import {
	BrowserRouter ,
	Route ,
	Routes ,
	Outlet ,
	Link ,
} from 'react-router-dom';
import { Test } from '@@pages/Test';
import { Home } from '@@pages/Home';
import { Navigation } from '@@utils';
import { ReactTemplate } from '../Public/react-template';
import { DesignComponents } from '@@pages/DesignComponents';
import {Wallet} from '@@pages/Wallet-logic';
import { DaoInfo } from '@@pages/DAO-Info';

export const Routing = (
	( props ) => {
		
		
		return <BrowserRouter>
			<Routes>
				<Route
					path="/"
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
					path = "home/*"
					element = { withOutlet(<Home />) }
				/>
				<Route
					path = "DesignComponents/*"
					element = { withOutlet( <DesignComponents />) }
				/>
				
				<Route
					path = "test"
					element = { withOutlet( <Test /> ) }
				/>
				
				<Route
					path = "react-template"
					element = { withOutlet( <ReactTemplate /> ) }
				/>
				<Route
					path = "dao-info"
					element = { <DaoInfo /> }
				/>
			</Routes>
			<Navigation/>
		</BrowserRouter>;
	}
);

export const withOutlet = ( ReactElement:React.ReactElement ) => {
	return <>
		{ReactElement}
		<Outlet />
	</>;
};
