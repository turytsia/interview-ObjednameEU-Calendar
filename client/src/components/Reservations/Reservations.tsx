import React from 'react'
import useAppDataContext from '../../context/useAppDataContext'
import { ReservationEntry } from './components/ReservationEntry/ReservationEntry'
import classes from './Reservations.module.css'

export const Reservations: React.FC = () => {

    const { selectedTime } = useAppDataContext()

    if (selectedTime.length === 0) {
        return (
            <center>No reservations...</center>
        )
    }

    return (
        <div className={classes.container}>
            {selectedTime.map(time => <ReservationEntry time={time} />)}
        </div>
    )
}