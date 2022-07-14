import less from '../style.module.less';
import { NetworkIcon } from './network-svg-icon';

export const ChannelShare = () => {

  return <div className={less.spaceChannelShare}>
    <div className={less.channels}>
      <div className={less.channelsItem}>
        <NetworkIcon />
      </div>
      <div className={less.channelsItem}>
        <NetworkIcon />
      </div>
      <div className={less.channelsItem}>
        <NetworkIcon />
      </div>
      <div className={less.channelsItem}>
        <NetworkIcon />
      </div>
    </div>
    <div className="more">
      <NetworkIcon />
    </div>
    <div className="more">
      <NetworkIcon />
    </div>
  </div>
}
