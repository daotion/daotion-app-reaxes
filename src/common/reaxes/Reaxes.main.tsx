export const Reaxes:Reaxes = new class {
	
	memory <F extends ( first : boolean ) => any>( callback : F , dependencies ) : ReturnType<F> {
		let depList = dependencies();
		reaction( dependencies , ( data , reaction ) => {
			const dataChanged = !utils.default.shallowEqual( data , depList );
			if ( dataChanged ) {
				callback( false );
				depList = data;
			} else {
				crayon.red( 'reaction called but data not changed' );
			}
		} );
		return callback( true );
	};
	
	/**
	 * 为reaxel在hooks中使用提供支持
	 */
	hooks:Lifecycle = {
		/*在除了mounted之后每一次update都会调用*/
		updated <T extends Function>(cb:T) {
			
			let first = true;
			useEffect( () => {
				if(!first)return cb();
			});
		} ,
		rendered <T extends Function>(cb:T) {
			useEffect( () => cb() );
		},
		effect <T extends Function,F extends () => any[]>(cb:T,deps:F){
			useEffect(() => cb() , deps());
		},
	} as Lifecycle;
};

type Reaxes = {
	memory<F extends ( first : boolean ) => any>( callback : F , dependencies ) : ReturnType<F>;
	hooks : Lifecycle;
};

import { reaction } from 'mobx';
