import React from 'react'
import classes from './CounterBar.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'

const styles = StyleSheet.create({
  bar: { position: "relative" },
  counter: {
    position: "absolute",
    width: "0",
    height: "8px",
    backgroundColor: "#45C9FF",
    zIndex: 1,
    ":before": {
      content: "''",
      position: "absolute",
      right: "-4px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#45C9FF",
      zIndex: 1
    }
  },
  bar_empty: {
    position: "absolute",
    width: "100%",
    height: "8px",
    backgroundColor: "#D8D8D8",
    zIndex: 0
  }
})
const CounterBar = (props) => {
  let progress = (props.value <= props.pages) ? `${props.value/(props.pages+1)*100}%` : `100%`
  return (
    <div className={css(styles.bar)}>
      <div style={{width: progress}} className={css(styles.counter)}></div>
      <div className={css(styles.bar_empty)}></div>
    </div>
  )
}
export default CounterBar
