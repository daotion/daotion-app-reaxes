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
/*通过地址获取加入的DAO列表.无需登录*/
export namespace DAO__joined_DAO_list {
	
	export type payload = {
		address : string;
	}
	
	export type response = {
		infos : {
			"daoID" : number,
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
/*根据DAOID获取DAO详情信息*/
export namespace DAO___inf_DAO_detail{
	export type payload = {
		daoID : number;
	}
	
	export type response = {
	}
}

export namespace DAO__user_join_DAO {
	export type payload = {
		"address": string,
		"data": {
			"daoID": number,
			"joinAddress": string
		},
		"signature": string
	}
	
	export type response = {
		"daoID": number,
		"address": string,
		"icon": string,
		"notifyNums"?: number,
	}
}

export namespace DAO__user_leave_DAO {
	export type payload = {
		daoID : number;
	}
	
	export type response = {
	}
}
