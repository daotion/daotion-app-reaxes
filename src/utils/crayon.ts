type css = {
	[key in keyof CSSStyleDeclaration] : CSSStyleDeclaration[key] ;
	
};
type crayon = ( ( css: Partial<CSSStyleDeclaration> ) => ( str?: string , ...any ) => any ) & {
	[key in "warn" | "info" | "log" | "error"]: (( str?: string , ...any ) => any) & {
	[key in string]: (str:string , ...any) => any ;
} } & {
	[key in string]: (str:string , ...any) => any ;
};

/*把驼峰css key 改为短横连*/
const transformCSSHumpToLowercase = (key:keyof CSSStyleDeclaration) => {
	return (key.toString().split('').reduce((accumulator,k) => {
		if(/[A-Z]/.test(k)){
			return accumulator.concat( '-'.concat( k.toLowerCase() ) );
		}
		return accumulator.concat(k);
	},'')) as keyof CSSStyleDeclaration;
};
/*将驼峰css key对象改为短横连*/
const batchTransformCSSHumpToLowercase = (object:{[key in keyof CSSStyleDeclaration] : any}) => {
	const obj = {};
	for(const key in object){ /*@ts-ignore*/
		obj[transformCSSHumpToLowercase(key)] = object[key];
	}
	return obj;
};
/**
 * chalk的山寨版:crayon 用于打印更优美的日志
 * 
 * @example 
   crayon({
      'background-color' : "red" ,
      color : "green" ,
   })('这里放字符串',{a:1})
 
   crayon.warn.red('以警告的方式打印红色文字',{a:1});
   crayon.warn('以警告的方式打印',{a:1});
   
    
 */
export const crayon : crayon = new Proxy((cssProperties:Partial<CSSStyleDeclaration> = {}) => {
	return (string = '',...data) => {
		const cssString = Object.keys(cssProperties).reduce((accumulator,key:string) => {
			/*@ts-ignore*/
			const res = `${accumulator}${String(transformCSSHumpToLowercase(key))}:${cssProperties[key]};`
			return res;
		},'' as Partial<CSSStyleDeclaration>);
		console.log( '%c' + string , cssString , ...data );
	};
},{
	get : (target, propKey:string, receiver) => {
		
		if([
			"prototype",
			"hasOwnProperty",
			"toString",
			"prototype",
			"length",
			"name",
			"arguments",
			"constructor",
			"isPrototypeOf",
		].includes(propKey)){
			return target[ propKey ];
		}
		
		const createColorProxy = ( type = "log" ) => new Proxy( (string , ...data) => {
			console[ type ]( '%c' + string , `color:${ propKey }` , ...data );
		} , {
			get : ( target , _propKey , receiver ) => {
				
				return ( string , ...data ) => {
					/*当crayon.blue('',...args)时,babel使用了apply来隐式转换扩展运算符 , 导致了proxy拿到的是'apply'而非'blue' */
					if(typeof string !== "string"){
						const [[str,..._data]] = data;
						return console[ type ]( '%c' + str , `color:${ propKey }` , ..._data ); 
					}
					console[ type ]( '%c' + string , `color:${ _propKey.toString() }` , ...data );
					
				};
			} ,
		} );
		switch ( propKey ){
			case "warn" : 
			case "log" : 
			case "info" : 
			case "error" :
				return createColorProxy(propKey);
		}
		return createColorProxy("log");
	},
}) as crayon;

/*示例 & 测试*/
if(0){
	crayon.warn['#eee']('dsdsdsdsds',{b:222});
	crayon.warn('dsdsdsdsds',{b:222});
	crayon.log('dsdsdsdsds',{b:222});
	crayon.purple('1111111111111',{b:222});

	crayon( {
		'backgroundColor' : "blue" ,
		color : "green" ,
	} )( 'bbbbbbbbbbbbbbb' , { a : 1 } );
	
	crayon[ "#aabbcc" ]( "asdsadsd");
}
