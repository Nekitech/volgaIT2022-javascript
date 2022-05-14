import React, { useEffect, useState, Children, cloneElement } from 'react'
import classes from './Slider.module.css'

function Slider({ children }) {
  const [items, setItems] = useState([])
 
  let track = document.querySelector('#track')
  let slider = document.querySelector('#slider')
  useEffect(() => {
    setItems(Children.map(children, item => {
      return cloneElement(item)
    }))
  }, [])
  let scroll = 0
  // function checkBorders() {
  //   let outer = slider.getBoundingClientRect()
  //   let inner = track.getBoundingClientRect()

  //   if (parseInt(track.style.left) > 12) {
  //     track.style.left = '12px'
  //   }
  //   else if (inner.right < outer.right) {

  //     track.style.left = `-${305}px`
  //   }
  // }
  return (
    <div 
 
    // onWheel={(event) => {
    //   if(event.deltaY < 0){
    //     scroll += 10
    //     track.style.left = `-${scroll}px`
    //   }
    //   else {
    //     scroll -= 10
    //     console.log(scroll, '   ')
    //     track.style.left = `${scroll}px`
    //   }
    //   checkBorders() 
    // }} 
    id="slider"
      className={classes.slider}>
      <div id='track'
        className={classes.sliderTrack}>{items}
      </div>
    </div>


  )
}

export default Slider