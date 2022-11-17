export const Mch_Desposit_Rqst = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const {} = reaxel_mch_dpst_rqst({navigate});
	
	return <div>
		<TestRender/>
		
	</div>;
});


import { reaxel_mch_dpst_rqst } from './reaxel--mch-dpst-rqst';
import { TestRender } from '@@pages/test';
