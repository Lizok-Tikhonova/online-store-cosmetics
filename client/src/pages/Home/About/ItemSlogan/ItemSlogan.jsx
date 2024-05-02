import React from "react";
import style from './ItemSlogan.module.css'

const ItemSlogan = ({number, sloganTitle, sloganText}) =>{
    return(
        <li className={style.item}>
            <p className={style.number}>{number}</p>
                <div className={style.text}>
                    <p className={style.sloganTitle}>{sloganTitle}</p>
                    <p className={style.sloganText}>{sloganText}</p>
                </div>
        </li>
    )
}

export default ItemSlogan