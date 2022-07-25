import {
	
} from '@@reaxes';



export const Profile = ComponentWrapper( class extends ReactComponentClass {
	
	
	render() {
		const {Modal} = antd;
		const navigate = useNavigate();
		
		return <Modal
			onCancel={() => {
				navigate( '../' , { replace : true } );
			}}
			visible={true}
		>
			xxxxxxx
		</Modal>
		
		return <>
			this is my profile~
		</>;
	}
} );
import {useNavigate} from 'react-router-dom';
