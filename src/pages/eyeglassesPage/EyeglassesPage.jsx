import React, {useContext} from 'react'
import classes from './EyeglassesPage.module.css'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import {Link} from 'react-router-dom'
function EyeglassesPage() {
  const page = 'EyeglassesPage'
  let {ans} = useContext(UserAnswer)
  let {counter, setCounter} = useContext(CounterContext)
  let {pages, setPages} = useContext(PageHistory)
  return (
    
    <div className='page'>
    <TitlePage style={{width:'330px', height:'60px', marginBottom:'32px'}} text={'Would you like to protect your eyes from light emanating from screens?'}/>
    {
      (ans['men'] === true && ans['women'] === false)
      ?
      (
        <div>
          <Link onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} to="/Page6Men">
            <ButtonChoice name={'Yes'}/>
          </Link>
         <Link onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} to="/Page6Men">
            <ButtonChoice name={'No'}/>
          </Link>
        </div> 
      )
      :
      (null)
    }
    {
      (ans['women'] === true && ans['men'] === false)
      ?
      (
        <div>
          <Link onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} to="/Page6Women">
            <ButtonChoice name={'Yes'}/>
          </Link>
         <Link onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} to="/Page6Women">
            <ButtonChoice name={'No'}/>
          </Link>
        </div> 
      )
      :
      (null)
    }
    {
      (ans['women'] === true && ans['men'] === true)
      ?
      (
        <div>
          <Link onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} to="/Page6Both">
            <ButtonChoice name={'Yes'}/>
          </Link>
         <Link onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} to="/Page6Both">
            <ButtonChoice name={'No'}/>
          </Link>
        </div> 
      )
      :
      (null)
    }
    
    
    
</div>
        
      
    
    
  )
}

export default EyeglassesPage