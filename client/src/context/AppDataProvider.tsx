import React, { createContext, useState } from 'react'

interface AppData {
    selectedTime: number[]
    selectTime: (time: number) => void
}

const defaultAppData: AppData = {
    selectedTime: [],
    selectTime: () => {}
}

export const AppDataContext = createContext(defaultAppData)

export const AppDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [selectedTime, setSelectedTime] = useState<number[]>([])

  const selectTime = (time: number) => {
    setSelectedTime(prev => prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time])
  } 

  const data: AppData = {
    selectedTime,
    selectTime
  }

  return (
    <AppDataContext.Provider value={data}>
      {children}
    </AppDataContext.Provider>
  )
}