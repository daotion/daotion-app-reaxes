import { RoutingTest } from './Routing';
import { ParentObserver } from './parentObserver';
import { SetState } from './SetState';
import { DxzHeaderPanel } from './dxz-Header-panel';
import { DxzLangCurrency } from './dxz-Lang-currency';
import { DxzVotingProposals } from './dxz-voting_proposals';
import { DxzVoting_Settings } from './dxz-voting_settings';
import { SignTest } from './Sign';
import { DxzPluginList } from './dxz-plugin-list';
import { UseSyncExternalStore } from './useSyncExternalStore';
// import { TextWallet } from './reax-wallet';
import { DxzTokenOverview } from './dxz-Token-overview';
// import { DxzDaotionPop as DeprecatedDxzDaotionPop } from './dxz-Daotion-pop';
import { DxzPluginBrowse } from './dxz-plugin-browse';
import { DxzDAOList } from './dxz-DAO-list';
import { BlockiesIdenticon } from './blockies-identicon';
import { DxzDAODropdownPop } from './dxz-DAO-dropdown-pop';
// import { BlockiesIdenticon } from './blockies-identicon';
import { DxzConnectWalletPopup } from './dxz-connect-wallet-popup';
import { DxzSpaceSettings } from './dxz-Space-Settings';
import { DxzEditProfilePop } from './dxz-edit-profile-pop';
import { FileUpload } from './File-Upload';
import InputTest from './componentTest/inputTest';
import DarkThemeTest from './darkTheme';
import { DxzUIKits } from './dxz-UI-kits';
import { KaneDarkMode } from './kane-dark-mode';
import { DxzSpaceList } from './dxz-space-list';
import { DxzMyProfile } from './dxz-my-profile';
import { DxzSocialSelectModal } from './dxz-social-select-modal';
import {Test_Reaxel_i18n} from './I18n';
import {DxzButton} from './dxz-button';

export const Test = () => <div className = { less.HomeRoot }>
	
	<DxzDAODropdownPop/>
</div>
import "antd/dist/antd.less";
import less from '../../styles/main.module.less';
