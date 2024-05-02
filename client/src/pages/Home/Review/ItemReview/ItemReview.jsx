import React from 'react';
import style from "./ItemReview.module.css"

const ItemReview = ({name, text}) => {
    return(
        <div className={style.ItemReview}>
            <p className={style.name}>{name}</p>
            <p className={style.text}>{text}</p>
        </div>
    )
} 

export default ItemReview