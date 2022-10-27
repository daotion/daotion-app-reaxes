import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Login } from "./pages/login";
import { UserInfo } from "./pages/user-info";
import { OrderInfo } from "./pages/order-info";
import { PayoutManagement } from "./pages/payout-management";
import { AddPayout } from "./SVGcomponents/payout-management/add-payout";
import { HomePage } from "./pages/home-page";
import { FinancialDetails } from "./pages/home-page/financial-details";


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
	<FinancialDetails /> ,
	document.getElementById( 'react-app-root' ) ,
);


