import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
import {css, StyleSheet} from 'aphrodite/no-important'
function EyeglassesPage() {
  const page = 'EyeglassesPage'
  let { ans, setAns } = useContext(UserAnswer)
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let choicePage = (ans['gender'] === 4 && ans['gender'] !== 5)
    ? 'Page6Men'
    : (ans['gender'] === 5 && ans['gender'] !== 4)
      ? 'Page6Women'
      : (ans['gender'] !== 5 && ans['gender'] !== 4)
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

  const styles = StyleSheet.create({
    page :{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      textDecoration: 'none',
  }
  })

  return (

    <section className={css(styles.page)}>
      <TitlePage style={{ width: '330px', height: '60px', marginBottom: '32px' }} text={'Would you like to protect your eyes from light emanating from screens?'} />
      <div>
        <Link style={{textDecoration: 'none'}}onClick={() => {
          nextPage({ 'blue_light': true }, true, true)
        }} to={'/' + choicePage}>
          <ButtonChoice name={'Yes'} />
        </Link>
        <Link style={{textDecoration: 'none'}}onClick={() => {
          nextPage({ 'blue_light': false }, true, true)
        }} to={'/' + choicePage}>
          <ButtonChoice name={'No'} />
        </Link>
      </div>
    </section>
  )
}

export default EyeglassesPage