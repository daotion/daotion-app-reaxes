import {
	Button ,
	Dropdown ,
	Input ,
	Menu ,
	Switch ,
	message ,
} from "antd";
import less from './style.module.less';

import {
	globalSetState ,
	globalStore ,
	invoke_root_click ,
	subscribe_root_click ,
} from '@@common/global-controller';
import { XPopover } from '@@common/Xcomponents';

import {
	BtnIconCopySvgComponent ,
	BtnIconRenameSvgComponent ,
	BtnIconShare ,
	HeaderNotificationIconSvgComponent ,
	HeaderToggleThemeIconSvgComponent ,
	ItemIconDisconnectSvgComponent ,
	ItemIconEthNode ,
	ItemIconI18nSvgComponent ,
	ItemIconProfileSvgComponent ,
	ItemIconThemeSvgComponent,
} from '@@pages/_SvgComponents';

import {
	reaxel_connectWallet ,
	reaxel_wallet ,
	reaxel_chains ,
	reaxel_connect_wallet_when_mounted ,
} from '@@reaxes';

const { Button : DropdownButton } = Dropdown;

export const Layout_Header = ComponentWrapper( class extends ReactComponentClass<any , any> {
	
	constructor( props ) {
		super( props );
		/*挂载时检查是否可以从storage里自动链接钱包*/
		reaxel_connect_wallet_when_mounted( this.lifecycle );
	}
	
	header_svg_tool = reaxel_header_svg_tool(this.lifecycle);
	
	JSX = {
		userAvator : () => {
			return globalStore.connectedWallet?.accounts?.[0]?.ens?.avatar?.url || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNS42MzEiIGhlaWdodD0iMzQuNjU2IiB2aWV3Qm94PSIwIDAgMzUuNjMxIDM0LjY1NiIgY2xhc3M9IlNpdGVXaWRlQXBwQmFyX19NaW5pTG9nby1zYy0xcTY1N2UtNiBra2paVVgiPjxnIGRhdGEtbmFtZT0iSWNvbiBMb2dvIj48cGF0aCBkYXRhLW5hbWU9IlBhdGggNzcxIiBkPSJNNi45IDIzLjEwNUw1LjgzOCAxMS4wMiAxOC41IDguNDczbDEyLjc4NiAyLjU0NC0xLjE2NiAxMi4wNTctMTEuNjI0IDguNzMzeiIgZmlsbD0iI2JmZmZmZiI+PC9wYXRoPjxnIGRhdGEtbmFtZT0iUGF0aCA3Njg4IiBmaWxsPSIjMGYxNzI0Ij48cGF0aCBkPSJNMTguNTAxIDMwLjgxNUw2LjU4MSAxMS4yOTkgMTguNSA3LjQyNmwxMi4wMjggMy44NzItMTIuMDI3IDE5LjUxN3oiPjwvcGF0aD48cGF0aCBkPSJNMTguNSA3Ljk1MUw3LjMzOSAxMS41NzlsMTEuMTY0IDE4LjI4IDExLjI2NC0xOC4yOEwxOC41IDcuOTUxTTE4LjQ5OSA2LjlsMTIuNzg5IDQuMTE4LTEyLjc5IDIwLjc1M0w1LjgyNSAxMS4wMTkgMTguNDk5IDYuOXoiIGZpbGw9IiNiZmZmZmYiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==';
		},
		ellipsisAddress : () => {
			if(!this.connectWallet.connectedWallet ) return null;
			const address = this.connectWallet.connectedWallet.accounts[0].address;
			return <span
				style = {{
					color : "#777e91",
					fontSize : "14" ,
					width : "100%",
					overflow : "hidden",
					fontWeight : "500",
					whiteSpace : "nowrap",
					display : "flex",
				}}
			>
				<span
					style = {{
						display : "flex",
						textOverflow : "ellipsis",
						overflow : "hidden",
					}}
				>{address.slice(0,6)}</span>
				<span>...{address.slice(-4)}</span>
			</span>
		} ,
		
		WalletNetworkBtn : () =>  {
			
			const [ visible , setVisible ] = useState( false );
			
			useEffect( () => {
				const symbol = Symbol();
				const subscription = () => {
					setVisible( false );
				};
				return subscribe_root_click( subscription ,symbol );
				
			} ,[] );
			
			const btnStyle = {
				padding : "12px 12px 12px 12px" ,
				borderRadius : "12px" ,
				height : "100%" ,
				borderWidth : "2px" ,
				marginLeft : "16px" ,
			};
			if(!globalStore.connectedWallet){
				return <>
					<Button
						type="primary"
						style = {btnStyle}
						onClick = {() => {
							this.actions.connect();
						}}
					>
						Connect Wallet
					</Button>
				</>;
			}
			return <>
				<XPopover
					overlayClassName = { less.userinfoPopoverContainer }
					align = { {
						targetOffset : [ -61 ] ,
					} }
					onVisibleChange = { ( visible ) => {
						invoke_root_click.then(() => setVisible( () => visible ));
					} }
					autoAdjustOverflow = { false }
					visible = { visible }
					content = { <div
						style = { {
							padding : "24px 16px" ,
							display : "flex" ,
							flexFlow : "column nowrap" ,
							whiteSpace : "nowrap" ,
							
						} }
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<div
							style = { {
								fontWeight : 600 ,
								fontSize : "14px" ,
								color : "#353945" ,
							} }
						>
							Select a network
						</div>
						
						<div
							style = { {
								padding : "8px 16px" ,
								display : "flex" ,
								alignItems : "center" ,
								backgroundColor : "#f4f5f6" ,
								borderRadius : "12px" ,
								marginTop : "8px" ,
								userSelect : "none" ,
								
							} }
						>
							<ItemIconEthNode />
							<div
								style = { {
									width : "152px" ,
									display : "flex" ,
									justifyContent : "space-between" ,
									alignItems : "center" ,
									height : "46px" ,
									marginLeft : "16px" ,
									
								} }
							>
								<div
									style = { {
										display : "flex" ,
										flexFlow : "column nowrap" ,
										justifyContent : "space-between" ,
										lineHeight : "normal" ,
										height : "100%" ,
										
									} }
								>
									<span
										style = { {
											fontWeight : 600 ,
											fontSize : "14px" ,
											color : "#777e91" ,
											
										} }
									>Ethereum
									</span>
									<span
										style = { {
											fontWeight : 400 ,
											fontSize : "12px" ,
											textDecoration : "underline" ,
											color : "#777e90" ,
											
										} }
									>Etherscan
									</span>
								</div>
								<div
									style = { {
										display : "flex" ,
										flexFlow : "column nowrap" ,
										justifyContent : 'space-between' ,
										alignItems : "center" ,
										height : "100%" ,
										
									} }
								>
									<span
										style = { {
											display : "flex" ,
											width : "10px" ,
											height : "10px" ,
											backgroundColor : "#45b26b" ,
											borderRadius : "50%" ,
											
										} }
									></span>
									<BtnIconShare
										style = { {
											cursor : "pointer" ,
											
										} }
									/>
								</div>
							</div>
						</div>
						<div
							style = { {
								padding : "8px 16px" ,
								display : "flex" ,
								alignItems : "center" ,
								borderRadius : "12px" ,
								marginTop : "8px" ,
								userSelect : "none" ,
								
							} }
						>
							<ItemIconEthNode />
							<div
								style = { {
									width : "152px" ,
									display : "flex" ,
									justifyContent : "space-between" ,
									alignItems : "center" ,
									height : "46px" ,
									marginLeft : "16px" ,
									
								} }
							>
								<div
									style = { {
										display : "flex" ,
										flexFlow : "column nowrap" ,
										justifyContent : "center" ,
										lineHeight : "normal" ,
										height : "100%" ,
										
									} }
								>
									<span
										style = { {
											fontWeight : 600 ,
											fontSize : "14px" ,
											color : "#777e91" ,
										} }
									>Ethereum
									</span>
								</div>
							</div>
						</div>
					
					</div> }
					placement = "bottom"
					trigger = { [ 'hover', ] }
				>
					<Button
						style = { btnStyle }
						onClick = { () => {
							setVisible( !visible );
							console.log( "data:image/svg+xml;base64," + window.btoa( this.header_svg_tool.inputSvgString ) );
						} }
					>
						<img
							src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfOTBfNjAwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDA3ODEyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF85MF82MDAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFLT0dsRFExQkpRME1nVUhKdlptbHNaUUFBU0ltVmxnZFVGTmNheCsvTWJDOHNzTXZTRmxoNjcyMEJLVXRIVUhvVmxXWHB6WFhwWUVXQ0VZZ0lJaUpZSWhpbEtCZ05SYUtJaUdKQkJDellzMGdRVUdLd2dBV1ZOMGlpeWN0NTc3ejNuM1BuKzUxdjduejN1ek56enZ3QklOZnhCSUlrV0J5QTVKUTBvWitiSXpza05JeU5md0lRd0FKRVlBTXdQSDZxZ092ajR3VlEvUm4vcnRuYkFGcUlOL1FYYXYzeituK1ZaRlIwS2g4QUtCemw1S2hVZmpMS2ZTZzc4QVhDTkFCZ0NzcXFtV21DQlRaQ21TRkVHMFRaZVlGakZ6bGtnU01YT2Vuem5BQS9KNVEzQVVDZzhIakNXQUJJeFdpZW5jR1BSZXVRanFKc2xCSVZuNEx5QTVUdCtIRzhLQURJTEpUMWtwUFhMTEE3eWxyb2ZBSEs2QUNjeUwvVWpQMWIvY2d2OVhtODJDKzh1Sy9Qb3RzdnlObkZ5NHNkYUdKbWJPWHViLzkvUHFYL1FjbEo2WCt1dC9BMktEbHhUc3ZScUlZTzFzcVhjY3ErRnpQeTJTemdERnlBRjNxd1FTQXdBV2JBR0ZnQmQrRFBWa2lMemtwYnVObHBqU0JiR0I4Ymw4Ym1vbTh6bXUyUndqZlFZNXNZbVpnQXNQQnRMQzd4eXUvektoQ3o4MnR1elNIME1jMENnSlIrelVXV0E5QldBSURNdmE4NXRmMEEwUElCYU8zbXB3c3pGbk9ZaFJNV2tBQU5NSUFzVUFTcVFBdm9veDFhb04rZ0E5cnpVdUFOQWtBb1dBWDRJQTRrQXlISUJPdkFabEFBaXNBT3NBdFVnUU9nRnRTQlkrQUVhQU9ud1Rsd0VWd0ZBK0FXdUE5RVlBdzhBOU5nRnN4QkVJU0hxQkFka29XVUlIVklGektCT0pBZDVBSjVRWDVRS0JRQnhVSXBVRHEwRHRvQ0ZVRmxVQlYwRUtxSGZvUk9RZWVneTlBZ2RCY2FnU2FobDlCN0dJRXBNQU5XZ0RWZ1E1Z0RjMkZQT0FCZUNjZkNhK0VjT0IvZURsZkNOZkJSdUJVK0IxK0ZiOEVpK0JrOGd3Q0VqREFSWlVRZjRTQk9pRGNTaHNRZ1FtUURVb2hVSURWSUU5S0I5Q0kzRUJFeWhiekQ0REIwREJ1amo3SEJ1R01DTVh6TVdzd0dUREdtQ2xPSGFjWDBZRzVnUmpEVG1FOVlLcGFGMWNWYVl6MndJZGhZYkNhMkFGdUJQWXh0d1Y3QTNzS09ZV2R4T0J3VHA0bXp4TG5qUW5FSnVGeGNNVzRmcmhuWGhSdkVqZUptOEhpOExGNFhiNHYzeHZQd2FmZ0MvQjc4VWZ4Wi9CQitEUCtXUUNZb0VVd0lyb1F3UWdvaGoxQkJhQ0IwRW9ZSTQ0UTVvamhSbldoTjlDWkdFYk9KSmNSRHhBN2lkZUlZY1k0a1FkSWsyWklDU0Fta3phUktVaFBwQXVrQjZSV1pURlloVzVGOXlmSGtUZVJLOG5IeUpmSUkrUjFGa3FKRGNhS0VVOUlwMnlsSEtGMlV1NVJYVkNwVmcrcEFEYU9tVWJkVDY2bm5xWStvYjhYb1lnWmlIbUpSWWh2RnFzVmF4WWJFbnRPSU5IVWFsN2FLbGtPcm9KMmtYYWROaVJQRk5jU2R4SG5pRzhTcnhVK0pENHZQU05BbGpDVzhKWklsaWlVYUpDNUxURWppSlRVa1hTU2pKUE1sYXlYUFM0N1NFYm9xM1luT3AyK2hINkpmb0k4eGNBeE5oZ2NqZ1ZIRU9NYm9aMHhMU1VxWlNRVkpaVWxWUzUyUkVqRVJwZ2JUZzVuRUxHR2VZTjVtdnBkV2tPWktSMHR2azI2U0hwSitJeU12NHlBVExWTW8weXh6UythOUxGdldSVFpSdGxTMlRmYWhIRVpPUjg1WExsTnV2OXdGdVNsNWhyeU5QRisrVVA2RS9EMFd6TkpoK2JGeVdiV3NQdGFNZ3FLQ200SkFZWS9DZVlVcFJhYWlnMktDWXJsaXArS2tFbDNKVGlsZXFWenByTkpUdGhTYnkwNWlWN0o3Mk5QS0xHVjM1WFRsZzhyOXluTXFtaXFCS25rcXpTb1BWVW1xSE5VWTFYTFZidFZwTlNXMVpXcnIxQnJWN3FrVDFUbnFjZXE3MVh2VjMyaG9hZ1JyYk5WbzA1alFsTkgwME16UmJOUjhvRVhWc3RkYXExV2pkVk1icDgzUlR0VGVwejJnQSt1WTY4VHBWT3RjMTRWMUxYVGpkZmZwRHVwaDlhejBVdlJxOUliMUtmcGMvUXo5UnYwUkE2YUJsMEdlUVp2QmMwTTF3ekREVXNOZXcwOUc1a1pKUm9lTTdodExHaTgxempQdU1INXBvbVBDTjZrMnVXbEtOWFUxM1dqYWJ2ckNUTmNzMm15LzJSMXp1dmt5ODYzbTNlWWZMU3d0aEJaTkZwT1dhcFlSbG5zdGh6a01qZytubUhQSkNtdmxhTFhSNnJUVk8yc0w2elRyRTlhLzIramJKTm8wMkV3czBWd1N2ZVRRa2xGYkZWdWU3VUZia1IzYkxzTHVlenVSdmJJOXo3N0cvckdEcWtPVXcyR0hjYTQyTjRGN2xQdmMwY2hSNk5qaStNYkoybW05VTVjejR1em1YT2pjN3lMcEV1aFM1ZkxJVmNVMTFyWFJkZHJOM0MzWHJjc2Q2KzdwWHVvKzdLSGd3ZmVvOTVoZWFybDAvZEllVDRxbnYyZVY1Mk12SFMraFY4Y3llTm5TWlR1WFBWaXV2anhsZVpzMzhQYnczdW45MEVmVFo2M1B6NzQ0WHgvZmF0OG5mc1orNi94Ni9lbitxLzBiL0djREhBTktBdTRIYWdXbUIzWUgwWUxDZytxRDNnUTdCNWNGaTBJTVE5YUhYQTJWQzQwUGJRL0Rod1dGSFE2YldlR3lZdGVLc1hEejhJTHcyeXMxVjJhdHZMeEtibFhTcWpPcmFhdDVxMDlHWUNPQ0l4b2lQdkM4ZVRXOG1VaVB5TDJSMDN3bi9tNytzeWlIcVBLb3lXamI2TExvOFJqYm1MS1lpVmpiMkoyeGszSDJjUlZ4VS9GTzhWWHhMeExjRXc0a3ZFbjBUanlTT0o4VW5OU2NURWlPU0Q2VklwbVNtTkt6Um5GTjFwcEJnYTZnUUNCYWE3MTIxOXBwb2Fmd2NDcVV1aksxUFkyQi9vVDcwclhTdjBrZnliRExxTTU0bXhtVWVUSkxJaXNscXk5YkozdGI5bmlPYTg0UHVaaGNmbTczT3VWMW05ZU5yT2V1UDdnQjJoQzVvWHVqNnNiOGpXT2IzRGJWYlNadFR0eDhMYzhvcnl6djlaYmdMUjM1Q3ZtYjhrZS9jZnVtc1VDc1FGZ3d2TlZtNjRGdk1kL0dmOXUvelhUYm5tMmZDcU1LcnhRWkZWVVVmU2ptRjEvNXp2aTd5dS9tdDhkczd5K3hLTm0vQTdjalpjZnRVdnZTdWpLSnNweXkwWjNMZHJhV3M4c0x5MS92V3IzcmNvVlp4WUhkcE4zcHUwV1ZYcFh0ZTlUMjdOanpvU3F1NmxhMVkzWHpYdGJlYlh2ZjdJdmFON1RmWVgvVEFZVURSUWZlZngvLy9aMkRiZ2RiYXpScUttcHh0Um0xVHc0RkhlcjlnZk5EL1dHNXcwV0hQeDVKT1NLcTg2dnJxYmVzcjI5Z05aUTB3bzNwalpOSHc0OE9ISE0rMXQ2azMzU3dtZGxjZEJ3Y1R6Lys5TWVJSDIrZjhEelJmWkp6c3VrbjlaLzJ0dEJiQ2x1aDF1elc2YmE0TmxGN2FQdmdxYVdudWp0c09scCtOdmo1eUdubDA5Vm5wTTZVZEpJNjh6dm56K2FjbmVrU2RFMmRpejAzMnIyNisvNzVrUE0zZTN4NytpOTRYcmgwMGZYaStWNXU3OWxMdHBkT1g3YStmT29LNTByYlZZdXJyWDNtZlMzWHpLKzE5RnYwdDE2M3ZONCtZRFhRTWJoa3NIUElmdWpjRGVjYkYyOTYzTHg2YS9tdHdkdUJ0KzhNaHcrTDdrVGRtYmliZFBmRnZZeDdjL2MzUGNBK0tId28vckRpRWV0UnpTL2F2elNMTEVSblJweEgraDc3UDc0L3loOTk5bXZxcngvRzhwOVFuMVNNSzQzWFQ1aE1uSjUwblJ4NHV1THAyRFBCczdtcGd0OGtmdHY3WE92NVQ3ODcvTjQzSFRJOTlrTDRZdjVsOFN2WlYwZGVtNzN1bnZHWmVUU2JQRHYzcHZDdDdOdTZkNXgzdmUrRDM0L1BaWDdBZjZqOHFQMng0NVBucHdmenlmUHpBcDZROTlrS0lPaUFZMklBZUhrRUFHb29hcDhHVUUrMVl0RzcvZUZ2SUNYVEwwN25QL0Npdi9zc0N3QnFod0VJeUFYQTZ4b0FlNm9BMEVEcjAxRFA2VU5EOHpZQW1zVjhHWDhvTmNiVVpMRVdCWFZyMklmejg2KzBBTUNYQXZDeGRINStyblorL21NdDJ1eDlBTHF5RnozamdzUlJiOG10YzEyK1BQZ3VZZm9mSG0zUlQvNWxqLzhld1pjTy9oYi9CWnpEenFlN3VDNGlBQUFBT0dWWVNXWk5UUUFxQUFBQUNBQUJoMmtBQkFBQUFBRUFBQUFhQUFBQUFBQUNvQUlBQkFBQUFBRUFBQUNBb0FNQUJBQUFBQUVBQUFDQUFBQUFBR3RHSmswQUFCZDNTVVJCVkhnQjdWMXBrQnpGbFg1WlBiZG1KSTNtNE5Kd0M0a2JCRUlDSkl5RndTeGdZd3k3aUV0RVNLeURWU3dic0J2RzRiVUM5YkRDRzlnL3JGOEUzcFh3R3RqQTdBS0xGb1BYTW9oakpFQUdjeGdMTkRwQU1PS2FReU5wN3VucHJ2MithdlZNZFU5M2RYVjNkWFdXSUNObXVybzZLL1BsZTY4eTMzdjUza3NsaDJDNU05dzdmZENJem83RlpMYVlNanNtNW9saW10TkVTUjIrMTAxOHFqcHIrS2JaaDN0OStNMzJxZllib25iaWZydGhTSHROTE5TK0pseS83MUJEbHdyNmdGYUV6ZHFJNmxvVWk2bkZJT0I4VTVra2VuTlJ4cVdrVTVtcUhVeXh4VERNamVWbVU5c0RZZFZmbEw1OGFqUndEQkFPbXhWN3BHZWhLYkpZWXJIRm90UTgwelRMZk1KWFVqZEtxVEhNTEcrSVlXd0VJamZPbElaTjRiQWFUYXFrK1pmQU1NQnQ0WjRGcGhtOVJVUXRBY0ZuNkloWE1NUmVFZk0zU29VZVdSdHVlRjFIR0ZOaDBwb0JiZy8zSGh1UnlNMWlxbHRBOUpOU2dkZjVPNWhodXlqemtYSXBmL1RCY1AxdVhXSFZrZ0dXaGJ2T1ZhYjh4RFRsYXJ4UldzTG9ucUNRR3BTc3h5anVleWpjOUtiNzUveXBxUlZ5Yjd1M2M1RVpsWlVnL0dYK0ROL2ZYc0FJRzFSSVZxKzlwN25OMzU0ejk2WUZBeXh2N2I1RW91WXFVOHhGbVVFOWRINVJvdG9rcEZyWHJXcDhvZFNqS2lrRFFMQ2JHVE9qdjREYWRsMnBFVkdTL3BVOFlhalFYUkFZOTVTa2YzUmFFZ2FBS2xmV0lkMTNRb1ZhaGVtK3RsU0QxNkZmTEF2OVVHVmJXNlJ4RFZUSU1iOWg4cDBCbG9jN0w1S1llZ0RUL2FsK0QxYm4vckFzYkJYRFhMRXUzUHlLbjNENnhnRHh0NzVydFJsVGR3ZGZzaThXaWFBeEdPYlBXcVJwcFYremdTOE1zR0oxVDh2SWFQUXhXTzh1TEJicURxVjJRWlROeWdndDhVTTJLRG9ETEcvdHV0S01tcjhHZ1JvT0pTTDVNSlllRlZLM3JsdlY5R3d4K3lvYUEyREtOenJNN24rRmtQZkRyNmY4ZkVsb0daRiszcUlhZjR3bElaWnZLMDdQRllVQnVHRURLZjloTTJaZTc5VDUxNys1dzRBeTFPUFFFcFlXWTZQSmN3WllkbjlYblF6S1UxRHh2dVZ1ZUtXcmRmYWNDdW5xamNxZUw2T2xBOEp0ejBvOUx6WHkvWWQrMU5UbjloRTM5UXczbGR6V3VUM2MxNndHNU1VZ0VMK2lYR1RKNWJVeS8vUXFDWVhjanJDRTlmQkNFYmQzL0xTdnlVc29QR09BNWF0N2p4bU5EVytDZm4rT2x3QVdxNjJydnpsRlprd3paRXExa2pObVZSU3JHMC9iSlc0SGhvYzNFOWRlTmV3SkEvRE5OMGZIL2dCaGI1WlhnQld6bmFPYVEzTHBndXJ4TGs0OXNVS20xWHFDaXZFMmkzZGh6aUt1aVhNditpaDQxRnp6STdIaDU0SkNmQ0x0bHF2cU1PMVBpRDhHTGhlY1Vla0ZQbjFxdzV4Rm5GdnlWb0U5RnNRQWxQWXA4QVZsMmlldUZwNWRKYk9PZ1FDUVVnNXJDTWtKTTB2aVdaWUNpYnV2RnM2QmU0c0c3aDVKV3l0dkJyRDBmS2g2UVJENEVpUG5lbi9kcFZNU1h5ZDlubk5xcFZBNERFeUJZRWgxbTdUSUYrYThIN1NNUEFIVDgvOGF4Sytia25uSVZSVks1cDRjcEtVQUN5OW9RRnI0eWdDV2VkZXk4T1hicmYvUG5kQlNKZ3ZuVm1YdCtDUXNENDNUTXpOSjFnWktVSUhXVnRJa242NXpIaWszZHVLMi9lRDQ2aUd3UTVaK0IvRWcySHgzVXhhY1dZVzZibXJxVWdmUkVOaHZJVzF5aFNnbkJzQmFVOFpkUFhRU3FJMGRxbnd6RDNNdjRNMllhc2ljNDRJa0RGaGtieUJ0U0tOY21DQW5CdWdRN09jSGJFdTNIc1Q4N3NXWkJiOU15RHByZHFWVVZ3VnFHb0JublZ4SUdtVWFVN3I3cmhtQW5qeHhaNDUwemVoNzc4WXJhcVdxTW5kQ2x1TTlPdSswWUFtRXBBSnBaSGxkdVNTSkt3YXdwaFc0Y2FINTNESHBFcEJpVkRzZEp0NUNwUHBqamlpVEk1dUNzRkZneHg1b0JGcTVYUXBjTWNBbnNlNjdZSGdJbEE4ZjMrQ2JyaXpjMzNRK0xJUWhWMWl5RTZHMDE2UVZhZVlHaXF4RG8rdTJVdVk5YmhyVHFjNVYzNmlScHZyQzM5NjZHa000a3dTdGtHYWtYVGE0c3pLQUdZdXVDWnJyOXVHTklibjhncHBzWTNmOSsybllMSm82SlZDckh3eTBVa3ZhWlJ1a0l3TXdZZ2VTNWJYWkd0SHQ5NXV2cXBXeU11OElSanZDL0RPeUc1RjB3d05wWjBWZE9RRG15QUFNMTNKNFZzdWZ1S3QzOG5IZVQ5bEhZRlk1OXNpY1ZHdzk4Sk9GaGhrWndBclVERmlzSHZYMnYvbDI0WUpmSnNyTmcxcEk0VEpJQlFMaEl0SXlFOHdaR1lCUnVwa2UwdlgrdFpkTUthcGpSelhzQ1djSGJMT0l0SEtpWlZvR1lIdytoSWhBaFdoemV2N0d1Y1ZmcCtjY1cyNjVrdW42RXFTRGk3UWtUZFA5bHBZQm1Kd2hYV1ZkNzNIalp1bDNhcEdxeHp2QnoybXM1ME1nRE5abUVhS0FNOUIwRWdNd0xRczRCcGs1Z2xNV24xY2x4eHpwMytaTkE3YUx1VzBjcEVLYWtyYXBNRTlpQUNzblQ0Qk12blRtdkdaeDdwczlxWWpJOWZ2Y2t5dnkybVBJdFIvdjZwc3FUdHZrRmljeEFEWVRsaVpYMGZ2YmtzdW5ZTmR1MGpDS0RuUTU3QXpud29Vc1VBWEp0bExoVGNJY1U3RkJacHlWV2tuWDc2Y2NYeTduSWJDalZPWDRvOHJrY0RpVEJxVXcwMXFjeGhNUUp6RkFQQS9meEk4Nlg1VUI3N1Q0bGJyUThFUkxZVkJLS28zSFFjZjJJY3huYWtsUUJuTEZvaG81cktIMFZwbXBrRUZPUGNGN3kyUHg2S0NXeEdrZDcyR2NBYXowcTVwbTRFeEZSdk1NUTY1WTZOMW1UMnI3dVg0LzQ2UUtxYTN4UndYTkZiYlUrc3l5U2xvbjdvOHpBRFlPRmlkdTZ2NTUwNVYxVWw2dUQ4THBMekQvOU9BSWhIWmFqek9BbFhoWmQ4b0RQa3JlM0o3VnJSelZYQ1pISDE3Nkpja1ZYcGhrKzJDeEdJQXAxMkhhbXBlNHFlc25BemVvOXVsYXpzTXNRT0ZVK3dKYVd6UUhvQllETU44KzFnYnQyZmQ3aTJ1a2ZxcStHSzdCYnVTWnMvV2JuVklaa3JRbXpYbmZZZ0Ryc0lYVVdwcDliems4SkpmTW53anAxZ3k4Y1hCT09iNENUR3FoZGZ5ZWpoY0ptc2NoeFVrYk9nSnBoNG1SUFY1dTl1QXRrUGJkRWVuY0c3VjNVL0ExTjRrQ0VXcCtrT2JXdEgvd21KV0NCMStzQnJqTmUveE1ielpmUmlPbS9HWG5xT3pyaTFuZXZoOThHSkVQOTR6SmtVZ2FNUk9DbkJkR0hUcWpubmgwbWV6OHhQZk1yNjVKWU5FY3RSVVBXRG9RaS9TNmZ0TG5pdFN2Zi9vUE01REtwYkJwZFQ4SS92Nkhvekk4WWlZUitlVTNoOGRIUkFHT2VRSmFFQTlRV2FDYVNVYjduNDBETXFMeEFUSlRqZkw2TXA2dUpVWEpRRGVPMTRJdXJvZUxWeUhFLzZ4ckRHOWlSR0pRZm1rNWNIckR4N0FhZk5vWmxjKzdvbEtQTFY4R2h0QXRQSjlTQVFZNjU1UktlZldka1h3ZTkrVVowcjRzT2laemZPa3RqMDY0NTM3QldmbHQ5dXo0ZUJUcDM4Ykc1WVpjekVaa2xwN2VHUDVHWldxdHNnSkw4NGt4T0xHbDNHSyt6cjE2dm1FOFZnK0xYa3pMR1lEV3RWdmc1Wk5MaVl5WnNuWFhxT3pkRjdWeUFIa2hOQjdvTitYOS9vaFVWOGJsaENNcEorVEFUUXZnUGZUTXk0UDAwOWV1bUJLYlUyYWE2Z1JzQVdzSDNMY3ZyRVpjbmp2VFJOOUF6Q0w4MEhETWV1UHRDYUM4R3RnUVpJZGRIV1B5OGVkajFoWXdyWDV1ek5IVDZ3emh0dlhXWFJHdlFQR3NIZEllYmczbWROM0lUNWVycXk3S2J2SDdzbnRNdG1OOWoyS0dqYS92T2J5YWVhSnhESUk5TTR0K0NqbWhFWGtHS1NkTXlTSW5NTlI4OTJkak1qQ2tGNlpKK3pLOC9QSGpVL05FU0RFZXV3a2gzWlV3KzJZcXV6cEdwZVB6cUtpRDhsbm1tcGxhS1B5K0NhYnJncHpRQlRsaEd1U0VGc3dJRGRQVFd5bVppWlNoNWkrK01hRnhGQTZCQnkyQTltWGd5ZHdXV2cvNmRXcUMrWHZQeEJ1VFdzYWlXSXV4dm5kemZjY2luQ0IrYXIxU2ZOOFBPV0gvem9qVVZNWGxoQ093ZEtYS0NXU1FtWWVGdE1wTFROcVhZZTdrZ2NwYUZLWm91K0d2a3ZseFlDaSt2ZzhNeHZWM0VsL1hNamhzV3NhZmp6SGRNMENWY29JOVJwRjVpVC92SHBDb3Q4YkgvTkVCMm11MUJEQ1ZTMklhcFlsMk8xUTVycmswcnpycDcvbGpvRGhQUmdCenh4ZHhPYUVKY3NMUlI1UkxEWElVSnZJU3Y3MU5FK3NRbHdCZ0Z6TkE2YWNBNXUrOTdQeHEyZjFweEJLWUVvRVhpYy9pa0txNHJjYndwbjhKRzBCbjc0aE1nemJBRFMzbUphYnBlWCsvQnJZQjBONmRubFZjUEZtdEx6aXpVbDcrMDdCbG53OHkwZE9oaXUvWHZnTXg2NittT29JZ2xqTDU4M1k5WmdFRGI3K25CeENrUTRDYmV4dTNERXMzRG04NDFNdmUvYVo4Z0QwSkxRcG9iMEFJMUlJQmV2R0cvUDdWSVhrRnM0QnUrcklYeEtJV3c5Tkp2dXlKQ21VRUxRcG9UeUZRQ3daSUlJUUdrNDR2eGl5L1AvcitCZUkwandUd2FUNDUvWE85UHdCcnBRYWlWaktFb0QzVndENWQxTUFFZExUc3ZZczFjbWRIeE5wUkMyUm1EZ3lHS213dnRxRzFVZnNTQ0U1ODZqZ0RKR0RqSjVjQ0xnbmJQZ29oQkt4U21NSTFDSVcrQUhzUFJMWDJCYkR3aUJrQU1vRGFyd05TR2V5UnFkQW04T3dyZy9MYXV5TkFhdWxWMWt4d1JyR1AzTE1mL2dUZHpzU3YweVhqR0dodklKL2Nya3dEOHZQK2pHa2grY0cxZFJtemIzRDkzSUdOSDNyWnZBODNMdTdaNjFJSUN0ZDRPcFAwdzJLWnFkQVFkTkU1VlFVNXVHUnFPNS83ZVB0M3dyQnFiTXZuWWErZjJmWlJCRzlQVE82N1l3YVNPOWRrVE1ZMGlsM1ZON2VPeURNdkRjcG4ySkVyZGVFMk1iMk9xTVZrRXZJb3lKNEZkL0h2SVk4QnQ2Ni93QXloUlZIU1hnWVRhenM4UTdRb1QrUHRacHAySHVuR3MzMythOE9BUmV4MHdGR3lmdjcxSVd1RFpSNmloWnhPQWtuM2ZLSDNxTmJ0QmNPU0Fad0tCVmhHTXpGbWdCdFo3N1JyWWdNQTBLUzlkazZoVGZXR3JQcTdlbmpneEdXQzl0Mmo4dGp2K2kzYmVpWkVjNS9nWkRBT2R4RnpqY3l4TzRWbWF0OStuMi81dnI0b3BueG53dk5NUW00Qk44K0lieEZUOTMvbTVRSEhKY0xlangvWGRBcTF0dGFXcmVyOEVxcWdKK2ZRZVFFNC9lci85dHFwNDAzRnNPQlRHK0Q2NzdUR01vM2IzRk1xY1BxWGV4ZnlYQmlnSDJvZFRicFVVek1WaHErZGpmUXhzNDVPaHFIdHJXSDU2Rk5kTEVDQVhrbm5RNjNOOFdNMGNFWjFPeElLYXNNQXIvOTVCSWFnWVRrZlI3ZXcwTGZ2NG5uVjFodTFIbXYveGo4T0laYlYraW5wSDZmanpXK1BTRHZrQ2FxTmpSa2NOSkllY3ZGbGhHb2RwSHZLSDVrS1p5R21rR05vR05QSDJBczNmN1FpUG9BanpRbGpmSjVWc3NVT3NBN1hqLzYyWDdwU29uWnFFQnRBZjRIV0ZmVkl5cEQ4aHRsaDd0NFhrK2ZhaHNBTXcxblhhUHR6cWRkVTY3aHVVMmh6SWo1M01yK0w3T1JjNjFPSjN6Y1lrOWZmMDh3VGlBTTlTSE9MQVF6RDNKZzYrRkovSDRhKy84c25Ec0NLTm5tdHBiUG9QeTZkTG5mY09CVnJiSnlIMDhHN0MyOGVsNDMzZG95bW5USFNQY043N0pGQ0p0VTZwMzBKWmhDL1pINlZGYlBJVENHcGhhcHFHNVl1K2pUb1ZoSTB0N2FEeTgybXRwanFIdE10UXBqVEpnbDQzYVhKWGtJSlpOTFo4alNrWi9rRHRJSGZ3dldhVEpOYWlIdzZZTkNHUUcyQnJsbE9aUkNleFZUcEdDU1NxVEJmTUxPQ25JeEFVQ2NIcFhlMmpXQUdTYk5XWldyWXAvczRQVzJzM0d4c1kzZmppOVh5ZXpwZkJmck85d2tHMTkzUU4rQ2ZicDJXTlFNNFE3K2VmTDVmTm1lSnhEa0NSOEJRT2s4Y0ZwMFFBa2NSVTlBTHRTNGRFOW1CUFJIbkQ4NUZ4QStGUGFmQ1pXUERhME5PVlVyMkd5Qi9iZDI5elJjUWdJbDV5ekMwV3dZSUlOV3V0VS8yUWZwM2ZwUG9jYlBzbXFteThnZlRFVWlhK1MxbjJOZi9RcEQ4NDE5R3NLNGpOQUlkMEc3UCswN0U1MUp6NVVVMVZxUlNOdUxUWE4wRytVUGJZcVAxT0FPQUs3UmtBQ0tSa2J5L2V0cmRydlZ4UjVYTFA5ODJYWlpmVXljTXlraFh5RlMwUEQ3MXdvQzF6dmM1NlBRMDRDekNpYU9YWDFnakRkRHQzWlRONzBENGhJT29yc1ZPNi9FUnpaU0dUVmdiOXVvS05DMW9HN2U0bTFKNVFpaGpDbWxXdm1KUmRVYmpFQ1g3ZE9va2NjRFF0RE53VmhEVDBCNkhoSkJ1eXpia0hHRGdpSzZGTkNhdEUvREZ6VlQ0OXRKTHJkRzVGLy93R0Z4cW15dm9nNDlHNWV3NWxRallIT2ZieERqU2Z0SWxteGs3RnNBZG03dDBibTN3UnlQYWg5bEkrRW45M20zaFRFV1pnak9NcmdYdnhxOSswVnI3VEFLK3BPRXBGWG9rOFlPT241VG8vdzJxWVFScmR5NmxDZWJZdjc5aG1pVk1PcDBEeU5RdWwxMVFMUmNqSVFWMzduSXB0QTdTV3Vsa0pjeWx2V0xWVGFYeHBGRXVYOVhWRG5Yd3BHSUI0RVc3MzV4WGhUU3grVVcwMGF6TUVDMXVQREdRZzZVU2VaMm9VczZHSlMvZlF1dmw5bzhkVElYNU51emhjNWordDY5cmJacHRiM0x5NHFiTVIyQUorUmQ3SmQydVNVRDYxM001eUxYUXJNenBuWWtkYVdQZ3NzQ3RXaVoweUxmUWgxRjM0bHRqSTIxVFN0SVN3Ti9LcGZ4UldvcFQ2bW4zbFZwQkw5UzNmRXN0SW5vWmhFcWJRQ0hFNXl4Q3FWLy9vc3c0YlpNaG5jUUFENGJyZDBOUVdKOWNUYjl2Tk5IU1BzQXB2WlJsRTNiNW5QWUpTZ21idlcvU2xMUzEzK1AxSkFiZ1RSdy9mQjgvZFM5VXVYNjN5WjFxV0l5eGNJL2hDL2o1QjZGa29tbGFCbmdvM1BRbU9HWkRFQWIyOUlzRGlMWHpYL2hpa0lkTzNqMU90Q0l0U2ROMGRkSXlBQ3Vxa0t4Tzk0QnU5MmpJNGE3aDBJaXpxZGhMdUptTGlBNGVPdXY3OXZFNjBUSWpBNnk5cDdrTmFSamE3QTNwZXQyTlRCMzBIL0NyVU9WejhrenlDdzQzL1pDR3BHV211aGtad0hvZ3BGb3pQYWpiZlJMbFZSK2s4VjFZYm5UejduR2tSUllhT2pMQXVsV05MMkREK0FuSERqVDY4VCtmN2ZjODk2OTllSFRwM3ZLZXZva2Y3YkJhMTZDZFJjTkpQMHpjY0dRQVZqTlU2QzRJRWY3TnJ4T3c1WHpGN1Z5YWl1bXk3WFdodGtsVHI0N2VQZW5HU3BxUmR1bCtzOS9MeWdCcnd3MTdFRDRXbUtXQTB6UE52RjZYdHo4WXNRSlh2RzYzYU8yQlpoYnRzblNRbFFINGZJczByb0V3c1RWTFc5cjgvSCtiaHp4TndzQllQeDBUUFdaQ09HbEZtbVg2M1g3ZkZRT0V3d3BKZDgwVlFUQVJjM0JVejlZKzFXZUZZZGtIbTg4MXZYdG83UXRPZ1JrZnRMSm81Z0pvVnd6QWR0YUZtMTlSaHZrekYyMXFVU1VYTHlJbmdEY1Y2RnJ1MUhZeGZpT05TQ3UzYmJ0bUFEYllJazByc1dlMjJXM2pwYTdISkJOdXZZalN3Zm9CM01ib0doNlVRdHFRUnJuQW14TURjRnFwckFqZGdBNTZjdW1rbEhVZjM5QnZwWTNQRlFhNmhyLzFmb0JVUHRDRXRIRTc5U2Z3a1JNRDhLRUhWalowcUpDNk5TanlBTlcyWC83M0Fjc0RPREhvYko5TTZSSUU3NTZKY1NEUUN6UWhiU2J1dWJ2S21RSFk3THBWVGM5Q3oveTV1eTVLWDR0NUJCNy92WHRUQmwzR3RVams2QkoxcEFWcDRySjZVclc4R0lBdHRLakdIeXREUFo3VW1zWmZYb0lYMFZ2UTViT1ZUM0FlQUtPSWdsSklBOUlpWDNqelpnQ3NOVEhvbWt0aEpIbyszODc5ZnU0LzFqdDdFZEc3NTlWM0E2VHlBZmVrQVdtUkx5N3paZ0IyaUk1SHBVYStEOFBEbi9JRndNL242RVgwN3c1ZVJGejNnK0RkUTV4Wk9BZnVMUm9VZ01TQ0dJRDlQdlNqcHI1eW8rb0tnTFNqQURoOGU1U0hSVDYzYVhCU2Y4emQ2L1Voa3BNNjhleUcya0djRS9lRk5sa3dBeENBQjhOMW5hcWk3TktnTU1INkZ3ZVR2SWpvM1VPYlFUQ0sya0ZjRStkZXdPc0pBeENRZFN2clA2NHdxaFlHWVRtd3ZJaWdHdklRU1hyM2NPb1BnbmNQY1VzY0U5ZGVFSjl0d0hqa2JWbDJmMWVkRE1wVHdPaTN2RzNaKzlhWVJxWVRUcDNNVDZ4OW9iQ05OZCtMYWQ4K1ZzOFpnSTJIdzJaRmgzUS9iTWJNNisyZGZYMmRId1lzVlM4dTdYdStUbm0yQk5pSFJza1U2c21OQ0VYQzVwSCtRU1oyMlBXNmhvVVBPQ1F1QzVYMk00MnJLRE9BdmJQbHJWMVhtbEh6MTdqWFlMLy85WFZXRFBUUXZKdXZoUzlyNndjckZKMEIyTStLMVQwdEk2UFJ4N0JOZjZGYndMN0s5VUNVemR6WXljZTJueXZlaXJJRXBBTEJnYlFZVFJmanJMLzd2MTRTVXJGai80NHBIemdpcnZ3Z1BudjJaUWF3RDNGNXVQTWlpYWtIa0pqeVZQdjlyL28xVkx5dDlPVEp4Wm5EQzV6NU1nUFlBZVVBVzR6R3M4Qjdkd2ZGMjlnT3Y5ZlhjUnlvdTRrVHY0blBzZmcrQTlnUmVGdTRaNllaaTY2QmJIQ3QvZjVYNVJySWYxSVpvVHZkZU84V0N5Y2xaWURFb0phM2RsOGlVWE1WbG9WRmlYdUg4aWVtK3paQnhFNjJvQTAvY0tBRkF5UUdldHU5bll2TXFLeUVXZmF5eEwxRDZSUFQvUVlHYWpyRjZ2azlYcTBZSURINFplR3VjMkUrK2drWTRXb3JXMEhpaDBCKzBwZ2o2eG1mbnlsRXU1VEQwcElCRWdpNVBkeDdiRVFpTjVzeHRSU01NQ3R4UHhpZjJMVXp6SWVabGlWZFpnNWR4cUExQTlpUkJJRnhnV2xHYjRIY3VnUlp6R2JZZjlQbG1ra1l3YWkvWVNvMkNIYXY2d0tYRXh5QllZREVJTGpSdEVkNkZrSnpXSXdFUVl2aGtqYXZWRm5PUWZBeDdIcStnV3lTRzRISWpjekFXU3liZldMOFhuOEdqZ0ZTRWJBaWJOWkdWTmVpV0V3dFJucTcrYVl5WnhmdCtCc2NzNElWdlIzSzh4Ym0yMmVhL1FmQ3lyMjdjU3J3R253UFBBT2t3K0dkNGQ3cGcwWjBkblJNNW9nUm0yMmE2Z1FsNW5Rd1JoMW1qbG9Rc0k3WG1EM2kyU1o1Z25yOENOMCtJS1NmMTZhb2ZkYVppakdqUFZRbTIycGlvZlkxNGZwOTZmb0w4cjMvQnhIT1c2TXdZTkRkQUFBQUFFbEZUa1N1UW1DQyIvPgo8L2RlZnM+Cjwvc3ZnPgo="
						/>
						<span
							style = { {
								fontWeight : "bold" ,
								marginLeft : "8px" ,
								
							} }
						>Ethereum
						</span>
						<img
							style = { {
								marginLeft : "8px" ,
								
							} }
							src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjcwNzExIDAuMjkyODkzQzEuMzE2NTggLTAuMDk3NjMxMSAwLjY4MzQxNyAtMC4wOTc2MzExIDAuMjkyODkzIDAuMjkyODkzQy0wLjA5NzYzMTEgMC42ODM0MTcgLTAuMDk3NjMxMSAxLjMxNjU4IDAuMjkyODkzIDEuNzA3MTFMMS43MDcxMSAwLjI5Mjg5M1pNNyA3TDYuMjkyODkgNy43MDcxMUM2LjY4MzQyIDguMDk3NjMgNy4zMTY1OCA4LjA5NzYzIDcuNzA3MTEgNy43MDcxMUw3IDdaTTEzLjcwNzEgMS43MDcxMUMxNC4wOTc2IDEuMzE2NTggMTQuMDk3NiAwLjY4MzQxNyAxMy43MDcxIDAuMjkyODkzQzEzLjMxNjYgLTAuMDk3NjMxMSAxMi42ODM0IC0wLjA5NzYzMTEgMTIuMjkyOSAwLjI5Mjg5M0wxMy43MDcxIDEuNzA3MTFaTTAuMjkyODkzIDEuNzA3MTFMNi4yOTI4OSA3LjcwNzExTDcuNzA3MTEgNi4yOTI4OUwxLjcwNzExIDAuMjkyODkzTDAuMjkyODkzIDEuNzA3MTFaTTcuNzA3MTEgNy43MDcxMUwxMy43MDcxIDEuNzA3MTFMMTIuMjkyOSAwLjI5Mjg5M0w2LjI5Mjg5IDYuMjkyODlMNy43MDcxMSA3LjcwNzExWiIgZmlsbD0iIzg4ODg4OCIvPgo8L3N2Zz4K"
						/>
					</Button>
				</XPopover>
			</>;
		},
		
		UserBtn : () => {
			
			const [visible,setVisible] = useState(false);
			useEffect( () => {
				
				return subscribe_root_click( () => {
					setVisible( false );
				} ,Symbol() );
			} ,[] );
			
			if ( !globalStore.connectedWallet ) return null;
			const btnStyle:React.CSSProperties = {
				padding : "0 16px" ,
				borderRadius : "12px" ,
				height : "100%" ,
				borderWidth : "2px" ,
				marginLeft : "16px" ,
				display : "flex",
				alignItems : "center",
				fontWeight : "bold",
				
			};
			
			return <>
				<XPopover
					overlayClassName={less.userinfoPopoverContainer}
					align={{
						targetOffset:[50]
					}}
					autoAdjustOverflow = {false}
					visible={visible}
					onVisibleChange={(visible) => {
						
						invoke_root_click.then(() => setVisible( () => visible ));
					}}
					trigger = { [ 'click' ] }
					content = {<div
						className={less.userinfoPopoverContent}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<div
							style = {{display : "flex"}}
						>
							<span
								style = { {
									backgroundSize : "100%" ,
									backgroundRepeat : "no-repeat" ,
									backgroundPosition : "center" ,
									backgroundImage : `url("${this.JSX.userAvator()}")` ,
									display : "flex" ,
									width : 44 ,
									height : 44 ,
									borderRadius : "50%" ,
								} }
							/>
							<div
								style={{
									display : "flex",
									justifyContent : "center",
									flexFlow : "column nowrap",
									marginLeft : "16px",
									width : "100px",
									lineHeight : "normal",
									
								}}
							>
								<span
									style = {{
										fontSize : 16 ,
										color : "#23262F",
									}}
								>{this.connectWallet.connectedWallet?.accounts[0]?.ens?.name}</span>
								{this.JSX.ellipsisAddress()}
							</div>
							<div
								style = {{
									display : "flex",
									justifyContent : "space-between",
									marginLeft : "16px",
									alignItems : "center",
									width : "48px",
									
								}}
							>
								<BtnIconRenameSvgComponent/>
								<BtnIconCopySvgComponent/>
							</div>
						</div>
						
						<div
							className={less.userPopoverMenuItem}
						>
							<div>
								<ItemIconProfileSvgComponent />
								<span>My profile</span>
							</div>
						</div>
						
						<div
							className={less.userPopoverMenuItem}
						>
							<div>
								<ItemIconI18nSvgComponent />
								<span>Language/Currency</span>
							</div>
						</div>
						
						<div
							className={less.userPopoverMenuItem}
						>
							<div>
								<ItemIconThemeSvgComponent />
								<span>Dark theme</span>
							</div>
							<Switch
								size="small"
								checked={{light:false,dark:true}[globalStore.theme]}
							/>
						</div>
						
						
						<div
							className={less.userPopoverMenuItem}
							onClick = {this.actions.disconnect}
						>
							<div>
								<ItemIconDisconnectSvgComponent />
								<span>Disconnect</span>
							</div>
						</div>
					
					
					</div>}
				>
					<Button
						style = { btnStyle }
						// onBlur={() => setTimeout(() => setVisible(false),300)}
						onClick={() => {
							setVisible( !visible );
						}}
					>
						<span>{ /*@ts-ignore*/
							this.connectWallet.connectedWallet.accounts[0]?.ens?.name }</span>
						<span
							style = { {
								marginLeft : "8px" ,
								backgroundSize : "100%" ,
								backgroundRepeat : "no-repeat" ,
								backgroundPosition : "center" ,
								backgroundImage : `url("${this.JSX.userAvator()}")` ,
								display : "flex" ,
								width : 36 ,
								height : 36 ,
								borderRadius : "50%" ,
							} }
						/>
					</Button>
				</XPopover>
			</>
		},
	}
	
	wallets = reaxel_wallet();
	
	connectWallet = reaxel_connectWallet( this.lifecycle );
	
	chains = reaxel_chains();
	
	actions = {
		connect : () => {
			this.connectWallet.connect( {} ).
			then( ( wallet ) => {
				
			} );
		} ,
		disconnect : () => {
			this.connectWallet.disconnect(this.connectWallet.connectedWallet.label);
		},
		setChain : () => {
			return (chainId,chainNamespace) => {
				this.chains.setChain(
					{
						chainId ,
						chainNamespace,
					} ,
					this.connectWallet.connectedWallet.label,
				).then((bool) => {
					if(bool){
						message.success('change chain successfully');
					}
				});
			};
		},
	} ;
	
	counter = reaxel_counter(this.lifecycle,10);
	
	render() {
		const {navigate} = utils.useRouter();
		return <div className = { less.topBanner }>
			{ __EXPERIMENTAL__ && <div>
				<Input.TextArea
					value = { this.header_svg_tool.inputSvgString }
					onChange = { ( e ) => this.header_svg_tool.setInputSvgString(e.target.value) }
					onPaste = { ( e ) => {
						if ( e.clipboardData.items[ 0 ].kind === "file" ) {
							const picFile = e.clipboardData.items[ 0 ].getAsFile();
							navigator?.clipboard?.readText?.().
							then( ( value ) => {
								console.log( value );
							} );
							(
								new Promise( ( resolve ) => {
									const fileReader = new FileReader();
									fileReader.onload = ( e ) => {
										resolve( e.target.result );
									};
									fileReader.readAsDataURL( picFile );
								} )
							).then( ( base64 : string ) => {
								console.log( base64 );
								navigator.clipboard.writeText( `url('${ base64 }')` );
							} );
						}
					} }
				/>
				<button
					onClick = { () => {
						this.counter.plus();
					} }
				>plus
				</button>
				{ this.counter.count }
				<button
					onClick = { () => {
						this.counter.minus();
					} }
				>minus
				</button>
			</div> }
			<div className = { less.rightSideGroup }>
				<Button
					style = { {
						padding : '8px 8px 10px 12px' ,
						borderRadius : "12px" ,
						height : "100%" ,
						borderWidth : "2px" ,
						
					} }
					onClick = { () => {
						globalSetState( {
							theme : globalStore.theme === "dark" ? "light" : "dark" ,
						} );
						navigate( '/test' );
					} }
					autoFocus = { false }
				>
					<HeaderToggleThemeIconSvgComponent />
				</Button>
				
				
				<Button
					style = { {
						padding : '8px 8px 10px 12px' ,
						borderRadius : "12px" ,
						height : "100%" ,
						borderWidth : "2px" ,
						marginLeft : "16px" ,
					} }
					onClick = { () => {
						console.log( `url('data:image/svg+xml;base64,${window.btoa( this.header_svg_tool.inputSvgString )}')` );
					} }
					autoFocus = { false }
				>
					<HeaderNotificationIconSvgComponent />
				</Button>
				
				
				{this.JSX.WalletNetworkBtn()}
				{this.JSX.UserBtn()}
			
			</div>
		</div>;
	}
} );






const reaxel_header_svg_tool = function() {
	
	const {store,setState} = orzMobx({
		inputSvgString : '' 
	})
	
	return (lifecycle:Lifecycle) => {
		
		return {
			get inputSvgString (){
				return store.inputSvgString;
			},
			setInputSvgString (inputSvgString:string){
				setState( { inputSvgString } as const );
			}
		};
	}
}();



import {reaxel_counter} from '@@reaxes';




















