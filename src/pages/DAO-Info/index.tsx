import {
	Button ,
	Modal ,
} from 'antd';
// import { DaoAvator } from './Components/dao-avator';
// import { ChannelShare } from './Components/channel-share';
import less from './style.module.less';
import { reaxel_DAO_detail } from '@@reaxes/DAO/DAO-detail';

export const DAOInfo = ComponentWrapper( class extends ReactComponentClass<any , any> {
	
	DAO_detail = reaxel_DAO_detail( this.lifecycle );
	
	render() {
		return utils.withRouter( ( {params} ) => {
			this.DAO_detail.getDAOdetailMemed( params.DAOID );
			return <>
				<code>
					{ JSON.stringify( this.DAO_detail.store.DAOinfo , null , 3 ) }
				</code>
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
