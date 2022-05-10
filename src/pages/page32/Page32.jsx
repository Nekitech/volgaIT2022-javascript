import React, {useContext} from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { CounterContext, PageHistory } from '../../context'
import {Link} from 'react-router-dom'
import classes from './Page32.module.css'
function Page32() {
  const page = 'Page32'
  let {pages, setPages} = useContext(PageHistory)
  let {counter, setCounter} = useContext(CounterContext)
  return (
    <div className='page'>
        <TitlePage text={'What do you need your glasses for?'}/>
        <Link to='/Page41' >
          <ButtonChoice style={{height: '84px'}} onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} name={'Near Vision'}/>     
        </Link>

        <Link to='/Page41' >
          <ButtonChoice style={{height: '84px'}} onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} name={'Distance Vision'}/>     
        </Link>
        
        <Link to='/Page41' >
          <ButtonChoice style={{height: '84px'}} onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} name={'Multifocal / Progressive'}/>
        </Link>

        <Link to='/Page41' >
          <ButtonSkip onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Skip'} />      
        </Link>
        
    </div>
  )
}

export default Page32