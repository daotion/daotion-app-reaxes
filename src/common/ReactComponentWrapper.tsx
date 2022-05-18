import React , {} from 'react';
import {
	compose ,
	hot ,
	withHooks ,
	didRenderLifeCycle ,
} from './Wrappers/index';

const componentHasWrapped = Symbol( '' );

export const ComponentWrapper = <T extends {}>(component : T) : T => {
	
	if(component.hasOwnProperty(componentHasWrapped)){
		return component;
	}
	
	const wrappedComponent = compose( [
		hot ,
		didRenderLifeCycle ,
		withHooks ,
	] )(component);
	
	/*flag to prevent duplicated wrap*/
	wrappedComponent[componentHasWrapped] = true;
	return wrappedComponent;
};

