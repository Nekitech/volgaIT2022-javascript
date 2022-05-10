import React, {useContext} from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import classes from './Page2MenOrWoman.module.css'
import {Link} from 'react-router-dom'
import {CounterContext, PageHistory, UserAnswer} from '../../context'
function Page2MenOrWoman() {
  const page = 'Page2MenOrWoman'
  let {pages, setPages} = useContext(PageHistory)
  let {counter, setCounter} = useContext(CounterContext)
  let {ans, setAns} = useContext(UserAnswer)
  function nextPage(value) {
    setCounter(counter+=1)
    setPages(pages => [...pages, page])
    setAns(ans => Object.assign({}, ans, value))
    window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
    window.sessionStorage.setItem('counter', JSON.stringify(counter))
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
  }
  return (
    <div className='page'>
        <TitlePage text={'What type of glasses are you looking for?'}/>
        <Link to='/Page31'>
            <ButtonChoice onClick={() => {
              nextPage({'eyeglasses': true, 'eyewear_type': 210})
              }} url="../images/eyeglasses.svg" name={"Eyeglasses"}/>
        </Link>

        <Link to='/Page31'>
        <ButtonChoice onClick={() => {
          nextPage({'sunglasses': true, 'eyewear_type': 211})
        }} url="../images/sunglasses.svg" name={"Sunglasses"}/>
        </Link>

        <Link to='/Page31'>
            <ButtonSkip onClick={() => {
              nextPage({'sunglasses': true, 'eyeglasses': true})
              }} text={'I want to see both'}/>
        </Link>
    </div>
  )
}

export default Page2MenOrWoman