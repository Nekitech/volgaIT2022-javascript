import React,  {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {CounterContext, PageHistory, UserAnswer} from './context'

function Main(){
  const [counter, setCounter] = useState(JSON.parse(window.sessionStorage.getItem('counter')) || 0)
  const [pages, setPages] = useState(JSON.parse(window.sessionStorage.getItem('pages')) || [""])
  const [ans, setAns] = useState(JSON.parse(window.sessionStorage.getItem('ans')) ||{
    'men':false,
    'women': false,
    'eyeglasses': false,
    'sunglasses': false,
    'selectGlass': [],
    'selectBrand': []
  })
  
  console.log(pages, ' ---- ', counter)
  console.log(ans)
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
  document.getElementById('root')
);


