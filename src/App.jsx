import React from 'react';
import Header from './components/UI/Header/Header';
import StartPage from './pages/startPage/StartPage';
import Page1 from './pages/page1/Page1'; 
import Page2MenOrWoman from './pages/page2menOrWoman/Page2MenOrWoman'; 
import Page31 from './pages/page31/Page31';
import { Routes, Route} from 'react-router-dom';
import Page32 from './pages/page32/Page32';
import Page41 from './pages/page41/Page41';
import Page42 from './pages/page42/Page42';
import SunglassesPage from './pages/sunglassesPage/SunglassesPage';
import EyeglassesPage from './pages/eyeglassesPage/EyeglassesPage';
import Page6Both from './pages/page6Both/Page6Both';
import Page6Men from './pages/page6Men/Page6Men';
import Page6Women from './pages/page6Women/Page6Women';
import Page7 from './pages/page7/Page7';
import Page8 from './pages/page8/Page8';
import Page9 from './pages/page9/Page9';
import Page10 from './pages/page10/Page10';
import Page11 from './pages/page11/Page11';
import {css, StyleSheet} from 'aphrodite/no-important'
const App = () => {
  return (
    <div className={css(styles.App)}>
        <Header/>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/Page1" element={<Page1/>}/>
          <Route path="/Page2MenOrWoman" element={<Page2MenOrWoman/>}/>
          <Route path="/Page31" element={<Page31/>}/>
          <Route path="/Page32" element={<Page32/>}/>
          <Route path="/Page41" element={<Page41/>}/>
          <Route path="/Page42" element={<Page42/>}/>
          <Route path="/SunglassesPage" element={<SunglassesPage/>}/>
          <Route path="/EyeglassesPage" element={<EyeglassesPage/>}/>
          <Route path="/Page6Both" element={<Page6Both/>}/>
          <Route path="/Page6Men" element={<Page6Men/>}/>
          <Route path="/Page6Women" element={<Page6Women/>}/>
          <Route path="/Page7" element={<Page7/>}/>
          <Route path="/Page8" element={<Page8/>}/>
          <Route path="/Page9" element={<Page9/>}/>
          <Route path="/Page10" element={<Page10/>}/>
          <Route path="/Page11" element={<Page11/>}/>
        </Routes>
    </div>
  );
}
const styles = StyleSheet.create({
  App:{
      position: 'relative',
      maxWidth: '768px',
      minWidth: '375px',
      width: '100%',
      height: '638px',
      margin: '0 auto',
      backgroundColor: '#E8F0F2',
      overflow: 'hidden',
      textDecoration: 'none',
      fontFamily: 'Open Sans',
      boxSizing: 'border-box',
  },
})
export default App;
