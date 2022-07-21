export * from './authorize';
export * from './Spaces';


/**
 * 从服务器获取时间戳
 */
export const request_server_timestamp = () => {
	
	return request.post( `/tools/get-server-timestamp` ).
	then( ( data ) => {
		return data.timestamp as number;
	} );
};
