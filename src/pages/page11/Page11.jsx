import React from 'react'
import classes from './Page11.module.css'
import Circle from '../../components/UI/circle/Circle'
import ButtonSend from '../../components/UI/buttonSend/ButtonSend'
function Page11() {
  return (
    <div className='page'>
        <Circle style={{marginTop:'38px'}} url={'../images/gift.svg'}/>
        <h3 className={classes.end_page__title}>We've found some awesome frames for you!</h3>
        <p className={classes.end_page__text}>Send the results to your email to receive special discounts.</p> 
        <ButtonSend text={"Send"}/>
        <p className={classes.end_page__textBottom} style={{marginTop:'98px'}}>By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
    </div>
  )
}

export default Page11