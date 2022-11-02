export namespace Overview__info {
	export type response = {
		mchNo: string,
		balance: 0,
		withdrawingMoney: 0,
		address: string,
		payInMoney: 0,
		payInOrderToPay: 0,
		payInOrderPayed: 0,
		payInOrderFail: 0,
		payInOrderCancel: 0,
		payOutMoney: 0,
		payOutOrderToVerify: 0,
		payOutOrderToPay: 0,
		payOutOrderPayed: 0,
		payOutOrderFail: 0,
		payOutOrderReject: 0,
		withDrawMoney: 0,
		withdrawOrderToVerify: 0,
		withdrawOrderSuccess: 0,
		withdrawOrderReject: 0
	}
}


export namespace Overview__fin_detail {
	export type payload = {
		indexStart : number,
		count : number,
		firstTimestamp : number,
	};
	
	export type response = {
		indexEnd: number,
		count: number,
		total: number,
		firstTimestamp: number,
		listInfo: {
			orderID: string,
			tax: number,
			money: number,
			balance: string,
			timestamp: number,
		}[],
	};
}