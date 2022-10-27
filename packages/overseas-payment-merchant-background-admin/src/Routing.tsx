import {
	BrowserRouter ,
	Navigate ,
	Route ,
	Routes ,
} from 'react-router-dom';
import  { Login } from './pages/Login'
import { UserInfo } from './pages/User-Info'
import { Layout } from './Layout'


export const Routing = (props) => {
	return <BrowserRouter>
		<Routes>
			<Route
				path = "login"
				element = { toolkits.withOutlet(<Login />) }
			/>
			<Route
				path = "*"
				element = { toolkits.withOutlet(<Layout />) }
			/>

		</Routes>
	</BrowserRouter>;
};


export const MainContentRouting = reaxper(() => {
	return (
		<div
			style = { {
				width : '100%' ,
				padding : '24px' ,
			} }
		>
			<div
				style = { {
					width : '100%' ,
					height : 'fit-content' ,
					backgroundColor : '#ffffff' ,
					borderRadius : '8px' ,
					overflow : 'hidden',
					
				} }
			>
				<Routes>
					<Route path = "*">
						
						<Route
							index
							element={<Navigate to={'/home'}/>}
						/>
						<Route
							path="home"
							element={<p>home</p>}
						/>
						<Route
							path="profile"
							element={toolkits.withOutlet(<UserInfo/>)}
						/>
					</Route>
				</Routes>
			
			</div>
		
		</div>
	);
})



