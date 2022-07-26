import less from './index.module.less';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import React from 'react';


const onChange = ( key : string ) => {
	console.log( key );
};
<Tabs
	defaultActiveKey = "1"
	onChange = { onChange }
>
</Tabs>;
export const DxzLangCurrency = ComponentWrapper(() => {
	return <>
		<div
			className = { less.container }
		>
			<Tabs>
				<TabPane
					tab = "Language"
					key = "1"
				>
					<li className = { less.list }>
						{ new Array( 9 ).fill( '' ).map( ( v , i ) =>
							<SubItem
								key = { i }
								text='English'
							></SubItem> ,
						) }
					</li>
				</TabPane>
				
				<TabPane
					tab = "Currency"
					key = "2"
				>
					<li className = { less.list }>
						{ new Array( 9 ).fill( '' ).map( ( v , i ) =>
							<SubItem
								key = { i }
								text='USD-$'
							></SubItem> ,
						) }
					</li>
				</TabPane>
			</Tabs>
			<div
				className = { less.divider }
			>
			</div>
		</div>
	</>;
});

const SubItem=(props)=>{
	return<>
	<span className={less.item}>
		{props.text}
	</span>
	</>
}


