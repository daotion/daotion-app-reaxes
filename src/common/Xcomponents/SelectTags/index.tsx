import {Select, SelectProps} from "antd";

import Tags from '@@common/Xcomponents/tags';

import less from './index.module.less';

const { Option: AntdOption } = Select;

export const Option = AntdOption;

export const SelectTags: React.FC<SelectProps> = (props) => {
  const tagRender = (params) => {
    const {label, closable, onClose} = params;

    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tags
        color="#2A85FF"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
      >
        {label}
      </Tags>
    );
  };

  return (
    <div className={less.daotionSelectTags}>
      <Select
        mode="tags"
        showArrow
        tagRender={tagRender}
        notFoundContent="Not Found"
        {...props}
      >
        {props.children}
      </Select>
    </div>
  )
}
