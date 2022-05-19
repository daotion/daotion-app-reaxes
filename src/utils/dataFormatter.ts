/**
 * @format
 * @desc 转换数据的工具类
 */

export const formatter = new (class {
  /**
   * 将数组添加随机key , 返回新数组
   * @param source
   */
  addKey = <T extends any[]>(source: T): (ArrayType<T> & {key: number})[] => {
    if (Array.isArray(source)) {
      let flag = true;
      for (const i of source) {
        if (!i.hasOwnProperty('key')) {
          flag = false;
          break;
        }
      }
      if (flag === true) return source;
      return source.map(
        item =>
          ({
            ...item,
            key: Math.random(),
          } as ArrayType<T> & {key: number}),
      );
    }
    throw '必须传入数组';
  };
  /**
   * 将source对象内的props属性捡出来生成一个新对象(浅拷贝实现)
   */
  pick = <T extends object, F extends (string | number | symbol)[]>(source: T, props: F) => {
    return props.reduce((accumulator, key) => {
      if (key in source) {
        return (accumulator[key] = source[key]), accumulator;
      } else return accumulator;
    }, {});
  };

  /*todo*/
  /**
   * 将除了props以外的属性拿出来生成一个全新对象(浅拷贝实现)
   */
  exclude = <T extends object, F extends (string | number | symbol)[]>(source: T, props: F) /*todo type*/ => {
    const sourceKeys = Object.keys(source);
    return sourceKeys.reduce((accumulator, key) => {
      if (!props.includes(key)) {
        accumulator[key] = source[key];
      }
      return accumulator;
    }, {});
  };
})();
