import { reaxel_wallet } from "@@reaxels";

export const reaxel__role_in_space = function(){
	const { store , setState } = orzMobx({
		role : 0 ,
	});
	
	const reax_wallet = reaxel_wallet();
	
	const closuredFetch = Reaxes.closuredMemo((payload : payload) => {
		return request__user_role_in_space(async() => payload);
	} , () => [reax_wallet.wallet]);
	
	const { grasp } = reaxel_fact__prevent_dup_request(() => closuredFetch(() => []))();
	
	return () => {
		
		return {
			fetchUserRoleInSpace (spaceID:string){
				return grasp({});
			},
		}
	}
}();
type payload = {
	spaceID:string;
	address : string;
};
const request__user_role_in_space = (payload : PayloadBody<payload>) => {
	return request.post<{ role : 0 | 1 | 2 | 3;},typeof payload>(`/user/user-space-role` , {
		body : payload ,
	});
};
import { reaxel_fact__prevent_dup_request } from '@@reaxels/Reaxel-Factories';
