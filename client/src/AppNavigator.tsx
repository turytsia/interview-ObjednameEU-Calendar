import React from 'react'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Header } from './components/Header/Header';
import { MainLayout } from './components/MainLayout/MainLayout';
import { MainContent } from './components/MainContent/MainContent';
import { Calendar } from './components/Calendar/Calendar';
import { Reservations } from './components/Reservations/Reservations';

const AppLayout: React.FC = () => (
    <MainContent>
        <Header />
        <Outlet />
    </MainContent>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AppLayout />
        ),
        children: [
            {
                index: true,
                element: <Navigate to={routes.calendar} replace />,
            },
            {
                path: routes.account,
                element: <center>Not Implemented</center>,
            },
            {
                path: routes.favourite,
                element: <center>Not Implemented</center>,
            },
            {
                path: routes.reservations,
                element: <Reservations />,
            },
            {
                path: routes.calendar,
                element: <Calendar />,
            },
            {
                path: '*',
                element: <Navigate to={routes.calendar} replace />,
            },
        ]
    },
]);

export const AppNavigator: React.FC = () => {
    return (
        <MainLayout>
            <RouterProvider router={router} />
        </MainLayout>
    )
}