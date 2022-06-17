/**
 * 包裹React路由组件
 * @example 
 * <Route element = {utils.withOutlet(<ACertainComponent/>)}/>
 */


export const withOutlet = ( ReactElement:React.ReactElement ) => {
	return <>
		{ReactElement}
		<Outlet />
	</>;
};
import { Outlet } from 'react-router-dom';
