import React, {useContext} from 'react'
import classes from './Page6Men.module.css'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonWithIcon from '../../components/UI/buttonWithIcon/ButtonWithIcon'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import {Link} from 'react-router-dom'
import { PageHistory, CounterContext, UserAnswer } from '../../context'
function Page6Men() {
    const page = 'Page6Men'
    let {ans, setAns} = useContext(UserAnswer)
    let {pages, setPages} = useContext(PageHistory)
    let {counter, setCounter} = useContext(CounterContext)
  return (
    <div className='page'>
            <TitlePage text={"Every face shape has a perfect fit. What’s yours?"}/>
            <Link to="/Page7">
                <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'face_shape': 'long' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'face_shape': 'long' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }} style={{marginBottom: '14px'}} url={'../images/menFace.svg'} text={"I have a long face"}/>
            </Link>
            <Link to="/Page7">
                <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'face_shape': 'round' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'face_shape': 'round' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }} style={{marginBottom: '14px'}} url={'../images/menFace.svg'} text={"I have a round face"}/>
            </Link>
            <Link to="/Page7">
                <ButtonWithIcon onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, { 'face_shape': 'between' }))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'face_shape': 'between' })))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }} style={{marginBottom: '14px'}} url={'../images/menFace.svg'} text={"In between"}/>
            </Link>
            <Link to="/Page7">
                <ButtonSkip onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                  }} style={{marginTop: '77px'}}  text={"I don’t know"}/>
            </Link>
            
        </div>
  )
}

export default Page6Men