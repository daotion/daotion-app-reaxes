import type {TextAreaProps} from 'antd/lib/input';

import {Input as AntdInput, InputProps} from 'antd';

import './index.less';

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="daotion-input">
      <AntdInput {...props} />
    </div>
  )
}

export const InputTextarea: React.FC<TextAreaProps> = (props) => {
  return (
    <div className="daotion-input">
      <AntdInput.TextArea {...props} />
    </div>
  )
}
