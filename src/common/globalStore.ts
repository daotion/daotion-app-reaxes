import { viaMobx } from '@@mobxState';



/*存储全局性状态*/
export const  {
	store : globalStore ,
	setState : globalSetState ,
} = viaMobx<globalStoreType>({
	theme : "light",
	language : "zhCN",
	
});
