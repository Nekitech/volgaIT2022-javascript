import React, { useContext } from 'react'
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
        <Link style={{textDecoration: 'none'}}to={'/' + pages[pages.length - 1]}>
          <img style={{cursor:'pointer'}} onClick={() => {
            if (pages[pages.length - 1] === 'Page41' && counter === 4) {
              prevPage()
            }
            else if (pages[pages.length - 1] === 'Page31' && counter === 3) {
              prevPage()
            }
            else if (pages[pages.length - 1] === 'Page2MenOrWoman' && counter === 3) {
              decrement()
              prevPage({
                'eyewear_type': ''
              }, true)
            }
            else if (pages[pages.length - 1] === 'Page1' && counter === 2) {
              decrement()
              prevPage({
                'gender': ''
              }, true)
            }
            else if ((pages[pages.length - 1] === 'Page8' && counter === 9) || (pages[pages.length - 1] === 'Page7' && counter === 8)) {
              decrement()
              prevPage({
                'shape': '',
                'brand': ''
              }, true)
            }
            else if (pages[pages.length - 1] === 'Page9' && counter === 10) {
              decrement()
              prevPage({
                'shape': '',
                'brand': ''
              }, true)
            }
            else {
              decrement()
              prevPage()
            }
          }}
           src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggaWQ9IkJhY2siIGQ9Ik05LjUgMUwxIDhMOS41IDE1IiBzdHJva2U9IiMzQTQ4NTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=' alt="" />
        </Link>
      }
    </div>
  )
}

export default ArrowPrev