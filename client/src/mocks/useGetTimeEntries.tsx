import { TIME_ENTRY_CAPACITY } from '../constants';
import { TimeEntry } from '../types';
import { Response, ResponseStatus, UseGetData } from './types';
import { timeHour, timeDay } from 'd3-time';

const generateTimeEntries = (timestamp: number): TimeEntry[] => {

  const now = new Date(timestamp)
  const end = new Date(timeDay.offset(timeDay.floor(now)).getTime() - 1)

  const range = timeHour.range(now, end);

  return range.map(time => ({
    time: timeHour.offset(new Date(time.toISOString()), 2).toISOString(),
    capacity: 0,
    originalCapacity: TIME_ENTRY_CAPACITY
  }));
};


export const useGetTimeEntries: UseGetData<TimeEntry> = (timestamp: number) => {

  const data: Response<TimeEntry> = {
    status: ResponseStatus.OK,
    message: "OK",
    data: generateTimeEntries(timestamp)
  }

  return { data }
}