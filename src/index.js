import React,  {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CounterContext, PageHistory, UserAnswer} from './context'
import {BrowserRouter} from 'react-router-dom'

function Main(){
  const [counter, setCounter] = useState(JSON.parse(window.sessionStorage.getItem('counter')) || 0)
  const [pages, setPages] = useState(JSON.parse(window.sessionStorage.getItem('pages')) || [""])
  const [ans, setAns] = useState(JSON.parse(window.sessionStorage.getItem('ans')) ||{
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

  })
  const body = document.querySelector('body')
  body.style.cssText = `
    box-sizing: border-box;
    margin: 0;
    font-family: 'Open Sans';
    box-sizing: border-box;
    text-decoration: none;
  `
  return (
    <BrowserRouter>
    
      <CounterContext.Provider value={{counter, setCounter}}>
        <PageHistory.Provider value={{pages, setPages}}>
          <UserAnswer.Provider value={{ans, setAns}}>
            <App/>
          </UserAnswer.Provider>
        </PageHistory.Provider>
      </CounterContext.Provider> 
      </BrowserRouter>  
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('glasses-quiz-widget')
);


