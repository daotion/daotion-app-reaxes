/**
 * 支持实时签名的请求重播 , 形如
 * <code>
 * request.post(``,{payload:async() => {
 *    return {
 *       signature:await reax_user.sign();
 *    };
 * });
 * </code>
 */
export const AsyncReplayablePayloadPlugin = () => {
	
	
	
}



new Requester([
	new AsyncReplayablePayloadPlugin(),
])
