import { DxzSpaceSettings } from '@@pages/Test/dxz-Space-Settings';


export const SpaceSettings = ComponentWrapper(class extends ReactComponentClass{
	
	
	render() {
		const {params} = utils.useRouter();
		const {} = antd;
		return <>
			
			<DxzSpaceSettings/>
		</>
	}
})
