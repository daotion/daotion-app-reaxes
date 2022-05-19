/** @format */
/**
 * @description 防抖功能
 * @param {function} fn 要进行防抖处理的function
 * @param {number} wait  间隔时间 ms为单位
 * @param {boolean} immediate  是否立即执行
 * @return {function} 进行防抖处理后的函数
 */
export default function debounce(fn: Function, wait: number, immediate: boolean) {
  let timeId, result;
  return function () {
    let context = this;
    let args = arguments;
    if (timeId) clearTimeout(timeId);
    if (immediate) {
      if (!timeId) {
        result = fn.apply(context, args);
      }
      timeId = setTimeout(() => {
        timeId = null;
      }, wait);
    } else {
      timeId = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
    return result;
  };
}
