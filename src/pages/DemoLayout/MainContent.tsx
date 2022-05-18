import React , {} from 'react';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {
	store ,
	setState ,
} from './index';
import { ReactComponentClass } from '@@common/ReactComponentClass';


export const MainContent = ComponentWrapper( class extends ReactComponentClass {
	
	componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
		
	}
	
	render() {
		return undefined;
	}
});
