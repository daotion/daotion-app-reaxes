import React , {
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
import _ from 'lodash';

import utils,{} from '@@utils';
import { viaMobx } from '@@mobxState';
import {
	globalStore ,
	globalSetState ,
} from '@@common/global-controller';
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';

// import './style.module.less';


export interface store {
	
}

export const {
	store ,
	setState ,
} = viaMobx<store>( {
	
} );

/* replace "ReactTemplate" once cloned from this template file. */
const _ReactTemplate = class extends ReactComponentClass<any , any>    {
	
	/*it will be invoked after "didMount"&"didUpdate"*/
	// componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
	// 	console.log( stage );
	// }
	
	componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
		
	}
	
	render() {
		/* you can use react-hooks here if you want, but it was not recommended  */
		const [ count , setCount ] = useState( 10 );
		
		return <>
			
		</>;
	}
};




/*every component which gonna be instantiated must be wrapped , it contains various basic supoort */
const InputPrinter = ComponentWrapper(( props: { } ) => {
	
	useEffect( () => {} ,[] );
	
	return <>
		
	</>;
}) ;

export const ReactTemplate = ComponentWrapper( _ReactTemplate );

