/** @format */

import os from 'os';
import webpack from 'webpack';
import portfinder from 'portfinder';

/*封装webpack回调为promise*/
export const webpack_promise = config => {
	return new Promise((resolve, reject) => {
		webpack(config, (err, stats) => {
			if (err === null) {
				resolve(stats);
			} else {
				reject({
					error: err,
					stats,
				});
			}
		});
	});
};

/*返回本机的ipv4局域网地址*/
export const getIPV4address = () => {
	const network = os.networkInterfaces();
	for (const i in network) {
		for (const val of network[i]) {
			if (val.family === 'IPv4') {
				return val.address;
			}
		}
	}
	return '127.0.0.1';
};

/*自动检查basePort的端口是否可用, 如果不可用则寻找相邻的可用端口作为wds服务器端口*/
export const getPort = () => {
	portfinder.basePort = 8080;
	return portfinder.getPortPromise();
};



export const overload = (params,processer) => {
	return params.reduce((accumulator,current) => {
		processer.forEach(({
			regExp ,
			key,
		}) => {
			if ( regExp.test(current) ) {
				accumulator[key] = current;
			}
		});
		return accumulator;
	}, {});
};
