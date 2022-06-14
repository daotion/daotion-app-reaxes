import { Button, Modal } from 'antd';
import { useCallback, useReducer, useState } from 'react';
import { DaoAvator } from './components/dao-avator';
import { ChannelShare } from './components/channel-share';
import { useSearchParams } from 'react-router-dom';
import less from './style.module.less';
const _DaoInfo = class extends ReactComponentClass<any, any> {

	constructor(props) {
		super(props);
	}

	render() {
		const [searchParams, setSearchParams] = useSearchParams()
		console.log(searchParams.get('id'))
		console.log(searchParams)
		return <>
			<div className={less.daoHome}>
				<DaoAvator id={+searchParams.get('id')} />
				<div className={less.share}>
					<ChannelShare />
				</div>
			</div>
		</>;
	}
};


export const DaoInfo = ComponentWrapper(_DaoInfo);

