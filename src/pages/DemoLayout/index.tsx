import React , { Component } from 'react';
import { ReactComponentClass } from '@@common/ReactComponentClass';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';
import {
	Button ,
	Input ,
	Icon ,
	List ,
	
} from "@mui/material";

import {
	TreeView,
	TreeItem,
} from "@mui/lab"

import less from './style.less';

import SVGchevron_down from './chevron_down.component.svg';
import SVGchevron_up from './chevron_up.component.svg';
import SVGicon1 from './demo-icon-1.component.svg';
import SVGpeople from './people.component.svg';
import {Expand} from './Expand.svg.component'

const _DemoLayout = class extends Component<any , any> {
	
	constructor( props ) {
		super( props );
	}
	
	state = {
		input : '' ,
	};
	
	render() {
		return <>
			<div className = { less.demoLayout }>
				<div
					className = { less.leftSide }
				>
					<div
						style = { {
							padding : "24px 12px" ,
							display : "flex" ,
							flexFlow : "column nowrap" ,
							boxShadow : "inset -1px 0px 0px rgba(0, 0, 0, 0.05)" ,
						} }
					>
						{ (
							new Array( 8 ).fill( '' )
						).map( ( item , index ) => {
							
							if ( index === 1 ) {
								return <div
									key = { Math.random() }
									style = { {
										width : 48 ,
										height : 1 ,
										backgroundColor : "#efefef" ,
										marginTop : 8 ,
										
									} }
								/>;
							}
							
							return <div
								key = { Math.random() }
								style = { {
									width : 48 ,
									height : 48 ,
									backgroundImage : `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDIgMTcuMzMzM0M0LjM5NzUyIDE3LjMzMzMgMC42NjY2ODcgMTMuNjAyNSAwLjY2NjY4NyA4Ljk5OTk5QzAuNjY2Njg3IDQuMzk3NDkgNC4zOTc1MiAwLjY2NjY1NiA5LjAwMDAyIDAuNjY2NjU2QzEzLjYwMjUgMC42NjY2NTYgMTcuMzMzNCA0LjM5NzQ5IDE3LjMzMzQgOC45OTk5OUMxNy4zMzM0IDEzLjYwMjUgMTMuNjAyNSAxNy4zMzMzIDkuMDAwMDIgMTcuMzMzM1pNMTIuNzUgNS4yNDk5OUw3LjMzMzM1IDcuMzMzMzJMNS4yNTAwMiAxMi43NUwxMC42NjY3IDEwLjY2NjdMMTIuNzUgNS4yNDk5OVpNOS4wMDAwMiA5LjgzMzMyQzguNzc5MDEgOS44MzMzMiA4LjU2NzA1IDkuNzQ1NTMgOC40MTA3NyA5LjU4OTI1QzguMjU0NDggOS40MzI5NyA4LjE2NjY5IDkuMjIxIDguMTY2NjkgOC45OTk5OUM4LjE2NjY5IDguNzc4OTggOC4yNTQ0OCA4LjU2NzAyIDguNDEwNzcgOC40MTA3M0M4LjU2NzA1IDguMjU0NDUgOC43NzkwMSA4LjE2NjY2IDkuMDAwMDIgOC4xNjY2NkM5LjIyMTAzIDguMTY2NjYgOS40MzMgOC4yNTQ0NSA5LjU4OTI4IDguNDEwNzNDOS43NDU1NiA4LjU2NzAyIDkuODMzMzUgOC43Nzg5OCA5LjgzMzM1IDguOTk5OTlDOS44MzMzNSA5LjIyMSA5Ljc0NTU2IDkuNDMyOTcgOS41ODkyOCA5LjU4OTI1QzkuNDMzIDkuNzQ1NTMgOS4yMjEwMyA5LjgzMzMyIDkuMDAwMDIgOS44MzMzMloiIGZpbGw9IiMwMDcwRjMiLz4KPC9zdmc+Cg==")` ,
									backgroundPosition : "center" ,
									backgroundRepeat : "no-repeat" ,
									backgroundSize : "100%" ,
									marginTop : index !== 0 ? 8 : 0 ,
								} }
							/>;
						} ) }
					</div>
					
					{/*左侧第二竖栏*/}
					<div
						style = { {
							width : "240px",
							flexFlow : "column nowrap",
							
						} }
					>
						<div
							style = { {
								margin : "24px" ,
								fontSize : 20 ,
								fontWeight : "bold" ,
								height : "33px",
								color : "#000000CC"
							} }
						>Title
						</div>
						
						<div
							style = { {
								flexFlow : "column nowrap" ,
								
							} }
						>
							<div
								style = { {
									margin : "0 8px" ,
									backgroundColor : "#f5f5f5" ,
									borderRadius : 8 ,
									padding : "10px 16px" ,
									flexFlow : "row nowrap" ,
									
								} }
							>
								<SVGicon1
									style = { {
										marginRight : "18px" ,
										
									} }
								/>
								<div
									style = {{
										fontSize : "14px",
										fontWeight : "bold",
										alignItems : "center",
										color : "#25262B",
										
									}}
								>Label</div>
							</div>
						
							<div
								style = { {
									margin : "0 8px" ,
									borderRadius : 8 ,
									padding : "10px 16px" ,
									flexFlow : "row nowrap" ,
									
								} }
							>
								<SVGpeople
									style = { {
										marginRight : "18px" ,
										
									} }
								/>
								<div
									style = {{
										fontSize : "14px",
										fontWeight : "bold",
										alignItems : "center",
										color : "#00000099",
									}}
								>Label</div>
							</div>
						</div>
						
						
						<div
							style = { {
								flexFlow : "column nowrap" ,
								
							} }
						>
							<div
								style = { {
									flexFlow : "row nowrap" ,
									margin : "8px 0 8px 8px",
								} }
							>
								<SVGchevron_down
									style = { {
										marginRight : "8px" ,
									} }
								/>
								<div
									style = {{
										fontSize : "14px",
										fontWeight : "bold",
										alignItems : "center",
										color : "#00000066",
										
									}}
								>Label</div>
							</div>
						
							<div
								style = { {
									margin : "0 8px" ,
									borderRadius : 8 ,
									padding : "10px 16px" ,
									flexFlow : "row nowrap" ,
									backgroundColor : "#00000008",
									
								} }
							>
								<div
									style={{
										width : "24px",
										height : "24px",
										backgroundColor : "#E9F0FD",
										marginRight : "16px",
										
									}}
								/>
								<div
									style = {{
										fontSize : "14px",
										fontWeight : "bold",
										alignItems : "center",
										color : "#25262B",
									}}
								>Label</div>
							</div>
						
							<div
								style = { {
									margin : "0 8px" ,
									borderRadius : 8 ,
									padding : "10px 16px" ,
									flexFlow : "row nowrap" ,
								} }
							>
								<div
									style={{
										width : "24px",
										height : "24px",
										backgroundColor : "#0000000A",
										marginRight : "16px",
										
									}}
								/>
								<div
									style = {{
										fontSize : "14px",
										fontWeight : "bold",
										alignItems : "center",
										color : "#00000099",
									}}
								>Label</div>
							</div>
						</div>
						
						
					</div>
				</div>
				
				<div
					className = { less.mainContent }
				>
					<TreeView
						aria-label="file system navigator"
						defaultCollapseIcon={<Expand rotate = {0} key = {123}/>}
						defaultExpandIcon={<Expand rotate = {90} key = {123}/>}
						sx={{ height: 240, flexGrow: 1, maxWidth: 200, overflowY: 'auto' }}
					>
						<TreeItem nodeId="1" label="Applications">
							<TreeItem nodeId="2" label="Calendar" />
						</TreeItem>
						<TreeItem nodeId="5" label="Documents">
							<TreeItem nodeId="10" label="OSS" />
							<TreeItem nodeId="6" label="MUI">
								<TreeItem nodeId="8" label="index.js" />
							</TreeItem>
						</TreeItem>
					</TreeView>
				</div>
			</div>
		</>;
	}
};


export const DemoLayout = ComponentWrapper( _DemoLayout );
