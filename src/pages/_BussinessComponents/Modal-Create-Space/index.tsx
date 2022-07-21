import {
	Modal ,
	Input,
	Select,
	Button ,
	
} from 'antd';
import {
	Reaxper ,
	Reaxlass ,
	orzMobx ,
	Reaxes,
} from 'reaxes';
import {reaxel_create_space} from '@@reaxes';




export const ModalCreateSpace = Reaxper(class extends Reaxlass{
	
	reax_create_space = reaxel_create_space();
	
	render() {
		const { CreateSpaceModal } = this.reax_create_space;
		
		return <>
			<CreateSpaceModal/>
		</>;
	}
})
