/**
 * 当发起多个相似请求时, 只
 */
export const reaxel_fact__prevent_dup_request = function
	<T extends (preventDup : (callback) => Promise<F>) => (...args:A[]) => Promise<F> , F = any , A = any >
(requester:T){
	const {
		store ,
		setState,
	} = orzMobx({
		pending : null as Promise<F> ,
	});
	
	
	
	return () => {
		
		return {
			grasp(...args:A[]){
				/*当Promise resolve的时候*/
				const preventDup = (callback) => {
					if(promiseResult !== store.pending){
						return null;
					}
					setState({ pending : null });
					return callback();
				}
				const promiseResult = requester(preventDup)(...args);
				setState({ pending : promiseResult });
			},
			
		};
	};
};


const reaxel_fetch = function(){
	const { store , setState } = orzMobx({
		text : null ,
	});
	const reax_req = reaxel_fact__prevent_dup_request((preventDup) => () => {
		return req({a:1,b:""}).then((text) => {
			return preventDup(() => {
				setState({ text });
				console.log(text);
				return text;
			});
		}).then((text) => {
			return preventDup(() => {
				console.log(text);
				console.log(text.slice(0 , 1));
			});
		});
	})();
	
	return () => {
		
		return {
			get text(){
				return store.text;
			},
			fetch(){
				reax_req.grasp();
			},
		} 
	}
}()

let count = 0;
export const PreventDupTest = ComponentWrapper(() => {
	
	const { fetch , text } = reaxel_fetch();
	
	const { Button } = antd;
	return <>
		<Button
			onClick = { () => {
				fetch();
			} }
		>
			request
		</Button>
		
		<p>
			{ text }
		</p>
	</>;
});


const req = (args:{a:number,b:string}) => orzPromise((resolve) => {
	
	setTimeout(() => {
		resolve(`${ count ++ } success ! ~~`);
	} , 1500);
});
