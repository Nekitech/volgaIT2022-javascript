import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { Link } from 'react-router-dom'
import { CounterContext, PageHistory, UserAnswer } from '../../context'

function Page7() {
  const page = 'Page7'
  let { ans, setAns } = useContext(UserAnswer)
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
  function nextPage(value, choiceAns = false, count = false) {
    if (count) {
      setCounter(counter += 1)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
    setPages(pages => [...pages, page])
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    if (choiceAns) {
      setAns(ans => Object.assign({}, ans, value))
      window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
    }
  }
  return (
    <div className='page'>
      <TitlePage style={{ width: '240px', marginBottom: '32px' }} text={"How would you define your facial features?"} />
      <Link to="/Page8">
        <ButtonChoice onClick={() => {
          nextPage({ 'facial_features': 'sharp' }, true, true)
        }} style={{ width: '314px', height: '97px' }} name={"Sharp"} />
      </Link>
      <Link to="/Page8">
        <ButtonChoice onClick={() => {
          nextPage({ 'facial_features': 'rounded' }, true, true)
        }} style={{ width: '314px', height: '97px' }} name={"Rounded"} />
      </Link>
      <Link to="/Page8">
        <ButtonChoice onClick={() => {
          nextPage({ 'facial_features': 'between' }, true, true)
        }} style={{ width: '314px', height: '97px' }} name={"In between"} />
      </Link>
      <Link to="/Page8">
        <ButtonSkip onClick={() => {
          nextPage(null, false, true)
        }} style={{ marginTop: '51px' }} text={"I don’t know"} />
      </Link>
    </div>
  )
}

export default Page7