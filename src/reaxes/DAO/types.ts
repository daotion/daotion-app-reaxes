export namespace dao__all_dao {
	
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
			"daoID": number,
			
		}[],
	}
}
