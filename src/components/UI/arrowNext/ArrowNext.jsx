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
        }} className={classes.arrow} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMTlMMTEgMTBMMSAxIiBzdHJva2U9IiMwRjBGMEYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==' alt="" />
    </Link>
  )
}

export default ArrowNext