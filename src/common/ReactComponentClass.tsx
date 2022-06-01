import { Component } from 'react';
import { reaction } from 'mobx';


export interface ReactComponentClass<Tprops extends {} = any , Tstate extends {} = any> extends Component<Tprops , Tstate>{
	// componentDidRender?( stage: "mount" | "update" , prevProps?: Readonly<Tprops> , prevState?: Readonly<Tstate> , snapshot?: any ):any;
	// componentDidMount? : Component["componentDidMount"];
	// componentDidUpdate? : Component["componentDidUpdate"];
}

export class ReactComponentClass<Tprops extends {} = any , Tstate extends {} = any> extends Component<Tprops , Tstate> {
	
	JSX: { [ p: string ]: () => React.ReactElement | void | React.ReactNode };
	
	actions: { [ p: string ]: Function };
	
	mountedStack = [];
	
	unmountStack = [];
	
	updatedStack = [];
	
	renderedStack = [];
	
	lifecycle = {
		mounted : (cb) => {
			this.mountedStack.push(cb);
		},
		unmount : (cb) => {
			this.unmountStack.push(cb);
		} ,
		updated : (cb) => {
			this.updatedStack.push(cb);
		} ,
		rendered : (cb) => {
			this.renderedStack.push(cb);
		} ,
		
		memory<F extends ( first : boolean ) => any>( callback : F , dependencies ) : ReturnType<F> {
			reaction( dependencies , ( data , reaction ) => {
				const dataChanged = !utils.default.shallowEqual( data , depList );
				console.log( dataChanged );
				if ( dataChanged ) {
					crayon.orange( 'data changed' );
					callback( false );
					depList = data;
				} else {
					crayon.red( 'reaction called but data not changed' );
				}
				
			} );
			let depList = dependencies();
			
			return callback( true );
		},
	}
	
	/**
	 * didMount和didUpdate都要执行的函数,何不放在这里?
	 */
	componentDidRender?( stage: "mount" | "update" , prevProps?: Readonly<Tprops> , prevState?: Readonly<Tstate> , snapshot?: any ):any;
	
	
	// componentDidMount?() {
	// 	super.componentDidMount();
	// 	this.componentDidRender?.( "mount" );
	// }
	//
	// componentDidUpdate?( prevProps: Readonly<Tprops> , prevState: Readonly<Tstate> , snapshot?: any ) {
	//	
	// 	super.componentDidUpdate(
	// 		prevProps ,
	// 		prevState ,
	// 		snapshot 
	// 	);
	//	
	// 	this.componentDidRender?.(
	// 		"update" ,
	// 		prevProps ,
	// 		prevState ,
	// 		snapshot ,
	// 	);
	// }
};


const Apx = class extends ReactComponentClass<any , any> {
	
	componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
		
	}
};
