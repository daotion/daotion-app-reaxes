export namespace Order__collection_order {
	
	export type response = {
		"indexEnd": number,
		"count": number,
		"total": number,
		"firstTimestamp": number,
		"orderList": {
			"orderID": string,
			"state": number,
			"money": number,
			"userName": string,
			"tax": number,
			"createTimestamp": number,
			"updateTimestamp": number
		}[],
	};
	export type payload = {
		indexStart : number,
		count : number,
		firstTimestamp : number,
		orderID : string,
		orderState : 0|1|2|3|4,
		createTimestampBegin : number,
		createTimestampEnd : number,
		updateTimestampBegin : number,
		updateTimestampEnd : number,
	};
} 
