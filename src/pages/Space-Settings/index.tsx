


export const SpaceSettings = ComponentWrapper(class extends ReactComponentClass{
	
	
	render() {
		const {params} = utils.useRouter();
		const {} = antd;
		return <>
			
			{params.spaceID}
		</>
	}
})
