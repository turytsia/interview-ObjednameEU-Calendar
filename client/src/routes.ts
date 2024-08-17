export interface MainRoutes {
    account: string
    favourite: string
    reservations: string
    calendar: string
}

export const routes: MainRoutes = {
    account: '/account',
    favourite: '/favourite',
    reservations: '/reservations',
    calendar: '/calendar'
} as const