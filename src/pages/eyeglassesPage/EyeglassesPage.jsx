import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
function EyeglassesPage() {
  const page = 'EyeglassesPage'
  let { ans, setAns } = useContext(UserAnswer)
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let choicePage = (ans['men'] === true && ans['women'] === false)
    ? 'Page6Men'
    : (ans['women'] === true && ans['men'] === false)
      ? 'Page6Women'
      : (ans['women'] === true && ans['men'] === true)
        ? 'Page6Both'
        : null

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
      <TitlePage style={{ width: '330px', height: '60px', marginBottom: '32px' }} text={'Would you like to protect your eyes from light emanating from screens?'} />
      <div>
        <Link onClick={() => {
          nextPage({ 'blue_light': true }, true, true)
        }} to={'/' + choicePage}>
          <ButtonChoice name={'Yes'} />
        </Link>
        <Link onClick={() => {
          nextPage({ 'blue_light': false }, true, true)
        }} to={'/' + choicePage}>
          <ButtonChoice name={'No'} />
        </Link>
      </div>
    </div>
  )
}

export default EyeglassesPage