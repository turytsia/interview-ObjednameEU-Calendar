import React from 'react'
import { TimeEntry as TimeEntryType } from '../../../../types'

import classes from './TimeList.module.css'
import TimeEntry from '../../../TimeEntry/TimeEntry'

interface Props {
    timeEntries: TimeEntryType[]
}

export const TimeList: React.FC<Props> = ({
    timeEntries
}) => (
    <div className={classes.container}>
        {timeEntries.map(timeEntry => (
            <TimeEntry {...timeEntry} />
        ))}
    </div>
)
