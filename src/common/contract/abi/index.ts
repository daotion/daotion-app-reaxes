/*
todo 等待合约重构完DAO->space
 */

export const SpaceFactoryAbi = [
	{
		"inputs" : [] ,
		"stateMutability" : "nonpayable" ,
		"type" : "constructor" ,
	} ,
	{
		"anonymous" : false ,
		"inputs" : [
			{
				"indexed" : false ,
				"internalType" : "address" ,
				"name" : "owner" ,
				"type" : "address" ,
			} ,
			{
				"indexed" : false ,
				"internalType" : "uint256" ,
				"name" : "did" ,
				"type" : "uint256" ,
			} ,
			{
				"indexed" : false ,
				"internalType" : "address" ,
				"name" : "dao" ,
				"type" : "address" ,
			} ,
		] ,
		"name" : "DAOCreated" ,
		"type" : "event" ,
	} ,
	{
		"inputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "" ,
				"type" : "uint256" ,
			} ,
		] ,
		"name" : "allIds" ,
		"outputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "" ,
				"type" : "uint256" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [] ,
		"name" : "count" ,
		"outputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "" ,
				"type" : "uint256" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "did_" ,
				"type" : "uint256" ,
			} ,
			{
				"internalType" : "string" ,
				"name" : "name_" ,
				"type" : "string" ,
			} ,
			{
				"internalType" : "string" ,
				"name" : "symbol_" ,
				"type" : "string" ,
			} ,
		] ,
		"name" : "createDAO" ,
		"outputs" : [
			{
				"internalType" : "address" ,
				"name" : "dao" ,
				"type" : "address" ,
			} ,
		] ,
		"stateMutability" : "nonpayable" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [
			{
				"internalType" : "address" ,
				"name" : "owner_" ,
				"type" : "address" ,
			} ,
		] ,
		"name" : "daoList" ,
		"outputs" : [
			{
				"internalType" : "uint256[]" ,
				"name" : "" ,
				"type" : "uint256[]" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "id_" ,
				"type" : "uint256" ,
			} ,
		] ,
		"name" : "getDao" ,
		"outputs" : [
			{
				"internalType" : "address" ,
				"name" : "" ,
				"type" : "address" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
];

export const SpaceHomeAbi = [
	{
		"inputs" : [] ,
		"stateMutability" : "nonpayable" ,
		"type" : "constructor" ,
	} ,
	{
		"inputs" : [] ,
		"name" : "id" ,
		"outputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "" ,
				"type" : "uint256" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [
			{
				"internalType" : "uint256" ,
				"name" : "id_" ,
				"type" : "uint256" ,
			} ,
			{
				"internalType" : "string" ,
				"name" : "name_" ,
				"type" : "string" ,
			} ,
			{
				"internalType" : "string" ,
				"name" : "symbol_" ,
				"type" : "string" ,
			} ,
		] ,
		"name" : "initialize" ,
		"outputs" : [] ,
		"stateMutability" : "nonpayable" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [] ,
		"name" : "name" ,
		"outputs" : [
			{
				"internalType" : "string" ,
				"name" : "" ,
				"type" : "string" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
	{
		"inputs" : [] ,
		"name" : "symbol" ,
		"outputs" : [
			{
				"internalType" : "string" ,
				"name" : "" ,
				"type" : "string" ,
			} ,
		] ,
		"stateMutability" : "view" ,
		"type" : "function" ,
	} ,
];
