import { BtnCreateSpaceSvgComponent } from '@@pages/_SvgComponents';
import {
	reaxel_create_space ,
	reaxel_joined_Space_list ,
	reaxel_wallet ,
} from '@@reaxes';

/**
 * 左侧的space list和Plugin list
 */
export const Sider_Space_List = ComponentWrapper( class extends ReactComponentClass {
	
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
						padding : "16px 8px" ,
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
							justifyContent : "space-between" ,
						} }
					>
						<Homepage_Avatar
							url = 'data:image/png;base64,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'
						/>
						<div
							style = { {
								width : 48 ,
								height : 1 ,
								backgroundColor : "#efefef" ,
								marginTop : 12 ,
								marginBottom : 13 ,
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
									marginBottom : 16 ,
									borderRadius : "12px" ,
									backgroundColor : '#eeeeee' ,
									boxShadow : '0px 1px 10px rgba(0, 0, 0, 0.1)' ,
								} }
							/>;
						} ) }
					</div>
					<div
						onClick = { () => {
							this.reax_create_space.setCreateModalVisible( true );
						} }
					>
						<div
							style = { {
								width : 48 ,
								height : 2 ,
								backgroundColor : "#efefef" ,
								marginBottom : 12 ,
							} }
						/>
						<BtnCreateSpaceSvgComponent />
					</div>
					{/* todo <CreateModalContent
						modalVisible = { this.state.createSpaceModalShowing }
						setModalVisible = { () => this.setState( { createSpaceModalShowing : !this.state.createSpaceModalShowing } ) }
						provider = { this.reax_wallet.web3Provider }
					/>*/ }
				</div>
			</>;
		} );
	}
} );


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
