import React from 'react'
import classes from './TitlePage.module.css'
import {css, StyleSheet} from 'aphrodite/no-important'

function TitlePage(props) {
  const styles = StyleSheet.create({
    title_page: {
      margin: "50px 0 24px 0",
      fontStyle: "normal",
      fontWeight: '300',
      lineHeight: "29px",
      fontSize: "20px",
      color: "#0F0F0F",
      textAlign: "center"
    }
  })
  return (
    <h3 {...props} className={css(styles.title_page)}>{props.text}</h3>
  )
}

export default TitlePage