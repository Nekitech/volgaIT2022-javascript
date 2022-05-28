import React, { useEffect, useState, Children, cloneElement } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';
function Slider({ children }) {
  const [items, setItems] = useState([])
 
  useEffect(() => {
    setItems(Children.map(children, item => {
      return cloneElement(item)
    }))
  }, [])
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
      
      id="slider"
        className={css(styles.slider)}>
        <div id='track'
          className={css(styles.sliderTrack, styles.query)}>{items}
        </div>
      </div>

  )
}

export default Slider