import React, { useContext, useRef } from 'react'
import classes from './Page8.module.css'
import Slider from '../../components/UI/slider/Slider'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import SliderItem from '../../components/UI/sliderItem/SliderItem'
import { Link } from 'react-router-dom'
import { CounterContext, UserAnswer, PageHistory } from '../../context'
function Page8(props) {
  const page = 'Page8'
  let { ans, setAns } = useContext(UserAnswer)
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
  function checkElem(arr, elem) {
    let flag = false
    arr.forEach((e => {
      if (e === elem) {
        flag = true
      }
    }))
    if (flag === false) {
      return true
    }
    else {
      return false
    }
  }

  let button = useRef()
  let count = 0
  let selectGlass = []

  const nextPage = (event) => {
    if (count > 0) {
      setCounter(counter += 1)
      setPages(pages => [...pages, page])
      setAns(ans => Object.assign({}, ans, {'shape': selectGlass.join(',')}))
      window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'shape': selectGlass.join(',')})))
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
      window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    }
    else {
      event.preventDefault()
    }
  }
  return (
    <div onClick={(event) => {
      if (event.target?.getAttribute('id') === 'item' || event.target?.closest('#item')?.getAttribute('id') === 'item') {
        let sliderElem = (event.target?.getAttribute('id') === 'item') ? event.target : event.target?.closest('#item')
        if (sliderElem.getAttribute('id') === 'item') {
          if (sliderElem.classList.contains('selected')) {
            count -= 1
            sliderElem.classList.remove('selected')
            selectGlass.pop(sliderElem.getAttribute('name'))
          }
          else {
            count += 1
            sliderElem.classList.add('selected')
            selectGlass.push(sliderElem.getAttribute('name'))
          }
          if (count > 0) {
            button.current?.classList.add(classes.btnSelected)
          }
          else {
            button.current?.classList.remove(classes.btnSelected)
          }
        }
      }
    }} className='page'>
      <TitlePage style={{ margin: '30px 0 0 0' }} text={"Which frame style are you looking for?"} />
      <h4 style={{
        margin: '10px 0 20px 0', fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '30px',
        color: '#697580'
      }}>You can pick more than one.</h4>

      <Slider>
        <SliderItem url={"../images/rectangle.svg"} text={"Rectangle"} name="rectangle" id="item" />
        <SliderItem url={"../images/browline.svg"} text={"Browline"} name="browline" id="item" />
        <SliderItem url={"../images/aviator.svg"} text={"Aviator"} name="aviator" id="item" />
        <SliderItem url={"../images/geometric.svg"} text={"Geometric"} name="geometric" id="item" />

      </Slider>
      <Slider>
        <SliderItem url={"../images/wayframe.svg"} text={"Wayframe"} name="wayframe" id="item" />
        <SliderItem url={"../images/round.svg"} text={"Round"} name="round" id="item" />
        <SliderItem url={"../images/oval.svg"} text={"Oval"} name="oval" id="item" />
        <SliderItem url={"../images/oversized.svg"} text={"Oversized"} name="oversized" id="item" />

      </Slider>
      <Slider>
        <SliderItem url={"../images/catEye.svg"} text={"Cat Eye"} name="cat_eye" id="item" />
        <SliderItem url={"../images/rimless.svg"} text={"Rimless"} name="rimless" id="item" />
        <SliderItem url={"../images/square.svg"} text={"Square"} name="square" id="item" />
        <SliderItem url={"../images/wrap.svg"} text={"Wrap"} name="wrap" id="item" />


      </Slider>
      <Link to="/Page9">

        <button onClick={nextPage} ref={button} style={{ marginTop: '14px', cursor: ' pointer' }} className={classes.btn}>Continue</button>
      </Link>
    </div>

  )
}

export default Page8