export  namespace User__login {
	export interface payload {
			userName: string,
			password: string
	}
	
	export interface response {
		token: string
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
