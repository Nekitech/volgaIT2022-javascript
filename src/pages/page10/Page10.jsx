import React, { useContext, useRef } from 'react'
import classes from './Page10.module.css'
import Slider from '../../components/UI/slider/Slider'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import SliderItem from '../../components/UI/sliderItem/SliderItem'
import { Link } from 'react-router-dom'
import { CounterContext, UserAnswer, PageHistory } from '../../context'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page10() {
  const page = 'Page10'
  let { ans, setAns } = useContext(UserAnswer)
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
  let button = useRef()
  let count = 0
  let selectBrand = []

  const nextPage = (event) => {
    if (count > 0) {
      setCounter(counter += 1)
      setPages(pages => [...pages, page])
      setAns(ans => Object.assign({}, ans, { 'brand': selectBrand.join(',') }))
      window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, { 'brand': selectBrand.join(',') })))
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
      window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    }
    else {
      event.preventDefault()
    }
  }
  const styles = StyleSheet.create({
    page :{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        textDecoration: 'none',
    },
    btn: {
        width: '181px',
        height: '48px',
        backgroundColor: '#DEDEDE',
        borderRadius: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#FFFFFF',
        border: 'none',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.1)',
    },
    btnSelected: {
        background: 'linear-gradient(270deg, #45C7FA 0%, #2196F3 100%) !important',
    },
    selected: {
      border: '1.96px solid #2196F3 !important',
      position: 'relative',
      zIndex: '0'
  }
  })
  const classBtn = css(
    (count > 0) ? styles.btnSelected : styles.btn
  )
  return (
    <section onClick={(event) => {
      if (event.target?.getAttribute('id') === 'item' || event.target?.closest('#item')?.getAttribute('id') === 'item') {
        let sliderElem = (event.target?.getAttribute('id') === 'item') ? event.target : event.target?.closest('#item')
        if (sliderElem.getAttribute('id') === 'item') {
          if (sliderElem.classList.contains('selected')) {
            count -= 1
            sliderElem.classList.remove('selected')
            sliderElem.style.cssText = `none`
            selectBrand.pop(sliderElem.getAttribute('name'))
            sliderElem.childNodes[2].style.opacity = '0'

          }
          else {
            count += 1
            sliderElem.style.cssText = `
            border: 1.96px solid #2196F3 !important;
            position: relative;
            zIndex: 0;
            `
            sliderElem.classList.add('selected')
            selectBrand.push(sliderElem.getAttribute('name'))
            sliderElem.childNodes[2].style.opacity = '100%'

          }
          (count > 0) ? button.current.style.cssText = `
          cursor: pointer;
          width: 181px;
          height: 48px;
          backgroundColor: #DEDEDE;
          borderRadius: 24px;
          fontStyle: normal;
          fontWeight: 700;
          fontSize: 18px;
          lineHeight: 25px;
          color: #FFFFFF;
          border: none;
          boxShadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
          background: linear-gradient(270deg, #45C7FA 0%, #2196F3 100%) !important;
          ` : button.current.style.cssText = `
          cursor: pointer;
          height: 48px;
          backgroundColor: #DEDEDE;
          borderRadius: 24px;
          fontStyle: normal;
          fontWeight: 700;
          fontSize: 18px;
          lineHeight: 25px;
          color: #FFFFFF;
          border: none;
          boxShadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
          `
        }
      }
    }} className={css(styles.page)}>
      <TitlePage style={{ margin: '30px 0 0 0' }} text={"Choose your favorite brands"} />
      <h4 style={{
        margin: '10px 0 20px 0', fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '30px',
        color: '#697580'
      }}>You can pick more than one.</h4>

      <Slider>
        <SliderItem url={'data:image/png;base64,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'} id="item" name='ray_ban' />
        <SliderItem url={'data:image/png;base64,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'} id="item" name='oakley' />
        <SliderItem url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAATCAYAAABBaynFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAScSURBVHgB7VlBUxNLEO7ZgPBuOb4qoEyV8Grf6eUdrAI9uB4skYsb/wD4C4BfgJw8En4BcPTkchHQg/ECUQ+GW6rUqrW0LD0ZTiKaHb/ezJBljWQnsCFaflWbzO7O7rc93dPT3SPoGIxPujkhKC8lZdUlf3CfKqWSV6NfHBevuflMhvLchow1yFhLU7Zu8Yn4BcdxsweDNIvmDI4cDh9Hie9JnAsJBQuq4MG17U1vlTrA5evuUiCUcHj/uX2aTyLYpUl3hf+T9o/jUDZJcyDO4r+C/wrfg0xZEZBzUtm6yTcx5c5SQG54Imh9Z8Mr9kU7XJxy8wcB3SelyIDoannTK8VfhJk7g49YmJh0p6Hk2+jjkwHqgnYtgpANwZIrR9AeBKBOlHl5sjB9IGURzSxZVAkkzZe3fpRt4oY7B44lGM+Ckt+nDpCULxxL2SHfN3ojLHK4Keu0zP+WvsfK7K/TY2qjTAaur/J9fEgWL3jMrpk6BN6RXDncV5CxMieuu7OS5CrPEhiQd+7zz2VjK4f3+J/blqAX7CrJEEf4YH/H8YVj2SGftJpjoduhQlkh/TwzRWOtTGIpfB8fUlAvWaAehYoDiurUx9rV1iOEsmEMeCD61brXMR88WJp8cVjqhxWSU9dWk0579SG3qYcRM7ZFE9lg4MtkiG7zteAP4egLUNAaGYBdCZ55Qj0ItRTM6HMEUx4ZAP2LMkju4uN8gQom0+JrhT58hEPN2Uk/8/XHoXwKEWEaQBSZ1ybLa5lpMKX6JzaCOJ9pQGXK1wpMn4uc+/QbARHg4XokuiBblA8a3aMzgCWaRQO2Kp/+4FSAwOgTnQH6EMbXdHVBHJ2tx4KTfBnpP7BPhd+hgvSrw7LqjcpFCNGcre2A8H8XBuDwwe6lF5UZRD2OPFk60It8rWBtP/IqpJN7uN9LU7fOJ3lQRhL8s3Iv7TAYjWotynEpjgxh8swRPpQ20+ZrBUuRN/OfIEg9rxSR0FwaeAUTD8JgryF16gBj/fJXM6VIAs4AUIt1k/Y/wgekzdcKoUI5/yHtLgTNntRK2mHgIJKfSbqZ+EH0RZ5WIQN8s2hetxEAJpaNc0oMzgoZgitD2uN1gy+OUKFsWV8tlPH4Q2DJsJKldg9mBP0XOTUqLKj1dpHbvAZzYbrdM2EfuPmdh55Rnvb8gVfhDQB1mksiGysBddX7PBaBYeTPuSfqqovd4osjoxvvX1Y/DI3Z9zDAPOWd4Qt2fnjMfvruVbUWJx/6174rZbhbwqW/ws6m2SAz3r6qlkZGbQ6wHT5GLtju8D/2R/BVo1x/2/Y4+q2wux34TAXfr+6TIfDOMmTZw4wZx3vGR8Zsd2jU3orLxmC3F/TRBpqDXzN049mGVyZDdItveNTOCV2ZCmj93etqVbTqiNlwB3/TOHJQnIegZ1fdOg8r0vtvy+yqTxrdhq6mYRxXSBxGhn6kC5cW1zqpYLXigsB3BLt5tRMCbp7BXATgYNAJd3MkrZ+WbGnyYauvKPSShXdsb3lzos0HObyhLZq7MH4de3vsxigl6K04RIy1NFMhXfK0GkZbU1G7cbmu1/i+AwlPgKWsssr8AAAAAElFTkSuQmCC'} id="item" name='gucci' />
        <SliderItem url={'data:image/png;base64,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'} id="item" name='armani_exchange' />

      </Slider>
      <Slider>
        <SliderItem url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAZCAYAAABTuCK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATrSURBVHgB5VlNVttWFP6eEn7aSbyDmB3AIOc0dIAz6AnJJGo3AF4BZAXACgwrsNlAo0xacjpATCDndFC6AswK6g7aYvdYyvdJT46QjcGyxMHJd44Ren5P776re7/7Y4OcqNXcytUiKh+PvDYeOL5bd6vp+8UrdHzf66AEJHrJ7pHWl6FAmw7QDIAXHPAxWuhoDhynevrLz5caW113d3nZSa97vu4e63p25L3AA4LkMjz30BcG5whxzjPsFWE8z167y3N9HPO5Fd7WT4+8VrT/S3eL++9qXPpy8LXAoMMD15NPGOItP3/yGxnU8bMf3GVMiccBGtrn/z5W5q/gDbY22A4d+Nx3SQb6GDnBB7R48elG55gFhOh8tJaXBr14V0qfe4R3pICVaWjHCVEJDfzff/OyOqmaEHtn1ptyK926YxszDp2Diq9L8b1FbEM0kBNhTCu3IrfSJwmkdq7Lg1Xp0h0K52XX2TnLied0F7AJB+2F/+CP20dBctrAKJdffelKrrW7PDt79uRe//N8lWSd7lPjTzSuNbk53SrxYvX1T0/HzdNGvQVc0PUaIbBGftvSuuev3O3M85ZlbbrS4v7gvAZd8o2Ur/k62Ihn1/Sd1mBKUOHvuee15zD4NbuLeJeda2W90P7pe4hGTKwXnsGV59hx8fp+sqb0QPoopNAMLvNdLCmrYYBZofJ9Hmhn1HxH80O8V9Bh9K+bAL7Gu/PD2YfDA/LSvinrmgRGVEkrHfVyb4P2p6wGMd229L8yF3527bigbMZcC6Ry/Ww+OxCIrgGDiaED9Gg9tKK3iYvqyn0O+cyavCRJQRPwhZycffAGXnDKoCTXp6XUeOtdkyvAmgIXCoBoj3ug963zhLel5PAJ0pzevNHscyg8gdIzatLPDLdvXOAMKzFy/XCYb/mCRAcHKADco6NjBkGwxMslSsRA6VHeakanf05cWOxgQljrbo143tpNayjHsAwaM9iQ56SCWk1/+FJ9zBg+K50KH1ORVosgfxtENvjv5iTrlO3QChuW1yOK0YtTbCiqDUFPqkzj0ZPgXipStgx2yMt/KTuhoqoc2ptkfVITWF5PUKOOTlAQjM2xHce5QMkoXenfv3IbiAuOQ5XHymByUQJ5HZaWVuOSvVoktVhjQDawl4HcxdFdIDohRysT2Tv94O1iCgTkdaaIW+L1rhNZeSGpYgpPEd5PS6NUS3c+B7sWpsSibSBFvG7wBgVauWJW1IU0X4DSEyQlcQIGrYkrSGUtXHcuXrfrC+Nzx2ZmwR1jDeuDiQuozH7lIbD5eLZMVysAOcD26Am0Nu5L+5gSoiobczYxuqd+qdZAukqNvMJBA1OgVE4XJbDv0iAXN5nB7FFRyso2ku/DfrDPA9Xv2qwir3u0kq2cqWKVMlzLTHoKnqEEwcGomMOvWvSqDfWC2CtS/70SeUVcN1SRE7L0Nj+tfn9s6RvNmf83+HvsGHsmJmWBUmZgol6L5jbV9FKap/4LhT6Qxf4zNxD+VjmSDuTEqWIYZT4txLLFH46pIFRGdZpqO6ShQB0G+FG9eFKK5N9izXDAPlJ9lKxhvM8o2VpBqgq/p3KgGNji6njcT4uzgJn6uc5Ws+1ZVrhQKqcXgSSIdb9hShdiUx1LzDgevNLtjyVNBjQFtsOzX719zDgevNKVAVHxbcS00sYXgE+UoVVaN7HmFAAAAABJRU5ErkJggg=='} id="item" name='hilary_duff' />
        <SliderItem url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAATCAYAAABIgIm/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVKSURBVHgBxVlNcts2FH6g5diZLqIbhLmBushM7W6kRZs4K6YXqHSCyiewdAJbJ6h8gZbeJM50Ia3szmQR3cDMCaJsEjuOyHyPIikQBEmQkpJvRiMJJIAPeD9470G0207zdp+aVAP/X7pe3rNfnjs21cD+Lc2nU3depU/RGjY93ibm2CTfRjymRXSCb5sq4PCZMydBrk80VIW5sKjZCOhEBORQBXzZx7hHzowCGl1duuMKXW2s4W9S1vDlIc2hTD8XKVsOjPdE4jzT7UWV8ZkvBPzEVIgi/oFFdqMNkDHGJvbkhqcvnFbDpz46/imNMr//Sp23/7kzdQII+QOep7XNsuyrV/+8T1ay1EhHs6DM/EVgq7cCeqfOFwTkXr9xX1JFHPzuOMKif1NjEU2vL91O/F+3H4Ggs73PNCwTAvfd9cFXAfe/fu0ekwEs6bdn0uHtK3eGBXSxSaPVjNTcbdCEBaEhMysbkxcKrR1DezsYS1509/C5MyBDhJov84ogBDkQbpsqIrCo1Ari/cA6kw2H1+nDKt/p9kPti6+h2s79n/7mtMgAFtXEg880SG02hAjSfVoDoQAsOk81CvqLKgAWOyCNMoqldW8NsJgzRfnsu/209erw4JbOSMO3sUOnZIDaAmSrEcrEcFVGWlMEP1AsFopx+OKPx1QNU7UBXNuw5i5tEbDCi6pzRm52qrZzXxOvUVuADF8oLkbQI1ofXmYe339Choii3y4FGtct6LTMrW0agRwraFDEl2OSMr5rCVAoEZQwPEcLx9RYMULr0nM0RhQIjaFc2aBlA26+KkIrLPAgEl9d0GKX8a0tQI7QSBEggpBzWhNCOfM46jMNqWNtTkJ5TUDDZ2rdHLUu8jyIwnca6PYPfIussJYAeWKE1+lDFnkbk6A18OuRw2Pa0phzLMo4jYi1Oc7DMoHWcsymyKZLW4WVk0tGfJO8ce8W1qbhe/cwPwBrUBEEteQwHu7tEUy9xW5BmWR09cY1d00L/xjjykQfYwwHQVBzNSRNv+7QMUJtz2RISZsTbWfLPThyhuB9ml7WMkBYV+FM4WuOlohvO0ydIjBf7At7jZTAOK3A+xc6vsUCXG5o4r8RZcXn3BjPPmKTvb07GlctVdHyYG+ykJJzExWd6Nl7LGpadXNZmzlhZ4Kyi+Q2NLFbtuX3o7RiSt8HntpgSfPLfO8tcncX4KsUI/L4FgsQHapUQkzBAQYT4iAI2jVbLMNvT3rFpgqIrU8sFcyodMdWCOvsh/nbduGppbUk8qRQkF35meWTVB9bIc9rrBWF1oVlWTdROeocVt0HiQk+N9Jngs01DvmTSA7uM+8T6HOtk02mFXzEaJqzlZblGTysyleXVpRZ4FbBVRMIaq6eUYyoHMUlsI7BrUd49pW818PG3aQaV2nFgDYBoaRAKCNevU4X5NmK4ClaKFj0SvgOM7HGKq0YxA0/xAJlsAuLAg9P85hvGCZFFQk18szDttOKg2eOes56ENLL7HTgi3PZgK9RWiEL0FbfDSqeRToIzRhqXsSLiQrZuoQ9FCKis0woLVmfUf4ZphUq1kwrmAOnP7CqM2nMEWqcmSus8HYDVnW/0CiSBmFaoeELK0w8loiuclq6u7QIA0x4obsqKgIvbAfagihQl16wwHq6SBP3alwU1haw42sa/q1wHkZF7FxI65zkvDJgReBNN9gTDbkwfztHgOaq69KM1yu76zThCyUZNeKbYb8oYd6lOrAXQRhdXlABSTUFwZnBOY+r7RCk/8qcdWPpIOddKvgSmr+N9mTVZ/7TJ/IM5zbmK3HoFL3zDTn8mW/wyhdvAAAAAElFTkSuQmCC'} id="item" name='prada' />
        <SliderItem url={'data:image/png;base64,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'} id="item" name='versage' />
        <SliderItem url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAYCAYAAADNhRJCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUvSURBVHgB7VpNduNEEP5acn6GWWBOMM4J8CzmPZINzgLIsBlxgjgnSHKCeE5AcoLYFyDOBsJjEc9mwnssxjnBiBPgDRAnYzdfSS2nLcu2JJsJ4el7T5b6R1Xtqq7uUlWrL3a8Gsbh/3rR9pEDL77yqq6LcpxOreaV/1xBxWrLhcEAvd9+aXfn8M0NjrcTPcuYb9ZRxQLyiNOaNn4b1EcFKbB+g16n0+4J7ZIC6rx2o0YNdHjbRgYIof46zkinZlXv8WrKoG6ByxWgggXhuMDWjtd8e9Hei+o2d7zLGN/cIG1/yP8uSqPQPQc4NfUN8nyNHHjxrVe9HeCStMrKvZctaR5R2AdQ+Sbf7XpAA32FwxKV1rCVKAIR67Rn5TzcPcGR0smC5OCPYCtQo0cmbaSE5p8kbc+qqnN8LRnf5teeN6FAjS7f6SElVDi2iilWyOuYdy/WrUFrP59nRUlYHeBUxxRlrK0hzK1xi1xSj9u8c752g2ZJZh1ncyumSBF8Jw0dGZCWGTWVDwVjle+G2M4qjK2X3jEJ7Y/Gp4JlrqOc4H7PS+H46qJ9iAyQ8XOivR9VKHya1C/vcq0TLE0NOW7H6gO8ufq5XUNOOIZIY4yJscaUBI7Mo8+rGV3DsDyBlRXnD2SFHp+htJZEgbL+Ghlh9jsfHxHaGR+/Smkw01CSn7zWaJaFOq/RXoICHx0jo85jjZYVtgoFPhxGShQlUJEtu1HdK2kCMStsosCDoWQXsniqyrjfKKxwcdBp4+fC7tx+jlN7++MPv09U24W01iiKNa59YYXLQOjBVlJciXDiFWn2RqewwuVC44TGsDHvSrJCQSleMc9TpULrCGeFzyhGAwUWBz/yFzEGJ6lyljVaHmmuMFSB5SNRidP2xiDed2+FTRT4T8CZ1pBkjbgPr+W2wuFwuIHseJZUqWORHIa4Pse/BIbK8mVJdKr3nmEBlKY1iDUyZnlixyyNF5XJChnnvIYVHBeniHuun+H9Mt8fi5EOzf5MpXXtuCzDbgdcLTydMoz2YYDDGXFcPzYOGfc+MsAE18tW2TePnVjX+lbKMKdFvCfB/tUbZjFm9Vv9G43bNXwJZYTImX/n4jtkwJBZASruFexMQZa0lJ4otqLvVrnzz8uqYH8Gpaa/4uKMt8SVIaBtT2LJpiyQ8pIUnzYrWGAgCeNGFoRyqfaf4Fql6S85Mbk//Qu+JCKRA0LDHeZP3A4c9Ph+ohdnkq65aBuBShajImURNjMh28ugHecTr1sGbUkOp1Li/x2zlPgYUEKB0PlImM7RsQ/7WIXEjFkuSzk6dhK1xY6hBMc6oqMZsjzbzzadabysIyIRxo6KmHd6j16JCX80E1yFVzrBg9x86Z2JciV36bio0lr3xKHj/l5nWbzJPTnCUQqDItsyDvoP70uhs1VhXYVCfo47+I7GGZX2vE+nzgm/uTdc1pHOCft1I17Cl/t0LeIlS62SPdkkliUZTj4bsqVtfuMdsLxPJ2/vUSsxOL+j8c5B/n1FxxwnCuw8bAgEWBUPmM+Ha/3ZR0pE4ME5mlCBHQr3zdO70Iegg9QirdOgTeGE9+/Jtjzy8i1eOsZLnCn27Ub9bj9x5ORBT4WK7YhVP2olyjEHZskzn3tJJkbBaJxf/WQEK8qkYI3g9/trQe2xnFigsnaDfZRCDZSM0MGgJXaN1dTE4ri0SluXHnqbZfFyX+MD2srFO4mXWrzHeJFOhbUHAc31wHGRcrhfJ8RPC8cmIyR27Jq4Mq3mM06iJhV/jAfEP24Uag92DptpAAAAAElFTkSuQmCC'} id="item" name='vogue' />

      </Slider>
      <Slider>
        <SliderItem url={'data:image/png;base64,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'} id="item" name='michael_kors' />
        <SliderItem url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAhCAYAAADu8EQnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkISURBVHgB7Vs9cxtFGH73pNgKjZWKFARfZgKIykrBkGSGiVwACU3OvyBKBZ2dDqrYvyDOL4jcQeVzQxIoIhckYSiwOxcMXAYKuogGHNu65Xl276SzdKeTQxLOiZ+Z80l7u3ur92vfj7XIK4ZzlzwXV0NeIzjyCqKyLRuvEyNL8orhj1+2OidrtZNdiOf0mdo5fN9ie6PhVV23VgmCrW15xaCk4CDxnx6XhvkSiquUdB7c9Vt542hWo4/uo7t++8LHXh0iuzqxLWc5n9ZSVbyUVNkJ3zsac+NjwAtjAjkkKLQmnr/seWFJmpC0Dq4aCP65huC9dabWgYYFo8ZSI3mdeqdWpzb+/uvWn6fO1OrdsrwP5pm5cN1D12o05ENHyZd4TxPP1dvvvP/m779sbcohQOH3xFCJj9s0mOfi7oLAHUeLN+74yX+kff4Tz4NALOBrk3PB/kxxHj6HVi+GIi1RPWbynZ0w1H/JIUGhmUgTB2LPgMgrypo5rviqWLM3NpQjdRXKDTup/EWBgOmsZ/UHUQLtyIYcEpSlwDB7GfY2EL0BRhqJA2M3YAavQLMMI7mvgTHzZgC1Vhkm6Yd3/Ots2qnITW21bI3jcJ+CQDRGvVeHEBLH7sfttn8ggfk/UHjHhmC4AGbV6XCCITSlbVyPI0dEjJb1zWHLMK0L7XXANGgeGHIRTtE6+sxrjtWyCYZO8RnuMxyE9nWx86/xXUJthIDshdL+6Xu/0Fp5KEKMt8/UmiD2e2DCFyD2BojcALGPY2/8UKilSr7Cvarsntk2jFOmz1cP7/lfw6E5CUZ+gT6VyBt9TAcGfRh+UChcicw12o/zvtuVNoSg4zhSgXPkwTl6JAVF4Zn4wWdeHTafzKrgqoPKZKKLz1tgEs3pOhhTMSZSgREaGkotUrKMPi482QaencDnH3Gtwyx/Y8yyZaSYOS3oQG1q2mIlf76xI4/2ynISbQE0vXLq3dqlojKy0I4NzGjzWFeaoZYTNG2aex7u0Lw5aNgc6H0t6noVzFmiIwRGPtHWozWZG+yrLTB6KrQmOChZR6mleYWyhrYlXhizyX0XdzPm6aRQ+2nCGw+/832z9xYUhWYi4rb6g3v+Aj1TMk1Z7Qkcx/mNzxmQw4tkyLDWpTepDFNUtytVPqNTwvBip4T9URkhmOkquYU+DTpN9EBDahqYTIfJ6ULLQ6l+dHnuIimD9nm0T1GYdLR3FhGF9k4l7N0CZmC03afqE3+HJoY7/6m3AEJTg1o/3fEDeLJ1ZGRaesJ4n9YZUeJWtHrS1Zqm2C0rNd0NtTGhUVamFb+O3ii82fqu1hyLqWUJQlOFRvvI8hxp4rNgt2QJTCJiofRAp/F1eucNZ4rtkWc5HafIaHK3wQQwukdwmlYwcDYyoStg0Gnuq2nvo+YyvHAiTYVWdmABlhmm7CljjguJQxFixGAajntTMneajOX4HKGFTO6AH4n4jiaVWkjvlQzMy73SfPLuMCmAfXavhDDj22KHGUc4whGOcIQjHCHDsekVYm0RdoZeH3OTysZUndCRdZZ4YueB7j8DYySd/Zz3yQcozpZKUmfQbXKcTJHZldDjZD50Y29Pgv+ar+Sa4JhchROzJM8Bcf42kWt1hVUWm79lJqgde8mGfkgW0LNNjG86Nr2XiWiOdvydDhlDqrwxamihcOWTWX4mjBkvMfsRM82kwkJZQO7yCV04MJm1uhYIdk0yCACmXdE2X0nGdTjn5FNpxXPyhyM88Ewo0c9ltpmJOWiVPWLgfbElp+sQrmV5BnCekjZJ82Yiwc7E+K3k2qNTBI2ISVpID2W86B59o99XxXyrQ2UwzIcs1DJo3El61eOOUXFnaN5tNVxsXWLRdNSPjIklKUyMguebYouxMQIwZnYUY85f8lpY2NXeerFYaP7SuGWhC5e9n0X3f7QS1fzh7uqKHABIJMwrm3/tA1Zi4h+ZHbUOvHs5Lo0lmdib95J3P6UUNpLOeWNMsL9zXO6nMLA1amKCjOCZFYkLtglEDPxZ9jNQ8hhITG5DknW/8Iu1LXCNnFNygKzNjSQDCahGi2ZcxgTnGGIghU/LXJ4gPbjjUwtvyUuEY44t6GG7y2r6OBPwR4X9RHQPkQa6yTad2Dfy5oR47X8/1og5F0aNo/ZkVeyPleX+OIyMTONiyqOVcc06tHVRUgT7RcFxwr7Z6gGbdXKDzQP77joD0pdyDoZ5ThkTkPqNlHXNZ/XnPg3tOYH9b05sZUIG1lM9VpLVxCm4VCDpniooURVkLGQJ9otCOVVy9cHOsBDJtFREqGHTd7CzMYEMryvVnJq9ORQvNv+8wyTy442BrmYPR/9Mk26OMqa0x5WTcXEQJQBdrmC905nPtamjZoJVjEByXN+Dgh7TTkWeP1KEwDhlIrexN88l2w0jL3v98zd9uNC2VYybPcj5md3dkIXlx/IioGUtx7FxR50LcqKzJYNwx3EiYlATLnzq9RwBUw1IMT9ouyhjQulUC+EPNkFY5vEDV1i9YCiTvEJtDk5tpMxTz3SUQkmNdcvl0YerBkGPUl4SyMTFNPOZ50Tsm8SWiaaSbabqPjAvEwJjC4c9mZYEQ5N9e53xRM05KQM37QIjb4nOYKR1vvaBVfyM/ldkTDCwzztR9zxR5t6AzMA1vPR28gAtnQgsppXnkUWEbEqiuEpwHMafTcSRZk9DJuM2Ps2NmjOFCEOxpSk7aVF5YRABwfGjcMcdeNTk0cf4eGMMHv/Yt24xqa0GPfm8xAEtADTj5sss8pk4kdKHhZ/VybACBOcPuRDV1gbBxeIZGdLMmpxEB5FPR55awDZoo0dTk+YlUkspFIYIYkMS3K5xjiQDTZUfmjQOA4nIW5yVFGeJMWgkiEPrxjuuJ8eg783Bvsm1m5MG9KDVyz0FoNIW83RCGszZmXMl1iNUSpszLD3zyBxnnCs1moN+yVxhGky6rgsNc+QibKCLe4BKOhnLPZRrmVY2rbWZVoiNiERnZQa9NwfXkQUQflHsvwKcViJZXmCbf7Ccx48GhCPOm5rzq/YfcU6Y/hE9dLRtxKm4c9YRWXx4128m5rC50zhnvB/m7FBm7jRnzL+ToUzFPDH9RAAAAABJRU5ErkJggg=='} id="item" name='coach' />
        <SliderItem url={'data:image/png;base64,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'} id="item" name='tory_burch' />
        <SliderItem url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAOCAYAAAAFWA8aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ6SURBVHgB7VhLVtNQGP6TysMR7ICyAnDgOVAHhIHyGAU3YFmBsALKCigrADcgYSKoA8pA6jkOKDsIK7DOitJcvz/5b01DLnmgMul3Tpub3Nz/df/XjUUjjCBYWHXruPj8+3rq+RaNMAKwuOJuKYs6PLaJnPEeNZ/QCCMAlkXTyBRVDGeoT97NODk2jTCC4FefOiqgK2XTEn6dJ1xnbPEYFV0JHnSuFyhFc5j3A5vO2yeeFyeWulbRFQh0wcj79tnrJN/D71oECecXX7muZdN8Go04f6S8q4tT7zBNqbw69C06Ri1tJdZWMVcP3yNakrW+ljNOAxPTNlLvlxNvuwz/NBtq1FbdRpxPQR00/zQdfG235+vu/FhALuw7pfgV2DggajE9LiPqqdhBUWeo51hcdQ9x84bHIDbUi8TmGpjbNSi2E97YdvXiw/trMhgA6xumORON2prbhNZvWVEo8azV8rppNDJ0OMMDB062jQ1qGmRQMtxNk5NlZOO3T73lsvwxPMTcJhkQe483dVY/D51Y0RE2dB46NNsJB70jAwfoLS3rAB16Z8U9mrihTZMdNXKVFRikJcM6PQJUf8C/2psMs0xh6Ci0gmjzioA3hq/sMGFWewB/oF5bfz1DBcGRDCLHIS1FWyYacNx6uF+KpscqdKRl15DGczvLMRi5nMOWVAW8o0eAXRnw9+VXBpExxcB5IWVnR9+P31CDykHz75gyaxZ0yeDNv4/GRI82KLITy36mHWRxLXQML3S0HEg9rej6JxLN4Z+jddNU8/86+sE2ZIh6DhhERfwPUVJyeTwjTQc0WxvtT+k1Pw7myevD2qyQLWFQPVeGv2xqFYN92HArz3ruO4Z0kHJ1X1mMywiHWGbHIHGQF2uuh/7iPK9jMFKdI1lvpd5dQtgdMFguwqAUKvZePDLCptWig5+T5LDSefin6ODYNp1BBz9LBy4Bej2i7dqKnKsQkvw5akF3Dz3BHJxlM1MHRd0EjYY47B6uc1mBwvRrL90NqtAlbqvQmUzNsAm5ygozkg8kVQjXpP8Mjnbpvqu4HlAJSIfvU0EdOEpVohTVoi+JhaCjnZvNeJkqgpiz1BEomRkoqNDAecr0SoW/cyCCvyefBX8aVgqCYNa0FkYuHIGDtdJryIeaskSiI2KKDvchHnGcRRUVb2oFfiTGg3TQG164qS2KTOdgY6Be7YXHQDgBHOHOUVaiclcIHnBkOY47rddzSkdaPbq17q7NC9T+qBlGLWbamn4eaB14rUmHPDS40+fySiWB4NjnqyVOWkSHAQ07kl0JjX8JizeO8nlyK6tOSlfswIDz2Iip8KGiHwFK0mSPvLQamcF/iKf0PlsRWfLbH6NUnUcHHGG7/NUvqQNvEI7HLhUAMk83kU0cE/+k3mHvo4Qfn1ykyV8wlKokL/2u2Jjp+smDgt4HSoef/Ihmwm+7j0L8bdAiowAAAABJRU5ErkJggg=='} id="item" name='burberry' />
      </Slider>
      <Link style={{textDecoration: 'none'}}to="/Page11">
        <button onClick={nextPage} ref={button} style={{ marginTop: '14px',
         cursor: 'pointer',
        width: '181px',
        height: '48px',
        backgroundColor: '#DEDEDE',
        borderRadius: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#FFFFFF',
        border: 'none',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.1)',
   }} className={classBtn}>Continue</button>
      </Link>
    </section>
  )
}

export default Page10