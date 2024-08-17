import React, { PropsWithChildren } from 'react'
import classes from './Button.module.css'
import classNames from 'classnames'

export const Button: React.FC<PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>> = ({
    children,
    ...props
}) => {

    const buttonStyle = classNames(classes.container, props.className)

  return (
    <button {...props} className={buttonStyle}>
        {children}
    </button>
  )
}