import React, {useContext} from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import classes from './Page41.module.css'
import ChoiceSizeButton from '../../components/UI/choiceSizeButton/ChoiceSizeButton'
import {Link} from 'react-router-dom'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { PageHistory, UserAnswer, CounterContext } from '../../context'

function Page41() {
  const page = 'Page41'
  let {counter, setCounter} = useContext(CounterContext)
  let {pages, setPages} = useContext(PageHistory)
  let {ans, setAns} = useContext(UserAnswer)
  return (
    <div className='page'>
      <TitlePage style={{marginBottom: '38px'}} text={"What's your current frame size?"}/>
      <img style={{marginBottom: '35px'}} src="../images/sizes.svg" alt=""/>
      
      {
        (ans['sunglasses'] === true && ans['eyeglasses'] !== true)
        ?
        (
          <div>
            <Link to='/SunglassesPage'>
              <ChoiceSizeButton onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, {'frame_size': 68}))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'frame_size': 68})))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Small'} size={'42-48 mm'}/>
            </Link>
            <Link to='/SunglassesPage'>
              <ChoiceSizeButton onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, {'frame_size': 67}))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'frame_size': 67})))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Medium'} size={'49-53 mm'}/>
            </Link>
            <Link to='/SunglassesPage'>
              <ChoiceSizeButton onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, {'frame_size': 66}))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'frame_size': 66})))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Large'} size={'54-58 mm'}/>
            </Link>
          </div>
        )
        :
        (
          <div>
            <Link to='/EyeglassesPage'>
              <ChoiceSizeButton onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, {'frame_size': 68}))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'frame_size': 68})))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Small'} size={'42-48 mm'}/>
            </Link>
            <Link to='/EyeglassesPage'>
              <ChoiceSizeButton onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, {'frame_size': 67}))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'frame_size': 67})))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Medium'} size={'49-53 mm'}/>
            </Link>
            <Link to='/EyeglassesPage'>
              <ChoiceSizeButton onClick={() => {
                  setCounter(counter+=1)
                  setPages(pages => [...pages, page])
                  setAns(ans => Object.assign({}, ans, {'frame_size': 66}))
                  window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'frame_size': 66})))
                  window.sessionStorage.setItem('counter', JSON.stringify(counter))
                  window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} text={'Large'} size={'54-58 mm'}/>
            </Link>
          </div>
        )
      }
      
      <Link to='/Page42'>
        <ButtonSkip onClick={() => {
            setPages(pages => [...pages, page])
            window.sessionStorage.setItem('counter', JSON.stringify(counter))
            window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }} style={{marginTop: '47px'}} text={"I don't know"}/>
      </Link>
      
  </div>  
        
  )
}

export default Page41