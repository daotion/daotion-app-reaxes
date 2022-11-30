import { Requester } from '#requester';




import { AsyncReplayablePayloadPlugin } from '#requester/src/plugins/async-replayable-payload-plugin';
import { ApplyEnvConfigPlugin } from '#requester/src/plugins/env-proxy-confing-plugin';
import { RealAddressPlugin } from '#requester/src/plugins/real-address-plugin';
import { AuthIntegratedPlugin } from './auth-integrated-plugin';


export const request:{
	post:post,
} = new Requester([
	RealAddressPlugin(__ENV_CONFIG__ , __ENV__),
	ApplyEnvConfigPlugin(__ENV_CONFIG__ , __ENV__),
	AsyncReplayablePayloadPlugin(),
	/*此插件目前必须在最后被插入*/AuthIntegratedPlugin(),
]);


type post = <RESP = any,PL = any>(input:RequestInfo | URL , init:Omit<RequestInit,"body"> & {
	body? : PL;
	env?:string,
	mock?:boolean,
}) => Promise<RESP>;
