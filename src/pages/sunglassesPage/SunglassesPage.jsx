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
  let choicePage = (ans['men'] === true && ans['women'] === false) 
  ? 'Page6Men' 
  : (ans['women'] === true && ans['men'] === false) 
  ? 'Page6Women'
  : (ans['women'] === true && ans['men'] === true)
  ? 'Page6Both'
  : null

  function nextPage(value, choiceAns = false, count = false) {
    if (count) {
        setCounter(counter += 1)
        window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
    setPages(pages => [...pages, page])
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    if (choiceAns) {
        setAns(ans => Object.assign({}, ans, value))
        window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
    }
    }
  return (
    <div className='page'>
      <TitlePage text={"When you’re out and about, which shade of lenses do you prefer?"}/>
      <div>
        <Link to={'/' + choicePage}>
          <ButtonWithIcon onClick={() => {
                  nextPage({ 'shade': 'dark' }, true, true)
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/blackLens.svg'} text={"Dark Shade"}/>
        </Link>
        <Link to={'/' + choicePage}>
          <ButtonWithIcon onClick={() => {
            nextPage({ 'shade': 'light' }, true, true)
          }} style={{paddingLeft: '28px', marginBottom: '16px'}} url={'../images/whiteLens.svg'} text={"Light Shade"}/>
        </Link>
        <Link to={'/' + choicePage}>
          <ButtonWithIcon onClick={() => {
            nextPage({ 'shade': 'transition' }, true, true)
          }} url={'../images/photochromic.svg'} text={"Transitioning Shade"}/>
        </Link>
      </div>
    </div>
  )
}

export default SunglassesPage