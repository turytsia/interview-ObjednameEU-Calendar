import React from 'react'
import classes from './MainContent.module.css'

export const MainContent: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className={classes.container}>{children}</div>
)