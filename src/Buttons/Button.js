import React from 'react'
import './Button.css' 
import {withRouter} from 'react-router-dom'


const Button =({history})=>{
    
    const handleClick=()=>{
        history.push("/add-developer")
    } 
    return(
        <button onClick={handleClick} className="button"><span>+</span> ADD NEW DEVELOPER</button>
    )
};

export default withRouter(Button);