import React from 'react'
import {css, StyleSheet} from 'aphrodite/no-important'

function ButtonWithIcon(props) {
  const styles = StyleSheet.create({
    button: {
      display: "flex",
      alignItems: "center",
      background: "#FFFFFF",
      border: "1px solid rgba(231, 235, 237, 0.80141)",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
      borderRadius: "14px",
      width: "304px",
      height: "89px",
      paddingLeft: "24px",
      cursor: "pointer"
    },
    button_text: {
      position: "relative",
      fontStyle: "normal",
      fontWeight: '600',
      fontSize: "16px",
      lineHeight: "17px",
      color: "#425A60",
      marginLeft: "24px"
    },
    icon: {
      borderRight: '1px solid #DEDEDE',
      paddingRight: '21px'
    }
    
  })
  return (
    <button className={css(styles.button)} {...props}>
        <img className={css(styles.icon)} src={props.url} alt="" />
        <p className={css(styles.button_text)}>{props.text}</p>
    </button>
  )
}

export default ButtonWithIcon