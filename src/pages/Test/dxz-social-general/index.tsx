import less from './index.module.less';
import {
	Button ,
	Input ,
	Select ,
} from 'antd';
import {} from '@@reaxes';


const { Option } = Select;
const handleChange = ( value : string[] ) => {
	console.log( `selected ${ value }` );
};
const children : React.ReactNode[] = [];
for ( let i = 10 ; i < 36 ; i++ ) {
	children.push( <Option key = { i.toString( 36 ) + i }>{ i.toString( 36 ) + i }</Option> );
}

const { TextArea } = Input;
export const DxzSpaceSettings = () => {
	
	const [tab,setTab] = useState<'social'|'general'>('social');
	
	const Content = {
		social : "",
		general : "",
	}[tab];
	return <>
		<div
			className = { less.container }
		>
			<SpaceSettingTabs tab = {tab} setTab = {setTab}/>
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
					<img
						src = "data:image/png;base64,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"
						style = { {
							width : "96px" ,
							height : "96px" ,
							borderRadius : "12px" ,
							backgroundColor : "orange" ,
						} }
					/>
					<UploadBtn></UploadBtn>
				</div>
				<p
					className = { less.netInfo }
				>
					<span
						style = { {
							marginRight : '6px' ,
						} }
					>
						The current deployed network
					</span>
					<AttentionIcon></AttentionIcon>
				</p>
				<CurrentNet></CurrentNet>
				<div className = { less.bio }>
					<span>Bio</span>
					<AttentionIcon></AttentionIcon>
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
				/>
				<span className={less.email}>Type</span>
				<Select
					className = { less.votingType_box }
					style = { {
						width : "100%" ,
						color : "#9a9fa5" ,
						height : "48px" ,
						
					} }
					removeIcon = { <ClearSvg /> }
					defaultValue = { [
						'a10' ,
						'c12' ,
					] }
					onChange = { handleChange }
					mode = "multiple"
					allowClear
					placeholder = "Enter tags or Select"
				>{ children }
				</Select>
				<TitleInput name = "Email"></TitleInput>
				<div className = { less.divider }></div>
				<ProfileFooterBtn text = "Save Changes"></ProfileFooterBtn>
			</div>
		</div>
	</>;
};

const SpaceSettingTabs = ComponentWrapper((props:SpaceSettingTabsProps) => {
	
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
				className = { less.settingsSelect }
			>DAO Settings
			</span>
			<ul
				style = { {
					display : "flex" ,
					flexFlow : "column nowrap" ,
					padding:"0 0 0 0",
					userSelect:'none'
				} }
			>
				{(['general','social'] as const).map((tab) => <SpaceSettingTabPane
					key = {tab}
					selected={props.tab === tab}
					onClick = {() => props.setTab(tab)}
				>{
					tab
				}</SpaceSettingTabPane>)}
			</ul>
		</div>
	</>;
} );
const SpaceSettingTabPane = (props:React.PropsWithChildren<{ selected? : boolean;onClick : () => any }>) => {
	return <span 
		className = { props.selected ? less.settingTabSelected :less.settingTab }
		onClick = {() => props.onClick()}
	>
		{props.children}
	</span>
};


type SpaceSettingTabsProps = {
	tab : 'social'|'general',
	setTab : (tab:'social'|'general') => void;
};



