import React , {
	Component ,
	useEffect ,
	useState ,
	useRef ,
	useMemo ,
	useCallback ,
} from 'react';
import {
	Routes ,
	Route,
} from 'react-router-dom';
import {
	Button ,
	Input ,
} from 'antd';

import { viaMobx } from '@@mobxState';
import {
	globalStore ,
	globalSetState ,
} from '@@common/globalStore';
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';


export interface store {
	inputValue: string;
}

export const {
	store ,
	setState ,
} = viaMobx<store>( {
	inputValue : "" ,
} );

/* replace "ReactTemplate" once cloned from this template file. */
const _ReactTemplate = class extends Component<any , any>    {
	
	/*it will be invoked after "didMount"&"didUpdate"*/
	// componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
	// 	console.log( stage );
	// }
	
	render() {
		/* you can use react-hooks here if you want, but it was not recommended  */
		const [ count , setCount ] = useState( 10 );
		
		return <>
			<Button
				onClick = { () => {setCount( count + 1 );} }
			>
				click me : { count }
			</Button>
			<div>
				<InputPrinter initial = "xxxx" />
			</div>
		
		</>;
	}
};




/*every component which gonna be instantiated must be wrapped , it contains various basic supoort */
const InputPrinter = ComponentWrapper(( props: { initial: string } ) => {
	
	useEffect(
		() => {
			console.log( "store.inputValue updated" );
		} ,
		[ store.inputValue ] ,
	);
	
	useEffect(
		() => {
			setState( {
				inputValue : props.initial ,
			} );
		} ,
		[ props.initial ] ,
	);
	
	return <>
		<Input
			onInput = { ( e ) => {
				setState( {
					inputValue : e.target.value ,
					
				} );
			} }
			value = { store.inputValue }
		/>
		<div>
			print : { store.inputValue }
		</div>
		
		
		<span>ggggggg</span>
		<span>ggggggg</span>
		<span>ggggggg</span>
	</>;
}) ;











export const ReactTemplate = ComponentWrapper( _ReactTemplate );

