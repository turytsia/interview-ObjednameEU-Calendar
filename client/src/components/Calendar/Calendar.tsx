import React, { useState } from 'react'
import { useGetTimeEntries } from '../../mocks/useGetTimeEntries'
import { timeDay } from 'd3-time';
import { TimeList } from './components/TimeList/TimeList';

import TimeNavigator from './components/TimeNavigator/TimeNavigator';

const defaultDate = new Date().getTime()

export const Calendar: React.FC = () => {

  const [currentTime, setCurrentTime] = useState<number>(defaultDate)
  const { data } = useGetTimeEntries(currentTime)

  const nextDateHandler = () => {
    setCurrentTime(prev => timeDay.floor(timeDay.offset(new Date(prev))).getTime())
  }

  const prevDateHandler = () => {
    setCurrentTime(prev => {
        const time = timeDay.floor(timeDay.offset(new Date(prev), -1)).getTime()
        return Date.now() > time ? Date.now() : time
    })
  }

  return (
    <>
        <TimeNavigator currentTime={currentTime} nextDateHandler={nextDateHandler} prevDateHandler={prevDateHandler} />
        <TimeList timeEntries={data.data} />
    </>
  )
}