import React from 'react'
import classes from './ButtonSend.module.css'

function ButtonSend(props) {
  return (
    <button className={classes.btnSend}>
        {props.text}
    </button>
  )
}

export default ButtonSend