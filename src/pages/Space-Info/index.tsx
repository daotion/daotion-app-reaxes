import {
	Button ,
	Modal ,
} from 'antd';
import less from './style.module.less';
import { reaxel_space_detail } from '@@reaxes/Spaces/space-detail';
import { reaxel_user_join_or_leave_space } from '@@reaxes';

import { DxzSpaceHomeJoined } from '@@pages/Test/dxz-space-info-homepage';

export const SpaceInfo = ComponentWrapper( class extends ReactComponentClass<any , any> {
	
	reax_space_detail = reaxel_space_detail();
	
	reax_user_join_or_leave_space = reaxel_user_join_or_leave_space();
	
	render() {
		return utils.withRouter( ( {params} ) => {
			const spaceID = parseInt( params.spaceID );
			this.reax_space_detail.getSpaceDetailMemoed( spaceID );
			const joined_DAO = this.reax_user_join_or_leave_space.is_user_joined_space( parseInt(params.DAOID) );
			return <>
				<div
					style={{
						display : "flex",
						flexFlow : "column",
					}}
				>
					<DxzSpaceHomeJoined spaceInfo={this.reax_space_detail.store.spaceInfo}/>
				</div>
			</>;
		} );
	}
} );
