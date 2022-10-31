import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 *
 * @param {string} template 格式,见https://dayjs.gitee.io/docs/zh-CN/display/format
 * @return {string}
 */
export const time_localize_Brazil = (timestamp : number = Date.now() , template : string = "YY-MM-DD HH-mm-ss" ) => {
	
	return dayjs.tz(timestamp , "America/Sao_Paulo").format(template);
};

