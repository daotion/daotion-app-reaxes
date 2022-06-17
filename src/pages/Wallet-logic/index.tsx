
import { Button, message, } from 'antd';
import {
  useConnectWallet,
  useSetChain,
  useWallets,
} from '@web3-onboard/react';
import { ethers } from 'ethers';
import {
  Route,
  Routes,
} from 'react-router-dom';

import { WalletState } from '@web3-onboard/core';
import { DAOFactoryAbi } from '../../../src/contract/abi';
import { DAOFactoryAddress } from '../../../src/contract/address';
import bytecode from '../../../src/contract/deploy/bytecode';
import { request_signature_string, request_sign_in } from '@@common/requester/preset-interface';


/*可以不用,但是需要引入*/
import { web3onboard } from '@@common/reaxes';
import {
  AccountDetails,
  Network,
} from './components';


import type { Account } from './types';
const web3Onboard = web3onboard.instance;
// Must be called outside of the App function

export const {
  store,
  setState,
} = orzMobx<store>({
  inputValue: "",
});

/* replace "ReactTemplate" once cloned from this template file. */
const _ReactTemplate = class extends ReactComponentClass<any, any> {

  /*it will be invoked after "didMount"&"didUpdate"*/
  // componentDidRender( stage: "mount" | "update" , prevProps?: Readonly<any> , prevState?: Readonly<any> , snapshot?: any ): any {
  // 	console.log( stage );
  // }

  render() {
    /* you can use react-hooks here if you want, but it was not recommended  */
    const [count, setCount] = useState(10);

    return <>
      <Button
        onClick={() => { setCount(count + 1); }}
      >
        click me : {count}
      </Button>
      <div>
        <InputPrinter initial="xxxx" />
      </div>
    </>;
  }
};


/*every component which gonna be instantiated must be wrapped , it contains various basic supoort */
const InputPrinter = ComponentWrapper((props: { initial: string }) => {
  const [
    {
      wallet, // the wallet that has been connected or null if not yet connected
      connecting // boolean indicating if connection is in progress
    },
    connect, // function to call to initiate user to connect wallet
    disconnect // function to call to with wallet<DisconnectOptions> to disconnect wallet
  ] = useConnectWallet()

  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
      settingChain // boolean indicating if the chain is in the process of being set
    },
    setChain // function to call to initiate user to switch chains in their wallet
  ] = useSetChain()

  // This hook allows you to track the state of all the currently connected wallets
  const connectedWallets = useWallets()

  // The user's currently connected account
  const [account, setAccount] = useState<Account | null>(null)

  // The address to send to
  const [toAddress, setToAddress] = useState('')

  // 创建dao相关
  const [DaoName, setDaoName] = useState('')
  const [DaoType, setDaoType] = useState('')

  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>()

  useEffect(() => {
    // If `wallet` is defined then the user is connected
    if (wallet) {
      const { name, avatar } = wallet?.accounts[0].ens ?? {}
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance,
        ens: { name, avator: avatar?.url }
      })
    }
  }, [wallet])

  useEffect(() => {
    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
    }
  }, [wallet])

  const connectWallet = () => {
    connect({}).then((r) => { console.log(r) }).catch((e) => {
      message.error('connect failed' + e);
    })
  }

  const disconnectWallet = () => {
    if (wallet?.label) {
      disconnect({ label: wallet?.label })
      setAccount(null)
    }
  }

  const sendTransaction = async () => {
    const signer = provider?.getUncheckedSigner()

    await signer?.sendTransaction({
      to: toAddress,
      value: 1000000000000000
    })
  }

  /**********测试创建DAO start***************/
  const getDaoId = async (payload: any) => {
    return new Promise((resolve, reject) => {
      request.post<any>('/dao/create-dao', {
        body: payload,
      })
        .then((data) => { resolve(data) })
        .catch((e) => {
          console.error(e);
        })
    })

  }

  const signIn = async (payload: any) => {
    request.post<any>('/user/sign-in', {
      body: payload,
    }).then((data) => data).catch((e) => {
      console.error(e);
    })
  }

  const createDao = async () => {
    // 获取钱包地址
    const wallets: WalletState[] = web3onboard.instance.state.get().wallets;
    console.log(wallets);
    const address: string = wallets[0]?.accounts[0]?.address
    console.log(address);
    // 获取签名
    const signatureNonce: any = await request_signature_string(address)
    console.log(signatureNonce)

    // 小狐狸获取签名
    const wallerSign = await provider?.getSigner().signMessage(signatureNonce);
    console.log(wallerSign)

    // return

    // 登录 2小时有效
    const aa: any = await signIn({ address, SignatureStr: wallerSign })
    console.log(aa)
// return
    // 组装plyload
    let payload = {
      address,
      signature: wallerSign,
      name: DaoName,
      tags: DaoType,
      desc: 'descs'
    }
    console.log(payload)
    // 获取 dao id
    const daoInfo: any = await getDaoId(payload)
    console.log(daoInfo)

    // // 链接合约
    // // 地址来自上面部署的合约
    let contractAddress: string = DAOFactoryAddress;

    // 使用Provider 连接合约，将只有对合约的可读权限
    let contract = new ethers.Contract(contractAddress, DAOFactoryAbi, provider);
    console.log(contract)

    // 调用合约方法创建
    const signer = provider?.getUncheckedSigner()
    let contractWithSigner = contract.connect(signer)
    // contractWithSigner.createDAO(daoInfo.id, daoInfo.name, 'test')

    contractWithSigner.daoList(address).then((d) => {
      console.log(d)
    })

    contractWithSigner.getDao(0x16).then((d) => {
      console.log(d)
    })


  }

  /**********测试创建DAO end***************/

  return (
    <div className="bg-grey-100 flex flex-col  items-center min-h-screen relative">
      <div className="fixed w-full top-0 right-0 p-3 flex justify-end items-center">
        {wallet ? (
          <Network
            chains={chains}
            connectedChain={connectedChain}
            setChain={(chainId) => setChain({ chainId })}
          />
        ) : null}
        <div className="mx-1" />
        <AccountDetails account={account} />
      </div>
      <div className="my-32 text-3xl font-bold">Web3 Onboard Demo</div>
      <div className="flex my-24">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              className="input input-bordered outline-none"
              value={toAddress}
              placeholder="address"
              onChange={(e) => setToAddress(e.target.value)}
            />
            <button onClick={sendTransaction} className="btn btn-square">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <button onClick={connectWallet} className="btn btn-primary mr-12">
          Connect
        </button>
        <button onClick={disconnectWallet} className="btn btn-secondary">
          Disconnect
        </button>
      </div>
      <div className="flex">
        <div className="input-group">
          <input
            type="text"
            className="input input-bordered outline-none"
            value={DaoName}
            placeholder="dao name"
            onChange={(e) => setDaoName(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered outline-none"
            value={DaoType}
            placeholder="dao type, separate multiple with commas"
            onChange={(e) => setDaoType(e.target.value)}
          />
          <button onClick={createDao} className="btn btn-primary mr-12">
            create dao
          </button>
        </div>
      </div>
    </div>
  )

})

export const Wallet = ComponentWrapper(_ReactTemplate);

export interface store {
  inputValue: string;
}
