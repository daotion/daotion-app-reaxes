// class

import React , {
	Component ,
	useState ,
} from "react";

const currentComponentInstance = {
	currentNode : null ,
	maps : new Map(),
};



class ReactComponent extends Component<any , any> {
	
	
	constructor( props ) {
		super( props );
		currentComponentInstance.currentNode = this;
		
	}
	
	render(){
		
		return super.render();
	}
}

class Test extends ReactComponent {
	
	
	
	render() {
		
		const [count , setCount] = strikeState(10);
		
		return <span
			
		>{count}</span>
	}
}

function strikeState (){
	
}



const useCount = ( initial = 0 ) => {
	const [ count , setCount ] = useState<number>( initial );
	return [
		count ,
		setCount,
	];
};
const DemoH: React.FC = ( props ) => {
	const [ count , setCount ] = useCount( 0 );
	return <span
		onClick = { () => setCount( count + 1 ) }
	>
		{ count }
	</span>;
};
