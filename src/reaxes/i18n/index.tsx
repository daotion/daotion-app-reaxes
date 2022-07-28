
/**
 * 分布式I18n reaxel
 */
export const reaxel_i18n = function(){
	
	const {store,setState} = orzMobx( {
		lang : "en" ,
		loading : false,
	} );
	/*已经加载好的i18n文件*/
	const loadedLangMap = {};
	
	
	const asyncLangLoader = () => {
		if(store.lang === 'en') return ;
		if(store.loading) return;
		const lang = store.lang;
		if ( !loadedLangMap[ lang ] ) {
			setState( {
				loading : true ,
			} );
			return asyncLangMap[ lang ]().
			then( ( module ) => {
				const json = module.default;
				loadedLangMap[ lang ] = json;
			} ).finally(() => {
				setState( { loading : false } );
			});
		}
	}
	
	const i18n = function(){
		let prevLang = 'en';
		return (langText:string) => {
			/*依赖收集,不要去掉否则有bug*/
			const lang = (store.loading,store.lang);
			if(lang === "en") return langText;
			if(loadedLangMap[lang]){
				prevLang = lang;
				return loadedLangMap[lang][langText];
			} else {
				if(prevLang === 'en') return langText;
				return loadedLangMap[ prevLang ][ langText ];
			}
		};
	}()
	
	const I18n = ComponentWrapper((props:React.PropsWithChildren<{}>):React.ReactElement => {
		[store.lang];
		const children = props.children as React.ReactText;
		const forceUpdate = utils.useforceUpdate();
		const [prevLangText,prevLang] = [useRef<React.ReactText>() , useRef<string>(store.lang)];
		
		/*暂时不要移除,监测组件是否被不正常地卸载*/
		useEffect(() => {
			// console.log( 'mounted' );
			// return () => console.log( 'unmounted' );
		},[])
		
		useEffect(() => {
			forceUpdate();
		},[store.loading]);
		
		if(store.lang === 'en') {
			prevLangText.current = children;
			prevLang.current = 'en';
			return <>{children}</> ;
		};
		if(!loadedLangMap[store.lang]){
			return <>{ prevLangText.current }</>;
		}else {
			prevLangText.current = loadedLangMap[store.lang][children];
			prevLang.current = store.lang;
			return <>{loadedLangMap[store.lang][children]}</>;
		}
	});
	
	return () => {
		
		return {
			/*返回语言列表*/
			get languageList (){
				return languageList;
			},
			/*返回当前使用的语言缩写*/
			get language(){
				return store.lang;
			},
			get loading(){
				return store.loading;
			},
			i18n,
			/*修改语言方法,会重新渲染所有使用了此闭包内I18n的组件*/
			changeLang : ( lang : string ) => {
				setState( {lang} );
				asyncLangLoader();
			},
			/*I18n组件,children直接放英语自然文本.*/
			I18n ,
		}
	}
}();

const languageList = [
	{
		lang : "en",
		name : "English",
	},
	{
		lang : "zh-CN",
		name : "简体中文",
	},
	{
		lang : "zh-TC",
		name : "繁體中文",
	},
];
/*维护一个加载lang-json的列表,惰性加载*/
const asyncLangMap = {
	"zh-CN" : () => import('@@Public/lang/lang_zh-CN.json'),
	/*模拟测试: 当异步加载一个语言包很慢时,实现了先渲染上一次语言的缓存(防止空白),待加载lang-json成功后再渲染*/
	"zh-TC": () => {
		/*todo 产品经理认为如果切换慢时禁用切换功能即可.*/
		return orzPromise((resolve) => {
			setTimeout( () => {
				import('@@Public/lang/lang_zh-TC.json').then( ( module ) => {
					resolve( module );
				} );
			} , 6000 );
		})
	},
};
