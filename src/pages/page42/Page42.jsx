import React, { useEffect, useState, useContext } from 'react'
import BetweenPage from '../betweenPage/BetweenPage'
import classes from './Page42.module.css'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
function Page42() {
    const page = 'Page42'
    let [isShow, setisShow] = useState(false)
    let { counter, setCounter } = useContext(CounterContext)
    let { ans } = useContext(UserAnswer)
    let { pages, setPages } = useContext(PageHistory)
    useEffect(() => {
        const timerId = setTimeout(() => setisShow(!isShow), 3000)
        return () => clearTimeout(timerId)
    }, [])
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
                            {
                                (ans['sunglasses'] === true && ans['eyeglasses'] !== true)
                                    ?
                                    (<div>
                                        <Link to='/SunglassesPage'>
                                            <ButtonChoice onClick={() => {
                                                setCounter(counter += 1)
                                                setPages(pages => [...pages, page])
                                                window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                            }} style={{ height: '84px', marginBottom: '11px' }} name={'Wider Than Average'} />
                                        </Link>
                                        <Link to='/SunglassesPage'>
                                            <ButtonChoice onClick={() => {
                                                setCounter(counter += 1)
                                                setPages(pages => [...pages, page])
                                                window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                            }} style={{ height: '84px', marginBottom: '11px' }} name={'Average'} />
                                        </Link>
                                        <Link to='/SunglassesPage'>
                                            <ButtonChoice onClick={() => {
                                                setCounter(counter += 1)
                                                setPages(pages => [...pages, page])
                                                window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                            }} style={{ height: '84px', marginBottom: '11px' }} name={'Narrower Than Average'} />
                                        </Link>
                                        <Link to='/SunglassesPage'>
                                            <ButtonSkip onClick={() => {
                                                setCounter(counter += 1)
                                                setPages(pages => [...pages, page])
                                                window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                            }} style={{ marginTop: '87px' }} text={"I'm not sure"} />
                                        </Link>
                                    </div>

                                    )
                                    :
                                    (
                                        <div>
                                            <Link to='/EyeglassesPage'>
                                                <ButtonChoice onClick={() => {
                                                    setCounter(counter += 1)
                                                    setPages(pages => [...pages, page])
                                                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                                }} style={{ height: '84px', marginBottom: '11px' }} name={'Wider Than Average'} />
                                            </Link>
                                            <Link to='/EyeglassesPage'>
                                                <ButtonChoice onClick={() => {
                                                    setCounter(counter += 1)
                                                    setPages(pages => [...pages, page])
                                                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                                }} style={{ height: '84px', marginBottom: '11px' }} name={'Average'} />
                                            </Link>
                                            <Link to='/EyeglassesPage'>
                                                <ButtonChoice onClick={() => {
                                                    setCounter(counter += 1)
                                                    setPages(pages => [...pages, page])
                                                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                                }} style={{ height: '84px', marginBottom: '11px' }} name={'Narrower Than Average'} />
                                            </Link>
                                            <Link to='/EyeglassesPage'>
                                                <ButtonSkip onClick={() => {
                                                    setCounter(counter += 1)
                                                    setPages(pages => [...pages, page])
                                                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                                                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                                                }} style={{ marginTop: '87px', textAlign: 'center' }} text={"I'm not sure"} />
                                            </Link>
                                        </div>
                                    )
                            }



                        </div>
                    )
            }
        </div>
    )
}

export default Page42