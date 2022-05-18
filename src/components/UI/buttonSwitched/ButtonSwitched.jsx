import React, {useContext} from 'react'
import {CounterContext, PageHistory} from '../../../context'
import {css, StyleSheet} from 'aphrodite/no-important'

const ButtonSwitched = (props) => {
  let {pages, setPages} = useContext(PageHistory)
  let {counter, setCounter} = useContext(CounterContext)
  const styles = StyleSheet.create({
    btnSwitchedStart: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "21px",
      fontSize: "18px",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      width: "177px",
      height: "48px",
      borderRadius: "24px",
      background: "linear-gradient(270deg, #45C7FA 0%, #2196F3 100%)",
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.03)"
    }
  })
  return (
      <button onClick={() => {
        
        setPages(pages => [...pages, ""])
        window.sessionStorage.setItem('pages', JSON.stringify([...pages, ""]))
        setCounter(counter += 1)
        window.sessionStorage.setItem('counter', JSON.stringify(counter))
        
    }} className={css(styles.btnSwitchedStart)}>Start now</button>
    
  ) 
}

export default ButtonSwitched