import React, { useContext } from 'react'
import classes from './ArrowPrev.module.css'
import { Link } from 'react-router-dom';
import { CounterContext, PageHistory, UserAnswer } from '../../../context'
const ArrowPrev = (props) => {
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let { ans, setAns } = useContext(UserAnswer)
  function decrement() {
    if (counter >= 1) {
      setCounter(--counter)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
    else {
      setCounter(0)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
  }
  function prevPage(value, choiceAns = false) {
    setPages(pages => [...pages.slice(0, -1)])
    window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
    if (choiceAns) {
      setAns(ans => Object.assign({}, ans, value))
      window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
    }
  }
  return (
    <div>
      {
        <Link to={'/' + pages[pages.length - 1]}>
          <img onClick={() => {
            if (pages[pages.length - 1] === 'Page41' && counter === 4) {
              prevPage()
            }
            else if (pages[pages.length - 1] === 'Page31' && counter === 3) {
              prevPage()
            }
            else if (pages[pages.length - 1] === 'Page2MenOrWoman' && counter === 3) {
              decrement()
              prevPage({
                'eyeglasses': false,
                'sunglasses': false
              }, true)
            }
            else if (pages[pages.length - 1] === 'Page1' && counter === 2) {
              decrement()
              prevPage({
                'men': false,
                'women': false,
              }, true)
            }
            else if (pages[pages.length - 1] === 'Page7' && counter === 8) {
              decrement()
              prevPage({
                'selectGlass': [],
                'selectBrand': []
              }, true)
            }
            else if (pages[pages.length - 1] === 'Page9' && counter === 10) {
              decrement()
              prevPage({
                'selectGlass': [],
                'selectBrand': []
              }, true)
            }
            else {
              decrement()
              prevPage()
            }
          }}
            className={classes.arrow} src="../../images/Back (1).svg" alt="" />
        </Link>
      }
    </div>
  )
}

export default ArrowPrev