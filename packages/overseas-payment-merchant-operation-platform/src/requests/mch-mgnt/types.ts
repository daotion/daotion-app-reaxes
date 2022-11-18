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
