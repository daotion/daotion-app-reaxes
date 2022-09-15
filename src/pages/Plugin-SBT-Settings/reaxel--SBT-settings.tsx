export const reaxel__SBT_settings = function(){
	const initialState = {
		input_search_address : null as string ,
		upload_status : {
			status : null as "success"|"failed"|"pending",
			filename : '' ,
			errorMsg : "" ,
		},
		whitelist : [] as Array<SBT_whitelist.whitelist_item & {editing : boolean, modifiedOffset : number}>,
		pending : false ,
	};
	const { store , setState } = orzMobx(initialState);
	const [status,setStatus] = utils.makePair({
		indexStart:0 ,
		firstTimestamp : 0 ,
		
	},(pregStatus) => (partialStatus:Partial<typeof status>) => _.assign(pregStatus,partialStatus));
	
	const closuredFetchWhitelist = Reaxes.closuredMemo(({spaceID,SBTID,count} , more = false ) => {
		
		request__SBT_whitelist(async () => ({
			...(more ? status :{indexStart:0 , firstTimestamp : 0 }),
			spaceID ,
			count,
			SBTID,
			rest : true,
		})).then(({indexEnd,count,total,firstTimestamp,whitelist}) => {
			setStatus({
				indexStart : indexEnd,
				firstTimestamp ,
			});
			setState({
				whitelist : more ? store.whitelist.concat(whitelist) : whitelist ,
				pending : false ,
			});
		}).catch((e) => {
			
		})
	},() => [
		
	]);
	
	
	return () => {
		
		return {
			get SBT_settings_store (){
				return store;
			},
			/*查询全局表单是否被修改过(包括上传过有效的csv)*/
			get fields_modified(){
				return 
			},
			/*使某一行变为可编辑状态*/
			makeRowEditable(address:string){
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
			offsetRowValue (address:string,offset:number){
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
			resetChanges (){
				
			},
			/*重置列表请求状态(分页)*/
			emptyStatus(){
				setState(initialState);
				
			},
			setFields(partialState:Partial<typeof store>){
				setState(partialState);
			},
			
		};
	};
}();


import { request__SBT_whitelist , SBT_whitelist } from '@@requests';
