import { DxzSpaceSettings } from '@@pages/Test/dxz-social-general';


export const SpaceSettings = ComponentWrapper(class extends ReactComponentClass{
	
	
	render() {
		const {params} = utils.useRouter();
		const {} = antd;
		return <>
			
			<DxzSpaceSettings/>
		</>
	}
})
