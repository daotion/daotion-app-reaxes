export const MessageBox = reaxper(() => {
	
	const { Button , Popover } = antd;
	return <Popover
		trigger="click"
		content={<PopoverContent/>}
	>
		<Button>
			消息通知
		</Button>
	</Popover>;
});

const PopoverContent = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const { checkin , messageTypes , push , messages } = reaxel_msg_notif();
	
	return <ul>
		{Object.keys(messageTypes).map((type:notifMsgItem["type"]) => {
			const items = messages.filter((item) => item.type === type);
			const count = items.reduce((accu , item) => item.number + accu , 0);
			const {label,path} = messageTypes[type];
			return items.length > 0 && <li
				onClick = { () => {
					navigate(path);
					checkin(type);
				} }
				key = { Math.random() }
			>
				{ label } , {count}
			</li>;
		})}
	</ul>;
});

import { reaxel_msg_notif } from '@@reaxels';
import {notifMsgItem} from '@@reaxels/msg-notif/types';

const reaxel_message_box = function(){
	
	const reax_msg_notif = reaxel_msg_notif();
	
	return () => {
		
		return {
			get messages (){
				return reax_msg_notif.messages;
			},
		}
	}
}();
