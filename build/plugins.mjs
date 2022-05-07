import chalk from 'chalk';
import dayjs from 'dayjs';
import {
	getIPV4address ,
	getPort,
} from './utils.mjs';



const port = await getPort();

/**
 * 每次打包完成后输出日志
 */
export class LogAtSucceed {
	
	count = 0;
	
	onFail = (error) => {
		console.log(chalk.red(`compiled failed at ${ dayjs().format("HH:mm:ss") }\n\r`));
	};
	
	apply (compiler) {
		this.count ++;
		compiler.hooks.done.tap('LogAtSucceed' , (stats) => {
			
			if ( stats.hasErrors() ) {
				return this.onFail(stats);
			}
			
			console.log(chalk.green(`compiled successfully at ${ dayjs().format("HH:mm:ss") } , host : http://${ getIPV4address() }:${port}\n\r`));
		});
		compiler.hooks.failed.tap('LogAtSucceed' , (error) => {
			this.onFail(error);
		});
	}
}
