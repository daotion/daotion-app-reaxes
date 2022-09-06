/*
todo 等待合约重构完DAO->space
 */

export const SpaceFactoryAbi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'did',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'dao',
				type: 'address',
			},
		],
		name: 'DAOCreated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allIds',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'count',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'did_',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'name_',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol_',
				type: 'string',
			},
		],
		name: 'createDAO',
		outputs: [
			{
				internalType: 'address',
				name: 'dao',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
		],
		name: 'daoList',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'id_',
				type: 'uint256',
			},
		],
		name: 'getDao',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

export const SpaceHomeAbi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'id',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'id_',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'name_',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol_',
				type: 'string',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

/*创建SBT*/
export const CreateSBTAbi = [
	{
		inputs: [{ internalType: 'address', name: '_beacon', type: 'address' }],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'publisher',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'publisherType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxSupply',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTAddPublisher',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'role',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTAddRole',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTChangeOwner',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'publisher',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'claimer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTCliam',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{ indexed: false, internalType: 'bytes', name: 'uri', type: 'bytes' },
			{
				indexed: false,
				internalType: 'uint256',
				name: 'orderid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'label',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'supply',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'hold_limit',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bool', name: 'revoke', type: 'bool' },
			{ indexed: false, internalType: 'bool', name: 'burn', type: 'bool' },
		],
		name: 'SBTCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'publisher',
				type: 'address',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTDelPublisher',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'role',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTDelRole',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTRecover',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'sbt',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'sbtid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'space',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{ indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'SBTRevoke',
		type: 'event',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'publisher', type: 'address' },
			{ internalType: 'uint256', name: 'publisherType', type: 'uint256' },
			{ internalType: 'uint256', name: 'maxSupply', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'AddPublisherLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'user', type: 'address' },
			{ internalType: 'uint256', name: 'role', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'AddRoleLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'ChangeOwnerLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'publisher', type: 'address' },
			{ internalType: 'address', name: 'claimer', type: 'address' },
			{ internalType: 'uint256', name: 'tokenid', type: 'uint256' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'ClaimLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'publisher', type: 'address' },
			{ internalType: 'uint256', name: 'publisherType', type: 'uint256' },
			{ internalType: 'uint256', name: 'maxSupply', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'DelPublisherLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'user', type: 'address' },
			{ internalType: 'uint256', name: 'role', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'DelRoleLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'RecoverLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' },
		],
		name: 'RevokeLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '', type: 'address' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: '_space_sbtlist',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: '_spaces',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'beacon',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'creator', type: 'address' },
			{ internalType: 'address', name: 'space', type: 'address' },
		],
		name: 'checkRight',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			/*space地址*/
			{ internalType: 'address', name: '_space', type: 'address' },
			/*后端返回的 metadataUrl*/
			{ internalType: 'bytes', name: 'uri', type: 'bytes' },
			/*后端返回*/
			{ internalType: 'uint256', name: '_orderid', type: 'uint256' },
			/*SBT名字 store的用户输入*/
			{ internalType: 'string', name: '_name', type: 'string' },
			/*SBT type  用户选择*/
			{ internalType: 'string', name: '_label', type: 'string' },
			/*store里面最大发行总量*/
			{ internalType: 'uint256', name: '_supply', type: 'uint256' },
			/*单人持有上限*/
			{ internalType: 'uint256', name: '_hold_limit', type: 'uint256' },
			/*是否可被发行方撤销*/
			{ internalType: 'bool', name: '_revoke', type: 'bool' },
			/*持有者是否可销毁*/
			{ internalType: 'bool', name: '_burn', type: 'bool' },
		],
		name: 'createSbt',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'ids',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'sbtCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'sbts',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '_factory', type: 'address' }],
		name: 'setSpaceFactory',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'spaceFactory',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];
