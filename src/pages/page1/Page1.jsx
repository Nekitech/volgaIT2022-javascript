import React, { useContext } from 'react'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import '../../styles/App.css'
import { Link } from 'react-router-dom'
import { CounterContext, PageHistory, UserAnswer } from '../../context'
import TitlePage from '../../components/UI/titlePage/TitlePage'

const Page1 = () => {
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let { ans, setAns } = useContext(UserAnswer)
  const page = 'Page1'

  function nextPage(value) {
    setPages(pages => [...pages, page])
    setCounter(counter += 1)
    setAns(ans => Object.assign({}, ans, value))
    window.sessionStorage.setItem('counter', JSON.stringify(counter))
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
  }
  return (
    <div className='page'>
      <TitlePage text={'You are looking for'} />
      <Link to='/Page2MenOrWoman'>
        <ButtonChoice onClick={() => {
          nextPage({ 'women': true, 'gender': 5 })
        }} url="../images/women style.svg" name={"Women Style"} />
      </Link>

      <Link to='/Page2MenOrWoman'>
        <ButtonChoice onClick={() => {
          nextPage({ 'men': true, 'gender': 4 })
        }} url="../images/men style.svg" name={"Men Style"} />
      </Link>

      <Link to='/Page2MenOrWoman'>
        <ButtonSkip text={"I'd like to see both"} onClick={() => {
          nextPage({ 'women': true, 'men': true })
        }} />
      </Link>
    </div>
  )
}

export default Page1