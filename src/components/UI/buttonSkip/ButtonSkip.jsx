import React from 'react'
import classes from './ButtonSkip.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'

function ButtonSkip(props) {
  const styles = StyleSheet.create({
    ref_skip: {
      display: "block",
      fontStyle: "normal",
      fontWeight: '700',
      fontSize: "16px",
      lineHeight: "22px",
      textDecorationLine: "underline",
      color: "#3A4850",
      marginTop: "119px",
      textAlign: "center"
    }
  })
  return (
      <span {...props} className={css(styles.ref_skip)}>{props.text}</span>
  )
}

export default ButtonSkip