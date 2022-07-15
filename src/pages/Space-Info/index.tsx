import {
	Button ,
	Modal ,
} from 'antd';
import less from './style.module.less';
import { reaxel_space_detail } from '@@reaxes/Spaces/DAO-detail';
import { reaxel_user_join_or_leave_space } from '@@reaxes';

import { DxzSpaceHomeJoined } from '@@pages/Test/dxz-space-home-joined';

export const SpaceInfo = ComponentWrapper( class extends ReactComponentClass<any , any> {
	
	reax_space_detail = reaxel_space_detail( this.lifecycle );
	
	reax_user_join_or_leave_space = reaxel_user_join_or_leave_space();
	
	render() {
		
		return utils.withRouter( ( {params} ) => {
			const spaceID = parseInt( params.spaceID );
			this.reax_space_detail.getSpaceDetailMemo( spaceID );
			const joined_DAO = this.reax_user_join_or_leave_space.is_user_joined_space( parseInt(params.DAOID) );
			return <>
				<div
					style={{
						display : "flex",
						flexFlow : "column",
					}}
				>
					<DxzSpaceHomeJoined/>
					{/*<Button
						onClick={() => {
							if(joined_DAO){
								return this.reax_user_join_or_leave_space.leave_space(spaceID)
							}else {
								return this.reax_user_join_or_leave_space.join_space( spaceID );
							}
						}}
					>{joined_DAO ? 'Leave DAO' : 'Join DAO'}</Button>*/}
				</div>
			</>;
		} );
		
		// return <>{ }</>;
		
		/*const [searchParams, setSearchParams] = useSearchParams()
		console.log(searchParams.get('id'))
		console.log(searchParams)
		return <>
			<div className={less.daoHome}>
				<DaoAvator id={+searchParams.get('id')} />
				<div className={less.share}>
					<ChannelShare />
				</div>
			</div>
		</>;*/
	}
} );
