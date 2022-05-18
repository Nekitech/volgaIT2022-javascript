import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { CounterContext, PageHistory, UserAnswer } from '../../context'
import { Link } from 'react-router-dom'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page32() {
  const page = 'Page32'
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
  let { ans, setAns } = useContext(UserAnswer)

  function nextPage(value, choiceAns = false) {
    setCounter(counter += 1)
    setPages(pages => [...pages, page])
    window.sessionStorage.setItem('counter', JSON.stringify(counter))
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
      <TitlePage text={'What do you need your glasses for?'} />
      <Link style={{textDecoration: 'none'}}to='/Page41' >
        <ButtonChoice style={{ height: '84px' }} onClick={() => {
          nextPage({ 'lenstype': 6 }, true)
        }} name={'Near Vision'} />
      </Link>

      <Link style={{textDecoration: 'none'}}to='/Page41' >
        <ButtonChoice style={{ height: '84px' }} onClick={() => {
          nextPage({ 'lenstype': 6 }, true)
        }} name={'Distance Vision'} />
      </Link>

      <Link style={{textDecoration: 'none'}}to='/Page41' >
        <ButtonChoice style={{ height: '84px' }} onClick={() => {
          nextPage({ 'lenstype': 7 }, true)
        }} name={'Multifocal / Progressive'} />
      </Link>

      <Link style={{textDecoration: 'none'}}to='/Page41' >
        <ButtonSkip onClick={() => {
          nextPage()
        }} text={'Skip'} />
      </Link>

    </section>
  )
}

export default Page32