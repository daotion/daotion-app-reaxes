export const TestRender = reaxper(() => {
	
	return <div>
		<MessageBox/>
		<DataArea/>
	</div>
});


const MessageBox = reaxper(() => {
	const { navigate } = toolkits.useRouter();
	const { checkin , msgTypes , push , messages } = reaxel_msg_notif();
	
	return <ul>
		{Object.keys(msgTypes).map((type:notifMsgItem["type"]) => {
			const items = messages.filter((item) => item.type === type);
			const count = items.reduce((accu , item) => item.number + accu , 0);
			const {label,path} = msgTypes[type];
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

const DataArea = reaxper(() => {
	const {} = reaxel_test();
	return <div>
	
	</div>;
});

import { reaxel_test } from './reaxel-test'
import { reaxel_msg_notif } from '@@reaxels';
import {notifMsgItem} from '@@reaxels/msg-notif/types';
