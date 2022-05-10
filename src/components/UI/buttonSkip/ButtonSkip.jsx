import React from 'react'
import classes from './ButtonSkip.module.css'
function ButtonSkip(props) {
  return (
      <span {...props} className={classes.ref_skip}>{props.text}</span>
  )
}

export default ButtonSkip