const GeneralBtn = () => {
	return <>
		<li
			className = { less.generalBtn }
			style = { {
				backgroundColor : '#efefef' ,
				color : '#1a1d1f' ,
				display : "flex" ,
				alignItems : "center" ,
				flexDirection : "row" ,
				width : "280px" ,
				height : "40px" ,
				borderRadius : '8px' ,
				fontSize : "15px" ,
				fontWeight : "600" ,
				lineHeight : "24px" ,
				marginBottom : "8px" ,
			} }
		>
			<span
			>General
			</span>
		</li>
	</>;
};
const SocialBtn = () => {
	return <>
		<li
			className = { less.socialBtn }
			style = { {
				backgroundColor : '#fcfcfc' ,
				color : '#6f767e' ,
				display : "flex" ,
				alignItems : "center" ,
				flexDirection : "row" ,
				width : "280px" ,
				height : "40px" ,
				borderRadius : '8px' ,
				fontSize : "15px" ,
				fontWeight : "600" ,
				lineHeight : "24px" ,
				marginBottom : "8px" ,
				border : "none" ,
			} }
		>
			<span
			>Social Profiles
			</span>
		</li>
	</>;
};
const GeneralAvater = () => {
	return <>
	</>;
};
const UploadBtn = () => {
	return <>
		<Button
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
			<span
				style = { {} }
			>
				Upload
			</span>
		</Button></>;
};
const AttentionIcon = () => {
	return <>
		<svg
			style = { {
				verticalAlign : "middle" ,
				marginLeft : "5px" ,
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
			} }
		>{ props.title }
		</h1>
	</>;
};
const AddSocialBtn = () => {
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
			} }
		>
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
			<span>
				Add more social account
			</span>
		</Button>
	</>;
};

const ProfileFooterBtn = ( props ) => {
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
			} }
		>
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
			
			<span
				style = { { marginLeft : "10px" } }
			>ETHEREUM
			</span>
		</div>
	</>;
};
const TitleInput = ( props ) => {
	return <>
		<span className = { less.email }>{ props.name }</span>
		<GrayInput></GrayInput>
	</>;
};
const GrayInput = () => {
	return <>
		<Input
			placeholder = "Please enter address"
			className = "gray-input"
			style = { {
				background : "#f4f4f4" ,
				borderRadius : "12px" ,
				width : "100%" ,
				height : "48px" ,
				padding : "12px" ,
				border : "none" ,
			} }
		/>
	</>;
};

const ClearSvg = () => {
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
if(false){
	<div
		className = { less.container }
	>
		<div
			className = "select-btn"
			style = { {
				width : "280px" ,
				height : "fit-content" ,
			} }
		>
			<span
				className = { less.settingsSelect }
			>DAO Settings
			</span>
			<GeneralBtn></GeneralBtn>
			<SocialBtn></SocialBtn>
		</div>
		<div
			className = "social-main"
			style = { {
				width : "100%" ,
				marginLeft : "32px" ,
			} }
		>
			<ProfileTitle title = "Social Profiles"></ProfileTitle>
			<TitleInput name = "Homepage"></TitleInput>
			<TitleInput name = "Twitter"></TitleInput>
			<TitleInput name = "Discord"></TitleInput>
			<TitleInput name = "GitHub"></TitleInput>
			<AddSocialBtn></AddSocialBtn>
			<div className = { less.divider }></div>
			<ProfileFooterBtn text = "Update Social Profiles"></ProfileFooterBtn>
		</div>
	</div>
}

if ( false ) {
	<div
		className = { less.container }
	>
		<div
			className = "select-btn"
			style = { {
				width : "280px" ,
				height : "fit-content" ,
			} }
		>
			<span
				className = { less.settingsSelect }
			>DAO Settings
			</span>
			<GeneralBtn></GeneralBtn>
			<SocialBtn></SocialBtn>
		</div>
		<div
			className = "social-main"
			style = { {
				width : "100%" ,
				marginLeft : "32px" ,
			} }
		>
			<ProfileTitle title = "Social Profiles"></ProfileTitle>
			<TitleInput name = "Homepage"></TitleInput>
			<TitleInput name = "Twitter"></TitleInput>
			<TitleInput name = "Discord"></TitleInput>
			<TitleInput name = "GitHub"></TitleInput>
			<AddSocialBtn></AddSocialBtn>
			<div className = { less.divider }></div>
			<ProfileFooterBtn text = "Update Social Profiles"></ProfileFooterBtn>
		</div>
	</div>;
}
