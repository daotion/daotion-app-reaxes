import {
	
} from '@@reaxes';



export const EditProfile = ComponentWrapper( class extends ReactComponentClass {
	
	
	render() {
		const {Modal} = antd;
		const navigate = useNavigate();

		return <Modal
			onCancel={() => {
				navigate( '../');
			}}
			visible={true}
		>
			edit profile at here
		</Modal>
		
	}
} );
import {useNavigate} from 'react-router-dom';
