export const reaxel_fact__validation = function(validator){
	
	const {
		store ,
		setState,
	} = orzMobx( {
		/*字段是否有效: null未校验状态, true校验通过 , false校验错误*/
		valid : null as null | true | false ,
	} );
	/*一进来就是true,后续都是false*/
	let first = true;
	let fieldChanged = false;
	let _value = Symbol();
	let pending = null;
	return (value) => {
		
		
		return {
			get valid() {
				if(first){
					first = false;
					_value = value;
				}else if(_value !== value) {
					const res = pending = validator(value);
					if(res.then && res.catch){
						res.then( ( validation ) => {
							/*如果中途再次触发了校验,则取消之前校验的结果,只取最后一次生效的promise*/
							if(pending !== null && pending !== res){
								return;
							}
							setState( { valid : true } );
						} );
						res.catch(() => {
							if(pending !== null && pending !== res){
								return;
							}
							setState( { valid : false } );
						})
					}else {
						queueMicrotask( () => {
							setState( { valid : res } );
						} );
					}
					_value = value;
				}
				return store.valid;
			} ,
			reset(){
				first = true;
				setState( {
					valid : null ,
				} );
			},
			validate(){
				const res = validator(value);
				if(res.then && res.catch){
					res.then( ( validation ) => {
						setState( { valid : validation } );
					} );
				}else {
					queueMicrotask( () => setState( { valid : res } ) );
				}
			},
		};
	}
};
