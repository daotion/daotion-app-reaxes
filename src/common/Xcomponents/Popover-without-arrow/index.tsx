import React , {

} from 'react';
import {ComponentWrapper} from '@@common/ReactComponentWrapper';
import { Popover ,PopoverProps,} from 'antd';
import less from './index.module.less'

export const XPopover = ComponentWrapper((props:PopoverProps) => {
	
	const {children} = props;
	
	const mixedProps = Object.assign<PopoverProps,PopoverProps,PopoverProps>({
		/*默认行为 ,但允许覆盖*/
		placement : "bottom",
		autoAdjustOverflow : false,
		
	},props,{
		/*最终默认行为,无法被覆盖*/
		overlayClassName : `${less.userinfoPopoverContainer} ${props.overlayClassName}`,
	});
	
	return <>
		<Popover {...mixedProps}>{children}</Popover>
	</>;
});







