import React from 'react'
import { ButtonIcon } from '../../../ButtonIcon/ButtonIcon'
import { icons } from '../../../../icons'
import { isToday, isTomorrow } from '../../../../utils'
import { timeDay } from 'd3-time'
import classes from './TimeNavigator.module.css'
import dateFormat from 'dateformat'

interface Props {
    currentTime: number
    nextDateHandler: () => void
    prevDateHandler: () => void
}

const TimeNavigator: React.FC<Props> = ({
    currentTime,
    prevDateHandler,
    nextDateHandler
}) => {

const currentDate = new Date(currentTime)
  const nextDate = timeDay.offset(new Date(currentTime))

  return (
    <div className={classes.container}>
        <ButtonIcon icon={icons.leftArrow} onClick={prevDateHandler} />
        <span>
            {isToday(currentDate) && <span>Today</span>}
            {isTomorrow(currentDate) && <span>Tomorrow</span>}
            <span>{dateFormat(currentDate, "dS, yyyy")}</span>
        </span>
        <span>
            {isTomorrow(nextDate) && <span>Tomorrow</span>}
            <span>{dateFormat(nextDate, "dS, yyyy")}</span>
        </span>
        <ButtonIcon icon={icons.rightArrow} onClick={nextDateHandler} />
    </div>
  )
}

export default TimeNavigator