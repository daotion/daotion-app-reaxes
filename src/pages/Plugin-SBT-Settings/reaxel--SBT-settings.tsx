export const reaxel__SBT_settings = function(){
	const initialState = {
		input_search_address : '' as string ,
		upload_status : {
			status : null as "success"|"failed"|"pending",
			filename : '' ,
			errorMsg : "" ,
		},
		whitelist : [] as Array<null|(SBT_whitelist.whitelist_item & {editing : boolean, modifiedOffset : number})>,
		/*是否仅显示修改过的列表*/
		onlyModified : false ,
		pending : false ,
	};
	const { store , setState } = orzMobx(initialState);
	const [status,setStatus] = utils.makePair({
		indexStart:0 ,
		firstTimestamp : 0 ,
		
	},(pregStatus) => (partialStatus:Partial<typeof status>) => _.assign(pregStatus,partialStatus));
	
	const closuredFetchWhitelist = Reaxes.closuredMemo(({spaceID,SBTID,count = 15,page : paging = null} ) => {
		
		request__SBT_whitelist(async () => {
			return {
				indexStart : paging ? count * (paging - 1) : 0 ,
				firstTimestamp : paging ? status.firstTimestamp : 0 ,
				spaceID ,
				count ,
				SBTID ,
				rest : true ,
			};
		}).then(({ indexEnd = null , count , total , firstTimestamp , whitelist }) => {
			/*第一次请求 创建一个total长度的新数组 , 把当前数据段splice进去*/
			if(!paging){
				const prearray = new Array(total).fill(0);
				prearray.splice(0,0,...whitelist);
			}
			
			setStatus({
				// indexStart : indexEnd ??   ,
				firstTimestamp ,
			});
			setState({
				whitelist : function(){
					const newParagraph = whitelist.reduce((accumulator,element,index) => {
						const orignalElement = store.whitelist.slice()[index];
						if(orignalElement == null) {
							accumulator[index] = element;
						} else if(orignalElement.address === element.address){
							accumulator[index] = {
								...orignalElement,
								...element,
							};
						} else {
							throw new Error('Error0.5826609708759583: 白名单索引不匹配!');
						}
						return accumulator;
					},paging ? store.whitelist.slice((paging - 1) * count , paging * count) : []);
					const newWhitelist = store.whitelist.slice();
					newWhitelist.splice((paging - 1) * count , count , ...newParagraph);
					return newWhitelist;
				}() ,
				pending : false ,
			});
		})
	},() => []);
	
	
	return () => {
		
		return {
			get whitelist (){
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
				return store.whitelist.filter((element) => element !== null ).some((item) => {
					return item.modifiedOffset !== 0;
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
			make_row_editable(address:string){
				setState({
					whitelist : store.whitelist.map((item) => {
						if( item.address === address ) {
							return {
								...item ,
								editing : true ,
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
						if( item.address === address ) {
							return {
								...item ,
								editing : true ,
							};
						} else {
							return item;
						}
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

