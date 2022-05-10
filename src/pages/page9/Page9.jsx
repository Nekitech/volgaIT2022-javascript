import React, { useContext } from 'react'
import classes from './Page9.module.css'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import { CounterContext, PageHistory } from '../../context'
import { Link } from 'react-router-dom'
function Page9() {
    const page = 'Page9'
    let { pages, setPages } = useContext(PageHistory)
    let { counter, setCounter } = useContext(CounterContext)
    return (
        <div className='page'>
            <TitlePage style={{ width: '254px', height: '60px' }} text={"Are you looking for any particular eyewear brands?"} />
            <Link to="/Page10">
                <ButtonChoice onClick={() => {
                    setCounter(counter += 1)
                    setPages(pages => [...pages, page])
                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                }} name={"Yes, I have some in mind"} />
            </Link>
            <Link to="/Page11">
                <ButtonChoice onClick={() => {
                    setCounter(counter += 2)
                    setPages(pages => [...pages, page])
                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                }} name={"No, brand isn't important"} />
            </Link>

        </div>
    )
}

export default Page9