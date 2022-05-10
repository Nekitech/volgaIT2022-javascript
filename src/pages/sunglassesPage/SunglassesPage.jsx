import React, {useContext} from 'react'
import classes from './SunglassesPage.module.css'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonWithIcon from '../../components/UI/buttonWithIcon/ButtonWithIcon'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import {Link} from 'react-router-dom'
function SunglassesPage() {
  const page = 'SunglassesPage'
  let {ans, setAns} = useContext(UserAnswer)
  let {counter, setCounter} = useContext(CounterContext)
  let {pages, setPages} = useContext(PageHistory)
  return (
    <div className='page'>
      <TitlePage text={"When you’re out and about, which shade of lenses do you prefer?"}/>
      {
      (ans['men'] === true && ans['women'] === false)
      ?
      (<div>
        <Link to="/Page6Men">
          <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'dark' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'dark' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/blackLens.svg'} text={"Dark Shade"}/>
        </Link>
        <Link to='/Page6Men'>
          <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'light' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'light' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/whiteLens.svg'} text={"Light Shade"}/>
        </Link>
        <Link to='/Page6Men'>
          <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'light' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'transition' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} url={'../images/photochromic.svg'} text={"Transitioning Shade"}/>
        </Link>
      </div>
        
      )
      : (null)
      
    }
    { (ans['women'] === true && ans['men'] === false)
    ?
      (
        <div>
          <Link to='/Page6Women'>
            <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'dark' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'dark' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/blackLens.svg'} text={"Dark Shade"}/>
          </Link>
          <Link to='/Page6Women'>
            <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'light' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'light' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/whiteLens.svg'} text={"Light Shade"}/>
          </Link>
          <Link to='/Page6Women'>
            <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'light' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'transition' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} url={'../images/photochromic.svg'} text={"Transitioning Shade"}/>
          </Link>
        </div>
      )
      :
      (null)
    }
    { (ans['women'] === true && ans['men'] === true)
    ?
      (
        <div>
          <Link to='/Page6Both'>
            <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'dark' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'dark' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/blackLens.svg'} text={"Dark Shade"}/>
          </Link>
          <Link to='/Page6Both'>
            <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'light' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'light' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/whiteLens.svg'} text={"Light Shade"}/>
          </Link>
          <Link to='/Page6Both'>
            <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'shade': 'light' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'shade': 'transition' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} url={'../images/photochromic.svg'} text={"Transitioning Shade"}/>
          </Link>
          
        </div>
      )
      :
      (null)
    }  
    </div>
  )
}

export default SunglassesPage