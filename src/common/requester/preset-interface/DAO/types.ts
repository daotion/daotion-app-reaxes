export namespace DAO__all_DAO_list {
	
	export type payload = {
		"indexStart": number,
		"count": number,
		"firstTimestamp": number | 0 ,
		"chainId"?: string,
		"tag"?: string ,
		"nameSearch"?: string,
	}
	
	export type response = {
		"indexEnd": number,
		"count": number,
		"firstTimestamp": number,
		"infos": {
			"id": number,
			"name": string,
			"tags": string[],
			"chainIDs": string[],
			"addrChain": string,
			"iconUrl": string,
			"userCount": number,
		}[],
	}
}
export namespace DAO__joined_DAO_list {
	
	export type payload = {
	}
	
	export type response = {
		infos : {
			"daoId" : number,
			"address" : string,
			"icon" : string,
			/*图标上的未读消息数,暂时砍掉*/
			// "mapChainNotify" : {
			// 	/**/
			// 	"property1" : 0,
			// 	"property2" : 0;
			// };
		}[];
	}
}
