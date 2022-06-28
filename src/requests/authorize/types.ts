export namespace user_is_signed {
	
	export interface payload {
		address : string;
	}
	
	export interface response {
		address : string;
		isSigned : boolean;
	}
}
