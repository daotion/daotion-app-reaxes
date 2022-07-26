import {
	
} from '@@reaxes';



export const Profile = ComponentWrapper( class extends ReactComponentClass {
	
	
	render() {
		const {Button,Modal} = antd;
		const navigate = useNavigate();
		
		return <>
			this is my profile~
			<br />
			<Button
				onClick = { () => navigate( 'edit' ) }
			>edit</Button>
		</>;
		
		return <Modal
			onCancel={() => {
				navigate( '../' , { replace : true } );
			}}
			visible={true}
		>
			xxxxxxx
		</Modal>
		
	}
} );
import {useNavigate} from 'react-router-dom';
