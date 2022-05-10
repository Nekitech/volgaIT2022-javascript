import React, {useContext} from 'react'
import classes from './ArrowNext.module.css'
import {Link}  from 'react-router-dom';
import {CounterContext, PageHistory} from '../../../context'
const ArrowNext = (props) => {
  const pagesAll = 10
  let {pages, setPages} = useContext(PageHistory)
  let {counter, setCounter} = useContext(CounterContext)
  function increment() {
    if(counter < pagesAll){
      setCounter(++counter)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
      window.sessionStorage.setItem('pages', JSON.stringify([...pages, ""]))
    }
    else{
      setCounter(pagesAll)
    }
  }
  return (
    <Link to="/Page1">
      <img onClick={() => {
        setPages(pages => [...pages, ''])
        increment()
        }} className={classes.arrow} src="../../images/arrow_right.svg" alt="" />
    </Link>
  )
}

export default ArrowNext