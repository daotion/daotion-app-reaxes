/*串行执行一组异步函数*/
export const asyncListRunner = async (list) => {
	
	for(const callback of list){
		await callback();
	}
}

/*拼接url参数*/
export const concatQS = (origin:string,payloads:object) => {
	return origin + (origin.includes('?') ? '' : '?') + utils.encodeQueryString(payloads);
}

/**/
export const urlToTarget = (url:string) => {
	
}
