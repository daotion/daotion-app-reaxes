import {
	reaxel_user_profile,
} from '@@reaxes';



export const Profile = ComponentWrapper( class extends ReactComponentClass {
	
	reax_user_profile = reaxel_user_profile();
	
	render() {
		const {Button,Modal} = antd;
		const { navigate } = utils.useRouter();
		const {memoedFetchProfile,profileStore} = this.reax_user_profile;
		
		if(!profileStore.profile) return null;
		
		return <>
			this is my profile~
			<br />
			<pre>{JSON.stringify(profileStore.profile,null,3)}</pre>
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
