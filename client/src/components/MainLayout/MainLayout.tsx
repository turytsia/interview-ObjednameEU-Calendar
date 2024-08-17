import React from 'react'
import classes from './MainLayout.module.css'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className={classes.container}>{children}</main>
)