import React, { useEffect, useState, useContext } from 'react'
import BetweenPage from '../betweenPage/BetweenPage'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
function Page42() {
const page = 'Page42'
let [isShow, setisShow] = useState(false)
let { counter, setCounter } = useContext(CounterContext)
let { ans, setAns } = useContext(UserAnswer)
let { pages, setPages } = useContext(PageHistory)
let choicePage = (ans['sunglasses'] === true && ans['eyeglasses'] !== true) ? 'SunglassesPage' : 'EyeglassesPage' 
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
return (
<div>
    {
    (!isShow)
        ?
        (<BetweenPage text={"No worries, we've got you!"} />)
        :
        (
        <div className='page'>
            <TitlePage style={{ marginBottom: '32px', width: '210px', textAlign: 'center' }} text={'How wide would you say your face is?'} />
            <div>
                <Link to={'/' + choicePage}>
                    <ButtonChoice onClick={() => {
                        nextPage({ 'frame_size': 66 }, true, true)
                    }} style={{ height: '84px', marginBottom: '11px' }} name={'Wider Than Average'} />
                </Link>
                <Link to={'/' + choicePage}>
                    <ButtonChoice onClick={() => {
                        nextPage({ 'frame_size': 67 }, true, true)
                    }} style={{ height: '84px', marginBottom: '11px' }} name={'Average'} />
                </Link>
                <Link to={'/' + choicePage}>
                    <ButtonChoice onClick={() => {
                        nextPage({ 'frame_size': 68 }, true, true)
                    }} style={{ height: '84px', marginBottom: '11px' }} name={'Narrower Than Average'} />
                </Link>
                <Link to={'/' + choicePage}>
                    <ButtonSkip onClick={() => {
                        nextPage(null, false, true)
                    }} style={{ marginTop: '87px' }} text={"I'm not sure"} />
                </Link>
            </div>
        </div>
    )
}
</div>
)
}

export default Page42