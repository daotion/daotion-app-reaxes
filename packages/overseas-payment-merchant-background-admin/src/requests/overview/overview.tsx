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

export const request_withdraw_apply = (payload: PayloadBody<OverviewOverview__withdraw__fin_detail.payload>) => {
	return request.post<Overview__withdraw.response, typeof payload>(`/mch/withdraw`, {
		body : payload,
		
	})
}

export const request_withdraw_max_money = () => {
	return request.post(`/mch/get-max-withdraw-receipt`, {})
}


import { Overview__fin_detail, Overview__withdraw } from './types'