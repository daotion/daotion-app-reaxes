

export const KaneDarkMode = ComponentWrapper(() => {
	
	const reax_theme  = reaxel_theme();
	
	return <div
		className={less.bg}
	>
		<input 
			className={less.input}
			value = "sdddddddds"
		/>
		
		<footer>
			<p>current theme : {reax_theme.theme} </p>
			<button onClick={() => reax_theme.switch(reax_theme.theme === "light" && "dark" || "light")}>switch</button>
		</footer>
	</div>
})


export const reaxel_theme = function(){
	const {
		store ,
		setState,
	} = orzMobx<{
		theme :theme,
	}>( {
		theme : "light" ,
	} );
	
	const style = document.createElement('style');
	style;
	document.head.append( style );
	
	Reaxes.observedMemo(async () => {
		
		const LessModule = await import('./dark.theme.less');
		// console.log( LessModule , LessModule.default[ 0 ][ 1 ] , LessModule.default.toString() );
		if ( store.theme === "dark" ) {
			document.body.className = "dark";
			style.innerHTML = await import('./dark.theme.less').then((module) => module.default[ 0 ][ 1 ]);
		}else if(store.theme === "light"){
			document.body.className = "light";
			style.innerHTML = await import('./light.theme.less').then((module) => module.default[ 0 ][ 1 ]);
		}
	} , () => [ store.theme ] );
	
	return () => {
		return {
			get theme (){
				return store.theme
			},
			/*如果不传theme则自动切换为另一种*/
			switch(theme?:theme){
				if(!theme){
					return setState( {
						theme : store.theme === "light" ? "dark" : "light" ,
					} );
				}else {
					setState( {
						theme ,
					} );
				}
			}
		}
	}
}(); 


type theme = "light"|"dark";
import less from './index.module.less';
