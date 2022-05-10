import React , {
	Component ,
	useEffect ,
	useRef ,
} from 'react';

import { observer as observerLite } from 'mobx-react-lite';
import { observer } from 'mobx-react';

type Props = {
	instance: React.Component;
};

export function withHooks<T extends ( React.Component & React.FC )>( OriginalComponent: T ) {
	/*this could be a FC*/
	if ( !OriginalComponent.prototype?.render ) {
		return observerLite( OriginalComponent );
	}
	
	const actualRender = OriginalComponent.prototype.render;
	
	function HooksProvider( { instance } ): any {
		if ( !instance ) {
			return null;
		}
		const ref = useRef( true );
		useEffect( () => {
			if ( ref.current === false ) {
				instance.forceUpdate();
			} else {
				ref.current = false;
			}
		} ,[ [] ] );
		return actualRender.call( instance );
	}
	
	// @ts-ignore
	const componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
	HooksProvider.displayName = componentName + 'Hooks';
	
	const Observed = observer( HooksProvider );
	
	OriginalComponent.prototype.render = function ( this: React.Component ) {
		return <Observed instance = { this } />;
	};
	
	return observer( OriginalComponent );
}
