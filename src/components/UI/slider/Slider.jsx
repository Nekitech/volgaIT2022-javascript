import React, { useEffect, useState, Children, cloneElement } from 'react'
import classes from './Slider.module.css'
import { StyleSheet, css } from 'aphrodite';
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
  const styles = StyleSheet.create({
    sliderTrack: {
      position: 'relative',
      top: '7px',
      left: '12px',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingRight: '12px',
  },
  slider: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      marginBottom: '10px',
      overflowX: 'scroll',
      '::-webkit-scrollbar': {
        display: 'none',
    },
    '-moz-user-select': 'none', 
    '-webkit-user-select': 'none',
     '-ms-user-select': 'none', 
     'user-select': 'none',
  },
  query: {
    '@media (min-width: 700px)': {
          justifyContent: 'center'
  },
  }
  
  });
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
        className={css(styles.slider)}>
        <div id='track'
          className={css(styles.sliderTrack, styles.query)}>{items}
        </div>
      </div>

  )
}

export default Slider