export const PluginSBTInfo = ComponentWrapper( () => {
	
	const SBTID = parseInt( utils.useRouter().params.SBTID );
	
	logSBTID(() => [Number.isNaN(SBTID)])(SBTID);
	
	const {
		SBT_info ,
		pending ,
		closuredFetchSBTInfo,
	} = reaxel__SBT_info();
	
	closuredFetchSBTInfo(() => [SBTID])(SBTID);
	if(!SBT_info) return null;
	return <div>
		<pre>{ JSON.stringify( SBT_info,null,3 ) }</pre>
	</div>;
} );

const logSBTID = Reaxes.closuredMemo((SBTID:number) => {
	console.log( SBTID );
},() => []);


import { reaxel__SBT_info } from '@@reaxels';
