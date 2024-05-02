import React from "react";
import style from './Review.module.css'

const Review = ({name, text}) => {
    return(
        <div className={style.review}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.text}>{text}</p>
            <hr className={style.hr}/>
        </div>  
    )
}

export default Review