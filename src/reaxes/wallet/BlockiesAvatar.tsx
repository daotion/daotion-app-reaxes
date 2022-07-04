export const reaxel_blockies = function(){
	
	const reax_wallet = reaxel_wallet();
	const canvas_ref = React.createRef<HTMLCanvasElement>();
	const closured = Reaxes.closuredMemo((address) => {
		if(address && !reax_wallet.account?.ens && canvas_ref.current){
			const canvas = canvas_ref.current;
			renderIcon( {
				seed : reax_wallet.account.address.toLowerCase() ,
				scale : 4.5 ,
			} , canvas );
		}
	},() => []);
	Reaxes.observedMemo(() => {
		closured(() => [reax_wallet.account?.address,canvas_ref.current])(reax_wallet.account?.address);
	},() => [reax_wallet.account?.address]);
	return () => {
		
		return {
			BlockiesAvatar() {
				useEffect(() => {
					closured(() => [reax_wallet.account?.address,canvas_ref.current])(reax_wallet.account?.address);
				},[]);
				return <canvas ref = { canvas_ref } style={{borderRadius : "50%",marginLeft : "8px" ,}}></canvas>;
			},
		}
	}
}();

import {renderIcon} from '@download/blockies';
import {reaxel_wallet} from '@@reaxes/wallet/wallet';
