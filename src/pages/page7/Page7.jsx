import React, {useContext} from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import {Link} from 'react-router-dom'
import { CounterContext, PageHistory } from '../../context'

function Page7() {
    const page = 'Page7'
    let {pages, setPages} = useContext(PageHistory)
    let {counter, setCounter} = useContext(CounterContext)
  return (
    <div className='page'>
        <TitlePage style={{width:'240px', marginBottom:'32px'}} text={"How would you define your facial features?"}/>
        <Link to="/Page8">
            <ButtonChoice onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }}  style={{width:'314px', height: '97px'}} name={"Sharp"}/>
        </Link>
        <Link to="/Page8">
            <ButtonChoice onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }}  style={{width:'314px', height: '97px'}}  name={"Rounded"}/>
        </Link>
        <Link to="/Page8">
            <ButtonChoice onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }}  style={{width:'314px', height: '97px'}}  name={"In between"}/>
        </Link>
        <Link to="/Page8">
            <ButtonSkip onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }}  style={{marginTop: '51px'}} text={"I don’t know"}/>
        </Link>
        
        
        
        
    </div>
  )
}

export default Page7