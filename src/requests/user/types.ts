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

export namespace User_account_update {
	export type payload = {
		address: string;
		data: {
			displayName?: string;
			bio?: string;
			customUrl?: string;
			setAddress?: string;
			timestamp?: number;
		};
		signature: string;
	};
}

export namespace User_upload_profile {
	export type payload = {
		address: string;
		data: {
			address: string;
			profileType: number;
			timestamp: number;
			socialLinks: string;
		}
		// todo 要改掉
		signature: any;
		file: File;
	}
}
