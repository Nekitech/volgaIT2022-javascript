import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ChoiceSizeButton from '../../components/UI/choiceSizeButton/ChoiceSizeButton'
import { Link } from 'react-router-dom'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { PageHistory, UserAnswer, CounterContext } from '../../context'
function Page41() {
  const page = 'Page41'
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let { ans, setAns } = useContext(UserAnswer)
  let choicePage = (ans['sunglasses'] === true && ans['eyeglasses'] !== true) ? 'SunglassesPage' : 'EyeglassesPage'
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
      <TitlePage style={{ marginBottom: '38px' }} text={"What's your current frame size?"} />
      <img style={{ marginBottom: '35px' }} src="../images/sizes.svg" alt="" />
      <div>
        <Link to={'/' + choicePage}>
          <ChoiceSizeButton onClick={() => {
            nextPage({ 'frame_size': 68 }, true, true)
          }} text={'Small'} size={'42-48 mm'} />
        </Link>
        <Link to={'/' + choicePage}>
          <ChoiceSizeButton onClick={() => {
            nextPage({ 'frame_size': 67 }, true, true)
          }} text={'Medium'} size={'49-53 mm'} />
        </Link>
        <Link to={'/' + choicePage}>
          <ChoiceSizeButton onClick={() => {
            nextPage({ 'frame_size': 66 }, true, true)
          }} text={'Large'} size={'54-58 mm'} />
        </Link>
      </div>
      <Link to='/Page42'>
        <ButtonSkip onClick={() => {
          nextPage()
        }} style={{ marginTop: '47px' }} text={"I don't know"} />
      </Link>
    </div>
  )
}

export default Page41