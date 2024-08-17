import React from 'react'
import { ButtonIcon } from '../../../../components/ButtonIcon/ButtonIcon'
import { icons } from '../../../../icons'
import dateFormat from 'dateformat'

import classes from './ReservationEntry.module.css'
import useAppDataContext from '../../../../context/useAppDataContext'

interface Props {
  time: number
}

export const ReservationEntry: React.FC<Props> = ({ time }) => {

  const { selectTime } = useAppDataContext()

  return (
    <div className={classes.container}>
      <span>{dateFormat(time, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
      <div>
        <ButtonIcon icon={icons.delete} onClick={() => selectTime(time)} />
      </div>
    </div>
  )
}