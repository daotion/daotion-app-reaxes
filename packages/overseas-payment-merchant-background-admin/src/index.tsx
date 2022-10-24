import { render } from 'react-dom';
import { App } from './App';
import { Login } from "./pages/Login";


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
	<Login /> ,
	document.getElementById( 'react-app-root' ) ,
);


