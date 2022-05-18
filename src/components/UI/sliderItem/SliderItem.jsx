import React from 'react'
import classes from './SliderItem.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'

function SliderItem(props) {
  const styles = StyleSheet.create({
    sliderItem: {
      margin: "0 10px 8px 0",
      color: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      minWidth: "160px",
      height: "103px",
      cursor: "pointer",
      backgroundColor: "#FFFFFF",
      border: "1.96px solid rgba(231, 235, 237, 0.80141)",
      boxShadow:
        "0px 1px 0px rgba(58, 72, 80, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.08)",
      borderRadius: "13.72px"
    },
    sliderItem_text: {
      fontStyle: "normal",
      fontWeight: '600',
      fontSize: "13.72px",
      lineHeight: "14px",
      color: "#697580",
      marginTop: "8px"
    }
  })
  return (
    <div {...props} id={props.id} text={props.text} name={props.name} className={css(styles.sliderItem)}>
        <img src={props.url} alt="" />
        <p className={css(styles.sliderItem_text)}>{props.text}</p>
        <img style={{
          top: '-5px',
          right: '-5px',
          position: 'absolute',
          zIndex: '2'
        }} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAuMjYyMSIgY3k9IjkuNzAyIiByPSI5LjcwMiIgZmlsbD0iIzIxOTZGMyIvPgo8cGF0aCBkPSJNNy4wMjgwOCAxMC4yNjk1TDkuNjI2ODIgMTIuOTM2TDEzLjQ5NjEgNy41NDYwMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="" />
    </div>
  )
}

export default SliderItem