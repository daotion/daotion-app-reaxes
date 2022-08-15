import { BtnCreateSpaceSvgComponent } from '@@pages/_SvgComponents';
import {
	reaxel_create_space ,
	reaxel_joined_Space_list ,
	reaxel_wallet ,
} from '@@RootPath/src/reaxels';
import { Img } from '@@common/Xcomponents';
import less from './index.module.less';

/**
 * 左侧的space list和Plugin list
 */
export const Sider_Space_List = ComponentWrapper( class extends ReactComponentClass<any,{
	
	createSpaceModalShowing : boolean ,
	selectingSpaceID : number,
	
}> {
	
	state = {
		createSpaceModalShowing : false ,
		selectingSpaceID : null,
	};
	
	reax_joined_space_list = reaxel_joined_Space_list();
	
	reax_wallet = reaxel_wallet();
	
	reax_create_space = reaxel_create_space();
	
	getSpaceIDFromUrl = () => {
		return parseInt(location.pathname.match(/([\d]+)/)?.[0]);
	};
	
	memoSetSelectingSpaceIDFromRoute = Reaxes.closuredMemo((routeSpaceID:number) => {
		if(typeof routeSpaceID === "number" && !_.isNaN(routeSpaceID)){
			setTimeout( () => this.setState( {
				selectingSpaceID : routeSpaceID ,
			} ) );
		}else if(this.state.selectingSpaceID !== null) {
			setTimeout( () => this.setState( {
				selectingSpaceID : null ,
			} ) );
		}
	},() =>[]);
	
	render() {
		const {
			navigate ,
			params,
		} = utils.useRouter();
		
		this.memoSetSelectingSpaceIDFromRoute(() => [this.getSpaceIDFromUrl()])(this.getSpaceIDFromUrl());
		
		const {Tooltip} = antd;
		return <>
			{/*左侧第一竖栏,用户已加入的space列表*/ }
			<div className={less.joinedSpaceContainer}>
				<div
					style = {{
						overflow : "auto",
					}}
				>
					<Homepage_Avatar
						url = "data:image/png;base64,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"
					/>
					<div
						style = { {
							boxSizing: 'content-box',
							display: 'flex',
							flexFlow: 'column',
							flexGrow: '1',
							flexShrink : '0',
							height : "calc(100% - 65px)",
							overflow : "auto",
						} }
					>
						{ this.reax_joined_space_list.joined_space_list.map( ( spaceInfo ) => {
							
							
							return <Tooltip
								overlayClassName = { less.joinedSpaceTooltip }
								style = { {
									left : "48px" ,
								} }
								title = { spaceInfo.spaceName || 'spacename33333' }
								placement = "right"
								key = { spaceInfo.spaceID }
							>
								<div
									onClick = { () => {
										this.setState( {
											selectingSpaceID : spaceInfo.spaceID ,
										} );
										navigate( `./space${ spaceInfo.spaceID }/info` );
									} }
									className = { less.spaceItem }
								>
									<Img
										style = { {
											borderRadius : "12px" ,
										} }
										src = { spaceInfo.icon }
										alt = "Space"
										className = { less.spaceAvatar }
										fallback = { <div
											style = { {
												height : "40px" ,
												borderRadius : "12px" ,
												backgroundColor : "black" ,
												display : "flex" ,
												justifyContent : "center" ,
												alignItems : "center" ,
												width : "40px" ,
											} }
										>
											<span className = { less.theFirstLetter }>
												{ spaceInfo.spaceName.slice( 0 , 1 ).
												toUpperCase() }
											</span>
										</div> }
									/>
									<div
										className = { this.state.selectingSpaceID === spaceInfo.spaceID ? less.selectVisionSelected : less.selectVision }
									/>
								</div>
							</Tooltip>;
						} ) }
					</div>
				</div>
				
				
				<div
					onClick = { () => {
						this.reax_create_space.setCreateModalVisible( true );
					} }
				>
					<div
						style = { {
							width : 40 ,
							height : 2 ,
							backgroundColor : "#e6e8ec" ,
							marginBottom : 12 ,
						} }
					/>
					<BtnCreateSpaceSvgComponent />
				</div>
			</div>
		</>;
	}
} );


export const Homepage_Avatar = ComponentWrapper( ( props : { url : string } ) => {
	
	const routerProps = utils.useRouter();
	
	return <div>
		
		<div
			onClick = { () => routerProps.navigate( '/home' ) }
			style = { {
				width : 40 ,
				height : 40 ,
				backgroundImage : `url("${ props.url }")` ,
				backgroundPosition : "center" ,
				backgroundRepeat : "no-repeat" ,
				backgroundSize : "100%" ,
				marginTop : 0 ,
				cursor : "pointer",
			} }
		/>
		<div
			style = { {
				width : 40 ,
				height : 1 ,
				backgroundColor : "#e6e8ec" ,
				marginTop : 12 ,
				marginBottom : 12 ,
			} }
		/>
	</div>
		;
} );

