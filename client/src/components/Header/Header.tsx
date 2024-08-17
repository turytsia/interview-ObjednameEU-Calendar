import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { routes } from '../../routes'
import { Icon } from '@iconify/react'
import { icons } from '../../icons'

import classes from "./Header.module.css"
import classNames from 'classnames'
import useAppDataContext from '../../context/useAppDataContext'

const getLinkClassName: NavLinkProps["className"] = ({isActive}) => (
    classNames(classes.link, { [classes.linkActive]: isActive })
)

export const Header: React.FC = () => {

    const { selectedTime } = useAppDataContext()

    return (
        <header className={classes.container}>
            <NavLink to={routes.account} className={getLinkClassName}>
                <Icon icon={icons.person} />
            </NavLink>
            <NavLink to={routes.favourite} className={getLinkClassName}>
                <Icon icon={icons.favourite} />
            </NavLink>
            <NavLink to={routes.reservations} className={getLinkClassName}>
                <Icon icon={icons.reservation} />
                {selectedTime.length !== 0 && <span>{selectedTime.length}</span>}
            </NavLink>
            <NavLink to={routes.calendar} className={getLinkClassName}>
                <Icon icon={icons.calendar} />
            </NavLink>
        </header>
    )
}