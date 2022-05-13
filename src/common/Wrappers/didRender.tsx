import React , {} from 'react';


/*provide "componentDidRender" lifeCycle in class component*/
export const didRenderLifeCycle = ( originalComponent: React.ComponentClass ) => {
	
	if ( !originalComponent.prototype?.render ) {
		return originalComponent;
	}
	
	const originalDidMount = originalComponent.prototype.componentDidMount;
	const originalDidUpdate = originalComponent.prototype.componentDidUpdate;
	
	/*delete instance's prop at itself*/
	if ( originalComponent.hasOwnProperty( 'componentDidMount' ) ) {
		delete originalComponent.prototype.componentDidMount;
	}
	if ( originalComponent.hasOwnProperty( 'componentDidUpdate' ) ) {
		delete originalComponent.prototype.componentDidUpdate;
	}
	
	originalComponent.prototype.componentDidMount = function ( ...args ) {
		originalDidMount?.call(
			this ,
			...args ,
		);
		originalComponent.prototype.componentDidRender?.(
			"mount" ,
			...args,
		);
	};
	originalComponent.prototype.componentDidUpdate = function ( ...args ) {
		originalDidUpdate?.call(
			this ,
			...args ,
		);
		originalComponent.prototype.componentDidRender?.(
			"update" ,
			...args,
		);
	};
	
	return originalComponent;
};
