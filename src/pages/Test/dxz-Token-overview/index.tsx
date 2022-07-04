import less from './index.module.less';
import { Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;
const App: React.FC = () => (
	<Tabs defaultActiveKey="1" >
	</Tabs>
);

export default App;
export const DxzTokenOverview=()=>{
	return<>
		<Tabs centered 
			className={less.tOBox}
		>
			<TabPane tab="Token Overview" key="1">
				Content of Tab Pane 1
			</TabPane>
			<TabPane tab="Fundraising Pool" key="2">
				Content of Tab Pane 2
			</TabPane>
			<TabPane tab="Airdopr Pool" key="3">
				Content of Tab Pane 3
			</TabPane>
		</Tabs>
	</>
}
