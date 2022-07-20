export namespace Space__all_space_list {
	
	export type payload = {
		"indexStart": number,
		"count": number,
		"firstTimestamp": number,
		"tag"?: string ,
		"nameSearch"?: string,
	}
	
	export type response = {
		"indexEnd": number,
		"count": number,
		"firstTimestamp": number,
		"infos": {
			"spaceID": number,
			"name": string,
			"tags": string[],
			"addrChain": string,
			"iconUrl": string,
		}[],
	}
}
/*通过地址获取加入的space列表.无需登录*/
export namespace Space__user_joined_Space_list {
	
	export type payload = {
		address : string;
	}
	
	export type response = {
		infos : {
			"spaceID" : number,
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
/*根据spaceID获取space详情信息*/
export namespace Space___get_space_detail{
	export type payload = {
		spaceID : number;
	}
	
	export type response = {
		/*space地址*/
		"addrChain": string,
		"bgUrl" : string;
		/*简介*/
		"bio": string,
		"email" : string;
		"iconUrl": string,
		/*添加的社交账户组字符串:[{social:"",address:""}]*/
		"links": string,
		"name": string,
		"spaceID": number,
		"tabs" : string[];
		"tags": string[],
	}
}

export namespace Space__user_join_space {
	export type payload = {
		"address": string,
		"data": {
			"spaceID": number,
			"joinAddress": string,
			"timestamp" : number,
		},
		"signature" : string;
	}
	
	export type response = {
		"spaceID": number,
		"address": string,
		"icon": string,
		"notifyNums"?: number,
	}
}

export namespace Space__user_leave_space {
	export type payload = {
		address : string;
		data : {
			"spaceID" : number;
			"leaveAddress": string,
			"timestamp" : number;
		};
		signature : string;
	}
	
	export type response = {
	}
}

export namespace Space__create_space {
	export type payload = {
		address : string;
		data : {
			"name": string,
			"tags": string,
			"email": string,
			"createAddress": string,
			"timestamp" : number;
		};
		signature : string;
	}
	
	export type response = {
		"spaceID" : number;
		"name" : string;
	}
}

export namespace Space__upload_pics {
	
	
	export type payload = FormData & {
		address : string;
		data : {
			spaceID: number;
			icontype : 1 | 2;
			address : string;
			timestamp : number;
		};
		signature : string;
		file : File;
	};
	export type response = {
		spaceID : number;
		iconType : 1|2;
		url : string;
		ipfsHash : string;
	};
}
