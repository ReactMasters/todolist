import dayjs from 'dayjs'

export const getDayFromToday = (daysFromToday: number) => {
  return dayjs(new Date()).add(daysFromToday, 'day')
}

export const includeDate = (date: dayjs.Dayjs, dateList: dayjs.Dayjs[]) => {
  return dateList.some((el) => el.isSame(date, 'day'))
}
