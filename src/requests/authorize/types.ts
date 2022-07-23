export namespace Authorize__is_signed {
	
	export interface payload {
		address : string;
	}
	
	export interface response {
		address : string;
		isSigned : boolean;
	}
}export namespace Authorize__address_alias {
	
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

