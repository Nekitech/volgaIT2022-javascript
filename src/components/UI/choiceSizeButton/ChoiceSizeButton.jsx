import React from 'react'
import classes from './ChoiceSizeButton.module.css'

function ChoiceSizeButton(props) {
  return (
    <button {...props} className={classes.button_size}>
        <p className={classes.text_button}>{props.text}</p>
        <span className={classes.size_text}>{props.size}</span>
    </button>
  )
}

export default ChoiceSizeButton