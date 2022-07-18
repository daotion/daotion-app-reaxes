/**
 * 这里面的变量已经在webpack-provide-plugin定义过,所以在global声明,无需再import
 *
 * ts-nocheck
 *
 */


declare const _ : typeof import('lodash/lodash');

declare const React : typeof import('react');
declare const useState : typeof React.useState;
declare const useEffect : typeof React.useEffect;
declare const useRef : typeof React.useRef;
declare const useLayoutEffect : typeof React.useLayoutEffect;
declare const useMemo : typeof React.useMemo;
declare const useCallback : typeof React.useCallback;
declare const globalStore : globalStoreType;
declare const globalSetState : typeof import('@@common/global-controller').globalSetState;
declare const orzMobx : typeof import('@@mobxState').orzMobx;

declare const ComponentWrapper : typeof import('../ReactComponentWrapper').ComponentWrapper;
declare const ReactComponentClass : typeof import('../ReactComponentClass').ReactComponentClass;

declare const orzPromise : typeof import('@@utils/orzPromise.utility').orzPromise;
declare const crayon : typeof import('@@utils/crayon.utility').crayon;
declare const logProxy : typeof import('@@utils/logProxy.utility').logProxy;
declare const makePair : typeof import('@@utils/makePair.utility').makePair;
declare const assert : typeof import('@@utils/assert-group.utility').assert;
declare const decodeQueryString : typeof import('@@utils/queryString.utility').decodeQueryString;
declare const encodeQueryString : typeof import('@@utils/queryString.utility').encodeQueryString;
declare const stringify : typeof import('@@utils/stringify.utility').stringify;
declare const utils : typeof import('@@utils');
declare const Reaxes : typeof import('../../reaxes').Reaxes;
declare const antd : typeof import('antd');
