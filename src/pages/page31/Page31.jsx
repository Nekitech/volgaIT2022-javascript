import React, { useState, useEffect, useContext } from 'react'
import BetweenPage from '../betweenPage/BetweenPage'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import { Link } from 'react-router-dom'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { CounterContext, PageHistory } from '../../context'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page31() {
  const page = 'Page31'
  let [isShow, setisShow] = useState(false)
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
  useEffect(() => {
    const timerId = setTimeout(() => setisShow(!isShow), 3000)
    return () => clearTimeout(timerId)
  }, [])
  function nextPage() {
    setPages(pages => [...pages, page])
    window.sessionStorage.setItem('counter', JSON.stringify(counter))
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
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
    <div>
      {
        (!isShow)
          ? (<BetweenPage text={"Let's get to know you!"} />)
          :
          (
            <section className={css(styles.page)}>
              <TitlePage text={'Do you need vision correction?'} />
              <Link style={{textDecoration: 'none'}}to="/Page32">
                <ButtonChoice onClick={() => {
                  nextPage()
                }} name={"Yes"} />
              </Link>
              <Link style={{textDecoration: 'none'}}to="/Page41">
                <ButtonChoice onClick={() => {
                  setCounter(counter += 1)
                  nextPage()
                }} name={"No"} />
              </Link>
              <Link style={{textDecoration: 'none'}}to="/Page41">
                <ButtonSkip onClick={() => {
                  setCounter(counter += 1)
                  nextPage()
                }} text={"Skip"} />
              </Link>
            </section>
          )
      }
    </div>
  )
}

export default Page31