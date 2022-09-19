export const reaxel__SBT_settings = function(){
	const initialState = {
		input_search_address : '' as string ,
		upload_status : {
			status : null as "success"|"failed"|"pending",
			filename : '' ,
			errorMsg : "" ,
		},
		total : 0 ,
		whitelist : [] as Array<null|(SBT_whitelist.whitelist_item & {editing : boolean, modifiedOffset : number})>,
		/*是否仅显示修改过的列表*/
		onlyModified : false ,
		currentPage : 1 ,
		pageSize : 15, 
		pending : false ,
	};
	const { store , setState } = orzMobx(initialState);
	const [status,setStatus] = utils.makePair({
		indexStart:0 ,
		firstTimestamp : 0 ,
		
	},(pregStatus) => (partialStatus:Partial<typeof status>) => _.assign(pregStatus,partialStatus));
	
	const closuredFetchWhitelist = Reaxes.closuredMemo(({spaceID,SBTID,count = 15,paging = null} ) => {
		setState({ pending : true });
		request__SBT_whitelist(async () => {
			return {
				indexStart : paging ? count * (paging - 1) : 0 ,
				firstTimestamp : paging ? status.firstTimestamp : 0 ,
				spaceID ,
				count ,
				SBTID ,
				rest : true ,
			};
		}).then(({ indexEnd = null , count:resCount , total , firstTimestamp , whitelist }) => {
			
			setStatus({
				firstTimestamp ,
			});
			
			/*第一次请求 创建一个total长度的新数组 , 把当前数据段splice进去*/
			if(!paging){
				const prearray = new Array(total).fill(null);
				prearray.splice(0,count,...whitelist);
				setState({
					whitelist : prearray ,
				});
			}else {
				const reqCount = resCount < count ? resCount : count;
				setState({
					whitelist : function(){
						const newParagraph = whitelist.reduce((accumulator,element,index) => {
							// console.log(accumulator);debugger;
							
							const orignalElement = store.whitelist.slice()[indexEnd - reqCount + index];
							
							if(orignalElement === null) {
								accumulator[index] = element;
							} else if(orignalElement.address === element.address){
								accumulator[index] = {
									...element,
									modifiedOffset : orignalElement.modifiedOffset,
									editing:false,
								};
							} else {
								throw new Error(`Error: 白名单索引不匹配! index:${index},totalIndex:${indexEnd+index},address:${orignalElement.address},${element.address}`);
							}
							return accumulator;
						},paging ? store.whitelist.slice((paging - 1) * count , paging * count ) : []);
						console.log(newParagraph);
						const newWhitelist = store.whitelist.slice();
						newWhitelist.splice((paging - 1) * count , count , ...newParagraph);
						// console.log(newWhitelist);
						return newWhitelist;
					}() ,
				});
			}
			setState({
				total ,
				pending : false ,
			});
			
		})
	},() => []);
	
	
	return () => {
		
		const emptyArray = (start,length,...elements) => {
			const array = new Array(length);
			array.splice(start,0,...elements);
			return array;
		};
		
		return {
			get whitelist (){
				return store.whitelist;
				
				return store.whitelist.filter((element) => {
					if(element !== null && (store.onlyModified ? element.modifiedOffset !== 0 : true)){
						return true;
					}
				});
			},
			get SBT_settings_store (){
				return store;
			},
			/*查询全局表单是否被修改过(包括上传过有效的csv)*/
			get fields_modified(){
				return store.whitelist.filter((element) => element != null ).some((item) => {
					return item.modifiedOffset !== 0 && item.editing === false;
				});
			},
			get fetch_white_list(){
				return closuredFetchWhitelist;
			},
			get address_insertable () :boolean {
				const input_address = store.input_search_address;
				return input_address.length === 42 && input_address.startsWith('0x'); 
			},
			/*使某一行变为可编辑状态*/
			switch_row_editable(enable:boolean,address:string){
				setState({
					whitelist : store.whitelist.map((item) => {
						if(item === null){
							return null;
						}
						if( item.address === address ) {
							return {
								...item ,
								editing : enable ,
							};
						} else {
							return item;
						}
					}) ,
				});
			},
			/*用户输入某一行的修改值*/
			offset_row_value (address:string,offset:number){
				setState({
					whitelist : store.whitelist.map((item) => {
						if(item === null){
							return null;
						}
						if( item.address === address ) {
							return {
								...item ,
								modifiedOffset : offset ,
							};
						} else {
							return item;
						}
					}) ,
				});
			},
			reset_row(address){
				setState({
					whitelist : store.whitelist.map((element) => {
						if(element === null){
							return element;
						}
						if( address === element.address ) {
							return {
								...element ,
								editing : false ,
								modifiedOffset : 0 ,
							};
						}else return element;
					}) ,
				});
			},
			/*重置用户的改动*/
			reset_changes (){
				setState({
					whitelist : store.whitelist.filter((item) => {
						/*如果是新加的就直接移除掉*/
						if(item.remainder !== 0){
							return true;
						}
					}).map((item) => {
						return {
							...item ,
							editing : false ,
							modifiedOffset : 0 ,
						};
					}) ,
				});
			},
			/*重置列表请求状态(分页)*/
			empty_status(){
				setStatus({
					firstTimestamp : 0 ,
					indexStart : 0 ,
				});
			},
			get setFields(){
				return setState;
			},
		};
	};
}();


import { request__SBT_whitelist , SBT_whitelist } from '@@requests';

/**
 * 缓存上次数据,条件未达成时先使用上次的数据渲染,达成后再渲染正确的数据
 * 常用于异步数据未获取到时先渲染上次的结果.
 */
const reaxel_fact__use_previous = () => {
	
	
};
