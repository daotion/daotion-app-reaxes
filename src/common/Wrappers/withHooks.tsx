import { Component } from 'react';
import { observer as observerLite } from 'mobx-react-lite';
import { observer } from 'mobx-react';

type Props = {
	instance: React.Component;
};

export function withHooks<T extends ( React.Component & React.FC )>( OriginalComponent: T ) {
	/*this should be a FC*/
	if ( !OriginalComponent.prototype?.render ) {
		return observerLite( OriginalComponent );
	}
	/**
	 * 如果已经被Observer包裹过,则直接返回
	 */
	if(Object.getOwnPropertySymbols(OriginalComponent).find((symbol) => symbol.description === "isMobXReactObserver" )){
		return OriginalComponent;
	}
	
	const baseRender = OriginalComponent.prototype.render;
	
	function HooksProvider( { instance,random } ): any {
		const ref = useRef(null);
		/**
		 * 触发父节点的class.render.
		 * 这样做是因为如果observer-lite触发的hooks更新是不会调用父节点的生命周期的.
		 * 
		 * 另外一种做法是在hooks组件更新后调用instance.componentDidRender();但无法获取到react
		 * 内部更新的生命周期传参 , 所以取用目前的方案:hooks() => class.render() 
		 */
		
		useEffect( () => {
			if ( ref.current !== 'updated' ) {
				instance.forceUpdate();
				ref.current = 'updated';
			} else {
				ref.current = null;
			}
		} );
		return baseRender.call(instance);
	}
	
	// @ts-ignore
	const componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
	HooksProvider.displayName = componentName + 'Hooks';
	const H = observerLite( HooksProvider );
	
	
	OriginalComponent.prototype.render = function (){
		return <H instance={this} random = {Math.random()}/>
	};
	
	
	return observer(OriginalComponent);
}
