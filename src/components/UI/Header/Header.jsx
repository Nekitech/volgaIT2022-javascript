import React, { useContext } from 'react'
import ArrowNext from '../arrowNext/ArrowNext'
import ArrowPrev from '../arrowPrev/ArrowPrev'
import CounterBar from '../counterBar/CounterBar'
import CloseButton from '../closeButton/CloseButton'
import { CounterContext, PageHistory, UserAnswer } from '../../../context'
import classes from './Header.module.css'


const Header = (props) => {
  let { counter, setCounter } = useContext(CounterContext)
  let { setPages } = useContext(PageHistory)
  let { ans, setAns } = useContext(UserAnswer)
  const pagesAll = 10

  function comeBackStartPage() {
    setCounter(0)
    window.sessionStorage.setItem('counter', JSON.stringify(0))
    setPages(pages => [])
    window.sessionStorage.setItem('pages', JSON.stringify([]))
    setAns(ans => Object.assign({}, {
      'men': false,
      'women': false,
      'eyeglasses': false,
      'sunglasses': false,
    }))
    window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {
      'men': false,
      'women': false,
      'eyeglasses': false,
      'sunglasses': false,
      'gender': 0,
      'eyewear_type': 0,
      'lenstype': 0,
      'frame_size': 0,
      'blue_light': null,
      'shade': '',
      'face_shape': '',
      'facial_features': '',
      'shape': '',
      'brand': ''
    })))

  }
  return (
    <div className={classes.header}>
      <div className={classes.header__top} style={(counter === 11) ? { padding: '10px 25px 8px 25px' } : { padding: '20px 25px 19px 25px' }}>
        {
          (counter >= 1 && counter < 11) ? (
            <ArrowPrev></ArrowPrev>
          ) : (null)
        }
        {
          (counter <= 0 || counter === 11)
            ? (<img src="../images/Otimax Dev logo 3.svg" alt="" />)
            : (<h3 className={classes.header__title_counter}>{`${counter}/${pagesAll}`}</h3>)
        }
        {
          (counter <= 0)
            ? (<ArrowNext></ArrowNext>)
            : (<CloseButton onClick={comeBackStartPage}></CloseButton>)
        }

      </div>
      {
        (counter >= 1)
          ?
          (
            <CounterBar value={counter} pages={pagesAll} />
          )
          :
          (null)
      }

    </div>
  )
}

export default Header