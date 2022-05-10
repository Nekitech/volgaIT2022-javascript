import React, {useContext, useState} from 'react'
import classes from './ButtonSelected.module.css'
import { UserAnswer } from '../../../context'
function ButtonSelected(props) {
  
  let {ans} = useContext(UserAnswer)
  let [select, setSelect] = useState(0)
  return (
    <button className={(select) ? classes.btnSelected : classes.btn} onClick={() => setSelect(ans['selectGlass'].length)}>
        {props.text} 
    </button>
  )
}

export default ButtonSelected