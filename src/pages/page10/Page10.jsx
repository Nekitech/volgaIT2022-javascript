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
    let button = useRef(null)
    window.addEventListener('click', (event) => {
        if (ans['selectBrand'] != undefined && event.target.hasAttribute('id')) {
            Array.from(event?.target?.childNodes[0]?.childNodes).forEach((el) => {
                if (el?.hasAttribute('id') && event.clientX > el?.getBoundingClientRect().x && event.clientX < (el?.getBoundingClientRect().x + el?.getBoundingClientRect().width)) {
                    let nameItem = el.getAttribute('text')
                    console.log(nameItem)
                    let arrayAns = ans['selectBrand']
                    if (checkElem(arrayAns, nameItem)) {
                        ans['selectBrand'].push(nameItem)
                        setAns(ans)
                        el.classList.add('selected')
                        button.current?.classList.add(classes.btnSelected)
                    }
                    else {
                        ans['selectBrand'].splice(ans['selectBrand'].indexOf(nameItem), 1)
                        setAns(ans)
                        el.classList.remove('selected')
                        if (ans['selectBrand'].length === 0) {
                            button.current?.classList.remove(classes.btnSelected)
                        }

                    }

                }
            });
        }
    })
    return (
        <div className='page'>
            <TitlePage style={{ margin: '30px 0 0 0' }} text={"Choose your favorite brands"} />
            <h4 style={{
                margin: '10px 0 20px 0', fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '30px',
                color: '#697580'
            }}>You can pick more than one.</h4>

            <Slider>
                <SliderItem url={"../images/rayban.svg"} id="item" text='rayBan' />
                <SliderItem url={"../images/oakley.svg"} id="item" text='oakley' />
                <SliderItem url={"../images/gucci.svg"} id="item" text='gucci' />
                <SliderItem url={"../images/ax.svg"} id="item" text='ax' />

            </Slider>
            <Slider>
                <SliderItem url={"../images/HilaryDuff.svg"} id="item" text='hilaryDuff' />
                <SliderItem url={"../images/prada.svg"} id="item" text='prada' />
                <SliderItem url={"../images/versage.svg"} id="item" text='versage' />
                <SliderItem url={"../images/vogue.svg"} id="item" text='vogue' />

            </Slider>
            <Slider>
                <SliderItem url={"../images/michaelKors.svg"} id="item" text='michaelKors' />
                <SliderItem url={"../images/coach.svg"} id="item" text='coach' />
                <SliderItem url={"../images/toryBurch.svg"} id="item" text='toryBurch' />
                <SliderItem url={"../images/burberry.svg"} id="item" text='burberry' />


            </Slider>
            <Link to="/Page11">
                <button onClick={() => {
                    setCounter(counter += 1)
                    setPages(pages => [...pages, page])
                    window.sessionStorage.setItem('counter', JSON.stringify(counter))
                    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
                    window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {'selectBrand': ans['selectBrand']})))
                }} ref={button} style={{ marginTop: '14px', cursor: ' pointer' }} className={classes.btn}>Continue</button>
            </Link>
        </div>
    )
}

export default Page10