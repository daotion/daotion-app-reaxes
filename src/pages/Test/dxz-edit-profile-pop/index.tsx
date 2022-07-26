import less from './index.module.less';
import { Button } from 'antd';
import { AddSocialBtn } from '../dxz-Space-Settings';
import { ProfileFooterBtn } from '../dxz-Space-Settings';
import { Input } from 'antd';

export const DxzEditProfilePop = () => {
	return <>
		<div className = { less.editProfileBox }>
			<h1 className = { less.Title }>Edit profile</h1>
			<p className = { less.intro }>You can set preferred display name, create <span className = { less.boldSpan }> your profile URL</span> and manage other personal settings.</p>
			<div className = { less.mainField }>
				<div className = { less.profilePhoto }>
					<img
						src = "https://img1.baidu.com/it/u=2418879995,536121872&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658250000&t=4549bddd267174d2cad76f2625a8ab00"
						alt = "avatar"
						width = "128px"
						height = "128px"
						style = { {
							borderRadius : "16px" ,
						} }
					/>
					<div
						style = { {
							width : "227px" ,
							marginLeft : "32px" ,
						} }
					>
						<span
							className = { less.photoTitle }
						>Profile photo
						</span>
						<p className = { less.avatarRule }>We recommend an image of at least 400x400.
							<br />
						                                   Gifs work too 🙌
						</p>
						<Button
							style = { {
								border : "2px solid #e6e8ec" ,
								padding : "12px 16px" ,
								width : "81px" ,
								height : '40px' ,
								borderRadius : '12px' ,
								display : 'flex' ,
								alignItems : "center" ,
								fontWeight : '700' ,
								fontSize : '14px' ,
								lineHeight : '16px' ,
								color : '#23262f' ,
							} }
						>
							<span>
								Upload
							</span>
						</Button>
					</div>
				</div>
				<div className = { less.accountInfo }>
					<p className = { less.accountTitle_1 }>Account info</p>
					<Subtitle title = "display name"></Subtitle>
					<Input
						className={less.editInput}
						placeholder='Enter your display name'
						style = { {
							background : "#f4f4f4" ,
							borderRadius : "12px" ,
							width : "100%" ,
							height : "48px" ,
							padding : "12px" ,
							border : "none" ,
							color : "#777e91" ,
							fontSize : "14px" ,
						} }
					/>
					<Subtitle title = "Bio"></Subtitle>
					<Input
						className={less.editInput}
						placeholder='About yourselt in a few words'
						style = { {
							background : "#f4f4f4" ,
							borderRadius : "12px" ,
							width : "100%" ,
							height : "48px" ,
							padding : "12px" ,
							border : "none" ,
							color : "#777e91" ,
							fontSize : "14px" ,
						} }
					/>
					<p className = { less.accountTitle_2 }>Social</p>
					<Subtitle title = "Portfolio or website"></Subtitle>
					<Input
						className={less.editInput}
						placeholder='Enter URL'						style = { {
							background : "#f4f4f4" ,
							borderRadius : "12px" ,
							width : "100%" ,
							height : "48px" ,
							padding : "12px" ,
							border : "none" ,
							color : "#777e91" ,
							fontSize : "14px" ,
						} }
					/>
					<Subtitle title = "Twitter"></Subtitle>
					<Input
						className={less.editInput}
						placeholder='@twitter username'
						style = { {
							background : "#f4f4f4" ,
							borderRadius : "12px" ,
							width : "100%" ,
							height : "48px" ,
							padding : "12px" ,
							border : "none" ,
							color : "#777e91" ,
							fontSize : "14px" ,
						} }
					/>
					<AddSocialBtn />
					<footer className = { less.lastIntro }>To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</footer>
					<div className = { less.divider }></div>
					<ProfileFooterBtn text = "Update Profile" />
				</div>
			</div>
		
		</div>
		;
	</>
		;
};
export const Subtitle = ( props ) => {
	return <>
		<span className = { less.subtitle }>{ props.title }</span>
	
	</>;
};

