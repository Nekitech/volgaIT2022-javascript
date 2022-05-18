import React from 'react'
import {css, StyleSheet} from 'aphrodite/no-important'

function ButtonSend(props) {
  const styles = StyleSheet.create({
    btnSend: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "21px",
      fontSize: "18px",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      width: "177px",
      height: "48px",
      borderRadius: "24px",
      background: "linear-gradient(270deg, #45C7FA 0%, #2196F3 100%)",
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.03)"
    }
  })
  return (
    <button {...props} className={css(styles.btnSend)}>
        {props.text}
    </button>
  )
}

export default ButtonSend