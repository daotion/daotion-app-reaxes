export const request_cashier = (payload) => {
	return request.post(`/checkstand/get-trade` , {
		body : payload ,
	});
};
