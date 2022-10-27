import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Login } from "./pages/login";
import { UserInfo } from "./pages/user-info";
import { OrderInfo } from "./pages/order-info";
import { PayoutManagement } from "./pages/payout-management";


module?.hot?.accept?.(
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
	<PayoutManagement /> ,
	document.getElementById( 'react-app-root' ) ,
);


