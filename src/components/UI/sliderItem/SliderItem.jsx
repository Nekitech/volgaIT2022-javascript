import React from 'react'
import classes from './SliderItem.module.css'
function SliderItem(props) {
  return (
    <div id={props.id} text={props.text} className={classes.sliderItem}>
        <img className={classes.img} src={props.url} alt="" />
        <p className={classes.sliderItem_text}>{props.text}</p>
    </div>
  )
}

export default SliderItem