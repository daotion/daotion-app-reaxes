export const reaxel_mch_mgnt_list = function(){
	const [ , [ pendingState , setPending ] ] = utils.makePair(orzMobx({ pending : false }) , ({ store , setState }) => {
		return [
			store , (pending) => queueMicrotask(() => setState({ pending })) ,
		] as const;
	});
	const { store , setState } = orzMobx({
		list : [] as mch_mgnt_list.item[] ,
		searchText : '',
		
	});
	
	const fetchMchList = () => {
		return request_mch_mgnt_list(async () => {
			return {
				mchNo : store.searchText ,
				count : 99999999 ,
				indexStart : 0 ,
				firstTimestamp : Math.ceil(Date.now() / 1000) ,
			};
		});
	};
	
	const [ closFetchMchList , cleanDps$MchMgntList ] = Reaxes.closuredMemo(() => {
		setPending(true);
		return fetchMchList().then((data)=> {
			setState({
				list : data.list ,
			});
			setPending(false);
			return data;
		});
	} , () => []);
	
	return () => {
		
		return {
			get pending(){
				return pendingState.pending;
			},
			get mch_list (){
				return store.list;
			},
			state$mchMgnt:store,
			setFields : setState,
			setPending,
			closFetchMchList(){
				return closFetchMchList(() => [store.searchText])();
			},
			cleanDps(){
				cleanDps$MchMgntList();
			}
		};
	};
}();


import { request_mch_mgnt_list } from '@@requests';
import { reaxel_fact__prevent_dup_request } from '#reaxels';
import { mch_mgnt_list } from '@@requests/mch-mgnt/types';
