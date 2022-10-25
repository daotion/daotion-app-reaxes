import { render } from 'react-dom';
import { App } from './App';
import { Login } from "./pages/login";
import { UserInfo } from "./pages/user-info";


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
	<UserInfo /> ,
	document.getElementById( 'react-app-root' ) ,
);


