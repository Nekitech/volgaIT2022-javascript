import React from 'react'
import classes from './Circle.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'

function Circle(props) {
  const styles = StyleSheet.create({
    circle: {
      width: "131.52px",
      height: "131.52px",
      borderRadius: "50%",
      background: "#F7F8F9",
      boxShadow:
        "-9px -9px 16px #FFFFFF, 9px 9px 16px rgba(163, 177, 198, 0.325148)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
  return (
    <div {...props} className={css(styles.circle)}>
        <img src={props.url} alt="" />
    </div>
  )
}

export default Circle