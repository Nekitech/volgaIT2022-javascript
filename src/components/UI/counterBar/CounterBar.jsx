import React from 'react'
import classes from './CounterBar.module.css'



const CounterBar = (props) => {
  let progress = (props.value <= props.pages) ? `${props.value/(props.pages+1)*100}%` : `100%`
  return (
    <div className={classes.bar}>
      <div style={{width: progress}} className={classes.counter}></div>
      <div className={classes.bar_empty}></div>
    </div>
  )
}
export default CounterBar
