import React from 'react'
import classes from './TitlePage.module.css'
function TitlePage(props) {
  return (
    <h3 {...props} className={classes.title_page}>{props.text}</h3>
  )
}

export default TitlePage