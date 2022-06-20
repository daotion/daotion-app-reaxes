export const Test = ComponentWrapper( class extends ReactComponentClass {
	
	act = _action(this.lifecycle);
	
	render() {
		
		
		return <>
			<button onClick = {this.act.setCount}>counter</button>
			<Text/>
			<Hooking/>
		</>;
	}
} );

const Text = ComponentWrapper(class extends ReactComponentClass {
	
	act = _action( _.omit(this.lifecycle,"updated","") );
	
	render() {
		return <>
			<span>
				{ this.act.count }
			</span>|
			<span>
				{this.act.result }
			</span>
		</>;
	}
});


const Hooking = ComponentWrapper( () => {
	
	const reaxel = _action( Reaxes.hooks );
	
	return <button
		onClick = { reaxel.reset }
	>
		reset{ reaxel.number }
	</button>;
} );

const reaxel = (initial?) => {
	
	const {store,setState} = orzMobx({
		count : initial ?? 0 ,
		number : 999 ,
	})
	
	return (lifecycle?:Lifecycle) => {
		
		let result = Reaxes.memory(() => {
			return result = store.count + store.number; 
		},() => [store.count,store.number]);
		
		lifecycle?.updated?.(() => crayon.green(result.toString()))
		
		lifecycle.effect(() => {
			crayon.blue('fffffff');
		},() =>[]);
		
		if(lifecycle.name === 'text'){
			lifecycle.rendered(() => {
				console.log( 'text called -----' );
			})
		}
		lifecycle.effect(() => {
			console.log(`component:${lifecycle.name} updated!!`);
		},() => [store.count , store.number > 990])
		
		lifecycle.mounted(() => {
			console.log('mounted===================');
		})
		
		return {
			get result (){
				[store.number,store.count];
				return result;
			},
			get count (){
				return store.count;
			} ,
			get number (){
				return store.number;
			} ,
			setCount() {
				if(store.count > 4){
					return setState({number:store.number - 1}) ;
				}
				setState( { count : store.count + 1 } );
			},
			reset() {
				setState({
					count : 0 ,
					number : 0 ,
				})
			},
			
		}
	}
	
};

const _action = reaxel();
import {reaction ,observable} from 'mobx';
import { observer } from 'mobx-react';

