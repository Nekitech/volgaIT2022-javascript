import React from 'react'
import classes from './Circle.module.css'
function Circle(props) {
  return (
    <div {...props} className={classes.circle}>
        <img src={props.url} alt="" />
    </div>
  )
}

export default Circle