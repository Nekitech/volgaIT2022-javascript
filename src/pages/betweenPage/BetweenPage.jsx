import React from 'react'
import Circle from '../../components/UI/circle/Circle'
import classes from './BetweenPage.module.css'
function BetweenPage(props) {
    
    return (
        <div className='page' style={{paddingTop: '100px'}}>
            <Circle url={'../images/like.svg'}/>
            <h3 className={classes.page_title_blue}>{props.text}</h3>
        </div>
      )
  
}

export default BetweenPage