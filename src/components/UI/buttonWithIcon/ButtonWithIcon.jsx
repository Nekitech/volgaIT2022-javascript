import React from 'react'
import classes from './ButtonWithIcon.module.css'

function ButtonWithIcon(props) {
  return (
    <button className={classes.button} {...props}>
        <img className={classes.icon} src={props.url} alt="" />
        <p className={classes.button_text}>{props.text}</p>
    </button>
  )
}

export default ButtonWithIcon