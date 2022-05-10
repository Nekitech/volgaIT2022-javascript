import React, { useEffect, useState, Children, cloneElement, useRef } from 'react'
import classes from './Slider.module.css'

function Slider({ children, ...props }) {
  const [items, setItems] = useState([])
  let x;

  let pressed = false;
  let startX;

  useEffect(() => {
    setItems(Children.map(children, item => {
      return cloneElement(item)
    }))
  }, [])
  window.addEventListener('mouseup', () => {
    pressed = false
  })
  let track = useRef(null)
  let slider = useRef(null)


  function checkBorders() {
    let outer = slider.current.getBoundingClientRect()
    let inner = track.current.getBoundingClientRect()

    if (parseInt(track.current.style.left) > 12) {
      track.current.style.left = '12px'
    }
    else if (inner.right < outer.right) {

      track.current.style.left = `-${305}px`
    }
  }
  (function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        track.scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
        
    }
    if (track.addEventListener) {
        // IE9, Chrome, Safari, Opera
        track.addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        track.addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } 
})();


  return (
    <div id="slider" ref={slider}
      onMouseDown={(event) => {
        pressed = true
        startX = event.nativeEvent.offsetX - track.current.offsetLeft
        event.currentTarget.style.cursor = 'grabbing'

      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.cursor = 'grab'

      }}
      onMouseUp={(event) => {
        event.currentTarget.style.cursor = 'grab'

      }}
      onClick={(event) => {

        track.current.style.pointerEvetns = 'auto'
      }}

      onMouseLeave={(event) => {
        event.currentTarget.style.cursor = 'none'
      }}
      onMouseMove={(event) => {
        if (!pressed) return;
        event.preventDefault()
        x = event.nativeEvent.offsetX

        track.current.style.left = `${x - startX}px`

        checkBorders()
      }}
      
      className={classes.slider}>
      <div ref={track}
        className={classes.sliderTrack}>{items}
      </div>
    </div>


  )
}

export default Slider