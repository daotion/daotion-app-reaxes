//@ts-nocheck

import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';

export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

