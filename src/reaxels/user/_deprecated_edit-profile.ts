//@ts-nocheck

import type { User__update_profile } from "@@requests/user/types";

import { reaxel_wallet } from "@@RootPath/src/reaxels/wallet/wallet";
import {
	request_user_account_update ,
	request_user_upload_profile ,
} from "@@requests/user";
import { reaxel_user } from "@@RootPath/src/reaxels/user/auth";
import { request_server_timestamp } from "@@requests";

export const reaxel_edit_profile = (function () {
  const { store, setState } = orzMobx({
    userInfo: {
      address: "", // 钱包地址
      iconUrl: "", // 头像
      bgUrl: "", // 背景图片
      customUrl: "", // 用户主页自定义后缀
      displayName: "", // 用户昵称
      bio: "", // 简介
      socialLinks: "", // 个人portfolio或者网站
      exist: true, // 该账户是否存在
    },
    loading: false, // 按钮loading状态
  });
  const reax_wallet = reaxel_wallet();
  const reax_user = reaxel_user();

  reax_wallet.address_memoed_reaction(async (address) => {
    if (!reax_wallet?.account) return;
    if (address && address.length > 0) {
      const createPayload = async () => {
        return {
          address,
        };
      };

      request_user_profile_info(createPayload).then((userInfo) => {
        setState({ userInfo });
      });
    }
  });

  const saveProfile = async (data) => {
    setState({
      loading: true,
    });
    return new Promise(async (resolve, reject) => {
      // 如果用户没有连接钱包，自动跳出钱包连接弹窗
      if (!reax_wallet?.account) {
        reax_wallet.connectWallet().then(() => {
          setState({
            loading: false,
          });
        });
        return;
      }

      const { address } = reax_wallet?.account;

      if (address) {
        const payload = {
          ...data,
          setAddress: address,
          timestamp: await request_server_timestamp(),
        };

        const createPayload = async () => {
          return {
            address,
            data: payload,
            signature: await reax_user.signByFakeWallet(payload),
          } as User__update_profile.payload;
        };

        request_user_account_update(createPayload)
          .then((data) => {
            setState({ userInfo: data });
            resolve(data);
            setState({
              loading: false,
            });
          })
          .catch(() => {
            setState({
              loading: false,
            });
          });
      } else {
        setState({
          loading: false,
        });
        reject();
      }
    });
  };

  const uploadImage = (file: File) => {
    return new Promise(async (resolve, reject) => {
      // 如果用户没有连接钱包，自动跳出钱包连接弹窗
      if (!reax_wallet?.account) {
        reax_wallet.connectWallet();
        return;
      }

      const { address } = reax_wallet.account;

      if (address) {
        const data = {
          address,
          profileType: 1,
          timestamp: Date.now(),
        };
        const signature = await reax_user.signByFakeWallet(data);

        const formater = (
          source,
          formdata = null,
          parentKey: string = null
        ) => {
          return Reflect.ownKeys(source).reduce((formdata, key: string) => {
            const value = source[key];
            if (
              _.isObject(value) &&
              Object.getPrototypeOf(value) !== File.prototype
            ) {
              formater(
                value,
                formdata,
                parentKey ? `${parentKey}[${key}]` : key
              );
            } else {
              formdata.append(parentKey ? `${parentKey}[${key}]` : key, value);
            }
            return formdata;
          }, formdata ?? new FormData());
        };

        const createPayload = async () => {
          return formater({
            address,
            data,
            signature,
            file,
          });
        };

        request_user_upload_profile(createPayload).then((data) => {
          const { url } = data;
          if (url) {
            setState({
              userInfo: {
                ...store.userInfo,
                iconUrl: url,
              },
            });
            resolve(data);
          }
        });
      } else {
        reject();
      }
    });
  };

  return () => {
    return {
      get editProfileStore() {
        return store;
      },
      setState,
      saveProfile,
      uploadImage,
    };
  };
})();
