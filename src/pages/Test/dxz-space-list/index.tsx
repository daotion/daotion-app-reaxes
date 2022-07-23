import less from './index.module.less';
import {reaxel_joined_Space_list} from '@@reaxes';

export const DxzSpaceList = ComponentWrapper(() => {
	
	const [ current , setCurrent ] = useState( 0 );
	const { joined_space_list } = reaxel_joined_Space_list();
	
	return <>
		<div className={less.container}>
			<div className={less.spaceBox}>
				<div>
					{ joined_space_list.map( ( spaceInfo , i ) => {
						return <div
							onClick={() => {
								setCurrent( spaceInfo.spaceID);
							}}
							key = {spaceInfo.spaceID}
							className = { less.spaceItem }
						>
							<img
								style = { {
									borderRadius : "12px" ,
								} }
								src = "https://s1.ax1x.com/2022/07/12/jg9ss0.png"
								alt = "Space"
								width = "40px"
								height = "40px"
							/>
							<div
								className = { current === spaceInfo.spaceID ? less.selectVisionSelected : less.selectVision  }
							/>
						</div>;
					} ) }
				</div>
			</div>
		</div>
	</>;
});





