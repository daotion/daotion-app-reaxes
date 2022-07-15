import { BtnCreateSpaceSvgComponent } from '@@pages/_SvgComponents';
//todo import { CreateModalContent } from '@@pages/_BussinessComponents/Create-DAO-Modal';
import { CreateModalContent } from '@@pages/_BussinessComponents/Modal-Create-Space/components/create-modal';

import {
	
	reaxel_joined_Space_list ,
	reaxel_wallet ,
	reaxel_create_space ,
} from '@@reaxes';
import { Modal } from 'antd';
/**
 * 左侧的space list和Plugin list
 */
export const Sider_Space_List = ComponentWrapper(  class extends ReactComponentClass {
	
	state = {
		createSpaceModalShowing : false ,
	};
	
	
	
	reax_joined_space_list = reaxel_joined_Space_list();
	
	reax_wallet = reaxel_wallet();
	
	reax_create_space = reaxel_create_space();
	
	render() {
		
		return utils.withRouter( ( {
			navigate ,
			params ,
		} ) => {
			
			return <>
				{/*左侧第一竖栏,用户已加入的space列表*/ }
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
						{ this.reax_joined_space_list.joined_space_list.map( ( spaceInfo , index ) => {
							
							return <div
								key = { spaceInfo.spaceID }
								onClick = { () => {
									// crayon.blue( 'joined space info : ' , spaceInfo );
									navigate( `./space${ spaceInfo.spaceID }/info` );
								} }
								style = { {
									width : 48 ,
									height : 48 ,
									backgroundImage : `url("${ spaceInfo.icon }")` ,
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
							this.reax_create_space.setCreateModalVisible( true );
						} }
					>
						<BtnCreateSpaceSvgComponent />
					</div>
					{/* todo <CreateModalContent
						modalVisible = { this.state.createSpaceModalShowing }
						setModalVisible = { () => this.setState( { createSpaceModalShowing : !this.state.createSpaceModalShowing } ) }
						provider = { this.reax_wallet.web3Provider }
					/>*/}
				</div>
			</>;
		} );
	}
});


export const Homepage_Avatar = ComponentWrapper( ( props : { url : string } ) => {
	
	const routerProps = utils.useRouter();
	
	return <div
		onClick = { () => routerProps.navigate( '/home' ) }
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
} );
