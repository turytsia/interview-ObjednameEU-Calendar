import React from 'react'
import useAppDataContext from '../../context/useAppDataContext'
import classes from "./TimeEntry.module.css"
import classNames from 'classnames'
import { TimeEntry as TimeEntryType } from '../../types'
import { Button } from '../Button/Button'
import { extractHour } from '../../utils'

const TimeEntry: React.FC<TimeEntryType> = ({
    time,
    capacity: defaultCapacity,
    originalCapacity
}) => {

    const { selectedTime, selectTime } = useAppDataContext()

    const isReserved = selectedTime.includes(new Date(time).getTime())

    const buttonStyles = classNames(classes.button, { [classes.buttonReserved]: isReserved })

    const reserveTimeHandler = () => {
        if (originalCapacity <= capacity) return
        selectTime(new Date(time).getTime())
    }

    const capacity = isReserved ? defaultCapacity + 1 : defaultCapacity

    return (
        <Button key={time} className={buttonStyles} onClick={reserveTimeHandler}>
            {extractHour(time)}
            <span className={classes.capacityLabel}>
                {capacity}/{originalCapacity}
            </span>
        </Button>
    )
}

export default TimeEntry