import React , {} from 'react';
import {
	compose ,
	hot ,
	withHooks ,
	didRenderLifeCycle ,
} from './Wrappers/index';

export const ComponentWrapper = compose( [
	hot ,
	didRenderLifeCycle ,
	withHooks ,
] );
