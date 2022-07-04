import { BtnAddDAOSvgComponent } from '@@pages/_SvgComponents';
//todo import { CreateModalContent } from '@@pages/_BussinessComponents/Create-DAO-Modal';
import { CreateModalContent } from '@@pages/Create-DAO/components/create-modal';

import {
	
	reaxel_joined_DAO_list ,
	reaxel_wallet ,
	// reaxel_login,
} from '@@reaxes';
import { Modal } from 'antd';
/**
 * 左侧的DAO list和Plugin list
 */
export const Sider_DAO_List = ComponentWrapper(  class extends ReactComponentClass {
	
	state = {
		createDAOmodalShowing : false ,
	};
	
	
	
	joined_DAO_list = reaxel_joined_DAO_list();
	
	reax_wallet = reaxel_wallet();
	
	
	create_DAO_Modal = reaxel_create_DAO_Modal(this.lifecycle);
	
	render() {
		
		return utils.withRouter( ( {
			navigate ,
			params ,
		} ) => {
			
			return <>
				{/*左侧第一竖栏,用户已加入的DAO列表*/ }
				<div
					style = { {
						padding : "24px 12px" ,
						display : "flex" ,
						flexFlow : "column nowrap" ,
						boxShadow : "inset -1px 0px 0px rgba(0, 0, 0, 0.05)" ,
						justifyContent : "space-between" ,
					} }
				>
					<div
						style = { {
							display : "flex" ,
							flexFlow : "column nowrap" ,
							
						} }
					>
						<Homepage_Avatar
							url = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjI0IiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm4wIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+Cjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMF8xMzJfMzI4IiB0cmFuc2Zvcm09InNjYWxlKDAuMDE1NjI1KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzEzMl8zMjgiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElBcnM0YzZRQUFBT05KUkVGVWVGN3QyMEVPaEVBSVJGRzQvNkY3RHZFblllRnpyeVFJdjZwQmQyYmVoT3U5ZFB2c2JvZytrK05MZ0FyUUFxbUpjdzlpQUFoU2daS0IzSUpra0F5U1FUSjRDaUUrZ0E4b0JlZzBtSDNBaTA4NFA4OUhocXdFcUlBMjA5SUNzUWRqQWVhWklnYUFZS3hCRE1DQVl5OGZYd0FJZ2lBSWNvSnBKRVlHSTRWakIzWXJiQzlnTDJBdmtDQjQzY001UGdaZ0FBWmdRRm5OWkFoZEd5a1FCRUVRQkVFUURCbWdBbTJnbE0veitRVVlpc1lVR29sZE83a1kzMklFQXpDZzZSZ0lSZ2pGQXN3K0FnUkJNTllnQm1DQVQyVENZZm9QUHovSENxUUNYMWVCSHpIbnY3QzdXaEJTQUFBQUFFbEZUa1N1UW1DQyIvPgo8L2RlZnM+Cjwvc3ZnPgo="
						/>
						<div
							style = { {
								width : 48 ,
								height : 1 ,
								backgroundColor : "#efefef" ,
								marginTop : 8 ,
							} }
						/>
						{ this.joined_DAO_list.joined_DAO_list.map( ( DAOinfo , index ) => {
							
							return <div
								key = { DAOinfo.daoID }
								onClick = { () => {
									// crayon.blue( 'joined DAO info : ' , DAOinfo );
									navigate( `./DAO${ DAOinfo.daoID }/info` );
								} }
								style = { {
									width : 48 ,
									height : 48 ,
									backgroundImage : `url("${ DAOinfo.icon }")` ,
									backgroundPosition : "center" ,
									backgroundRepeat : "no-repeat" ,
									backgroundSize : "100%" ,
									marginTop : 8 ,
									borderRadius : "50%" ,
									backgroundColor : '#eeeeee' ,
								} }
							/>;
						} ) }
					</div>
					<div
						style = { {
							marginTop : 8 ,
							marginBottom : 8 ,
						} }
						onClick = { () => {
							this.setState( { createDAOmodalShowing : true } );
						} }
					>
						<BtnAddDAOSvgComponent />
					</div>
					<CreateModalContent
						modalVisible = { this.state.createDAOmodalShowing }
						setModalVisible = { () => this.setState( { createDAOmodalShowing : !this.state.createDAOmodalShowing } ) }
						provider = { this.reax_wallet.web3Provider }
					/>
				</div>
			</>;
		} );
	}
});


export const Homepage_Avatar = ComponentWrapper((props:{url:string}) => {
	
	const routerProps = utils.useRouter();
	
	return <div
		onClick = { () => routerProps.navigate( '/home') }
		style = { {
			width : 48 ,
			height : 48 ,
			backgroundImage : `url("${ props.url }")` ,
			backgroundPosition : "center" ,
			backgroundRepeat : "no-repeat" ,
			backgroundSize : "100%" ,
			marginTop : 0 ,
		} }
	/>;
})


const reaxel_create_DAO_Modal = function() {
	
	const {
		store ,
		setState,
	} = orzMobx( { createDAOmodalShowing : false } );
	
	return (lifecycle:Lifecycle) => {
		let ret;
		
		return ret = {
			get visible (){
				return store.createDAOmodalShowing;
			}, 
			/*设置create-DAO-Modal的可见性*/
			setVisible(visible){
				setState({ createDAOmodalShowing : !store.createDAOmodalShowing})
				
			},
			CreateModalContent (){
				
			},
		};
	}
}();
