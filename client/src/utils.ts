import { timeDay } from 'd3-time'

export const extractHour = (timestamp: string): string => (
    timestamp.substring(11, 16)
)

export const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
}

export const isTomorrow = (date: Date): boolean => {
    const today = new Date();
    const tomorrow = timeDay.offset(today)

    return date.getFullYear() === tomorrow.getFullYear() &&
           date.getMonth() === tomorrow.getMonth() &&
           date.getDate() === tomorrow.getDate();
}