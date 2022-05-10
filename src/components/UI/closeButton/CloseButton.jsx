import React from 'react'
import classes from './CloseButton.module.css'
import {Link}  from 'react-router-dom';
const CloseButton = (props) => {
  return (
    <Link to="/">
        <img {...props} className={classes.closeBtn} src="../../images/exit.svg" alt="" />
    </Link>
  )
}

export default CloseButton