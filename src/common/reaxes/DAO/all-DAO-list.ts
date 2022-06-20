import {fetch_all_DAO_list} from '@@requester/preset-interface/DAO';


const counter = ( lifecycle : Lifecycle ) => {
	const {
		store ,
		setState,
	} = orzMobx( { count : 0 } );
	lifecycle.rendered( () => {
		// crayon.blue( `action_counter : ` , store.count );
	} );
	return {
		get count() {
			return store.count;
		} ,
		setCount() {
			setState( { count : store.count + 1 } );
		},
	};
};
const onerror = ( msg ) => {
	crayon.error( msg );
};

export const reaxel_DAO_list = ( lifecycle : Lifecycle ) => {
	
	const act = counter( lifecycle );
	let prevSearchText = '';
	
	const {
		store ,
		setState,
	} = orzMobx( {
		infos : [] ,
		indexStart : 0 ,
		firstTimestamp : 0 ,
		searchText : '' ,
		searchTagSelection : null ,
		searchChainId : null ,
		hasMore : true ,
	} );
	
	lifecycle.mounted( () => {
		fetch_all_DAO_list( {
			indexStart : store.indexStart ,
			firstTimestamp : store.firstTimestamp ,
			count : 20 ,
		} ).
		then( ( data ) => {
			setState( {
				infos : data.infos ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
			} );
		} );
	} );
	
	const id = lifecycle.updated(() => {
		if(act.count > 3){
			lifecycle.unregister(id);
		}
	});
	const debouncedInputingSearch = utils.debounce( ( text:string ) => {
		fetch_all_DAO_list( {
			indexStart : 0 ,
			firstTimestamp : 0 ,
			count : 30 ,
			nameSearch : text ,
			tag : store.searchTagSelection ,
			chainId : store.searchChainId ,
		} ).
		then( ( data ) => {
			prevSearchText = text;
			setState( {
				infos : data.infos ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
			} );
		} );
	} , 600 , false );
	
	const fetchMore = ( count : number = 20 ) => {
		return fetch_all_DAO_list( {
			indexStart : store.indexStart ,
			firstTimestamp : store.firstTimestamp ,
			count : count ,
			nameSearch : prevSearchText,
			tag : store.searchTagSelection ,
			chainId : store.searchChainId ,
		} ).
		then( ( data ) => {
			act.setCount();
			setState( {
				infos : [
					...store.infos ,
					...data.infos,
				] ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
				hasMore : data.count < count ? false : true ,
			} );
		} );
	}
	
	const searchBySelectTag = (text) => {
		return fetch_all_DAO_list( {
			indexStart : 0 ,
			firstTimestamp : 0 ,
			count : 30 ,
			nameSearch : store.searchText ,
			tag : store.searchTagSelection,
			chainId : store.searchChainId,
		} ).
		then( ( data ) => {
			setState( {
				infos : data.infos ,
				firstTimestamp : data.firstTimestamp ,
				indexStart : data.indexEnd ,
				hasMore : data.count < 30 ? false : true ,
			} );
		} );
	};
	
	return {
		store,
		setSearchingText (text){
			setState( {
				searchText : text ,
			} );
		},
		setSearchingTagSelection (text:string){
			setState( {
				searchTagSelection : text ,
			} );
			searchBySelectTag(text);
		},
		setCount : act.setCount ,
		fetchMore ,
		debouncedInputingSearch ,
	};
};



/*供react-infinite-scroller使用的ref-reaxel*/
export const reaxel_scrollParentRef = function() {
	const scrollParentRef = React.createRef<HTMLDivElement>();
	return () => {
		return scrollParentRef;
	};
}();
