import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonWithIcon from '../../components/UI/buttonWithIcon/ButtonWithIcon'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { Link } from 'react-router-dom'
import { CounterContext, PageHistory, UserAnswer } from '../../context'
function Page6Both() {
  const page = 'Page6Both'
  let { ans, setAns } = useContext(UserAnswer)
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
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
      <section className='page'>
        <TitlePage text={"Every face shape has a perfect fit. What’s yours?"} />
        <Link to="/Page7">
          <ButtonWithIcon onClick={() => {
            nextPage({ 'face_shape': 'long' }, true, true)
          }} style={{ marginBottom: '14px' }} url={'../images/2 Faces.svg'} text={"I have a long face"} />
        </Link>
        <Link to="/Page7">
          <ButtonWithIcon onClick={() => {
            nextPage({ 'face_shape': 'round' }, true, true)
          }} style={{ marginBottom: '14px' }} url={'../images/2 Faces.svg'} text={"I have a round face"} />
        </Link>
        <Link to="/Page7">
          <ButtonWithIcon onClick={() => {
            nextPage({ 'face_shape': 'between' }, true, true)
          }} style={{ marginBottom: '14px' }} url={'../images/2 Faces.svg'} text={"In between"} />
        </Link>
        <Link to="/Page7">
          <ButtonSkip onClick={() => {
            nextPage(null, false, true)
          }} style={{ marginTop: '77px' }} text={"I don’t know"} />
        </Link>
      </section>
  )
}

export default Page6Both