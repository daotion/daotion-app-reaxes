export const reaxel_SBT_list = function(){
	const { store , setState } = orzMobx({
		SBT_list : [] as SBT_list.SBTListItem[] ,
		input_search : null ,
		select_chain : null ,
		select_type : null ,
		
		
		firstTimestamp : 0 ,
		/*当前分页最后一个在总列表的索引位置*/
		tailIndex : 0 ,
		hasMore : null ,
		
		pending : false ,
	});
	const prevParams = {
		firstTimestamp : 0 ,
		tailIndex : 0 ,
		
		input_search : null ,
		select_chain : null ,
		select_type : null ,
	};
	
	const reax_wallet = reaxel_wallet();
	const closuredFetch__SBT_Pad_list = Reaxes.closuredMemo((args : {
			spaceID : number;
			indexStart : number;
			count? : number;
			firstTimestamp? : number,
		}) => {
			return reax_fetch_SBT_list.grasp(args);
		} , () => [
			store.input_search ,
			store.select_chain ,
			store.select_type ,
			/*占位:spaceID*/ ,
		] ,
	);
	const reax_fetch_SBT_list = reaxel_fact__prevent_dup_request((preventDup) => {
		return ({
			spaceID ,
			count = 40 ,
			firstTimestamp = store.firstTimestamp ,
			indexStart ,
		} : {
			spaceID : number;
			indexStart : number;
			count? : number;
			firstTimestamp? : number,
		}) => {
			return request__SBT_list(async () => {
				return {
					indexStart ,
					count ,
					firstTimestamp : 0 ,
					spaceID ,
					type : store.select_type ,
					chainID : store.select_chain ,
					name : store.input_search,
				};
			}).then((res) => {
				_.assign(prevParams , {
					firstTimestamp : res.firstTimestamp ,
					tailIndex : res.indexEnd ,
					input_search : store.input_search ,
					select_chain : store.select_chain ,
					select_type : store.select_type ,
				});
				
				preventDup(() => {
					setState({
						SBT_list : res.infos ,
						hasMore : res.count === count ,
					});
				});
			}).finally(() => {
				preventDup(() => {
					setState({ pending : false });
				});
			});
		}
	})();
	const reax_scrollParentRef = Reaxel_fact__scrollParentRef()();
	return () => {
		return {
			get SBT_Pad_Store(){
				Reaxes.collectDeps(store);
				return store;
			} ,
			get scrollParentRef(){
				return reax_scrollParentRef;
			},
			setSBTSearchFields (state:Partial<typeof store>){
				setState(state);
			},
			fetchSBTList({ spaceID , count = 40 },fetchMore = true){
				let indexStart = store.tailIndex;
				let firstTimestamp = store.firstTimestamp;
				
				
				/*如果用户输入没有变的情况下请求*/
				if(utils.default.shallowEqual(prevParams,{
					
				})) {
					
				}
				console.log(11111111111);
				
				
				closuredFetch__SBT_Pad_list(([sd]) => [
					store.input_search ,
					store.select_chain ,
					store.select_type ,
					spaceID ,
				])({
					spaceID : 2 || spaceID ,
					indexStart ,
					firstTimestamp : 0 ,
					count : 20
				});
			} ,
		};
	};
}();



/*供react-infinite-scroller使用的ref-reaxel*/
function Reaxel_fact__scrollParentRef() {
	const scrollParentRef = React.createRef<HTMLDivElement>();
	return () => {
		return scrollParentRef;
	};
};


import { SBT_list } from "@@requests/SBT/type";
import { reaxel_wallet } from "@@reaxels";
import { reaxel_fact__prevent_dup_request } from "@@reaxels/Reaxel-Factories";
import { request__SBT_list } from "@@requests/SBT/SBT-list";
