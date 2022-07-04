import {
	Button ,
	Modal ,
} from 'antd';
import less from './style.module.less';
import { reaxel_DAO_detail } from '@@reaxes/DAO/DAO-detail';
import { reaxel_user_join_or_leave_DAO } from '@@reaxes';

export const DAOInfo = ComponentWrapper( class extends ReactComponentClass<any , any> {
	
	DAO_detail = reaxel_DAO_detail( this.lifecycle );
	
	reax_user_join_or_leave_DAO = reaxel_user_join_or_leave_DAO();
	
	render() {
		
		return utils.withRouter( ( {params} ) => {
			const DAOID = parseInt( params.DAOID );
			this.DAO_detail.getDAOdetailMemed( DAOID );
			const joined_DAO = this.reax_user_join_or_leave_DAO.is_user_joined_DAO( parseInt(params.DAOID) );
			return <>
				<div
					style={{
						display : "flex",
						flexFlow : "column",
					}}
				>
					<code>
					<pre>
						{ JSON.stringify( this.DAO_detail.store.DAOinfo , null , 3 ) }
					</pre>
					</code>
					<br/>
					<Button
						onClick={() => {
							if(joined_DAO){
								return this.reax_user_join_or_leave_DAO.leave_DAO(DAOID)
							}else {
								return this.reax_user_join_or_leave_DAO.join_DAO( DAOID );
							}
						}}
					>{joined_DAO ? 'Leave DAO' : 'Join DAO'}</Button>
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
