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

const object = {
	a : 1 ,
	b : 2 ,
	c : 3 ,
};

let prop = 'a';
console.log( object[ prop ] );


export const DxzButton = () => {
	const {
		Button ,
		Space ,
	} = antd;
	return <>
		<Space>
			<Btn
				type = "primary"
			></Btn>
			<Btn
				type = "leave"
			>22222</Btn>
			
			
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
