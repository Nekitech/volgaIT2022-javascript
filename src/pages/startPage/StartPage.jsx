import React from 'react'
import classes from './StartPage.module.css'
import '../../styles/App.css'
import ButtonSwitched from '../../components/UI/buttonSwitched/ButtonSwitched'
import {Link} from 'react-router-dom'
const StartPage = (props) => {
  
  return (
      <section className={classes.start_page__block}>
        <img src="../images/start-img.png" alt="" />
        <h3 className={classes.start_page__title}>Let’s find your perfect pair!</h3>
        <p className={classes.start_page__text}>Take the quiz to easily discover your perfect fit from thousands of styles</p> 
        
        <Link to="/Page1">
          <ButtonSwitched name="Следующая страница"></ButtonSwitched>   
        </Link>
        Let’s find your perfect pair!
      </section>
  )
}

export default StartPage