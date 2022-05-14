import React, {useContext} from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonWithIcon from '../../components/UI/buttonWithIcon/ButtonWithIcon'
import { UserAnswer, CounterContext, PageHistory } from '../../context'
import {Link} from 'react-router-dom'
function SunglassesPage() {
  const page = 'SunglassesPage'
  let {ans, setAns} = useContext(UserAnswer)
  let {counter, setCounter} = useContext(CounterContext)
  let {pages, setPages} = useContext(PageHistory)
  let choicePage = (ans['gender'] === 4 && ans['gender'] !== 5) 
  ? 'Page6Men' 
  : (ans['gender'] === 5 && ans['gender'] !== 4) 
  ? 'Page6Women'
  : (ans['gender'] !== 5 && ans['gender'] !== 4)
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