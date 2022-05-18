import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import { CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page9() {
    const page = 'Page9'
    let { pages, setPages } = useContext(PageHistory)
    let { counter, setCounter } = useContext(CounterContext)
    function nextPage(step) {
        setCounter(counter += step)
        window.sessionStorage.setItem('counter', JSON.stringify(counter))
        setPages(pages => [...pages, page])
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
        <section className={css(styles.page)}>
            <TitlePage style={{ width: '254px', height: '60px' }} text={"Are you looking for any particular eyewear brands?"} />
            <Link style={{textDecoration: 'none'}}to="/Page10">
                <ButtonChoice onClick={() => {
                    nextPage(1)
                }} name={"Yes, I have some in mind"} />
            </Link>
            <Link style={{textDecoration: 'none'}}to="/Page11">
                <ButtonChoice onClick={() => {
                    nextPage(2)
                }} name={"No, brand isn't important"} />
            </Link>

        </section>
    )
}

export default Page9