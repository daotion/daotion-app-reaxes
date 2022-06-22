import { withHoC } from './withHoC';


const {
	store ,
	setState ,
} = orzMobx( {
	count : 0 ,
} );
export const ParentObserver = ComponentWrapper( class extends ReactComponentClass {
	
	reax = reaxel( this.lifecycle );
	
	componentDidUpdate( ) : any {
		console.log( 'renderd' );
	}
	
	
	render() {
		const [ count , setCount ] = useState( 0 );
		console.log( 'hooks rendered' );
		
		return <button
			// onClick = {() => setCount(count + 1)}
			onClick = { () => setState( { count : store.count + 1 } ) }
		>
			{/*{count}*/ }
			{ store.count }
		</button>;
	}
} );


const reaxel = function(){
	
	return (lifecycle:Lifecycle) => {
		
		// lifecycle.mounted(() => {
		// 	console.log( 'ooooooo' );
		// })
		//
		return {
			
		}
	}
}();
