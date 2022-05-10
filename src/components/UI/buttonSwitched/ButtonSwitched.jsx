import React, {useContext} from 'react'
import classes from './ButtonSwitched.module.css'
import {CounterContext, PageHistory} from '../../../context'
const ButtonSwitched = (props) => {
  let {pages, setPages} = useContext(PageHistory)
  let {counter, setCounter} = useContext(CounterContext)
  
  return (
      <button onClick={() => {
        
        setPages(pages => [...pages, ""])
        window.sessionStorage.setItem('pages', JSON.stringify([...pages, ""]))
        setCounter(counter += 1)
        window.sessionStorage.setItem('counter', JSON.stringify(counter))
        
    }} className={classes.btnSwitchedStart}>Start now</button>
    
  ) 
}

export default ButtonSwitched