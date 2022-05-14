import React, { useContext, useRef } from 'react'
import classes from './Page10.module.css'
import Slider from '../../components/UI/slider/Slider'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import SliderItem from '../../components/UI/sliderItem/SliderItem'
import { Link } from 'react-router-dom'
import { CounterContext, UserAnswer, PageHistory } from '../../context'
function Page10() {
    const page = 'Page10'
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
    let selectBrand = []
    
    const nextPage = (event) =>  {
        if (count > 0) {
            setCounter(counter += 1)
            setPages(pages => [...pages, page])
            setAns(ans => Object.assign({}, ans, {'brand': selectBrand.join(',')}))
            window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'brand': selectBrand.join(',')})))
            window.sessionStorage.setItem('counter', JSON.stringify(counter))
            window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
          }
          else {
            event.preventDefault()
          }
    }
    return (
        <div data-source="lol" onClick={(event) => {
            if (event.target?.getAttribute('id') === 'item' || event.target?.closest('#item')?.getAttribute('id') === 'item') {
              let sliderElem = (event.target?.getAttribute('id') === 'item') ? event.target : event.target?.closest('#item')
              if (sliderElem.getAttribute('id') === 'item') {
                if (sliderElem.classList.contains('selected')) {
                  count -= 1
                  sliderElem.classList.remove('selected')
                  selectBrand.pop(sliderElem.getAttribute('name'))
                }
                else {
                  count += 1
                  sliderElem.classList.add('selected')
                  selectBrand.push(sliderElem.getAttribute('name'))
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
            <TitlePage style={{ margin: '30px 0 0 0' }} text={"Choose your favorite brands"} />
            <h4 style={{
                margin: '10px 0 20px 0', fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '30px',
                color: '#697580'
            }}>You can pick more than one.</h4>

            <Slider>
                <SliderItem url={"../images/rayban.svg"} id="item" name='ray_ban' />
                <SliderItem url={"../images/oakley.svg"} id="item" name='oakley' />
                <SliderItem url={"../images/gucci.svg"} id="item" name='gucci' />
                <SliderItem url={"../images/ax.svg"} id="item" name='armani_exchange' />

            </Slider>
            <Slider>
                <SliderItem url={"../images/HilaryDuff.svg"} id="item" name='hilary_duff' />
                <SliderItem url={"../images/prada.svg"} id="item" name='prada' />
                <SliderItem url={"../images/versage.svg"} id="item" name='versage' />
                <SliderItem url={"../images/vogue.svg"} id="item" name='vogue' />

            </Slider>
            <Slider>
                <SliderItem url={"../images/michaelKors.svg"} id="item" name='michael_kors' />
                <SliderItem url={"../images/coach.svg"} id="item" name='coach' />
                <SliderItem url={"../images/toryBurch.svg"} id="item" name='tory_burch' />
                <SliderItem url={"../images/burberry.svg"} id="item" name='burberry' />
            </Slider>
            <Link to="/Page11">
                <button onClick={nextPage} ref={button} style={{ marginTop: '14px', cursor: ' pointer' }} className={classes.btn}>Continue</button>
            </Link>
        </div>
    )
}

export default Page10