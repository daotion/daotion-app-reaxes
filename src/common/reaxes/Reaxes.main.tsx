export const Reaxes:Reaxes = new class {
	
	/*渲染时触发的动作, 使用标记位来防止重复渲染*/
	renderAction () {
		/*null是第一次渲染状态;true是可以触发渲染轮;false是阻止渲染轮*/
		let flag = true;
		
		return (action:Function,lifcecycle?:Lifecycle) => {
			action();
			return;
			/*if(flag === null){
				// action?.();
				flag = true;
				return;
			}else */if(flag === true){
				action?.();
				flag = false;
				return;
			}else {
				flag = true;
				return ;
			}
		}
	};
	
	observedMemo <F extends ( first : boolean ) => any>( callback : F , dependencies ) : ReturnType<F> {
		let depList = dependencies();
		reaction( dependencies , ( data , reaction ) => {
			const dataChanged = !utils.default.shallowEqual( data , depList );
			if ( dataChanged ) {
				callback( false );
				depList = data;
			} else {
				crayon.red( 'reaction called but data not changed' );
			}
		} );
		return callback( true );
	};
	
	closuredMemo(callback,deps = () => []){
		let depList = deps() ;
		return (depsSetter) => {
			const tempDepsList = depsSetter(depList);
			return (...args) => {
				if(!utils.default.shallowEqual(depList,tempDepsList)){
					callback(...args);
					depList = tempDepsList;
				}
			}
		};
	}
	
	/**
	 * 为reaxel在hooks中使用提供支持
	 */
	hooks:Lifecycle = {
		/*在除了mounted之后每一次update都会调用*/
		updated <T extends Function>(cb:T) {
			
			let first = true;
			useEffect( () => {
				if(!first)return cb();
			});
		} ,
		rendered <T extends Function>(cb:T) {
			useEffect( () => cb() );
		},
		mounted <T extends Function>(cb:T) {
			useEffect( () => cb() ,[]);
		},
		effect <T extends Function,F extends () => any[]>(cb:T,deps:F){
			useEffect(() => cb() , deps());
		},
		unmount <T extends Function,F extends () => any[]>(cb:T,deps:F){
			useEffect(() => cb() , []);
		},
	} as Lifecycle;
};

type Reaxes = {
	renderAction() : (callback:Function) => any;
	memory<F extends ( first : boolean ) => any>( callback : F , dependencies ) : ReturnType<F>;
	hooks : Lifecycle;
};

import { reaction } from 'mobx';
