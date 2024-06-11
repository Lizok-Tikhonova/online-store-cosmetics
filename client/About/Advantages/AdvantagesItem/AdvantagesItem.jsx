import React from "react"
import style from './AdvantagesItem.module.css'

const AdvantagesItem = ({title, desc})=>{
    return(
        <div className={style.advantagesItem}>
            <p className={style.title}>{title}</p>
            <p className={style.desc}>{desc}</p>
        </div>
    )
}    

export default AdvantagesItem