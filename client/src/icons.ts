export interface Icons {
    person: string
    favourite: string
    reservation: string
    calendar: string
    delete: string
    leftArrow: string
    rightArrow: string
}

export const icons: Icons = {
    person: 'material-symbols:person',
    favourite: 'mdi:favourite',
    reservation: 'mingcute:time-fill',
    calendar: 'mdi:calendar',
    delete: 'material-symbols:delete',
    leftArrow: 'mingcute:left-fill',
    rightArrow: 'mingcute:right-fill'
} as const