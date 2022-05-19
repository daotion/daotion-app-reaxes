
import {crayon} from './crayon';
/**
 * 组断言函数
 *
 * @format
 * @example exp1 === true && exp2 === true && exp3  ==> assertTrue([exp1,exp2,exp3]) === true
 * @param array {boolean[]}
 */


export const assertTrue = array => assert(true, array);

/**每一组断言均为false时返回true*/
export const assertFalse = array => assert(false, array);

/**
 * 断言一组表达式是否全部为@param1
 * @example   
     assert(true,[true,true,false]) -> false 
 * @param expected {boolean} 预期的结果值
 * @param expressionList {boolean[]}
 */
export const assert = (expected, expressionList) => {
  try {
    expressionList.forEach((expression, index) => {
      if (expression !== expected) {
        throw index;
      }
    });
    return true;
  } catch (e) {
	  crayon.warn.lightgray(  `断言组第${ e }个表达式不符合预期为${ expected === true ? 'true' : 'false' }的结果` );
    return false;
  }
};

/**
 * 断言-一组表达式中只要有一个符合@param1则返回true
 * @example 
      assert1(false , [true,true,false,true]) -> true
 */
export const assert1 = (expected, expressionList) => {
  for (const expression of expressionList) {
    if (expression === expected) return true;
  }
  return false;
};

export const assert1True = expressionList => assert1(true, expressionList);
export const assert1False = expressionList => assert1(false, expressionList);



