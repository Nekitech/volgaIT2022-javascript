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
  let button = useRef(null)
  window.addEventListener('click', (event) => {

    if (ans['selectGlass'] != undefined && event.target.hasAttribute('id')) {
      Array.from(event?.target?.childNodes[0]?.childNodes).forEach((el) => {
        if (el?.hasAttribute('id') && event.clientX > el?.getBoundingClientRect().x && event.clientX < (el?.getBoundingClientRect().x + el?.getBoundingClientRect().width)) {
          let nameItem = el.textContent
          let arrayAns = ans['selectGlass']
          if (checkElem(arrayAns, nameItem)) {
            ans['selectGlass'].push(nameItem)

            setAns(ans)
            el.classList.add('selected')
            button.current?.classList.add(classes.btnSelected)
          }
          else {
            ans['selectGlass'].splice(ans['selectGlass'].indexOf(nameItem), 1)
            setAns(ans)
            el.classList.remove('selected')
            if (ans['selectGlass'].length === 0) {
              button.current?.classList.remove(classes.btnSelected)
            }

          }

        }
      });
    }
  })
  return (
    <div className='page'>
      <TitlePage style={{ margin: '30px 0 0 0' }} text={"Which frame style are you looking for?"} />
      <h4 style={{
        margin: '10px 0 20px 0', fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '30px',
        color: '#697580'
      }}>You can pick more than one.</h4>

      <Slider>
        <SliderItem url={"../images/rectangle.svg"} text={"Rectangle"} id="item" />
        <SliderItem url={"../images/browline.svg"} text={"Browline"} id="item" />
        <SliderItem url={"../images/aviator.svg"} text={"Aviator"} id="item" />
        <SliderItem url={"../images/geometric.svg"} text={"Geometric"} id="item" />

      </Slider>
      <Slider>
        <SliderItem url={"../images/wayframe.svg"} text={"Wayframe"} id="item" />
        <SliderItem url={"../images/round.svg"} text={"Round"} id="item" />
        <SliderItem url={"../images/oval.svg"} text={"Oval"} id="item" />
        <SliderItem url={"../images/oversized.svg"} text={"Oversized"} id="item" />

      </Slider>
      <Slider>
        <SliderItem url={"../images/catEye.svg"} text={"Cat Eye"} id="item" />
        <SliderItem url={"../images/rimless.svg"} text={"Rimless"} id="item" />
        <SliderItem url={"../images/square.svg"} text={"Square"} id="item" />
        <SliderItem url={"../images/wrap.svg"} text={"Wrap"} id="item" />


      </Slider>
      <Link to="/Page9">
        <button onClick={() => {
          setCounter(counter += 1)
          setPages(pages => [...pages, page])
          window.sessionStorage.setItem('counter', JSON.stringify(counter))
          window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'selectGlass': ans['selectGlass']})))
        }} ref={button} style={{ marginTop: '14px', cursor: ' pointer' }} className={classes.btn}>Continue</button>
      </Link>


    </div>
  )
}

export default Page8