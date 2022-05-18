import React, { useEffect, useState, useContext } from 'react'
import BetweenPage from '../betweenPage/BetweenPage'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page42() {
const page = 'Page42'
let [isShow, setisShow] = useState(false)
let { counter, setCounter } = useContext(CounterContext)
let { ans, setAns } = useContext(UserAnswer)
let { pages, setPages } = useContext(PageHistory)
let choicePage = (ans['eyewear_type'] === 211 && ans['eyewear_type'] !== 210) ? 'SunglassesPage' : 'EyeglassesPage' 
useEffect(() => {
    const timerId = setTimeout(() => setisShow(!isShow), 3000)
    return () => clearTimeout(timerId)
}, [])
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
<div>
    {
    (!isShow)
        ?
        (<BetweenPage text={"No worries, we've got you!"} />)
        :
        (
        <section className={css(styles.page)}>
            <TitlePage style={{ marginBottom: '32px', width: '210px', textAlign: 'center' }} text={'How wide would you say your face is?'} />
            <div>
                <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
                    <ButtonChoice onClick={() => {
                        nextPage({ 'frame_size': 66 }, true, true)
                    }} style={{ height: '84px', marginBottom: '11px' }} name={'Wider Than Average'} />
                </Link>
                <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
                    <ButtonChoice onClick={() => {
                        nextPage({ 'frame_size': 67 }, true, true)
                    }} style={{ height: '84px', marginBottom: '11px' }} name={'Average'} />
                </Link>
                <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
                    <ButtonChoice onClick={() => {
                        nextPage({ 'frame_size': 68 }, true, true)
                    }} style={{ height: '84px', marginBottom: '11px' }} name={'Narrower Than Average'} />
                </Link>
                <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
                    <ButtonSkip onClick={() => {
                        nextPage(null, false, true)
                    }} style={{ marginTop: '87px' }} text={"I'm not sure"} />
                </Link>
            </div>
        </section>
    )
}
</div>
)
}

export default Page42