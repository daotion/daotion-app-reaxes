import { RoutingTest } from './Routing';
import { SvgOverview } from '../DesignComponents/SvgOverview';
import { ParentObserver } from './parentObserver';
import { SetState } from './SetState';
import { DxzLangCurrency } from './dxz-Lang-currency';
import { DxzVotingProposals } from './dxz-voting_proposals';
import { DxzVoting_Settings } from './dxz-voting_settings';
import { SignTest } from './Sign';
import { UseSyncExternalStore } from './useSyncExternalStore';
import { DxzTokenOverview } from './dxz-Token-overview';
import { BlockiesIdenticon } from './blockies-identicon';
import { DxzSpaceDropdownPop } from './dxz-Space-dropdown-pop';
import { DxzConnectWalletPopup } from './dxz-connect-wallet-popup';
import { FileUpload } from './File-Upload';
import InputTest from './componentTest/inputTest';
import DarkThemeTest from './darkTheme';
import { KaneDarkMode } from './kane-dark-mode';
import { Test_Reaxel_i18n } from './I18n';
import { DxzButton } from './dxz-button';
import { DxzInput } from './dxz-input';
import { DxzSwitch } from './dxz-switch';
import { DxzSelect } from './dxz-select';
import { DxzSBTSettings } from './dxz-SBT-settings';
import { DxzSBTAddWhitelist } from './dxz-SBT-add-whitelist';
import { DxzSBTRevocation } from './dxz-SBT-revocation';
import { DxzModalCropper } from './dxz-modal-cropper';
import { PreventDupTest } from '../../reaxels/Reaxel-Factories/Reaxel-fact--prevent-dup-request';
import { DxzCreateSBTModal } from './dxz-create-SBT-modal';

export const Test = () => <div className = { less.HomeRoot }>
	<DxzCreateSBTModal />
</div>;
import "antd/dist/antd.less";
import less from '../../styles/main.module.less';
import { PluginSBTPadList } from "@@pages/Plugin-SBT-Pad-List";
