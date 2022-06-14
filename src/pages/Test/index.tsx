export const Test = ComponentWrapper( class extends ReactComponentClass {
	
	act = _action(this.lifecycle);
	
	render() {
		return <>
			<Text/>
			<button onClick = {this.act.setCount}>counter</button>
		</>;
	}
} );

const Text = ComponentWrapper(class extends ReactComponentClass {
	
	act = _action( this.lifecycle);
	
	
	render() {
		return <>
			<span>
				{ this.act.count }
			</span>
			<span>
				{this.act.number }
			</span>
		</>;
	}
})

const action = (initial?) => {
	
	const {store,setState} = orzMobx({
		count : initial ?? 0 ,
		number : 999 ,
	})
	
	return (lifecycle?:LifeCycle) => {
		
		lifecycle.updated(() => {
			console.log(lifecycle);
		});
		
		lifecycle.rendered(() => {
			console.log(11111111);
		});
		
		// lifecycle.effect(() => {
		// 	console.log(`component:${lifecycle.name} updated!!`);
		// },() => [store.count , store.number > 990])
		
		return {
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
			
		}
	}
	
};

const _action = action();
