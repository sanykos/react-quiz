import React from 'react'
import classes from './FinishedQuiz.module.css'
import {faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FinishedQuiz = props => {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                   <span>
                    <strong>1</strong>
                    How are you
                   </span>
                    <FontAwesomeIcon icon={faTimes}  className={classes.error}/>  
                </li>
                <li>
                    <strong>2</strong>
                    How are you
                    <FontAwesomeIcon icon={faCheck} className={classes.success}/>  
                </li>
            </ul>

            <p>Правильно 4 из 10</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz