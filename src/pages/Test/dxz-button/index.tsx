import less from './index.module.less';

export const XButton = ( props ) => {
	const {
		Button ,
		Space ,
		Input ,
	} = antd;
	return <Button
		type = "primary"
		onClick = { props.onClick }
		className = { less[ props.type ] }
		style={props.style}
		{...props}
	>
		{ props.children }
	</Button>;
};

export const DxzButton = () => {
	const {
		Button ,
		Space ,
		Popover ,
	} = antd;
	return <>
		<Space>
			<XButton
				type = "joined"
			>joined</XButton>
			<XButton
				type = "leave"
			>leave</XButton>
			<XButton
				type = "primary"
			>leave</XButton>
			
			
			
			
			
			
			
			
			
			<Button
				type = "link"
				className = { less.primary }
			>
				type:link
			</Button>
			<Button
				type = "ghost"
				className = { less.xcomPrimaryBtn }
			>
				type:ghost
			</Button>
			<Button
				type = "dashed"
			>
				type:dashed
			</Button>
		</Space>
		<br />
		<Space>
			<Button
				type = "text"
			>
				type:text
			</Button>
			<Button
				type = "default"
			>
				type:default
			</Button>
			<Button
				type = "primary"
				className = { less.pri }
			>
				type:primary
			</Button>
		</Space>
	</>;
};

