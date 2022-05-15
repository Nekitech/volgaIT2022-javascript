import React from 'react'
import classes from './CloseButton.module.css'
import {Link}  from 'react-router-dom';
import exit from '../../../images/exit.svg'
const CloseButton = (props) => {
  return (
    <Link to="/">
        <img {...props} className={classes.closeBtn} src={exit} alt="" />
    </Link>
  )
}

export default CloseButton