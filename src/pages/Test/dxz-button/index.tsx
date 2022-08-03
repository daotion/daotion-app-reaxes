import less from './index.module.less';

export const Btn = ( props ) => {
	const {
		Button ,
		Space ,
		Input ,
		
	} = antd;
	
	return <Button
		type = "primary"
		onClick = { props.onClick }
		className = { less[ props.type ] }
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
			<Popover content={<EditTabsNamePop />} trigger="click">
				<button>click me</button>
			</Popover>
			
			<Btn
				type = "primary"
				onClick={()=>{
					<EditTabsNamePop />}
				}
			>joined</Btn>
			<Btn
				type = "leave"
			>leave</Btn>
			
			
			
			
			
			
			
			
			
			
			<Button
				type = "link"
				className = { less.primary }
			>
				type:link
			</Button>
			<Button
				type = "ghost"
				className = { less.xcomBtn }
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
const EditTabsNamePop = ComponentWrapper( () => {
	return <>
		<div className = { less.editTabsNamePop }>
			<div className = { less.editTabsTitle }>TabsName</div>
			<div className = { less.editTabsBox }>
				<span>Edit</span>
			</div>
			<div className = { less.deleteTabsBox }>
				<span>Delete</span>
			</div>
		</div>
	</>;
} );
