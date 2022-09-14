export namespace SBT_list {
	
	export type SBTListItem = {
		"spaceID": number;
		"SBTID": number;
		"name": string,
		"iconUrl": string,
		"type": string,
		"chainID": string,
		"chainAddr": string,
	};
	
	export type payload = {
		"indexStart": number,
		"count": number,
		"firstTimestamp": number,
		"spaceID": number,
		"type": string;
		"chainID": string;
		/*模糊搜索*/
		"name": string;
	};
	export type response = {
		"indexEnd": number,
		"count": number,
		"firstTimestamp": number,
		"total": number,
		"infos": SBTListItem[];
	};
}
export namespace create_SBT {
	export type feature_kv = {
		key: string;
		value: string;
	};
	
	export type payload = {
		address: string;
		data: {
			spaceID: number;
			type: string;
			desc: string;
			features: string[];
			conditionData: {
				type : string;
				condition : any;
			}[][];
			/*创建的用户的地址*/
			createAddress: string;
			timestamp: number;
		};
		signature: string;
		file: File;
	};
	export type response = {
		orderID: number;
		metadataUrl: string;
		spaceAddress:string;
	};
}
export namespace SBT_info {
	
	export type payload = {
		SBTID : number;
	};
	
	export type response = {
		"spaceID" : number,
		"SBTID" : number,
		"name" : string,
		"type" : string,
		"desc" : string,
		"iconUrl" : string,
		"addrChain" : string,
		"creator" : string,
		"access" : string,
		"issueNum" : number,
		"holdLimit" : number,
		"canRevoke" : number,
		"canBurn" : number,
		"features" : string,
		"metadataUrl":string,
	}
}
