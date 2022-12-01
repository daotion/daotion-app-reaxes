import type { PopupPosition } from '@@common/components/Popup/types';

import { Reaxper } from 'reaxes';

import Popup from '@@common/components/Popup';

import { reaxel_i18n } from '@@reaxels';

import less from './index.module.less';

interface ISelectPopup {
  title: string;
  list?:
    | {
        title: string;
      }[]
    | string[];
  position?: PopupPosition;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}

export default Reaxper(({ title, list, position = 'bottom center' as const, children, onChange }: ISelectPopup) => {
  const { changeLang } = reaxel_i18n();

  const popupRef = useRef(null);

  const handleClick = useCallback(
    (type: string, title: string) => {
      onChange(title);
      changeLang(type === 'en' ? 'en' : 'zh-CN');
      popupRef?.current && popupRef?.current?.close();
    },
    [changeLang, onChange]
  );

  return (
    <div>
      <Popup
        ref={popupRef}
        trigger={<div className={less.title}>{title}</div>}
        arrow={false}
        closeOnEscape={true}
        position={position}
        offsetY={20}
        on={['click']}
      >
        {children ? (
          children
        ) : (
          <div className={less.main}>
            {list.map((each, idx) => {
              return (
                <div className={less.item} key={idx}>
                  {each?.url ? (
                    <a href={each.url} className={less.itemTitle}>
                      {each.title || each}
                    </a>
                  ) : (
                    <span
                      onClick={() => {
                        handleClick(each.type, each.title);
                      }}
                      className={less.itemTitle}
                    >
                      {each.title || each}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Popup>
    </div>
  );
});
