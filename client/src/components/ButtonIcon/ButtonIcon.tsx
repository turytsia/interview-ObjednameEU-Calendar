import React from 'react'
import classes from './ButtonIcon.module.css'
import classNames from 'classnames'
import { Icons } from '../../icons'
import { Icon } from '@iconify/react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    icon: Icons[keyof Icons]
}

export const ButtonIcon: React.FC<Props> = ({
    icon,
    ...props
}) => {

    const buttonStyle = classNames(classes.container, props.className)

  return (
    <button {...props} className={buttonStyle}>
        <Icon icon={icon} />
    </button>
  )
}