import generateCalendar from 'antd/lib/calendar/generateCalendar'
import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import 'antd/lib/calendar/style/index'

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig)

export default Calendar
