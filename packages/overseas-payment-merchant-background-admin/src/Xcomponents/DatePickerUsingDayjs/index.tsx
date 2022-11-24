import {
	Dayjs ,
	extend,
} from 'dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import Timezone from 'dayjs/plugin/timezone';
import Utc from 'dayjs/plugin/utc';

extend(Timezone);
extend(Utc);

import type { GenerateConfig } from 'rc-picker/es/generate';
declare const dayjsGenerateConfig: GenerateConfig<Dayjs>;



export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

