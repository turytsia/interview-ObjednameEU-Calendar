import { TIME_ENTRY_CAPACITY } from "./constants"

export type TimeEntry = {
    time: string
    capacity: number
    originalCapacity: typeof TIME_ENTRY_CAPACITY // fixed value
}