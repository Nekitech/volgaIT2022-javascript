import React,  {useContext} from 'react'
import classes from './ArrowPrev.module.css'
import {Link}  from 'react-router-dom';
import {CounterContext, PageHistory, UserAnswer} from '../../../context'
const ArrowPrev = (props) => {
  let {counter, setCounter} = useContext(CounterContext)
  let {pages, setPages} = useContext(PageHistory)
  let {ans, setAns} = useContext(UserAnswer)
  function decrement() {
    if(counter >= 1){
      setCounter(--counter)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
    else{
      setCounter(0)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
  }
  return (
    <div>
      {
        <Link to={'/'+pages[pages.length-1]}>
        <img onClick={() => {
          if(pages[pages.length-1] === 'Page41' && counter === 4){
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
          }
          else if (pages[pages.length-1] === 'Page31' && counter === 3){
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
          }
          else if(pages[pages.length-1] === 'Page2MenOrWoman' && counter === 3){
            decrement()
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
            setAns(ans => Object.assign({}, ans, {
              'eyeglasses': false,
              'sunglasses': false
            }))
            window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {
              'eyeglasses': false,
              'sunglasses': false
            })))
          }
          else if(pages[pages.length-1] === 'Page1' && counter === 2){
            decrement()
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
            setAns(ans => Object.assign({}, ans, {
              'men':false,
              'women': false,
              
            }))
            window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {
              'men': false,
              'women': false
            })))
          }
          else if(pages[pages.length-1] === 'Page7' && counter === 8){
            decrement()
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
            setAns(ans => Object.assign({}, ans, {
              'selectGlass':[],
              'selectBrand': []
            }))
            window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {
              'selectGlass':[],
              'selectBrand': []
            })))
          }
          else if(pages[pages.length-1] === 'Page9' && counter === 10){
            decrement()
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
            setAns(ans => Object.assign({}, ans, {
              'selectGlass':[],
              'selectBrand': [],             
            }))
            window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, {
              'selectGlass':[],
              'selectBrand': []
            })))
          }
          else {
            decrement()
            setPages(pages => [...pages.slice(0, -1)])
            window.sessionStorage.setItem('pages', JSON.stringify([...pages.slice(0, -1)]))
          }
          }} 
          className={classes.arrow} src="../../images/Back (1).svg" alt=""/>
        </Link>
      }
      
    </div>
  )
}

export default ArrowPrev