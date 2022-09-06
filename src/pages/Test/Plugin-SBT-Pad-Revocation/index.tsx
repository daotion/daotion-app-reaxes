import { ReactComponentClass } from '@@common/ReactComponentClass';

export const DetailRevocation = ComponentWrapper(
	class extends ReactComponentClass {
		render() {
			const [count, setCount] = useState(0);

			return (
				<div className={less.detailContainer}>
					<div className={less.userInfo}>
						<button className={less.backBtn}>
							<SVGSBTBack />
						</button>
						<Img
							className={less.userAvatar}
							src="data:image/jpeg;base64,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"
						/>
						<div className={less.info}>
							<h2>SBT Name</h2>
							<div className={less.userAddress}>
								<span className={less.address}>0xab51...9260</span>
								<SVGCopySBT />
							</div>
						</div>
					</div>

					<div className={less.content}>
						<div className={less.navTab}>
							<Tabs defaultActiveKey="1" onChange={onChange}>
								<TabPane tab="Eligible" key="1">
									<div className={less.secondTab}>
										<Tabs defaultActiveKey="1">
											<TabPane tab="Whitelist" key="1">
												<h1 className={less.contentTitle}>
													Whitelist
												</h1>
												<div className={less.searchBar}>
													<XInput
														type="primary"
														placeholder="Enter address to search or add"
													/>
													<Button
														onClick={() => {
															setCount(count + 1);
														}}
														type="primary"
														ghost
														icon={<SVGSBTUpload />}
													>
														Upload CSV
													</Button>
												</div>
												<div className={less.searchBarActived}>
													<XInput
														type="primary"
														placeholder="Enter address to search or add"
														// value = 'sadasffasas'
														suffix={
															<Button type="text">
																Add to
																Whitelist\Blacklist\Revocationlist
															</Button>
														}
													/>
													<Button
														type="primary"
														ghost
														icon={<SVGSBTUpload />}
													>
														Upload CSV
													</Button>
												</div>
												<div className={less.processAlert}>
													<div className={less.alertLeft}>
														<SVGSBTUploading />
														<span className={less.alertTitle}>
															CSVFileName.csv
														</span>
													</div>
													<div className={less.alertRight}>
														<span className={less.uploading}>
															Uploading...
														</span>
														<button className={less.alertClose}>
															<SVGSBTClose />
														</button>
													</div>
												</div>
												<div className={less.successAlert}>
													<div className={less.alertLeft}>
														<SVGSBTCheck />
														<span className={less.alertTitle}>
															CSVFileName.csv
														</span>
													</div>
													<button className={less.alertClose}>
														<SVGSBTClose />
													</button>
												</div>
												<div className={less.failAlert}>
													<div className={less.alertLeft}>
														<SVGSBTWarning />
														<span className={less.alertTitle}>
															CSVFileName.csv
														</span>
													</div>
													<div className={less.alertRight}>
														<span className={less.alertInfo}>
															Some addresses or amount are
															invalid
														</span>
														<Button type="text">
															View details
														</Button>
														<button className={less.alertClose}>
															<SVGSBTClose />
														</button>
													</div>
												</div>
												<div className={less.table}>
													<Table
														rowClassName={(record) => {
															if (record.amount === 0) {
																return less.redCover;
															} else if (
																record.status === 'edited'
															) {
																return less.blueCover;
															}
														}}
														columns={this.columns}
														dataSource={data}
													></Table>
												</div>

												<div
													className={
														count % 2 === 0
															? less.actionIn
															: less.actionOut
													}
												>
													<span className={less.actionInfo}>
														Unsaved changes!
													</span>
													<div className={less.actionBtn}>
														<Button type="text">Reset all</Button>
														<Button type="primary">
															confirm
														</Button>
													</div>
												</div>

												<div className={less.detailPanel}>
													<div className={less.detailTitle}>
														<span>Details</span>
														<button className={less.detailClose}>
															<SVGCloseIcon />
														</button>
													</div>
													<div className={less.detailList}>
														<ul>
															<li>
																Line 1: is a invalid{' '}
																<span>wrong amount</span>
															</li>
															<li>
																Line 2: is a invalid{' '}
																<span>wallet address</span>
															</li>
															<li>
																Line 3: is a invalid{' '}
																<span>wallet address</span>
															</li>
															<li>
																Line 4: is a invalid{' '}
																<span>wallet address</span>
															</li>
															<li>
																Line 5: is a invalid{' '}
																<span>wallet address</span>
															</li>
														</ul>
													</div>
												</div>
											</TabPane>

											<TabPane tab="Blacklist" key="2"></TabPane>
											<TabPane
												tab="Revocationlist"
												key="3"
											></TabPane>
											<TabPane tab="TabName" key="4"></TabPane>
										</Tabs>
									</div>
								</TabPane>
								<TabPane tab="Metadata" key="2"></TabPane>
							</Tabs>
						</div>
					</div>
				</div>
			);
		}

		columns = [
			{
				title: 'ADDRESS',
				dataIndex: 'address',
			},
			{
				title: 'AMOUNT',
				dataIndex: 'amount',
				render: (text, record, index) => {
					if (record.editing) {
						return (
							<div>
								<div className={less.amountSection}>
									<XInput
										value={1}
										suffix={
											<div className={less.amountAction}>
												<SVGSBTCountUp />
												<SVGSBTCountDown />
											</div>
										}
									></XInput>
									<Button type="link">Done</Button>
								</div>
							</div>
						);
					} else {
						return <span>{record.amount}</span>;
					}
				},
			},
			{
				title: 'ACTION',
				dataIndex: 'action',
				render: (text, record, index) => {
					if (record.editing) {
						return (
							<div className={less.actionSection}>
								<Button type="link" className={less.editBtn}>
									Edit
								</Button>
								<Button type="link">Remove</Button>
								<Button type="link">Reset</Button>
							</div>
						);
					} else {
						return (
							<div className={less.actionSection}>
								<Button type="link" className={less.editBtn}>
									Edit
								</Button>
							</div>
						);
					}
				},
			},
		];
	},
);

import { SVGCloseIcon } from '@@pages/_SvgComponents/SVG-close-icon';
import { XInput } from '@@pages/Test/dxz-input';
import { Button, Table, Tabs } from 'antd';
import {
	SVGSBTBack,
	SVGSBTClose,
	SVGCopySBT,
	SVGSBTCheck,
	SVGSBTUpload,
	SVGSBTUploading,
	SVGSBTWarning,
	SVGSBTCountUp,
	SVGSBTCountDown,
} from '@@pages/_SvgComponents';
import { Img, XButton } from '@@common/Xcomponents';
import { Component } from 'react';
import less from './index.module.less';
import { ComponentWrapper } from '@@common/ReactComponentWrapper';

const { TabPane } = Tabs;

const onChange = (key) => {
	console.log(key);
};

const data = [
	{
		key: 1,
		address: '0x4183...4f6d',
		amount: 1,
		editing: true,
		status: 'unedited',
		action: '',
	},
	{
		key: 2,
		address: '0x4183...4f6d',
		amount: 2,
		editing: false,
		status: 'edited',
		action: '',
	},
	{
		key: 3,
		address: '0x4183...4f6d',
		amount: 0,
		editing: false,
		status: 'unedited',
		action: '',
	},
	{
		key: 4,
		address: '0x4183...4f6d',
		amount: 1,
		editing: false,
		status: 'unedited',
		action: '',
	},
	{
		key: 5,
		address: '0x4183...4f6d',
		amount: 0,
		editing: false,
		status: 'unedited',
		action: '',
	},
];
