import React from 'react'
import classes from './MenuToggle.module.css'
import {faTimes, faCheck, faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MenuToggle = props => {

    const cls = [
        classes.MenuToggle
    ]
    let icon = faBars
    if(props.isOpen) {
        icon = faTimes
        cls.push(classes.open)
    }

    return (
        <FontAwesomeIcon onClick={props.onToggle} icon={icon}  className={cls.join(' ')}/>
    )
}

export default MenuToggle