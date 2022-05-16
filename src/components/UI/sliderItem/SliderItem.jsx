import React from 'react'
import classes from './SliderItem.module.css'
function SliderItem(props) {
  return (
    <div {...props} id={props.id} text={props.text} name={props.name} className={classes.sliderItem}>
        <img className={classes.img} src={props.url} alt="" />
        <p className={classes.sliderItem_text}>{props.text}</p>
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