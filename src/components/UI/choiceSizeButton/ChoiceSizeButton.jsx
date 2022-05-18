import React from 'react'
import classes from './ChoiceSizeButton.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'

function ChoiceSizeButton(props) {
  const styles = StyleSheet.create({
    button_size: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 21px 0 20px",
      width: "318px",
      height: "56px",
      left: "29px",
      top: "367px",
      background: "#FFFFFF",
      border: "1px solid rgba(231, 235, 237, 0.80141)",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
      borderRadius: "14px",
      marginBottom: "12px",
      cursor: "pointer"
    },
    text_button: {
      fontStyle: "normal",
      fontWeight: '400',
      fontSize: "18px",
      lineHeight: "25px",
      color: "#425A60"
    },
    size_text: {
      fontStyle: "normal",
      fontWeight: '700',
      fontSize: "18px",
      lineHeight: "25px",
      color: "#0F0F0F"
    }
  })
  return (
    <button {...props} className={css(styles.button_size)}>
        <p className={css(styles.text_button)}>{props.text}</p>
        <span className={css(styles.size_text)}>{props.size}</span>
    </button>
  )
}

export default ChoiceSizeButton