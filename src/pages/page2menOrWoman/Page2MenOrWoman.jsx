import React, {useContext} from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
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
    <section className='page'>
        <TitlePage text={'What type of glasses are you looking for?'}/>
        <Link to='/Page31'>
            <ButtonChoice onClick={() => {
              nextPage({'eyewear_type': 210})
              }} url="../images/eyeglasses.svg" name={"Eyeglasses"}/>
        </Link>

        <Link to='/Page31'>
        <ButtonChoice onClick={() => {
          nextPage({'eyewear_type': 211})
        }} url="../images/sunglasses.svg" name={"Sunglasses"}/>
        </Link>

        <Link to='/Page31'>
            <ButtonSkip onClick={() => {
              nextPage()
              }} text={'I want to see both'}/>
        </Link>
    </section>
  )
}

export default Page2MenOrWoman