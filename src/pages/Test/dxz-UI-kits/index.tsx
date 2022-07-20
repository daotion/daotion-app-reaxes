import less from './index.module.less';
import {
	Button ,
	Modal ,
} from 'antd';
import React , { useState } from 'react';

export const DxzUIKits = () => {
	return <>
		<Modal
			visible = { true }
			className = { less.antdDeleteTabModal }
			centered
			maskClosable
			closable = { false }
			footer = { null }
			mask = { true }
			width = "480px"
		>
			<div
				className = { less.modalContent }
				style = { {
					height : "fit-content" ,
					padding : "0 0" ,
				} }
			>
				<h1 className = { less.mainTitle }>Delete Tab</h1>
				<p className = { less.intro }>Deleting the TAB will delete all contents and cannot be recovered.</p>
				<Button
					style = { {
						display : "flex" ,
						width : "100%" ,
						alignItems : "center" ,
						justifyContent : "center" ,
						padding : "12px 20px" ,
						height : "48px" ,
						background : "#ffe6ea" ,
						border : "1px solid #F21361" ,
						borderRadius : "12px" ,
						fontWeight : "700" ,
						fontSize : "15px" ,
						lineHeight : "24px" ,
						color : "#f21361",
						marginBottom:"12px"
					} }
				>Delete</Button>
				<Button
					style = { {
						display : "flex" ,
						width : "100%" ,
						alignItems : "center" ,
						justifyContent : "center" ,
						padding : "12px 20px" ,
						height : "48px" ,
						background : "inherit" ,
						border : "2px solid #e6e8ec" ,
						borderRadius : "12px" ,
						fontWeight : "700" ,
						fontSize : "15px" ,
						lineHeight : "24px" ,
						color : "#141416",
					} }
				>Cancel</Button>
			</div>
		</Modal>
	
	</>;
};

