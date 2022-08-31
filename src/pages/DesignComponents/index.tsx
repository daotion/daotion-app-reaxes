



export const DesignComponents = ComponentWrapper(() => {
	
	const { Button } = antd;
	const { navigate } = utils.useRouter();
	return <>
		<div>
			<Button
				onClick = { () => navigate('reaxes-template') }
			>Reaxes Template</Button>
			<Button
				onClick = { () => navigate('svg-overview') }
			>SVG Overview</Button>
		
		
		</div>
	</>;
});
export * from './Button-GoBack';
export * from './SvgOverview';
import "./index.less";
