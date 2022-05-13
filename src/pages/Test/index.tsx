// class

import React , {
	Component ,
	useState ,
	useEffect ,
} from "react";
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {
	viaMobx ,
} from '@@common/MobxState';
export const {
	setState ,
	store,
} = viaMobx<any>( {
	
	count : 2 ,
	
} );
//@ts-ignore
window.store = store;

export const _Test = ( class extends ReactComponentClass<any , any> {
	
	state = {
		input : "222",
	};
	
	componentDidRender(stage , prevProps: Readonly<any> , prevState: Readonly<any> , snapshot?: any ) {
		console.log( stage );
		
	}
	
	render() {
		
		const [ count , setCount ] = useState<string|number>( 0 );
		useEffect(
			() => {
				console.log( 0 );
			} ,
			[ this.state.input ],
		);
		
		return <>
			<div>
				<input
					placeholder = "input count"
					value = { count }
					onInput = { ( e ) => {
						setCount( e.target.value );
					} }
				/>
				
				<div>count : { count }</div>
				
				<input
					value = {store.count * 2}
					onInput={(e) => {
						console.log( 22222 );
						setState( {
							count : store.count + 1 ,
							
						} );
					}}
				/>
			</div>
		</>;
	}
} );




export const Test = ComponentWrapper(_Test);
