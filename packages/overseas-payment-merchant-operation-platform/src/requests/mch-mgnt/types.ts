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
		contactPerson :string,
		contactPhone : string,
		sellerID : number,
		createTimestamp : number,
		mchKey : string,
		address : string,
		payInCallback:string,
		payOutCallback:string,
		status: number,
		payInStatus: number,
		payOutStatus: number,
		whiteList : string[],
		payIn:{
			start:number,
			fix:number,
			rate:number
		}[],
		payOut:{
			start:number,
			fix:number,
			rate:number
		}[],
	};
	
}

export namespace mch_saller_list {
	
	export type payload = {};
	
	export type response = {
		list : saller[];
	};
	
	export type saller = {
		id : number,
		name : string,
		phone : string;
	};
}

export namespace edit_mch_cfg {
	
	export type payload = Partial<{
		"mchNo": string,
		"name": string,
		"contactPerson": string,
		"contactPhone": string,
		"sellerID": number,
		"payIn": commission[],
		"payOut": commission[],
		"whiteList": string[],
		"status": number,
		"payInStatus": number,
		"payOutStatus": number,
	}>;
	
	export type response = {
		
	};
	
}
export namespace create_mch {
	
	export type payload = {
		"name": string,
		"password": string,
		"contactPerson": string,
		"contactPhone": string,
		"sellerID": number,
		"payIn": commission[],
		"payOut": commission[],
		"whiteList": string[],
		"status": number,
		"payInStatus": number,
		"payOutStatus": number,
	};
	
	export type response = {
		
	};
	
}

export type commission = {
	"start": number,
	"fix": number,
	"rate": number
};
