import { request_modify_password } from "@@requester";
import md5 from "crypto-js/md5";

export const reaxel_edit_info = function(){
	// 修改密码方法
	const modify = async (data: {
		oldPassword: string,
		newPassword: string
	}) => {
		const { oldPassword = '' , newPassword = '' } = data;
		setState({
			pending : true ,
		});
		return request_modify_password(async () => {
			return {
				oldPassword: md5(oldPassword),
				newPassword: md5(newPassword)
			}
		}).then((res) => {
			setState({
				pending : false ,
			});
		}).catch((e) => {
			setState({
				pending : false ,
			});
		})
	}
	
	return ( ) => {
		return {
			onModifyInput(key : string , value : string){
				setState({
					modifyData: {
						...store.modifyData,
						[key]: value
					}
				})
			},
			
			modifyPassword () {
				modify(store.modifyData)
			}
		}
	}
}();