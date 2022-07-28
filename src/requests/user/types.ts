export namespace User__is_signed {
	
	export interface payload {
		address : string;
	}
	
	export interface response {
		address : string;
		isSigned : boolean;
	}
}

export namespace User__address_alias {
	
	export interface payload {
		address : string;
		data : {
			from : string;
			alias : string;
			timestamp : string;
		};
		signature : string;
	}
	
	export interface response {
		result : boolean;
	}
}


export namespace User__profile_info {
	
	export interface payload {
		address : string;
	}
	
	export interface response {
		"address": string,
		"iconUrl": string,
		"bgUrl": string,
		"displayName": string,
		"bio": string,
		"customUrl": string,
		"links": string,
		/*用户是否曾经登陆过*/
		"exist": true
	}
}

