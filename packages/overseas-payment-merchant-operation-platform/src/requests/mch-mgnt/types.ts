/*商户列表*/
export namespace mch_mgnt_list {
	
	export type payload = {
		indexStart : number,
		count : number ,
		firstTimestamp : number,
		mchNo : string,
	};
	
	export type response = {
		"indexEnd": number,
		"count": number,
		"total": number,
		"firstTimestamp": number,
		"list": item[],
	};
	
	export type item = {
		"mchNo": string,
		"name": string,
		"phone": string,
		"seller": string,
		"status": number,
		"payInStatus": number,
		"payOutStatus": number
	};
}
/*商户详情*/
export namespace mch_info {
	
	export type payload = {
		mchNo : string,
	};
	
	export type response = {
		mchNo : string,
		name:string,
		contactPerson,
		contactPhone,
		createTimestamp,
		mchKey,
		address,
		payInCallback,
		payOutCallback,
		whiteList,
		payIn:{
			start:number,
			fix:number,
			rate:number
		},
		payOut:{
			start:number,
			fix:number,
			rate:number
		},
	};
	
}
