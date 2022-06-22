export { hot } from './HMR';
export { withHoC } from './withHoC';
export { didRenderLifeCycle } from './didRender';
export { observer } from '@@mobxState';

export const compose = <T extends Function[]>( wrappers ) => {
	
	if ( wrappers.length === 0 ) {
		( arg ) => arg;
	}
	
	if ( wrappers.length === 1 ) {
		return wrappers[ 0 ];
	}
	
	return wrappers.reduce( ( accu , wrapper ) => ( ...args ) => accu( wrapper( ...args ) ) );
};

