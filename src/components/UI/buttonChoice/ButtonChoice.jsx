import React from 'react'
import classes from './ButtonChoice.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'
const buttonChoice = (props) => {
  const styles = StyleSheet.create({
    buttonChoice: {
      width: "274px",
      height: "138px",
      background: "#FFFFFF",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
      borderRadius: "14px",
      border: "1px solid rgba(231, 235, 237, 0.80141)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column-reverse",
      marginBottom: "14px",
      fontStyle: "normal",
      fontWeight: '600',
      fontSize: "18px",
      lineHeight: "25px",
      color: "#425A60"
    },
    img: { 
      width: "50px", 
    height: "50px",
     marginBottom: "15px" }
  })
  return (
    <div>
      <button {...props} className={css(styles.buttonChoice)}>{props.name}
      {
        (!props.url) 
        ?
        (null)
        :
        (
        <img className={css(styles.img)} src={props.url} alt="" /> 
        )
      }
        
      </button>
    </div>
    
  )
}

export default buttonChoice