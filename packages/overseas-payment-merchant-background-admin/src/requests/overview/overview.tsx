//@ts-nocheck

export const request_overview_info = () => {
	return  request.post(`/mch/home`, {
	
	})
}


export const request_fin_detail = (payload: PayloadBody<Overview__fin_detail.payload>) => {
	return request.post<Overview__fin_detail.response, typeof payload>(`/mch/money-detail`, {
		body : payload,
		
	})
}


import { Overview__fin_detail } from './types'