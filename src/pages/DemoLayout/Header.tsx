import React , { Component } from 'react';
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {
	Button ,
	Input ,
	Tree ,
	TreeDataNode,
} from "antd";
import { DownOutlined } from '@ant-design/icons';


import less from './style.module.less';

import SVGchevron_down from './chevron_down.component.svg';
import SVGchevron_up from './chevron_up.component.svg';
import SVGicon1 from './demo-icon-1.component.svg';
import SVGpeople from './people.component.svg';
import { Expand } from './Expand.svg.component';



export const HeaderLayout = ComponentWrapper(class extends Component<any , any>{
	
	state = {}
	
	
	
	render() {
		return undefined;
	}
})
