import React from 'react'
import classes from './ButtonChoice.module.css'
const buttonChoice = (props) => {
  return (
    <div>
      <button {...props} className={classes.buttonChoice}>{props.name}
      {
        (!props.url) 
        ?
        (null)
        :
        (
        <img className={classes.img} src={props.url} alt="" /> 
        )
      }
        
      </button>
    </div>
    
  )
}

export default buttonChoice