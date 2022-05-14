import React, { useEffect, useState, Children, cloneElement } from 'react'
import classes from './Slider.module.css'

function Slider({ children }) {
  const [items, setItems] = useState([])
 

  useEffect(() => {
    setItems(Children.map(children, item => {
      return cloneElement(item)
    }))
  }, [])

  return (
    <div id="slider"
      className={classes.slider}>
      <div 
        className={classes.sliderTrack}>{items}
      </div>
    </div>


  )
}

export default Slider