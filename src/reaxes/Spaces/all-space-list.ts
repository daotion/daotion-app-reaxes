import {request_all_spaces_list} from '@@requests/Spaces';
// import { reaxel_login } from '@@reaxes';


const onerror = ( msg ) => {
	crayon.error( msg );
};

export const reaxel_space_list = function(){
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
	
	
	
	return ( lifecycle : Lifecycle ) => {
		// const {store:login_store,memedLogin} = reaxel_login(lifecycle);
		// memedLogin((is_logged_in) => {
		// 	if(is_logged_in){
		// 		fetch_all_DAO_list( {
		// 			indexStart : store.indexStart ,
		// 			firstTimestamp : store.firstTimestamp ,
		// 			count : 40 ,
		// 		} ).
		// 		then( ( data ) => {
		// 			setState( {
		// 				infos : data.infos ,
		// 				firstTimestamp : data.firstTimestamp ,
		// 				indexStart : data.indexEnd ,
		// 			} );
		// 		} );
		// 	}else {
		// 		setState( { infos : [] } );
		// 	}
		// })
		/*todo refactory*/
		lifecycle.mounted( () => {
			request_all_spaces_list( {
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
		
		const debouncedInputingSearch = utils.debounce( ( text:string ) => {
			request_all_spaces_list( {
				indexStart : 0 ,
				firstTimestamp : 0 ,
				count : 30 ,
				nameSearch : text ,
				tag : store.searchTagSelection ,
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
			return request_all_spaces_list( {
				indexStart : store.indexStart ,
				firstTimestamp : store.firstTimestamp ,
				count : count ,
				nameSearch : prevSearchText,
				tag : store.searchTagSelection ,
			} ).
			then( ( data ) => {
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
		
		const searchOnSelect = () => {
			return request_all_spaces_list( {
				indexStart : 0 ,
				firstTimestamp : 0 ,
				count : 30 ,
				nameSearch : store.searchText ,
				tag : store.searchTagSelection,
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
			setSearchingTagSelection (tag:string){
				setState( {
					searchTagSelection : tag ,
				} );
				searchOnSelect();
			},
			fetchMore ,
			debouncedInputingSearch ,
		};
	}
}();



/*供react-infinite-scroller使用的ref-reaxel*/
export const reaxel_scrollParentRef = function() {
	const scrollParentRef = React.createRef<HTMLDivElement>();
	return () => {
		return scrollParentRef;
	};
}();
