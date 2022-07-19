import { Tag as AntdTags } from 'antd';

import './index.less';

const Tags = (props) => {
  return (
    <div className="daotion-tag">
      <AntdTags {...props} />
    </div>
  )
}

export default Tags;
