import less from './index.module.less';
import {
	Button ,
	Input ,
	Select ,
} from 'antd';
import spaceTags from '@@Public/space-tags.json';
import { Img } from '@@common/Xcomponents';

const { Option } = Select;

const { TextArea } = Input;
export const DxzSpaceSettings = () => {
	
	const [ tab , setTab ] = useState<'social' | 'general'>( 'general' );
	const spaceID = parseInt(useParams().spaceID);
	const Content = {
		social : SocialProfile ,
		general : GeneralProfile ,
	}[ tab ];
	reaxel_edit_space_settings().closuredFetchSpaceInfo( spaceID );
	return <>
		<div
			className = { less.container }
		>
			<SpaceSettingTabs
				tab = { tab }
				setTab = { setTab }
			/>
			<Content />
		</div>
	</>;
};


import {
	reaxel_upload_pics ,
	reaxel_space_detail,
	reaxel_wallet,
	reaxel_user,
	
} from '@@reaxes';
import {useParams} from 'react-router-dom';
import {request_space_detail , request_space_general_modify,request_server_timestamp} from '@@requests';
import {Space___get_space_detail} from '@@requests/Spaces/types';
const GeneralProfile = ComponentWrapper(() => {
	const spaceID = parseInt(useParams().spaceID);
	const { getSpaceDetailMemoed , store : store__space_detail } = reaxel_space_detail();
	const {space_settings_avatar : reax_upload_avatar } = reaxel_upload_pics();
	const {
		InfoEquals ,
		editingStore,
		setEditingSpaceInfo,
		closuredFetchSpaceInfo,
		saveSpaceSettings,
	} = reaxel_edit_space_settings();
	
	[ store__space_detail.spaceInfo ];
	
	return <>
		<div
			style = { {
				width : "100%" ,
				marginLeft : "32px" ,
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<ProfileTitle title = "General"></ProfileTitle>
			<div
				className = { less.picBox }
			>
				<div
					style={{
						backgroundColor : "#eee" ,
						borderRadius : "12px",
					}}
				>
					<Img
						src = { editingStore.iconUrl}
						style = { {
							width : "96px" ,
							height : "96px" ,
							borderRadius : "12px" ,
							objectFit:"cover",
							objectPosition:"50% 50%",
						} }
					/>
				</div>
				<UploadBtn onClick={() => {
					reax_upload_avatar(spaceID).then((url) => {
						setEditingSpaceInfo( { iconUrl : url } );
					});
				}}/>
			</div>
			<p
				className = { less.netInfo }
			>
				<span
					style = { {
						marginRight : '6px' ,
						userSelect : 'none' ,
					} }
				>
					The current deployed network
				</span>
				<SVGTooltip></SVGTooltip>
			</p>
			<CurrentNet></CurrentNet>
			<div className = { less.bio }>
				<span>Bio</span>
				<SVGTooltip></SVGTooltip>
			</div>
			<TextArea
				rows = { 4 }
				style = { {
					background : "#f4f4f4" ,
					borderRadius : "12px" ,
					width : "100%" ,
					padding : "4px" ,
					height : "112px" ,
					border : "2px solid rgba(154, 159, 165, 0.25)" ,
				} }
				placeholder="Tell about your Space in a few words"
				value = {editingStore.bio}
				maxLength={160}
				onChange={(e) => {
					setEditingSpaceInfo( {
						bio : e.target.value ,
					} );
				}}
			/>
			<ItemWithTitle title="Type">
				<Select
					className = { less.votingType_box }
					style = { {
						width : "100%" ,
						color : "#9a9fa5" ,
						height : "48px" ,
						
					} }
					removeIcon = { <SVGClear /> }
					mode = "multiple"
					allowClear
					placeholder = "Enter or select tags"
					value = {editingStore.tags}
					onChange={(tags) => {
						if(tags.length > 3) return ;
						setEditingSpaceInfo( {
							tags ,
						} );
					}}
				>
					{spaceTags.map((tag) => {
						return <Option key = {tag}>
							{tag}
						</Option>
					})}
				</Select>
			</ItemWithTitle>
			<ItemWithTitle
				title = "Email"
			>
				<Input
					style = { {
						background : "#f4f4f4" ,
						borderRadius : "12px" ,
						width : "100%" ,
						height : "48px" ,
						padding : "12px" ,
						border : "none" ,
						fontWeight:"600",
						fontSize:"14px",
						lineHeight:"24px",
						color:"#33383f"
					} }
					placeholder="Enter your email"
					value = {editingStore.email}
					onChange={(e) => {
						setEditingSpaceInfo( { email : e.target.value } );
					}}
				/>
			</ItemWithTitle>
			<div className = { less.divider }></div>
			<Button
				disabled={InfoEquals}
				type="primary"
				onClick={() => {
					saveSpaceSettings();
				}}
				style = { {
					borderRadius : "12px" ,
					padding : "12px 20px" ,
					fontSize : '15px' ,
					fontWeight : '700' ,
					lineHeight : "24px" ,
					height : "48px" ,
					width : 'fit-content' ,
					display : "flex" ,
					alignItems : "center" ,
					justifyContent : "center" ,
				} }
			>Save Changes</Button>
		</div>
	</>;
});
const reaxel_edit_space_settings = function(){
	let ret;
	type fields = {
		bio : string ,
		email : string ,
		tags : string[],
		iconUrl : string;
	};
	const {store,setState} = orzMobx<fields>( {
		bio : null ,
		email : null ,
		tags : [],
		iconUrl : null,
	} );
	let currentSpaceID : number;
	let spaceInfo:fields;
	let fetching = false;
	
	/*从服务器拿spaceInfo并缓存下来*/
	const closuredSpaceInfo = Reaxes.closuredMemo(async (spaceID:number , forceUpdate:boolean = false) => {
		/*当前逻辑是进入space:spaceID路由下会自动请求space的detail,而settings页面一定在space:spaceID路由下的
		  所以可以认为编辑中的spaceInfo和自动请求到的spaceInfo是同一套.判断一下,如果spaceID相同就不请求后端了*/
		const info = reaxel_space_detail().store.spaceInfo;
		currentSpaceID = spaceID;
		if(info && (spaceID === info.spaceID) && !forceUpdate){
			spaceInfo = {
				bio : info.bio,
				email : info.email,
				tags : info.tags,
				iconUrl : info.iconUrl,
			}
			setState(spaceInfo);
			return ;
		}
		if(fetching === true){
			return ;
		}
		fetching = true;
		const promise = request_space_detail( spaceID ).
		then( ( info ) => {
			spaceInfo = {
				bio : info.bio ,
				email : info.email ,
				tags : info.tags ,
				iconUrl : info.iconUrl ,
			};
			setState( spaceInfo );
		} );
		promise.finally(() => {
			fetching = false;
		});
		return promise;
	},() => []);
	
	const omitIconUrl = () => {
		return [_.omit(store,'iconUrl'),_.omit(spaceInfo,'iconUrl')] as [Omit<fields,"iconUrl">,Omit<fields,'iconUrl'>];
	};
	
	return () => {
		
		return ret = {
			closuredFetchSpaceInfo(spaceID:number,forceUpdate:boolean = false){
				const force = forceUpdate ? [Math.random()] : [];
				return closuredSpaceInfo(() => [spaceID,...force])(spaceID,forceUpdate);
			},
			get InfoEquals (){
				/*_.isEqual()深度对比*/
				return _.isEqual( ...omitIconUrl() );				
			},
			get editingStore() {
				return store;
			},
			setEditingSpaceInfo(partialInfo:Partial<fields>){
				setState( partialInfo );
			},
			async saveSpaceSettings (){
				const reax_wallet = reaxel_wallet();
				const reax_user = reaxel_user();
				const address = reax_wallet.account.address;
				const data:data = {
					spaceID : currentSpaceID ,
					tags : store.tags.join(','),
					bio : store.bio ,
					email : store.email,
					modifyAddress : reax_wallet.account.address,
					timestamp : await request_server_timestamp() ,
				};
				/*todo 只传改变了的字段.现在没时间 后续优化*/
				// if(!_.isEqual(store.tags,spaceInfo.tags)){
				// 	data.tags = store.tags.join(',');
				// }
				//
				const fetch_space_general_modify = async () => {
					return request_space_general_modify( {
						address ,
						data ,
						signature : await reax_user.signByFakeWallet( data ) ,
					} );
				};
				// ret.closuredFetchSpaceInfo(currentSpaceID,true).then(() => {
				// 	antd.Modal.success({title : "changed successful!"})
				// });
				// return ;
				fetch_space_general_modify().then(() => {
					ret.closuredFetchSpaceInfo(currentSpaceID,true).then(() => {
						antd.Modal.success({title : "changed successful!"})
					});
				}).catch((e) => {
					console.error(e);
				});
				type data = {
					spaceID : number,
					modifyAddress : string,
					timestamp : number,
					tags?:string,
					bio?:string,
					email?:string,
				};
			},
		}
	}
}();





const SocialProfile = ComponentWrapper(() => {
	return <>
		<div
			style = { {
				width : "100%" ,
				marginLeft : "32px" ,
				display : "flex",
				flexFlow : "column nowrap",
			} }
		>
			<ProfileTitle title = "Social Profiles"></ProfileTitle>
			<ItemWithTitle title = "Homepage"></ItemWithTitle>
			<ItemWithTitle title = "Twitter"></ItemWithTitle>
			<ItemWithTitle title = "Discord"></ItemWithTitle>
			<ItemWithTitle title = "GitHub"></ItemWithTitle>
			<AddSocialBtn></AddSocialBtn>
			<div className = { less.divider }></div>
			<ProfileFooterBtn text = "Update Social Profiles"></ProfileFooterBtn>
		</div>
	</>;
});











const SpaceSettingTabs = ComponentWrapper( ( props : SpaceSettingTabsProps ) => {
	
	return <>
		<div
			style = { {
				width : "280px" ,
				height : "fit-content" ,
				display : "flex" ,
				flexFlow : "column nowrap" ,
			} }
		>
			<span
				className = { less.settingsTitle }
			>Space Settings
			</span>
			<ul
				style = { {
					display : "flex" ,
					flexFlow : "column nowrap" ,
					padding : "0 0 0 0" ,
					userSelect : 'none' ,
				} }
			>
				{ (
					[
						'general' ,
						'social' ,
					] as const
				).map( ( tab ) => <SpaceSettingTabPane
					key = { tab }
					selected = { props.tab === tab }
					onClick = { () => props.setTab( tab ) }
				>{
					tab
				}</SpaceSettingTabPane> ) }
			</ul>
		</div>
	</>;
} );
const SpaceSettingTabPane = ( props : React.PropsWithChildren<{ selected? : boolean; onClick : () => any }> ) => {
	return <span
		className = { props.selected ? less.settingTabSelected : less.settingTab }
		onClick = { () => props.onClick() }
	>
		{ props.children }
	</span>;
};


type SpaceSettingTabsProps = {
	tab : 'social' | 'general',
	setTab : ( tab : 'social' | 'general' ) => void;
};


const UploadBtn = (props : {onClick? : () => void}) => {
	return <>
		<Button
			onClick={props.onClick}
			style = { {
				marginLeft : "29px" ,
				display : "inline-flex" ,
				alignItems : "center" ,
				borderRadius : "8px" ,
				padding : "8px 16px" ,
				backgroundColor : "#3772ff" ,
				color : "#ffffff" ,
				width : "fit-content" ,
				height : "40px" ,
				fontSize : '13px' ,
				fontWeight : '700' ,
				lineHeight : '24px' ,
				justifyContent : "15px" ,
			} }
		>
			<SVGWhiteAdd></SVGWhiteAdd>
			<span
				style = { {} }
			>
				Upload
			</span>
		</Button></>;
};
const SVGWhiteAdd = () => {
	return <>
		<svg
			style = { {
				marginRight : "8px" ,
				
			} }
			width = "24"
			height = "24"
			viewBox = "0 0 24 24"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
				fill = "#FCFCFC"
			/>
		</svg>
	</>;
};
const SVGTooltip = () => {
	return <>
		<svg
			style = { {
				verticalAlign : "middle" ,
				paddingLeft : "5px" ,
			} }
			width = "16"
			height = "16"
			viewBox = "0 0 16 16"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967ZM7.99992 7.33301C8.36811 7.33301 8.66659 7.63148 8.66659 7.99967V11.3336C8.66659 11.7018 8.36811 12.0003 7.99992 12.0003C7.63173 12.0003 7.33325 11.7018 7.33325 11.3336V7.99967C7.33325 7.63148 7.63173 7.33301 7.99992 7.33301ZM7.99992 5.99967C8.36811 5.99967 8.66659 5.7012 8.66659 5.33301C8.66659 4.96482 8.36811 4.66634 7.99992 4.66634C7.63173 4.66634 7.33325 4.96482 7.33325 5.33301C7.33325 5.7012 7.63173 5.99967 7.99992 5.99967Z"
				fill = "#9A9FA5"
			/>
		</svg>
	</>;
};
const ProfileTitle = ( props ) => {
	return <>
		<h1
			style = { {
				fontWeight : '600' ,
				fontSize : '20px' ,
				lineHeight : "36px" ,
				userSelect : 'none' ,
			} }
		>{ props.title }
		</h1>
	</>;
};
export const AddSocialBtn = () => {
	return <>
		<Button
			style = { {
				color : "#777e90" ,
				fontWeight : "700" ,
				fontSize : "14px" ,
				lineHeight : "16px" ,
				border : "2px solid #e6e8ec" ,
				display : "flex" ,
				alignItems : "center" ,
				justifyContent : "center" ,
				padding : "12px 16px" ,
				borderRadius : "12px" ,
				height : "40px" ,
				marginTop : "32px" ,
				width : "fit-content",
			} }
		>
			<SVGGrayAdd></SVGGrayAdd>
			<span>
				Add more social account
			</span>
		</Button>
	</>;
};
const SVGGrayAdd = () => {
	return <>
		<svg
			style = { {
				marginRight : '12px' ,
			} }
			width = "16"
			height = "16"
			viewBox = "0 0 16 16"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M12.6667 7.99967C12.6667 10.577 10.5773 12.6663 8.00001 12.6663C5.42268 12.6663 3.33334 10.577 3.33334 7.99967C3.33334 5.42235 5.42268 3.33301 8.00001 3.33301C10.5773 3.33301 12.6667 5.42235 12.6667 7.99967ZM14.6667 7.99967C14.6667 11.6816 11.6819 14.6663 8.00001 14.6663C4.31811 14.6663 1.33334 11.6816 1.33334 7.99967C1.33334 4.31778 4.31811 1.33301 8.00001 1.33301C11.6819 1.33301 14.6667 4.31778 14.6667 7.99967ZM8.00001 3.66634C8.55229 3.66634 9.00001 4.11406 9.00001 4.66634V6.99967H11.3333C11.8856 6.99967 12.3333 7.44739 12.3333 7.99967C12.3333 8.55196 11.8856 8.99967 11.3333 8.99967H9.00001V11.333C9.00001 11.8853 8.55229 12.333 8.00001 12.333C7.44773 12.333 7.00001 11.8853 7.00001 11.333V8.99967H4.66668C4.11439 8.99967 3.66668 8.55196 3.66668 7.99967C3.66668 7.44739 4.11439 6.99967 4.66668 6.99967H7.00001V4.66634C7.00001 4.11406 7.44773 3.66634 8.00001 3.66634Z"
				fill = "#777E91"
			/>
		</svg>
	</>;
};
export const ProfileFooterBtn = ( props ) => {
	return <>
		<Button
			className = "profile-footer-btn"
			style = { {
				background : "#3772ff" ,
				borderRadius : "12px" ,
				color : "#ffffff" ,
				padding : "12px 20px" ,
				fontSize : '15px' ,
				fontWeight : '700' ,
				lineHeight : "24px" ,
				height : "48px" ,
				width : 'fit-content' ,
				display : "flex" ,
				alignItems : "center" ,
				justifyContent : "center" ,
			} }
		>{ props.text }</Button>
	</>;
};
const CurrentNet = ( props ) => {
	return <>
		<div
			className = "net"
			style = { {
				display : "flex" ,
				alignItems : "center" ,
				borderRadius : "12px" ,
				backgroundColor : "#f4f4f4" ,
				fontSize : '14px' ,
				fontWeight : "500" ,
				lineHeight : '24px' ,
				color : '#23262f' ,
				width : 'fit-content' ,
				height : "40px" ,
				padding : "8px" ,
				justifyContent : "space-between" ,
				userSelect : 'none' ,
			} }
		>
			<SVGNet></SVGNet>
			<span
				style = { { marginLeft : "10px" } }
			>ETHEREUM
			</span>
		</div>
	</>;
};
const SVGNet = () => {
	return <>
		<svg
			width = "16"
			height = "16"
			viewBox = "0 0 16 16"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<g clipPath = "url(#clip0_2540_29067)">
				<path
					d = "M0 8C0 3.5816 3.58166 0 8.00014 0C12.4186 0 16.0003 3.5816 16.0003 8C16.0003 12.4184 12.4186 16 8.00014 16C3.58166 16 0 12.4184 0 8Z"
					fill = "#627EEA"
				/>
				<path
					d = "M4 7.7243L8 9.99967V1.33301L4 7.7243Z"
					fill = "white"
				/>
				<path
					opacity = "0.8"
					d = "M8.00041 1.33301L8 9.99967L12 7.75276L8.00041 1.33301Z"
					fill = "#C0CBF6"
				/>
				<path
					d = "M4 8.86426L7.92927 14.4003V11.1859L4 8.86466V8.86426Z"
					fill = "white"
				/>
				<path
					opacity = "0.8"
					d = "M7.92969 11.1859V14.4003L11.8606 8.86426L7.92969 11.1859Z"
					fill = "#C0CBF6"
				/>
				<path
					opacity = "0.6"
					d = "M8.00061 6L4 7.73966L8.00061 10L12 7.73966L8.00061 6Z"
					fill = "#8197EE"
				/>
			</g>
			<defs>
				<clipPath id = "clip0_2540_29067">
					<rect
						width = "16.0003"
						height = "16"
						fill = "white"
					/>
				</clipPath>
			</defs>
		</svg>
	</>;
};
const ItemWithTitle = ( props : React.PropsWithChildren<{
	title : string ;
}> ) => {
	return <>
		<span className = { less.email }>{ props.title }</span>
		{props.children}
	</>;
};

const SVGClear = () => {
	return <>
		<svg
			width = "24"
			height = "24"
			viewBox = "0 0 24 24"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg"
		>
			<path
				fillRule = "evenodd"
				clipRule = "evenodd"
				d = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
				fill = "white"
			/>
		</svg>
	
	</>;
};
