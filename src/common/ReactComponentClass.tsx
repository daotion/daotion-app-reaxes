import React , { Component } from 'react';



interface ReactComponentClass<Tprops extends {} = any , Tstate extends {} = any> extends Component<Tprops , Tstate>{
	componentDidRender?( stage: "mount" | "update" , prevProps?: Readonly<Tprops> , prevState?: Readonly<Tstate> , snapshot?: any ):any;
	componentDidMount? : Component["componentDidMount"];
	componentDidUpdate? : Component["componentDidUpdate"];
}

export const ReactComponentClass = class Components<Tprops extends {} = any , Tstate extends {} = any> extends Component<Tprops , Tstate> {
	
	constructor( props ) {
		super( props );
	}
	
	/**
	 * didMount和didUpdate都要执行的函数,何不放在这里?
	 */
	componentDidRender?( stage: "mount" | "update" , prevProps?: Readonly<Tprops> , prevState?: Readonly<Tstate> , snapshot?: any ):any;
	
	
	componentDidMount?() {
		super.componentDidMount();
		this.componentDidRender?.( "mount" );
	}
	
	componentDidUpdate?( prevProps: Readonly<Tprops> , prevState: Readonly<Tstate> , snapshot?: any ) {
		
		super.componentDidUpdate(
			prevProps ,
			prevState ,
			snapshot 
		);
		
		this.componentDidRender?.(
			"update" ,
			prevProps ,
			prevState ,
			snapshot ,
		);
	}
};


const Apx = class extends ReactComponentClass<any , any> {
	
	componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
		
	}
};
