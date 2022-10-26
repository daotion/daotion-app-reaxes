export namespace User__pre_login {
	export interface payload {
		username: string
	}
	
	export interface response {
		code: string
	}
}

export  namespace User__login {
	export interface payload {
			username: string,
			password: string,
			code: string
	}
	
	export interface response {
		token: string,
		expireTimestamp: string
	}
}

export  namespace User__modify_password {
	export  interface payload {
		oldPassword: string,
		newPassword: string
	}
	
	export interface response {
		result: boolean
	}
}

export namespace User__info {
	export interface payload {
		data
	}
	
	export interface response {
		data: any
	}
}
