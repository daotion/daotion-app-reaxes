import {
	compose ,
	hot ,
	// withHoC ,
	didRenderLifeCycle ,
} from './Wrappers/index';
import {withHoC} from '@@pages/Test/parentObserver/withHoC';

const componentHasWrapped = Symbol( '' );

export const ComponentWrapper = <T extends {}>(component : T) : T => {
	
	if(component.hasOwnProperty(componentHasWrapped)){
		return component;
	}
	
	const wrappedComponent = compose( [
		hot ,
		didRenderLifeCycle ,
		withHoC ,
	] )(component);
	
	/*flag to prevent duplicated wrap*/
	wrappedComponent[componentHasWrapped] = true;
	return wrappedComponent;
};

